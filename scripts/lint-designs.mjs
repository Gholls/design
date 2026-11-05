#!/usr/bin/env node
// 用官方 @google/design.md linter 校验 designs 目录下全部 DESIGN.md。
// 存在 error 时退出码为 1（PR 门禁）；warning 仅展示。
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const designsDir = join(root, 'designs')
const slugs = readdirSync(designsDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)

let lint
try {
  ;({ lint } = await import('@google/design.md/linter'))
} catch {
  console.error('未找到 @google/design.md，请先执行 npm install')
  process.exit(1)
}

let totalErrors = 0
let totalWarnings = 0
let checked = 0

for (const slug of slugs) {
  const file = join(designsDir, slug, 'DESIGN.md')
  if (!existsSync(file)) {
    console.error(`✗ designs/${slug}: 缺少 DESIGN.md（官方格式要求单一文件）`)
    totalErrors++
    continue
  }
  checked++
  const report = lint(readFileSync(file, 'utf8'))
  const errors = report.findings.filter((f) => f.severity === 'error')
  const warnings = report.findings.filter((f) => f.severity === 'warning')
  totalErrors += errors.length
  totalWarnings += warnings.length

  const mark = errors.length ? '✗' : warnings.length ? '⚠' : '✓'
  console.log(`${mark} designs/${slug} — ${errors.length} errors / ${warnings.length} warnings`)
  for (const f of [...errors, ...warnings]) {
    console.log(`    [${f.severity}] ${f.rule ?? ''} ${f.path ?? ''}: ${f.message}`)
  }
}

console.log(`\n共校验 ${checked} 份规范：${totalErrors} errors，${totalWarnings} warnings`)
process.exit(totalErrors > 0 ? 1 : 0)
