export interface TypographyToken {
  fontFamily?: string
  fontSize?: string
  fontWeight?: number | string
  lineHeight?: string | number
  letterSpacing?: string
  fontFeature?: string
  fontVariation?: string
}

export type TokenGroup = Record<string, string>

/** 归一化后的设计规范：官方 DESIGN.md schema + 样板间角色解析 */
export interface NormalizedDesign {
  name: string
  summary: string
  author: string
  source: string
  order: number
  tags: string[]
  platform: 'web' | 'mobile' | 'desktop'
  /** 样板间契约角色色（13 个），已做别名解析与亮度兜底 */
  roles: Record<string, string>
  colors: TokenGroup
  typography: Record<string, TypographyToken>
  rounded: TokenGroup
  spacing: TokenGroup
  components: Record<string, TokenGroup>
  /** 官方 schema 之外的扩展顶层组（shadows / strokes / gallery …） */
  extensions: Record<string, TokenGroup>
  /** 可直接注入 DOM 的 --d-* 变量表 */
  vars: Record<string, string>
  fontSizeBase: string
  fontFamilyBase: string
  radius: { card: string; control: string; badge: string }
  density: number
  tableRow: string
  /** 散文中的结构化指标（Density/Variance/Motion 惯例），驱动版式与动效 */
  metrics: { density: number | null; variance: number; motion: number }
  /** 版式分级：structured ≤3 / expressive 4-6 / editorial ≥7 */
  varianceBucket: 'structured' | 'expressive' | 'editorial'
  motionScale: number
  prose: { overview: string; dos: string[]; donts: string[] }
  warnings: string[]
}

export interface Design {
  slug: string
  markdown: string
  design: NormalizedDesign
}

/** 构建期索引条目（无 markdown 原文；原文经 fetch 懒加载） */
export interface IndexedDesign {
  slug: string
  design: NormalizedDesign
}

export type StatusKind = 'success' | 'warning' | 'danger' | 'info'

export const ROLE_NAMES = [
  'bg',
  'surface',
  'surface-alt',
  'primary',
  'primary-strong',
  'on-primary',
  'accent',
  'text',
  'muted',
  'border',
  'success',
  'warning',
  'danger',
] as const

export type RoleName = (typeof ROLE_NAMES)[number]
