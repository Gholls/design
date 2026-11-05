import { load } from 'js-yaml'
import type { NormalizedDesign, RoleName, TokenGroup, TypographyToken } from '../types'
import { ROLE_NAMES } from '../types'

/* ------------------------------------------------------------------ */
/* 官方 DESIGN.md 解析：frontmatter + 文内 yaml 块 → 合并 token 树      */
/* ------------------------------------------------------------------ */

type YamlTree = Record<string, unknown>

const SPEC_KEYS = new Set(['version', 'name', 'description', 'omitted', 'colors', 'typography', 'rounded', 'spacing', 'components'])

const CANONICAL_SECTIONS = [
  'overview', 'brand & style',
  'colors',
  'typography',
  'layout', 'layout & spacing',
  'elevation & depth', 'elevation',
  'shapes',
  'components',
  "do's and don'ts",
]

interface ParseResult {
  tree: YamlTree
  errors: string[]
  warnings: string[]
}

function extractBlocks(markdown: string): { front: string | null; rest: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?/.exec(markdown)
  if (!match) return { front: null, rest: markdown }
  return { front: match[1], rest: markdown.slice(match[0].length) }
}

function extractFencedYaml(rest: string): string[] {
  const blocks: string[] = []
  const re = /```ya?ml[ \t]*\r?\n([\s\S]*?)```/g
  let m: RegExpExecArray | null
  while ((m = re.exec(rest)) !== null) blocks.push(m[1])
  return blocks
}

function checkSectionOrder(markdown: string, warnings: string[]): void {
  const seen: number[] = []
  for (const m of markdown.matchAll(/^##\s+(.+)$/gm)) {
    const name = m[1].trim().toLowerCase()
    const idx = CANONICAL_SECTIONS.indexOf(name)
    if (idx === -1) continue
    if (seen.length && idx < seen[seen.length - 1]) {
      warnings.push(`section-order: "## ${m[1].trim()}" 出现在更靠后的章节之后，规范章节应按官方顺序排列`)
    }
    seen.push(idx)
  }
  if (seen.length) {
    const counts = new Map<string, number>()
    for (const m of markdown.matchAll(/^##\s+(.+)$/gm)) {
      const key = m[1].trim().toLowerCase()
      counts.set(key, (counts.get(key) ?? 0) + 1)
    }
    for (const [key, n] of counts) {
      if (n > 1) warnings.push(`duplicate-heading: 章节 "## ${key}" 出现了 ${n} 次，官方规范视其为错误`)
    }
  }
}

function lookupPath(tree: YamlTree, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, seg) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[seg]
    return undefined
  }, tree)
}

const REF_RE = /^\{\s*([\w.-]+)\s*\}$/

function resolveRefs(value: unknown, tree: YamlTree, seen: Set<string>): unknown {
  if (typeof value === 'string') {
    const ref = REF_RE.exec(value)?.[1]
    if (!ref) return value
    if (seen.has(ref)) return value
    seen.add(ref)
    const resolved = lookupPath(tree, ref)
    if (resolved === undefined) {
      throw new Error(`broken-ref: {${ref}} 无法解析`)
    }
    return resolveRefs(resolved, tree, seen)
  }
  if (Array.isArray(value)) return value.map((v) => resolveRefs(v, tree, seen))
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = resolveRefs(v, tree, seen)
    }
    return out
  }
  return value
}

export function parseDesignMarkdown(markdown: string): ParseResult {
  const errors: string[] = []
  const warnings: string[] = []
  const merged: YamlTree = {}
  const owners = new Map<string, string>()

  const blocks: Array<{ label: string; text: string }> = []
  const { front, rest } = extractBlocks(markdown)
  if (front !== null) blocks.push({ label: 'front-matter', text: front })
  extractFencedYaml(rest).forEach((text, i) => blocks.push({ label: `yaml-block-${i + 1}`, text }))

  for (const block of blocks) {
    let parsed: unknown
    try {
      parsed = load(block.text)
    } catch (e) {
      errors.push(`${block.label}: YAML 解析失败 — ${(e as Error).message}`)
      continue
    }
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) continue
    for (const [key, value] of Object.entries(parsed as YamlTree)) {
      const prev = owners.get(key)
      if (prev) {
        errors.push(`duplicate-key: 顶层键 "${key}" 在 ${prev} 与 ${block.label} 中重复定义（官方规范视为错误）`)
      }
      owners.set(key, block.label)
      merged[key] = value
    }
  }

  try {
    const resolved = resolveRefs(merged, merged, new Set()) as YamlTree
    checkSectionOrder(markdown, warnings)
    return { tree: resolved, errors, warnings }
  } catch (e) {
    return { tree: merged, errors: [...errors, (e as Error).message], warnings }
  }
}

/* ------------------------------------------------------------------ */
/* 颜色工具：hex 解析 / 相对亮度 / 混合 / 加深                          */
/* ------------------------------------------------------------------ */

function hexToRgb(hex: string): [number, number, number] | null {
  let h = hex.trim().replace('#', '')
  if (!/^[0-9a-f]+$/i.test(h)) return null
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  if (h.length !== 6 && h.length !== 8) return null
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}

const toHex = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0')

function isLight(hex: string): boolean | null {
  const rgb = hexToRgb(hex)
  if (!rgb) return null
  const lin = rgb.map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2] > 0.42
}

function mix(a: string, b: string, pctB: number): string | null {
  const ra = hexToRgb(a)
  const rb = hexToRgb(b)
  if (!ra || !rb) return null
  return `#${ra.map((c, i) => toHex(c + (rb[i] - c) * pctB)).join('')}`
}

const darken = (hex: string, amount = 0.16) => mix(hex, '#000000', amount) ?? hex

/* ------------------------------------------------------------------ */
/* 角色解析：官方任意色卡名 → 样板间 13 角色（别名表 + 亮度推导兜底）    */
/* ------------------------------------------------------------------ */

const ROLE_ALIASES: Record<RoleName, string[]> = {
  bg: ['bg', 'background', 'canvas', 'page', 'neutral'],
  surface: ['surface', 'card', 'panel', 'surface-bright', 'elevated'],
  'surface-alt': ['surface-alt', 'surface-variant', 'surface-container', 'muted-surface'],
  primary: ['primary', 'brand', 'action'],
  'primary-strong': ['primary-strong', 'primary-hover', 'primary-dark', 'primary-60'],
  'on-primary': ['on-primary', 'text-on-primary', 'primary-contrast', 'on-brand'],
  accent: ['accent', 'tertiary', 'highlight', 'secondary'],
  text: ['text', 'foreground', 'ink', 'on-surface', 'on-background', 'on-neutral'],
  muted: ['muted', 'on-surface-variant', 'meta', 'subtle', 'secondary', 'caption'],
  border: ['border', 'line', 'outline', 'divider', 'separator'],
  success: ['success', 'positive', 'ok', 'green'],
  warning: ['warning', 'amber', 'attention'],
  danger: ['danger', 'error', 'negative', 'red'],
}

const FALLBACK_ROLE: Record<RoleName, string> = {
  bg: '#f8fafc',
  surface: '#ffffff',
  'surface-alt': '#f1f5f9',
  primary: '#2563eb',
  'primary-strong': '#1e40af',
  'on-primary': '#ffffff',
  accent: '#7c3aed',
  text: '#0f172a',
  muted: '#64748b',
  border: '#e2e8f0',
  success: '#16a34a',
  warning: '#d97706',
  danger: '#dc2626',
}

function resolveRoles(colors: TokenGroup, warnings: string[]): Record<string, string> {
  const names = Object.keys(colors)
  const roles: Partial<Record<RoleName, string>> = {}

  const firstDefined = (role: RoleName): string | undefined => {
    for (const alias of ROLE_ALIASES[role]) {
      if (colors[alias] !== undefined) return colors[alias]
    }
    return undefined
  }

  for (const role of ROLE_NAMES) {
    const value = firstDefined(role)
    if (value !== undefined) roles[role] = value
  }

  /* 推导兜底（依赖先解析出的基础角色） */
  const bg = roles.bg ?? (names[0] ? colors[names[0]] : FALLBACK_ROLE.bg)
  roles.bg = bg
  if (!roles.text) {
    roles.text = isLight(bg) === false ? '#f8fafc' : '#0f172a'
  }
  const text = roles.text
  if (!roles.surface) {
    roles.surface = isLight(bg) === false ? darken(bg, -0.35) : '#ffffff'
  }
  if (!roles['surface-alt']) {
    roles['surface-alt'] = mix(roles.surface, text, 0.05) ?? FALLBACK_ROLE['surface-alt']
  }
  if (!roles.muted) {
    roles.muted = mix(text, bg, 0.45) ?? FALLBACK_ROLE.muted
  }
  if (!roles.border) {
    roles.border = mix(roles.surface, text, 0.14) ?? FALLBACK_ROLE.border
  }
  if (!roles.primary) {
    roles.primary = roles.accent ?? text
    if (names.length) warnings.push('missing-primary: 未定义 primary 色，已从现有色卡推导')
  }
  if (!roles.accent) roles.accent = roles.primary
  if (!roles['primary-strong']) {
    roles['primary-strong'] = darken(roles.primary)
  }
  if (!roles['on-primary']) {
    roles['on-primary'] = isLight(roles.primary) === false ? '#ffffff' : '#111111'
  }
  const statusDefaults: RoleName[] = ['success', 'warning', 'danger']
  for (const role of statusDefaults) {
    if (!roles[role]) roles[role] = FALLBACK_ROLE[role]
  }

  const out: Record<string, string> = {}
  for (const role of ROLE_NAMES) out[role] = roles[role] ?? FALLBACK_ROLE[role]
  return out
}

/* ------------------------------------------------------------------ */
/* 归一化为样板间变量契约 --d-*                                          */
/* ------------------------------------------------------------------ */

const SANS_FALLBACK = ', ui-sans-serif, system-ui, sans-serif'

function withUnit(value: string | number | undefined, fallback: string): string {
  if (value === undefined) return fallback
  const s = String(value).trim()
  if (/^-?\d+(\.\d+)?(px|rem|em)$/.test(s)) return s
  if (/^-?\d+(\.\d+)?$/.test(s)) return `${s}px`
  return s || fallback
}

function withFamily(family: string | undefined): string {
  const f = (family ?? '').trim()
  if (!f) return ''
  return f.includes(',') ? f : `${f}${SANS_FALLBACK}`
}

function pickFirst<T>(record: Record<string, T>, keys: string[]): { key: string; value: T } | null {
  for (const k of keys) {
    if (record[k] !== undefined) return { key: k, value: record[k] }
  }
  const first = Object.keys(record)[0]
  return first ? { key: first, value: record[first] } : null
}

export function normalizeDesign(tree: YamlTree, slug: string, parseWarnings: string[]): NormalizedDesign {
  const warnings = [...parseWarnings]

  const colorsRaw: TokenGroup = {}
  for (const [k, v] of Object.entries((tree.colors as Record<string, unknown>) ?? {})) {
    colorsRaw[k] = String(v)
  }

  const typography = ((tree.typography as Record<string, TypographyToken>) ?? {}) as Record<string, TypographyToken>
  const rounded: TokenGroup = {}
  for (const [k, v] of Object.entries((tree.rounded as Record<string, unknown>) ?? {})) rounded[k] = String(v)
  const spacing: TokenGroup = {}
  for (const [k, v] of Object.entries((tree.spacing as Record<string, unknown>) ?? {})) spacing[k] = String(v)

  const components: Record<string, TokenGroup> = {}
  for (const [name, props] of Object.entries((tree.components as Record<string, Record<string, unknown>>) ?? {})) {
    components[name] = Object.fromEntries(Object.entries(props).map(([k, v]) => [k, String(v)]))
  }

  const extensions: Record<string, TokenGroup> = {}
  for (const [key, value] of Object.entries(tree)) {
    if (SPEC_KEYS.has(key)) continue
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      extensions[key] = Object.fromEntries(
        Object.entries(value as Record<string, unknown>).map(([k, v]) =>
          [k, typeof v === 'object' ? JSON.stringify(v) : String(v)],
        ),
      )
    }
  }

  const gallery = extensions.gallery ?? {}
  const shadows = extensions.shadows ?? {}
  const strokes = extensions.strokes ?? {}

  if (Object.keys(colorsRaw).length === 0) warnings.push('missing-colors: 未定义 colors 组，样板间将使用 enterprise 兜底色')
  if (Object.keys(typography).length === 0) warnings.push('missing-typography: 未定义 typography 组')

  const roles = resolveRoles(colorsRaw, warnings)

  const base = pickFirst(typography, ['body-md', 'body-lg', 'body', 'base', 'body-sm'])?.value ?? {}
  const display = pickFirst(typography, ['h1', 'headline-display', 'headline-lg', 'headline-md', 'display', 'h2'])?.value ?? base

  const fontFamilyBase = withFamily(base.fontFamily)
  const fontFamilyDisplay = withFamily(display.fontFamily) || fontFamilyBase

  const fontSizeBase = withUnit(base.fontSize, '16px')

  /* 密度：spacing.base / spacing.md 的 px 值 ÷ 16 */
  let density = 1
  const densitySource = spacing.base ?? spacing.md ?? spacing.sm
  if (densitySource) {
    const px = parseFloat(densitySource)
    if (!Number.isNaN(px) && /px$/.test(densitySource)) {
      density = Math.min(1.6, Math.max(0.6, Math.round((px / 16) * 100) / 100))
    } else if (!Number.isNaN(px) && px > 0.3 && px < 2) {
      density = px
    }
  }
  const tableRow = spacing['table-row'] ? withUnit(spacing['table-row'], '44px') : '44px'

  const radius = {
    card: rounded.lg ?? rounded.md ?? rounded.sm ?? '12px',
    control: rounded.md ?? rounded.sm ?? '8px',
    badge: rounded.full ?? rounded.xl ?? rounded.lg ?? '9999px',
  }
  if (!rounded.lg && !rounded.md && !rounded.sm) warnings.push('missing-rounded: 未定义 rounded 组，使用默认 12/8/9999px')

  /* 组装 --d-* 变量：先透传原始组，再写入角色契约与派生契约 */
  const vars: Record<string, string> = {}
  for (const [k, v] of Object.entries(colorsRaw)) vars[`--d-colors-${k}`] = v
  for (const [k, v] of Object.entries(roles)) vars[`--d-colors-${k}`] = v
  for (const [k, v] of Object.entries(rounded)) vars[`--d-rounded-${k}`] = v
  for (const [k, v] of Object.entries(spacing)) vars[`--d-spacing-${k}`] = v
  for (const [group, entries] of Object.entries(extensions)) {
    if (group === 'gallery') continue
    for (const [k, v] of Object.entries(entries)) vars[`--d-${group}-${k}`] = v
  }
  for (const [name, props] of Object.entries(components)) {
    for (const [k, v] of Object.entries(props)) vars[`--d-components-${name}-${k}`] = v
  }

  vars['--d-typography-font-family-base'] = fontFamilyBase || 'ui-sans-serif, system-ui, sans-serif'
  vars['--d-typography-font-family-display'] = fontFamilyDisplay || vars['--d-typography-font-family-base']
  vars['--d-typography-font-size-base'] = fontSizeBase
  vars['--d-typography-letter-spacing'] = display.letterSpacing ?? base.letterSpacing ?? '-0.011em'
  vars['--d-typography-heading-weight'] = String(display.fontWeight ?? 600)
  vars['--d-rounded-card'] = radius.card
  vars['--d-rounded-control'] = radius.control
  vars['--d-rounded-badge'] = radius.badge
  vars['--d-spacing-scale'] = String(density)
  vars['--d-spacing-table-row'] = tableRow
  vars['--d-shadows-card'] = shadows.card ?? shadows.card_shadow ?? ''
  vars['--d-shadows-control'] = shadows.control ?? ''
  vars['--d-strokes-card'] = strokes.card ?? strokes.control ?? ''
  vars['--d-strokes-control'] = strokes.control ?? strokes.card ?? ''
  for (const key of ['--d-shadows-card', '--d-shadows-control', '--d-strokes-card', '--d-strokes-control']) {
    if (!vars[key]) delete vars[key]
  }

  return {
    name: String(tree.name ?? slug),
    summary: String(tree.description ?? ''),
    author: gallery.author || 'gholl',
    order: Number(gallery.order ?? 99),
    tags: (gallery.tags ?? '').split(',').map((t) => t.trim()).filter(Boolean),
    roles,
    colors: colorsRaw,
    typography,
    rounded,
    spacing,
    components,
    extensions,
    vars,
    fontSizeBase,
    fontFamilyBase: vars['--d-typography-font-family-base'],
    radius,
    density,
    tableRow,
    warnings,
  }
}

export function buildDesign(markdown: string, slug: string): { design: NormalizedDesign; errors: string[] } {
  const { tree, errors, warnings } = parseDesignMarkdown(markdown)
  return { design: normalizeDesign(tree, slug, warnings), errors }
}
