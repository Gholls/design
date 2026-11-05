import type { Design, DesignTokens } from '../types'

const STORAGE_KEY = 'design-gallery.active'

export const APPLIED_EVENT = 'design:applied'

/** 把 tokens.json 的所有分组（除 meta）扁平化为 --d-<group>-<key> 变量表 */
export function toCssVars(tokens: DesignTokens): Record<string, string> {
  const vars: Record<string, string> = {}
  for (const [group, entries] of Object.entries(tokens)) {
    if (group === 'meta') continue
    for (const [key, value] of Object.entries(entries as Record<string, unknown>)) {
      vars[`--d-${group}-${key}`] = String(value)
    }
  }
  return vars
}

/** 将一套规范注入 <html> 根节点：CSS 变量 + 基准字号 + data-design 标记 */
export function applyDesign(design: Design, options: { announce?: boolean } = {}): void {
  const root = document.documentElement
  const changed = root.dataset.design !== design.slug
  const vars = toCssVars(design.tokens)
  for (const [name, value] of Object.entries(vars)) {
    root.style.setProperty(name, value)
  }
  root.style.fontSize = design.tokens.typography['font-size-base'] || '16px'
  root.dataset.design = design.slug

  try {
    localStorage.setItem(STORAGE_KEY, design.slug)
  } catch {
    /* 隐私模式下忽略持久化 */
  }

  if (options.announce !== false && changed) {
    window.dispatchEvent(
      new CustomEvent(APPLIED_EVENT, {
        detail: { slug: design.slug, name: design.tokens.meta.name },
      }),
    )
  }
}

/** 读取上次选择；画廊背景与样板间缺省主题都走这里 */
export function getStoredSlug(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function bootActiveDesign(design: Design): void {
  applyDesign(design, { announce: false })
}
