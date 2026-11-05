import type { CSSProperties } from 'react'

/** 变量表直接作为 JSX style 使用（局部作用域注入，画廊卡片各自换肤） */
export function styleFromVars(vars: Record<string, string>): CSSProperties {
  return vars as unknown as CSSProperties
}
