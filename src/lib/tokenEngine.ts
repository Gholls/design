import type { Design } from '../types'

const STORAGE_KEY = 'design-gallery.active'

export const APPLIED_EVENT = 'design:applied'

export interface AppliedDetail {
  slug: string
  name: string
}

/** 将解析后的规范 vars 表注入 <html> 根节点：CSS 变量 + 基准字号 + data-design */
export function applyDesign(design: Design, options: { announce?: boolean } = {}): void {
  const root = document.documentElement
  const changed = root.dataset.design !== design.slug
  for (const [name, value] of Object.entries(design.design.vars)) {
    root.style.setProperty(name, value)
  }
  root.style.fontSize = design.design.fontSizeBase
  root.dataset.design = design.slug
  root.dataset.variance = design.design.varianceBucket

  try {
    localStorage.setItem(STORAGE_KEY, design.slug)
  } catch {
    /* 隐私模式下忽略持久化 */
  }

  if (options.announce !== false && changed) {
    window.dispatchEvent(
      new CustomEvent<AppliedDetail>(APPLIED_EVENT, {
        detail: { slug: design.slug, name: design.design.name },
      }),
    )
  }
}

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
