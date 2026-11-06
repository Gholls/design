// 构建期索引器：解析全部 designs/*/DESIGN.md → public/design-index.json
// 并把原文拷贝为 public/designs/<slug>.md 供应用按需懒加载。
// 由 npm run prebuild / predev 自动执行（tsx 运行）。
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildDesign } from '../src/lib/designMd.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const designsDir = join(root, 'designs')
const outPublic = join(root, 'public')
const mdOutDir = join(outPublic, 'designs')
mkdirSync(mdOutDir, { recursive: true })

// UI 仅消费这些字段；剥离 colors/typography/rounded/spacing/components/extensions 原始组以控制索引体积
const UI_FIELDS = [
  'name',
  'summary',
  'author',
  'source',
  'order',
  'tags',
  'roles',
  'vars',
  'fontSizeBase',
  'fontFamilyBase',
  'radius',
  'density',
  'tableRow',
  'metrics',
  'varianceBucket',
  'motionScale',
  'prose',
  'warnings',
]

const slugs = readdirSync(designsDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .filter((s) => s !== 'README.md')

const index = []
const broken = []

for (const slug of slugs) {
  const file = join(designsDir, slug, 'DESIGN.md')
  try {
    const md = readFileSync(file, 'utf8')
    const { design, errors } = buildDesign(md, slug)
    if (errors.length) {
      broken.push(slug)
      console.error(`✗ ${slug}: ${errors[0]}`)
      continue
    }
    const slim = { slug }
    for (const k of UI_FIELDS) slim[k] = design[k]
    index.push(slim)
    writeFileSync(join(mdOutDir, `${slug}.md`), md)
  } catch (e) {
    broken.push(slug)
    console.error(`✗ ${slug}: ${e.message}`)
  }
}

index.sort((a, b) => a.order - b.order)
const out = join(outPublic, 'design-index.json')
writeFileSync(out, JSON.stringify(index))
const kb = Math.round(readFileSync(out).length / 1024)
console.log(`索引完成：${index.length} 套规范（跳过 ${broken.length}）→ public/design-index.json ${kb}KB + public/designs/ 原文`)
