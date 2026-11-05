import type { Design } from '../types'
import { buildDesign } from './designMd'

/**
 * 社区共建的唯一数据源：designs/<slug>/DESIGN.md（Google DESIGN.md alpha 格式）。
 * 新增目录即自动进入画廊，无需改代码；解析失败的文件被跳过并在控制台报告。
 */
const mdFiles = import.meta.glob('../../designs/*/DESIGN.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const loaded: Design[] = []
const broken: string[] = []

for (const [path, markdown] of Object.entries(mdFiles)) {
  const dir = path.replace('/DESIGN.md', '')
  const slug = dir.slice(dir.lastIndexOf('/') + 1)
  const { design, errors } = buildDesign(markdown, slug)
  if (errors.length) {
    broken.push(slug)
    console.error(`[designs/${slug}] DESIGN.md 解析错误，已跳过该规范：\n` + errors.join('\n'))
    continue
  }
  for (const warning of design.warnings) console.warn(`[designs/${slug}] ${warning}`)
  loaded.push({ slug, markdown, design })
}

export const designs: Design[] = loaded.sort((a, b) => a.design.order - b.design.order)

export const skippedSlugs: string[] = broken

export const defaultDesign: Design = designs[0]

export function getDesign(slug: string | undefined | null): Design {
  return designs.find((d) => d.slug === slug) ?? defaultDesign
}
