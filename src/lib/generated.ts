/**
 * 生成产物登记表：public/generated/<slug>/index.html 存在即「已生成」。
 * 产物由 code agent 按 prompts/GOLDEN.md + DESIGN.md 生成后提交。
 */
const siteFiles = import.meta.glob('../../public/generated/*/index.html', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export const generatedSites: Record<string, string> = {}
for (const [path, url] of Object.entries(siteFiles)) {
  const dir = path.replace('/index.html', '')
  const slug = dir.slice(dir.lastIndexOf('/') + 1)
  generatedSites[slug] = url
}

export function generatedUrl(slug: string): string | null {
  return generatedSites[slug] ?? null
}

export const generatedCount = Object.keys(generatedSites).length
