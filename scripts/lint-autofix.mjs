#!/usr/bin/env node
// 上游数据清洗 v2（上下文感知，仅动 rounded/typography 段）：
//  lineHeight '130%' → 1.3；fontSize '4rem-8rem' → '4rem'；
//  rounded '50%' → '9999px'；多段值 '5px 5px 0 0' → '5px'；非维度描述值 → 删除该行。
// 与 fetch 的 sanitizeUpstream、v1 清洗同属收录披露范围（designs/README.md）。
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const designsDir = join(root, 'designs')
const DIM = /^\d+(?:\.\d+)?(px|rem|em)$/

let touched = 0

for (const slug of readdirSync(designsDir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)) {
  const file = join(designsDir, slug, 'DESIGN.md')
  let text
  try {
    text = readFileSync(file, 'utf8')
  } catch {
    continue
  }
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  if (!m) continue
  const lines = m[1].split(/\r?\n/)
  let section = ''
  let changed = false
  const out = []

  for (const line of lines) {
    const top = /^([a-zA-Z][\w-]*):/.exec(line)
    if (top && line === line.trimStart()) {
      section = top[1]
      out.push(line)
      continue
    }
    const kv = /^(\s+)([\w.-]+):\s*(.+?)\s*$/.exec(line)
    if (kv && (section === 'rounded' || section === 'typography')) {
      const [, indent, key, raw] = kv
      const v = raw.replace(/^['"]|['"]$/g, '')
      if (key === 'lineHeight' && /^(\d{2,3})%$/.test(v)) {
        out.push(`${indent}${key}: ${Number(v.slice(0, -1)) / 100}`)
        changed = true
        continue
      }
      if (key === 'lineHeight' && v === '0') {
        out.push(`${indent}${key}: 1`)
        changed = true
        continue
      }
      if (/^(fontSize|letterSpacing|lineHeight|padding)$/.test(key) && /^[\d.]+(px|rem|em)-[\d.]+(px|rem|em)$/.test(v)) {
        out.push(`${indent}${key}: "${v.split('-')[0]}"`)
        changed = true
        continue
      }
      if (section === 'rounded') {
        if (v === '50%') {
          out.push(`${indent}${key}: "9999px"`)
          changed = true
          continue
        }
        if (/^\d+(?:\.\d+)?(px|rem|em)(\s+\S+)+$/.test(v)) {
          out.push(`${indent}${key}: "${v.split(/\s+/)[0]}"`)
          changed = true
          continue
        }
        if (!DIM.test(v) && !/^-?\d+(?:\.\d+)?(px|rem|em)$/.test(v)) {
          changed = true
          continue // 非维度描述值：删除
        }
      }
    }
    out.push(line)
  }

  if (changed) {
    writeFileSync(file, `---\n${out.join('\n')}\n---${text.slice(m[0].length)}`)
    touched++
    console.log(`✓ ${slug}`)
  }
}
console.log(`v2 清洗完成，修改 ${touched} 份`)
