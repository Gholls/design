import type { IndexedDesign } from '../types'

/**
 * 数据源：构建期产物 public/design-index.json（由 scripts/build-index.mjs
 * 解析 designs 下全部 DESIGN.md 生成）。原文按需 fetch /designs/[slug].md。
 */
export let designs: IndexedDesign[] = []
export let defaultDesign: IndexedDesign | null = null
export let skippedSlugs: string[] = []

export async function loadDesigns(): Promise<void> {
  const res = await fetch('/design-index.json')
  if (!res.ok) throw new Error('design-index.json 未生成，请先运行 npm run index')
  const list = (await res.json()) as Array<Omit<IndexedDesign, 'design'> & { slug: string }>
  designs = list.map(({ slug, ...design }) => ({ slug, design: design as IndexedDesign['design'] }))
  defaultDesign = designs[0] ?? null
}

export function getDesign(slug: string | undefined | null): IndexedDesign | null {
  return designs.find((d) => d.slug === slug) ?? defaultDesign
}

const markdownCache = new Map<string, string>()

export async function fetchMarkdown(slug: string): Promise<string> {
  const hit = markdownCache.get(slug)
  if (hit !== undefined) return hit
  try {
    const res = await fetch(`/designs/${encodeURIComponent(slug)}.md`)
    if (!res.ok) return ''
    const md = await res.text()
    markdownCache.set(slug, md)
    return md
  } catch {
    return ''
  }
}
