import type { CSSProperties } from 'react'
import type { DesignTokens } from '../types'

/** toCssVars 的产物可直接作为 JSX style（CSS 自定义属性） */
export function styleFromVars(vars: Record<string, string>): CSSProperties {
  return vars as unknown as CSSProperties
}

export function tokenVarsForStyle(tokens: DesignTokens): CSSProperties {
  const vars: Record<string, string> = {}
  for (const [group, entries] of Object.entries(tokens)) {
    if (group === 'meta') continue
    for (const [key, value] of Object.entries(entries as Record<string, unknown>)) {
      vars[`--d-${group}-${key}`] = String(value)
    }
  }
  return styleFromVars(vars)
}
