export interface DesignMeta {
  name: string
  slug: string
  order: number
  author: string
  summary: string
  tags: string[]
}

export type TokenGroup = Record<string, string>

export interface DesignTokens {
  meta: DesignMeta
  colors: TokenGroup
  typography: TokenGroup
  rounded: TokenGroup
  spacing: TokenGroup
  shadows: TokenGroup
  strokes: TokenGroup
}

export interface Design {
  slug: string
  tokens: DesignTokens
  markdown: string
}

export type StatusKind = 'success' | 'warning' | 'danger' | 'info'
