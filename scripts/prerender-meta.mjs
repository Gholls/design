// postbuild：为每个 /design/<slug> 与 /prompt 生成带独立 meta 的静态 HTML 壳。
// 爬虫与不执行 JS 的 GEO 引擎直接读到正确的 title/description/OG/JSON-LD；
// 浏览器加载后由 SPA 接管（资源路径均为绝对路径，任意深度可用）。
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const shell = readFileSync(join(dist, 'index.html'), 'utf8')
const index = JSON.parse(readFileSync(join(dist, 'design-index.json'), 'utf8'))
const BASE = 'https://design.gholl.com'

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function render({ title, desc, url, ld }) {
  let h = shell
  h = h.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  h = h.replace(/<meta name="description" content="[^"]*"\/?>/, `<meta name="description" content="${esc(desc)}" />`)
  h = h.replace(/<link rel="canonical" href="[^"]*"\/?>/, `<link rel="canonical" href="${esc(url)}" />`)
  h = h.replace(/<meta property="og:title" content="[^"]*"\/?>/, `<meta property="og:title" content="${esc(title)}" />`)
  h = h.replace(/<meta property="og:description" content="[^"]*"\/?>/, `<meta property="og:description" content="${esc(desc)}" />`)
  h = h.replace(/<meta property="og:url" content="[^"]*"\/?>/, `<meta property="og:url" content="${esc(url)}" />`)
  h = h.replace(/<meta name="twitter:title" content="[^"]*"\/?>/, `<meta name="twitter:title" content="${esc(title)}" />`)
  h = h.replace(/<meta name="twitter:description" content="[^"]*"\/?>/, `<meta name="twitter:description" content="${esc(desc)}" />`)
  if (ld) h = h.replace('</head>', `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n</head>`)
  return h
}

let n = 0
for (const d of index) {
  const url = `${BASE}/design/${d.slug}`
  const desc = `${(d.summary || '').replace(/\s+/g, ' ').slice(0, 120)} —— 查看该规范的 Token 体系，以及同一份 GOLDEN PROMPT 在其指导下生成的 GhollStudio 前台官网与后台控制台。`
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: `${d.name} DESIGN.md`,
      description: d.summary,
      url,
      inLanguage: 'zh-CN',
      author: { '@type': 'Organization', name: d.author || 'GhollStudio' },
      keywords: (d.tags || []).join(', '),
      encodingFormat: 'text/markdown',
      subjectOf: { '@type': 'WebPage', url: `${BASE}/designs/${d.slug}.md` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '画廊', item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: d.name, item: url },
      ],
    },
  ]
  const dir = join(dist, 'design', d.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), render({ title: `${d.name} · Design.md 规范与样板间`, desc, url, ld }))
  n++
}

const promptDir = join(dist, 'prompt')
mkdirSync(promptDir, { recursive: true })
writeFileSync(
  join(promptDir, 'index.html'),
  render({
    title: 'GOLDEN PROMPT · 黄金提示词 — Design.md Gallery',
    desc: '同一份黄金提示词 × 不同 DESIGN.md = 不同产品页面。查看驱动全部样板间的 GOLDEN PROMPT 全文与生成流水线，复制提示词交给任意 code agent 即可生成你的规范样板间。',
    url: `${BASE}/prompt`,
    ld: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'GOLDEN PROMPT：Design.md 样板间黄金提示词',
      url: `${BASE}/prompt`,
      inLanguage: 'zh-CN',
      author: { '@type': 'Organization', name: 'GhollStudio', url: BASE },
    },
  }),
)
console.log(`预渲染完成：${n} 个 /design/<slug> + /prompt 独立 meta 壳`)
