#!/usr/bin/env node
// 为每套 DESIGN.md 合成 agent 任务文件：prompts/tasks/<slug>.md
// = GOLDEN PROMPT + 该规范全文。产物契约要求 agent 输出到
// public/generated/<slug>/index.html（自包含静态站点）。
//
// 用法：
//   node scripts/generate.mjs                 # 生成全部任务文件
//   node scripts/generate.mjs cyberpunk       # 只生成指定规范
//   AGENT_CMD="claude -p" node scripts/generate.mjs --run   # 显式授权自动派发
import { mkdirSync, writeFileSync, readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const golden = readFileSync(join(root, 'prompts/GOLDEN.md'), 'utf8')
const tasksDir = join(root, 'prompts/tasks')
mkdirSync(tasksDir, { recursive: true })

const filter = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const runWithAgent = process.argv.includes('--run')
const agentCmd = process.env.AGENT_CMD

const slugs = readdirSync(join(root, 'designs'), { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .filter((s) => filter.length === 0 || filter.includes(s))

for (const slug of slugs) {
  const designFile = join(root, 'designs', slug, 'DESIGN.md')
  if (!existsSync(designFile)) {
    console.log(`⊘ ${slug}: 缺少 DESIGN.md，跳过`)
    continue
  }
  const task = [
    golden,
    '',
    '---',
    '',
    `# 随附规范：DESIGN.md「${slug}」`,
    '',
    readFileSync(designFile, 'utf8'),
    '',
    `---\n\n本次产物落点：public/generated/${slug}/index.html`,
  ].join('\n')
  writeFileSync(join(tasksDir, `${slug}.md`), task)
  console.log(`✓ ${slug}: prompts/tasks/${slug}.md (${task.length} chars)`)

  if (runWithAgent) {
    if (!agentCmd) {
      console.error('  --run 需要设置 AGENT_CMD 环境变量（例如 AGENT_CMD="claude -p"）')
      process.exit(1)
    }
    console.log(`  → 派发 agent: ${agentCmd} < prompts/tasks/${slug}.md`)
    execSync(`${agentCmd} "$(cat '${join(tasksDir, slug + '.md')}')"`, {
      cwd: root,
      stdio: 'inherit',
      env: process.env,
    })
  }
}

console.log(
  `\n完成 ${slugs.length} 个任务。把 prompts/tasks/<slug>.md 交给任意 code agent（Claude Code / Codex / Cursor / Qoder…），` +
    '产物放入 public/generated/<slug>/index.html 后重新构建即自动路由。',
)
