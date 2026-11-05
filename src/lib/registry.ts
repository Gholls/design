import type { Design, DesignTokens } from '../types'

const tokenFiles = import.meta.glob('../../designs/*/tokens.json', {
  eager: true,
}) as Record<string, { default: DesignTokens }>

const markdownFiles = import.meta.glob('../../designs/*/DESIGN.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function buildDesign(path: string, mod: { default: DesignTokens }): Design {
  const dir = path.replace('/tokens.json', '')
  const slug = dir.slice(dir.lastIndexOf('/') + 1)
  return {
    slug,
    tokens: mod.default,
    markdown: markdownFiles[`${dir}/DESIGN.md`] ?? '',
  }
}

export const designs: Design[] = Object.entries(tokenFiles)
  .map(([path, mod]) => buildDesign(path, mod))
  .filter((d) => d.tokens?.meta?.slug === d.slug)
  .sort((a, b) => a.tokens.meta.order - b.tokens.meta.order)

export const defaultDesign: Design = designs[0]

export function getDesign(slug: string | undefined | null): Design {
  return designs.find((d) => d.slug === slug) ?? defaultDesign
}
