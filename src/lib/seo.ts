import type { Route } from './router'
import { designs, getDesign } from './registry'

const BASE = 'https://design.gholl.com'

const HOME = {
  title: 'Design.md Gallery — 同一提示词 × 79 套设计规范 · design.gholl.com',
  desc: 'Design.md 设计规范画廊：收录 79 套 Google Labs DESIGN.md 格式的真实品牌规范（Apple、Linear、Stripe 等），同一份黄金提示词生成风格迥异的 GhollStudio 前台与后台样板间。开源 MIT，纯静态托管。',
}

function meta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function canonical(url: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = url
}

function routeJsonLd(data: unknown): void {
  let el = document.getElementById('ld-route') as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = 'ld-route'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function applyRouteMeta(route: Route): void {
  let title = HOME.title
  let desc = HOME.desc
  let url = BASE + '/'
  let ld: unknown = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Design.md 设计规范索引',
    numberOfItems: designs.length,
    itemListElement: designs.slice(0, 30).map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE}/design/${d.slug}`,
      name: d.design.name,
    })),
  }

  if (route.path === '/design') {
    const d = getDesign(route.params.theme)
    if (d) {
      title = `${d.design.name} · Design.md 规范与样板间`
      desc = `${d.design.summary.slice(0, 120)} —— 查看该规范的 Token 体系，以及同一份 GOLDEN PROMPT 在其指导下生成的 GhollStudio 前台官网与后台控制台。`
      url = `${BASE}/design/${d.slug}`
      ld = [
        {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: `${d.design.name} DESIGN.md`,
          description: d.design.summary,
          url,
          inLanguage: 'zh-CN',
          author: { '@type': 'Organization', name: d.design.author || 'GhollStudio' },
          isBasedOn: d.design.source || undefined,
          keywords: d.design.tags.join(', '),
          encodingFormat: 'text/markdown',
          subjectOf: { '@type': 'WebPage', url: `${BASE}/designs/${d.slug}.md` },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '画廊', item: BASE + '/' },
            { '@type': 'ListItem', position: 2, name: d.design.name, item: url },
          ],
        },
      ]
    }
  } else if (route.path === '/prompt') {
    title = 'GOLDEN PROMPT · 黄金提示词 — Design.md Gallery'
    desc = '同一份黄金提示词 × 不同 DESIGN.md = 不同产品页面。查看驱动全部样板间的 GOLDEN PROMPT 全文与生成流水线，复制提示词交给任意 code agent 即可生成你的规范样板间。'
    url = BASE + '/prompt'
    ld = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'GOLDEN PROMPT：Design.md 样板间黄金提示词',
      description: desc,
      url,
      inLanguage: 'zh-CN',
      author: { '@type': 'Organization', name: 'GhollStudio', url: BASE },
    }
  }

  document.title = title
  meta('name', 'description', desc)
  meta('property', 'og:title', title)
  meta('property', 'og:description', desc)
  meta('property', 'og:url', url)
  meta('name', 'twitter:title', title)
  meta('name', 'twitter:description', desc)
  canonical(url)
  routeJsonLd(ld)
}
