#!/usr/bin/env node
// 按顺序抓取 designmd.app 全目录的 DESIGN.md 原文到 designs/<slug>/DESIGN.md。
// 可续传（已存在即跳过）；注入 gallery 署名块（order/author/source/tags）。
//
// 用法：
//   node scripts/fetch-designmd.mjs                 # 全量
//   node scripts/fetch-designmd.mjs --limit 50      # 前 50 个
//   node scripts/fetch-designmd.mjs --section brands
//   node scripts/fetch-designmd.mjs --dry
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const designsDir = join(root, 'designs')
const args = process.argv.slice(2)
const dry = args.includes('--dry')
const sectionFilter = (args.find((a) => a.startsWith('--section=')) ?? '').split('=')[1] || 'all'
const limitIdx = args.indexOf('--limit')
const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : Infinity
const CONCURRENCY = 6

const catalogUrl = 'https://designmd.app/llms-full.txt'

function sanitizeSlug(raw) {
  return raw.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60)
}

function injectGallery(text, meta) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  if (!m || /^gallery:/m.test(m[1])) return text
  const tags = meta.tags.map((t) => `"${t.replace(/"/g, '')}"`).join(', ')
  const block = [
    'gallery:',
    `  order: ${meta.order}`,
    `  author: "designmd.app"`,
    `  source: "${meta.source}"`,
    `  tags: [${tags}]`,
  ].join('\n')
  return text.slice(0, m[0].length - 3 - (m[0].endsWith('\n') ? 1 : 0)) + '\n' + block + '\n' + text.slice(m[0].length - 3)
}

function sanitizeUpstream(text) {
  // designmd.app 部分文件混入 CSS 变量碎片（如 "fontFamily: serif --gold-primary: #D4AF37"），破坏 YAML
  return text.replace(/ --[a-zA-Z-]+: ?#[0-9A-Fa-f]+/g, '')
}

function tagsFromFrontmatter(fm, section) {
  const desc = /description:\s*(.+)/i.exec(fm)?.[1] ?? ''
  const ideal = /ideal for ([^.]+?)\./i.exec(desc)?.[1] ?? ''
  const parts = (ideal || desc)
    .split(',')
    .map((s) => s.trim().replace(/^["'>-]+|["'<-]+$/g, ''))
    .filter((s) => s && s.length <= 20)
    .slice(0, 3)
  return [...new Set([section === 'brands' ? '真实品牌' : '风格模板', ...parts])].slice(0, 4)
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(20000) })
      if (res.ok) return await res.text()
    } catch {
      /* retry */
    }
    await sleep(800 * (i + 1))
  }
  return null
}

const catalog = await fetchWithRetry(catalogUrl)
if (!catalog) {
  console.error('无法获取目录 llms-full.txt')
  process.exit(1)
}

const entries = [...catalog.matchAll(/Page: (https:\/\/designmd\.app\/(library|brands)\/([a-z0-9-]+))\n\s+Markdown: .*\n\s+DESIGN\.md: (\S+)/g)]
  .map((m) => ({ page: m[1], section: m[2], slug: m[3], raw: m[4] }))
  .filter((e) => sectionFilter === 'all' || e.section === sectionFilter)

console.log(`目录共 ${entries.length} 个规范`)

let done = 0, skipped = 0, failed = 0, processed = 0
const queue = entries.slice(0, limit)

async function worker() {
  for (let item; (item = queue.shift()); ) {
    processed++
    const slug = sanitizeSlug(item.slug)
    const outDir = join(designsDir, slug)
    const outFile = join(outDir, 'DESIGN.md')
    if (existsSync(outFile)) {
      skipped++
      continue
    }
    const text0 = await fetchWithRetry(item.raw)
    if (!text0 || !text0.startsWith('---')) {
      console.log(`✗ ${slug}: 下载失败或无 frontmatter`)
      failed++
      continue
    }
    const text = sanitizeUpstream(text0)
    const fmEnd = text.indexOf('---', 3)
    const fm = text.slice(3, fmEnd)
    const baseOrder = item.section === 'brands' ? 900 : 100
    const meta = {
      order: baseOrder + processed,
      source: item.page,
      tags: tagsFromFrontmatter(fm, item.section),
    }
    if (!dry) {
      mkdirSync(outDir, { recursive: true })
      writeFileSync(outFile, injectGallery(text, meta))
    }
    done++
    if (done % 25 === 0) console.log(`… ${done} 完成 / ${skipped} 跳过 / ${failed} 失败`)
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker))
console.log(`完成 ${done}，跳过（已存在）${skipped}，失败 ${failed}`)
