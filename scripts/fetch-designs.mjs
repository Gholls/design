#!/usr/bin/env node
// 从 VoltAgent/awesome-design-md（MIT）同步真实品牌 DESIGN.md 全量集合。
// 传输：单次 codeload tar 包快照（84 个 design-md/<slug>/DESIGN.md）。
// 注入 gallery 署名块（order/author/source/tags）；其余内容保持上游 verbatim。
//
// 用法：node scripts/fetch-designs.mjs [--dry]
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO = 'VoltAgent/awesome-design-md'
const ROOT_URL = `https://github.com/${REPO}`
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const designsDir = join(root, 'designs')
const dry = process.argv.includes('--dry')

function sanitizeSlug(raw) {
  return raw.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '')
}

const KNOWN_KEYS = new Set(['version', 'name', 'description', 'omitted', 'gallery', 'colors', 'typography', 'rounded', 'spacing', 'components', 'shadows', 'strokes', 'gradients'])

// 上游个别文件在标量值（description/未知键）里写裸冒号破坏 YAML → 引号化修复
const SCALAR_KEYS = new Set(['version', 'name', 'description'])
function repairFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  if (!m) return text
  const out = []
  for (const line of m[1].split(/\r?\n/)) {
    const key = /^([^#\s:][^:]*):(\s+)(.+)$/.exec(line)
    if (key && (SCALAR_KEYS.has(key[1]) || !KNOWN_KEYS.has(key[1]))) {
      const val = key[3].trim()
      if (val.includes(': ') && !val.startsWith('|') && !val.startsWith('>') && !/^["'].*["']$/.test(val)) {
        out.push(`${key[1]}: ${JSON.stringify(val)}`)
        continue
      }
    }
    out.push(line)
  }
  return `---\n${out.join('\n')}\n---${text.slice(m[0].length)}`
}

function injectGallery(text, meta) {  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  if (!m || /^gallery:/m.test(m[1])) return text
  const block = [
    'gallery:',
    `  order: ${meta.order}`,
    `  author: "awesome-design-md"`,
    `  source: "${meta.source}"`,
    `  tags: [${meta.tags.map((t) => `"${t}"`).join(', ')}]`,
  ].join('\n')
  return text.slice(0, m[0].length - 3) + '\n' + block + '\n---' + text.slice(m[0].length - 3)
}

console.log(`同步 ${REPO} …`)
const tgz = join(tmpdir(), 'awesome-design-md.tar.gz')
const res = await fetch(`https://codeload.github.com/${REPO}/tar.gz/refs/heads/main`, {
  signal: AbortSignal.timeout(60000),
  redirect: 'follow',
})
if (!res.ok) {
  console.error(`下载失败：HTTP ${res.status}`)
  process.exit(1)
}
writeFileSync(tgz, Buffer.from(await res.arrayBuffer()))

const listing = execFileSync('tar', ['-tzf', tgz], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 })
const paths = listing.split('\n').filter((p) => /^.*\/design-md\/[^/]+\/DESIGN\.md$/.test(p))
console.log(`tar 包内发现 ${paths.length} 份 DESIGN.md`)

const extractDir = join(tmpdir(), 'awesome-design-md-extract')
mkdirSync(extractDir, { recursive: true })
execFileSync('tar', ['-xzf', tgz, '-C', extractDir], { maxBuffer: 64 * 1024 * 1024 })

let done = 0
let skipped = 0
let idx = 0
for (const rel of paths.sort()) {
  const abs = join(extractDir, rel)
  const slugRaw = abs.split('/design-md/')[1].split('/')[0]
  const slug = sanitizeSlug(slugRaw)
  const out = join(designsDir, slug, 'DESIGN.md')
  idx++
  if (existsSync(out)) {
    skipped++
    continue
  }
  const text = repairFrontmatter(readFileSync(abs, 'utf8'))
  if (!text.startsWith('---')) {
    console.log(`✗ ${slug}: 无 frontmatter，跳过`)
    continue
  }
  const meta = {
    order: 100 + idx,
    source: `${ROOT_URL}/tree/main/design-md/${slugRaw}`,
    tags: ['真实品牌', 'awesome-design-md'],
  }
  if (!dry) {
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, injectGallery(text, meta))
  }
  done++
}
console.log(`完成：新增 ${done}，跳过（已存在）${skipped}`)
