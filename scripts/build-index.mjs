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

/* ── SEO / GEO 产物：robots.txt · sitemap.xml · llms.txt ── */
const BASE = 'https://design.gholl.com'
const today = new Date().toISOString().slice(0, 10)
const generatedDir = join(outPublic, 'generated')
const generated = readdirSync(generatedDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort()

writeFileSync(
  join(outPublic, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`,
)

const urls = [
  { loc: `${BASE}/`, priority: '1.0', freq: 'weekly' },
  { loc: `${BASE}/prompt`, priority: '0.9', freq: 'weekly' },
  { loc: `${BASE}/studio/`, priority: '0.8', freq: 'monthly' },
  ...index.map((d) => ({ loc: `${BASE}/design/${d.slug}`, priority: '0.8', freq: 'monthly' })),
  ...generated.map((s) => ({ loc: `${BASE}/generated/${s}/index.html`, priority: '0.5', freq: 'monthly' })),
]
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`)
    .join('\n') +
  `\n</urlset>\n`
writeFileSync(join(outPublic, 'sitemap.xml'), sitemap)

const oneLine = (s) => (s || '').replace(/\s+/g, ' ').trim().slice(0, 110)
const llms = [
  '# Design.md Gallery',
  '',
  '> 同一份黄金提示词 × 79 套真实品牌 DESIGN.md 规范 = 79 种截然不同的产品页面。开源（MIT）设计规范画廊与 AI 生成样板间平台，托管于 design.gholl.com。',
  '',
  '关键事实：',
  `- 数据格式：Google Labs design.md（YAML frontmatter + 散文指令），全库经官方 CLI lint，0 error`,
  `- 数据来源：VoltAgent/awesome-design-md（MIT，真实品牌）+ 内置实验规范`,
  `- 每个规范对应一个自包含静态样板间：GhollStudio 软件工作室的前台官网 + 后台控制台（表单/弹窗/统计/审核下拉/卡片全部可交互）`,
  `- 技术栈：Vite + React + Tailwind v4，Cloudflare Pages 纯静态；规范原文以 Markdown 直接可读`,
  '',
  '## 核心入口',
  '',
  `- [画廊首页](${BASE}/)：全部规范卡片与预览入口`,
  `- [GOLDEN PROMPT 黄金提示词](${BASE}/prompt)：驱动所有样板间的同一份提示词全文`,
  `- [跨端样板间](${BASE}/studio/)：同一套 GhollStudio 数据，在网站 / 移动端 / 桌面端三种表面上的设计实验`,
  `- [规范索引 JSON](${BASE}/design-index.json)：机器可读的归一化 Token 索引`,
  `- [站点地图](${BASE}/sitemap.xml)`,
  '',
  '## 设计规范原文（Markdown，AI 可直接读取）',
  '',
  ...index.map((d) => `- [${d.name}](${BASE}/designs/${d.slug}.md)：${oneLine(d.summary)}`),
  '',
  '## 已生成样板间（自包含 HTML）',
  '',
  ...generated.map((s) => `- [${s} 样板间](${BASE}/generated/${s}/index.html)`),
  '',
  '## 可选',
  '',
  `- [GitHub 仓库](https://github.com/Gholls/design)：MIT 开源，贡献规范见仓库 README`,
  '',
].join('\n')
writeFileSync(join(outPublic, 'llms.txt'), llms)
console.log(`SEO/GEO：robots.txt + sitemap.xml（${urls.length} URL）+ llms.txt（${index.length} 规范 / ${generated.length} 样板间）`)
