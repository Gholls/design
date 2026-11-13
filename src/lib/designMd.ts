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

function luminance(hex: string): number | null {
  const rgb = hexToRgb(hex)
  if (!rgb) return null
  const lin = rgb.map((c) => (c / 255 <= 0.03928 ? c / 255 / 12.92 : ((c / 255 + 0.055) / 1.055) ** 2.4))
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]
}

/** 粗略饱和度（max-min 通道差 ÷ max），用于区分「纸张色」与「强调色」 */
function chroma(hex: string): number | null {
  const rgb = hexToRgb(hex)
  if (!rgb) return null
  const max = Math.max(...rgb)
  if (max === 0) return 0
  return (max - Math.min(...rgb)) / max
}

function pickBackgroundByDistribution(colors: TokenGroup): string | undefined {
  const lit: Array<{ hex: string; lum: number; chr: number }> = []
  for (const v of Object.values(colors)) {
    const lum = luminance(v)
    const chr = chroma(v)
    if (lum === null || chr === null) continue
    lit.push({ hex: v, lum, chr })
  }
  if (!lit.length) return undefined
  const lights = lit.filter((c) => c.lum >= 0.6).sort((a, b) => a.chr - b.chr || b.lum - a.lum)
  if (lights.length) return lights[0].hex
  const darks = lit.filter((c) => c.lum <= 0.18).sort((a, b) => a.lum - b.lum)
  if (darks.length) return darks[0].hex
  return undefined
}

function pickTextByDistribution(colors: TokenGroup, bg: string): string | undefined {
  const bgLum = luminance(bg)
  if (bgLum === null) return undefined
  const entries = Object.values(colors)
    .map((hex) => ({ hex, lum: luminance(hex) }))
    .filter((e): e is { hex: string; lum: number } => e.lum !== null && e.hex !== bg)
  if (!entries.length) return undefined
  if (bgLum >= 0.4) {
    const dark = entries.filter((e) => e.lum < 0.25).sort((a, b) => a.lum - b.lum)
    return dark[0]?.hex
  }
  const bright = entries.filter((e) => e.lum > bgLum + 0.2).sort((a, b) => b.lum - a.lum)
  return bright[0]?.hex
}

/* ------------------------------------------------------------------ */
/* 角色解析：官方任意色卡名 → 样板间 13 角色（别名表 + 亮度推导兜底）    */
/* ------------------------------------------------------------------ */

const ROLE_ALIASES: Record<RoleName, string[]> = {
  bg: ['bg', 'background', 'canvas', 'page', 'neutral'],
  surface: ['surface', 'card', 'panel', 'surface-bright', 'elevated', 'surface-light'],
  'surface-alt': ['surface-alt', 'surface-variant', 'surface-container', 'muted-surface', 'backgroundalt', 'surface-dim'],
  primary: ['primary', 'brand', 'action', 'primarymain', 'brandprimary'],
  'primary-strong': ['primary-strong', 'primary-hover', 'primary-dark', 'primary-60', 'primarydark'],
  'on-primary': ['on-primary', 'text-on-primary', 'primary-contrast', 'on-brand'],
  accent: ['accent', 'tertiary', 'highlight', 'secondary'],
  text: ['text', 'foreground', 'ink', 'on-surface', 'on-background', 'on-neutral', 'highemphasis', 'onbackground'],
  muted: ['muted', 'on-surface-variant', 'meta', 'subtle', 'secondary', 'caption', 'mediumemphasis', 'gray500', 'gray600'],
  border: ['border', 'line', 'outline', 'divider', 'separator', 'hairline', 'gray200', 'gray300'],
  success: ['success', 'positive', 'ok', 'green'],
  warning: ['warning', 'amber', 'attention'],
  danger: ['danger', 'error', 'negative', 'red'],
}

/** 真实规范常把色卡嵌套分组（brand/semantic/feedback），扁平化为 `组-子键`，
 *  同时允许以「-别名」后缀匹配（feedback.error → danger） */
function flattenColorGroups(raw: Record<string, unknown>): TokenGroup {
  const out: TokenGroup = {}
  for (const [k, v] of Object.entries(raw)) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      for (const [sub, subv] of Object.entries(v as Record<string, unknown>)) {
        if (subv && typeof subv === 'object') continue
        out[`${k}-${sub}`] = String(subv)
      }
    } else if (typeof v === 'string' || typeof v === 'number') {
      out[k] = String(v)
    }
  }
  return out
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
  const lower = new Map<string, string>()
  for (const n of names) lower.set(n.toLowerCase(), n)
  const roles: Partial<Record<RoleName, string>> = {}

  /* 精确匹配（大小写不敏感）或后缀匹配：feedback-error → danger 的别名 error */
  const firstDefined = (role: RoleName): string | undefined => {
    for (const alias of ROLE_ALIASES[role]) {
      const exact = lower.get(alias)
      if (exact !== undefined) return colors[exact]
      const suffixed = names.find((n) => n.toLowerCase().endsWith(`-${alias}`))
      if (suffixed) return colors[suffixed]
    }
    return undefined
  }

  for (const role of ROLE_NAMES) {
    const value = firstDefined(role)
    if (value !== undefined) roles[role] = value
  }

  /* bg 合理性：命中「中间灰」通常意味着中性色被命名成了 neutral 而非纸张色 */
  if (roles.bg) {
    const lumBg = luminance(roles.bg)
    if (lumBg !== null && lumBg > 0.2 && lumBg < 0.6) {
      const better = pickBackgroundByDistribution(colors)
      if (better && better !== roles.bg) roles.bg = better
    }
  }

  /* 推导兜底（依赖先解析出的基础角色）。
     bg/text 缺失时先看色卡分布：亮主题取「最亮低饱和」做底、最暗做字；
     暗主题（存在极暗色）反之——真实社区规范的命名千奇百怪，靠分布兜底。 */
  let bg = roles.bg
  if (bg === undefined) {
    bg = pickBackgroundByDistribution(colors) ?? FALLBACK_ROLE.bg
  }
  roles.bg = bg
  if (!roles.text) {
    roles.text = pickTextByDistribution(colors, bg) ?? (isLight(bg) === false ? '#f8fafc' : '#0f172a')
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

  /* 终检：与 bg 的 WCAG 对比度不达标的 text/muted、与 surface 无差的 border，
     都是命名巧合（如 8bit 把荧光绿命名为 secondary），按对比度纠正而非亮度差 */
  const contrast = (a?: string, b?: string) => {
    const la = a ? luminance(a) : null
    const lb = b ? luminance(b) : null
    if (la === null || lb === null) return 21
    const [hi, lo] = la > lb ? [la, lb] : [lb, la]
    return (hi + 0.05) / (lo + 0.05)
  }
  if (contrast(roles.text, roles.bg) < 7) {
    roles.text = pickTextByDistribution(colors, roles.bg ?? '#ffffff') ?? (isLight(roles.bg ?? '#ffffff') === false ? '#f8fafc' : '#0f172a')
  }
  if (contrast(roles.muted, roles.bg) < 3) {
    roles.muted = mix(roles.text ?? '#0f172a', roles.bg ?? '#f8fafc', 0.45) ?? FALLBACK_ROLE.muted
  }
  if (contrast(roles.border, roles.surface) < 1.1) {
    roles.border = mix(roles.surface ?? '#ffffff', roles.text ?? '#0f172a', 0.14) ?? FALLBACK_ROLE.border
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

/* ------------------------------------------------------------------ */
/* 散文层消费：Density/Variance/Motion 指标 + Overview/Do's·Don'ts 摘录 */
/* ------------------------------------------------------------------ */

function meter(markdown: string, name: string): number | null {
  const m = new RegExp(`${name}[:\\s]+(\\d{1,2})\\s*/\\s*10`, 'i').exec(markdown)
  if (!m) return null
  const v = Number(m[1])
  return Number.isNaN(v) ? null : Math.min(10, Math.max(0, v))
}

function extractSection(markdown: string, patterns: RegExp[]): string {
  const lines = markdown.split(/\r?\n/)
  let collecting = false
  const out: string[] = []
  for (const line of lines) {
    const heading = /^##\s+(.+)$/.exec(line)
    if (heading) {
      const name = heading[1].trim().toLowerCase()
      collecting = patterns.some((p) => p.test(name))
      continue
    }
    if (collecting) out.push(line)
  }
  return out.join('\n').trim()
}

interface ProseInsights {
  metrics: { density: number | null; variance: number; motion: number }
  varianceBucket: 'structured' | 'expressive' | 'editorial'
  motionScale: number
  prose: { overview: string; dos: string[]; donts: string[] }
}

function readProse(markdown: string): ProseInsights {
  const density = meter(markdown, 'Density')
  const variance = meter(markdown, 'Variance') ?? 3
  const motion = meter(markdown, 'Motion') ?? 4

  const overviewRaw = extractSection(markdown, [/^overview$/, /^brand & style$/])
  const overview = overviewRaw.replace(/^#+.*$/gm, '').replace(/\*\*/g, '').trim().slice(0, 220)

  const guidelines = extractSection(markdown, [/^do'?s? and don'?t?s?$/])
  const bullets = guidelines
    .split(/\r?\n/)
    .map((l) => l.replace(/^[-*]\s+/, '').trim())
    .filter((l) => l.length > 0)
  const dos = bullets.filter((l) => /^do\b/i.test(l)).slice(0, 4)
  const donts = bullets.filter((l) => /^don'?t\b/i.test(l)).slice(0, 4)

  const varianceBucket = variance >= 7 ? 'editorial' : variance >= 4 ? 'expressive' : 'structured'
  const motionScale = motion === 0 ? 0 : Math.round((0.5 + motion * 0.1) * 100) / 100

  return { metrics: { density, variance, motion }, varianceBucket, motionScale, prose: { overview, dos, donts } }
}

const withFamily = (family: string | undefined): string => {
  const f = (family ?? '').trim()
  if (!f) return ''
  return f.includes(',') ? f : `${f}${SANS_FALLBACK}`
}

function parseGalleryTags(raw: unknown): string[] {
  const clean = (list: unknown[]) => list.map((t) => String(t).trim()).filter(Boolean)
  if (Array.isArray(raw)) return clean(raw)
  if (typeof raw !== 'string') return []
  const text = raw.trim()
  if (text.startsWith('[')) {
    let parsed: unknown = null
    try {
      parsed = JSON.parse(text)
    } catch {
      parsed = null
    }
    if (Array.isArray(parsed)) return clean(parsed)
  }
  return text
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((t) => t.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
}

export function normalizeDesign(tree: YamlTree, slug: string, parseWarnings: string[], markdown = ''): NormalizedDesign {
  const warnings = [...parseWarnings]
  const insights = readProse(markdown)

  const colorsRaw = flattenColorGroups((tree.colors as Record<string, unknown>) ?? {})

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

  const sizePx = (t: TypographyToken): number => {
    const s = String(t.fontSize ?? '')
    const num = parseFloat(s)
    if (Number.isNaN(num)) return 0
    return s.includes('em') ? num * 16 : num
  }
  const namedType = (keys: string[]): TypographyToken | undefined => {
    for (const k of keys) if (typography[k]) return typography[k]
    return undefined
  }
  const typeEntries = Object.values(typography).filter((t) => t && typeof t === 'object')
  let base = namedType(['body-md', 'body-lg', 'body', 'base', 'body-sm'])
  let display = namedType(['h1', 'headline-display', 'headline-lg', 'headline-md', 'display', 'h2', 'up-05', 'up-08'])
  if (!base && typeEntries.length) {
    base = [...typeEntries].sort((a, b) => Math.abs(sizePx(a) - 16) - Math.abs(sizePx(b) - 16))[0]
  }
  if (!display && typeEntries.length) {
    display = [...typeEntries].sort((a, b) => sizePx(b) - sizePx(a))[0]
  }
  base ??= {}
  display ??= base

  const fontFamilyBase = withFamily(base.fontFamily)
  const fontFamilyDisplay = withFamily(display.fontFamily) || fontFamilyBase

  const fontSizeBase = withUnit(base.fontSize, '16px')

  /* 密度：在 spacing 中寻找「UI 基准间距」量级的值（12–24px）÷ 16；
     rem 落地页级 section 间距（2rem+）不参与密度，避免样板间失控。 */
  const dimPx = (s: string): number | null => {
    const t = s.trim()
    const num = parseFloat(t)
    if (Number.isNaN(num)) return null
    if (t.includes('rem') || t.includes('em')) return num * 16
    if (t.endsWith('px') || /^-?\d+(\.\d+)?$/.test(t)) return num
    return null
  }
  const clampDensity = (v: number) => Math.min(1.4, Math.max(0.8, Math.round(v * 100) / 100))
  let density = 1
  for (const key of ['base', 'md', 'medium', 'normal', 'sm']) {
    const v = spacing[key]
    if (!v) continue
    const px = dimPx(v)
    if (px === null) continue
    if (/^-?\d+(\.\d+)?$/.test(v.trim()) && px > 0.4 && px < 2) {
      density = clampDensity(px)
      break
    }
    if (px >= 12 && px <= 24) {
      density = clampDensity(px / 16)
      break
    }
  }
  /* 散文 Density 指标优先于 token 推导（品牌分析类规范的显式设计意图） */
  if (insights.metrics.density !== null) {
    density = clampDensity(1.28 - insights.metrics.density * 0.05)
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
  vars['--d-motion-scale'] = String(insights.motionScale)
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
    source: gallery.source || '',
    order: Number(gallery.order ?? 99),
    tags: parseGalleryTags(gallery.tags),
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
    metrics: insights.metrics,
    varianceBucket: insights.varianceBucket,
    motionScale: insights.motionScale,
    prose: insights.prose,
    warnings,
  }
}

export function buildDesign(markdown: string, slug: string): { design: NormalizedDesign; errors: string[] } {
  const { tree, errors, warnings } = parseDesignMarkdown(markdown)
  return { design: normalizeDesign(tree, slug, warnings, markdown), errors }
}
