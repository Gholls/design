#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildDesign } from '../src/lib/designMd.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = process.env.IOS_SRC || '/tmp/ios-adm/awesome-ios-design-md-main/design-md'
const DRY = process.argv.includes('--dry')
const ONLY = process.argv.find((a) => a.startsWith('--only='))?.slice(7)

const CATEGORY = {
  dating: ['社交', '约会'],
  finance: ['金融'],
  fitness: ['运动'],
  food: ['餐饮'],
  messaging: ['消息'],
  misc: ['工具'],
  music: ['音乐'],
  productivity: ['效率'],
  social: ['社交'],
  travel: ['旅行'],
  video: ['视频'],
}
const AI_APPS = new Set(['chatgpt', 'gemini', 'claude', 'copilot', 'grok', 'deepseek', 'perplexity', 'character-ai', 'midjourney'])
const WEIGHTS = { thin: 100, ultralight: 200, light: 300, regular: 400, book: 400, medium: 500, semibold: 600, 'semi-bold': 600, bold: 700, extrabold: 800, 'extra-bold': 800, black: 900, heavy: 800 }
const CORE_SKIP = new Set(['ios-spotify', 'ios-strava'])
// Canvas declared outside a `Canvas`-titled section; the quote keeps each value
// traceable to the source DESIGN.md line.
const CANVAS_FIX = {
  discord: ['#313338', 'Chat Canvas — the right pane where messages live'],
  hinge: ['#FDF8F2', 'Hinge Cream — the signature canvas, every screen background by default'],
  'pocket-casts': ['#1A1A1A', 'Canvas & Surfaces (Dark Mode — canonical): Dark Canvas — primary dark canvas'],
  substack: ['#FFFFFF', 'Paper White — the reading page'],
  uber: ['#FFFFFF', 'Uber White — Canvas'],
}

const clean = (s) => String(s || '').replace(/`/g, '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim()
const slugify = (s) => s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
const keyify = (s) => slugify(s).replace(/-+/g, '-') || 'token'
const hexLum = (hex) => {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h.slice(0, 6)
  const rgb = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
}
const contrast = (a, b) => {
  const l1 = hexLum(a)
  const l2 = hexLum(b)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}
const isHex = (v) => /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v)
const asArray = (map) => Object.fromEntries(Object.entries(map).filter(([, v]) => v !== undefined && v !== ''))
const yamlVal = (v) => (typeof v === 'number' ? String(v) : JSON.stringify(String(v)))
const yamlGroup = (name, obj) => {
  const rows = Object.entries(obj)
  if (!rows.length) return ''
  return `${name}:\n${rows.map(([k, v]) => `  ${k}: ${yamlVal(v)}`).join('\n')}`
}

function parseColorLines(md) {
  const sectionStart = md.search(/^## \d+\.\s*(Color|Colour)/m)
  if (sectionStart < 0) return []
  const rest = md.slice(sectionStart)
  const next = rest.slice(4).search(/^## \d+\./m)
  const body = next < 0 ? rest : rest.slice(0, next + 4)
  const colors = []
  let section = 'colors'
  for (const line of body.split(/\r?\n/)) {
    const h3 = /^###\s+(.+)$/.exec(line)
    if (h3) {
      section = clean(h3[1])
      continue
    }
    const m = /^-\s+\*\*(.+?)\*\*\s*\(`?(#[0-9a-fA-F]{3,8})`?\)/.exec(line) || /^-\s+\*\*(.+?)\*\*[^`]*`(#[0-9a-fA-F]{3,8})`/.exec(line)
    if (m) colors.push({ label: clean(m[1]), hex: m[2].toUpperCase(), section, desc: clean(line.slice(m[0].length)) })
  }
  return colors
}

function pick(colors, test, exclude = []) {
  return colors.find((c) => !exclude.includes(c) && test(c))
}

const chroma = (hex) => {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h.slice(0, 6)
  const rgb = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16))
  return Math.max(...rgb) - Math.min(...rgb)
}

function overviewOf(md) {
  const i = md.search(/^##\s*(?:\d+\.\s*)?(?:Overview|Visual Theme & Atmosphere)/im)
  if (i < 0) return ''
  const rest = md.slice(i + 4)
  const j = rest.search(/^##\s/m)
  return j < 0 ? rest : rest.slice(0, j)
}

function firstBulletHex(md, sectionRe) {
  const start = md.search(/^## \d+\.\s*(Color|Colour)/m)
  if (start < 0) return null
  const rest = md.slice(start)
  const next = rest.slice(4).search(/^## \d+\./m)
  const body = next < 0 ? rest : rest.slice(0, next + 4)
  let inSection = false
  for (const line of body.split(/\r?\n/)) {
    const h3 = /^###\s+(.+)$/.exec(line)
    if (h3) {
      inSection = sectionRe.test(clean(h3[1]))
      continue
    }
    if (!inSection) continue
    const m = /^-\s+\*\*(.+?)\*\*.*?(#[0-9a-fA-F]{3,8})/.exec(line)
    if (m) return m[2].toUpperCase()
  }
  return null
}

function buildColors(allColors, md = '', app = '') {
  const colors = allColors.filter((c) => isHex(c.hex))
  if (!colors.length) return { canvas: '#FFFFFF', text: '#0E0E0E', primary: '#2563EB', surface: '#F5F4F2', border: '#E5E5E5', muted: '#666666' }
  const bySection = (re) => colors.filter((c) => re.test(c.section))
  const primaryPool = colors.filter((c) => /^primary\b/i.test(c.section))
  const pool = primaryPool.length ? primaryPool : colors
  const brandish = pick(pool, (c) => /brand|primary|action|accent/i.test(c.label) && !/text|ink|canvas|surface|background/i.test(c.label))
  let primary = brandish?.hex || pick(pool, (c) => !/background|tint|pressed|dim|soft|shadow|text|ink|canvas|surface/i.test(c.label))?.hex || pool[0].hex
  // A soft "Accent … / Mint" swatch is a tint, not the action color; prefer the
  // brand swatch that appears before it in the same section (Starbucks mint vs green).
  if (brandish && /accent|mint|tint/i.test(brandish.label)) {
    const earlier = pool.slice(0, pool.indexOf(brandish)).find((c) => !/background|tint|pressed|dim|soft|shadow|text|ink|canvas|surface|accent|mint/i.test(c.label))
    if (earlier) primary = earlier.hex
  }
  const canvasPool = colors.filter((c) => /canvas/i.test(c.label) && !/dark|shadow/i.test(c.label))
  let canvas = (canvasPool[0] || colors.find((c) => /app background|primary background/i.test(c.label)) || pick(colors, (c) => /^background$/i.test(c.label)) || colors[0]).hex
  // A canvas is a neutral surface, not the brand color. When the label match above
  // failed it fell back to the first swatch (often the brand hex), so recover the
  // neutral from the `Canvas` section instead of painting the whole screen brand.
  const canvasSection = colors.filter((c) => /canvas|background/i.test(c.section))
  const darkOnly = /no light mode|dark[- ]mode[- ]only|dark[- ]only|permanently dark/i.test(overviewOf(md))
  const declared = firstBulletHex(md, /canvas|background/i)
  const neutral = (hex) => chroma(hex) < 40
  if (canvas === primary && declared !== primary && canvasSection.length) {
    const cands = canvasSection.filter((c) => neutral(c.hex))
    const next = darkOnly ? cands.find((c) => hexLum(c.hex) < 0.25) : cands.find((c) => hexLum(c.hex) > 0.5) || cands[0]
    if (next) canvas = next.hex
  }
  if (darkOnly && hexLum(canvas) > 0.6) {
    const darkPick = canvasSection.find((c) => hexLum(c.hex) < 0.25)
    if (darkPick) canvas = darkPick.hex
  }
  // A swatch whose own description calls it the "primary canvas" outranks label matching.
  const declaredPrimary = colors.find((c) => /primary canvas/i.test(c.desc) && /canvas|background/i.test(c.section))
  if (declaredPrimary) canvas = declaredPrimary.hex
  if (CANVAS_FIX[app]) canvas = CANVAS_FIX[app][0]
  const dark = hexLum(canvas) < 0.2
  const surfacePool = colors.filter((c) => /surface|card|panel|elevat/i.test(c.label) && !/dark|pressed|hover/i.test(c.label))
  const surface = (surfacePool[0] || pick(colors, (c) => /surface|card|panel/i.test(c.label)) || { hex: dark ? '#1A1A1A' : '#F5F4F2' }).hex
  const alt = (surfacePool[1] || { hex: dark ? '#262626' : '#EFEFEF' }).hex
  const textPool = colors.filter((c) => /text|ink|foreground|heading/i.test(c.label))
  const text = (textPool.find((c) => /primary|main|heading|ink/i.test(c.label)) || textPool[0] || { hex: dark ? '#F5F4F2' : '#0E0E0E' }).hex
  if (contrast(primary, canvas) < 1.8) {
    primary = (colors.find((c) => /system|link|blue|accent|brand/i.test(c.label) && contrast(c.hex, canvas) >= 3) || { hex: text }).hex
  }
  const onPrimary = contrast('#FFFFFF', primary) >= contrast('#000000', primary) ? '#FFFFFF' : '#000000'
  const muted = (textPool.find((c) => /secondary|muted|subtle/i.test(c.label)) || textPool[1] || { hex: dark ? '#A0A0A0' : '#666666' }).hex
  const border = (colors.find((c) => /divider|hairline|border|line/i.test(c.label)) || { hex: dark ? '#2A2A2A' : '#E5E5E5' }).hex
  const semantic = bySection(/semantic|status/i)
  const success = (semantic.find((c) => /success|positive|green|safe/i.test(c.label)) || { hex: '#16A34A' }).hex
  const warning = (semantic.find((c) => /warning|amber|caution|at risk/i.test(c.label)) || { hex: '#D97706' }).hex
  const danger = (semantic.find((c) => /error|danger|red|destructive|negative/i.test(c.label)) || { hex: '#DC2626' }).hex
  let accent = (primaryPool.find((c) => c.hex !== primary) || colors.find((c) => c.hex !== primary && /accent|secondary|teal|purple/i.test(c.label) && !/text|ink|muted/i.test(c.label)) || { hex: primary }).hex
  if (accent === primary || contrast(accent, canvas) < 2) {
    accent = (colors.find((c) => c.hex !== primary && contrast(c.hex, canvas) >= 2.4 && !/text|ink|muted/i.test(c.label)) || { hex: primary }).hex
  }
  const pressed = (colors.find((c) => /pressed/i.test(c.label)) || { hex: primary }).hex
  const map = {
    bg: canvas,
    primary,
    'on-primary': onPrimary,
    'primary-pressed': pressed,
    accent,
    canvas,
    surface,
    'surface-alt': alt,
    border,
    divider: border,
    text,
    muted,
    success,
    warning,
    danger,
  }
  for (const c of colors.slice(0, 24)) {
    const k = keyify(c.label)
    if (!(k in map) && isHex(c.hex)) map[k] = c.hex
  }
  return map
}

function parseTypography(md) {
  const fontBlock = /###\s+Font Family([\s\S]*?)(?=\n###|\n##)/.exec(md)?.[1] || ''
  const firstFont = /`([^`]+)`/.exec(fontBlock)?.[1]
  const table = /###\s+Hierarchy([\s\S]*?)(?=\n###|\n##)/.exec(md)?.[1] || ''
  const rows = []
  for (const line of table.split(/\r?\n/)) {
    if (!line.trim().startsWith('|')) continue
    const cells = line.split('|').slice(1, -1).map((c) => clean(c))
    if (cells.length < 4 || /^-+$/.test(cells[0]) || /^role$/i.test(cells[0])) continue
    const [role, font, sizeRaw, weightRaw, lhRaw, lsRaw] = cells
    const size = parseFloat(sizeRaw)
    if (!role || !Number.isFinite(size)) continue
    const weightNum = parseInt(weightRaw, 10)
    const weight = Number.isFinite(weightNum) ? weightNum : WEIGHTS[weightRaw.toLowerCase()] || 400
    const lh = parseFloat(lhRaw)
    const ls = parseFloat(lsRaw)
    rows.push({
      key: keyify(role),
      token: {
        fontFamily: font || firstFont || 'SF Pro Text',
        fontSize: `${size}px`,
        fontWeight: weight,
        lineHeight: Number.isFinite(lh) ? lh : 1.4,
        letterSpacing: Number.isFinite(ls) ? `${ls}px` : '0px',
      },
    })
  }
  const body = rows.find((r) => /body|paragraph/i.test(r.key)) || rows[0]
  const fontFamilyBase = firstFont ? `${firstFont}, ui-sans-serif, system-ui, sans-serif` : 'SF Pro Text, ui-sans-serif, system-ui, sans-serif'
  return { rows, fontFamilyBase, fontSizeBase: body?.token.fontSize || '16px', fontName: firstFont || 'system-ui' }
}

function parseRadius(md) {
  const block = /###\s+Border Radius Scale([\s\S]*?)(?=\n###|\n##)/.exec(md)?.[1] || ''
  const nums = [...block.matchAll(/(\d+(?:\.\d+)?)\s*(?:pt|px)/g)].map((m) => Number(m[1])).filter((n) => n >= 0)
  const uniq = [...new Set(nums)].sort((a, b) => a - b)
  if (!uniq.length) return { sm: '4px', md: '8px', lg: '12px', full: '9999px' }
  const sm = uniq[0]
  const mdR = uniq[1] ?? sm
  const lg = uniq[2] ?? mdR
  return { sm: `${sm}px`, md: `${mdR}px`, lg: `${lg}px`, full: '9999px' }
}

function parseSpacing(md) {
  const block = /###\s+Spacing System([\s\S]*?)(?=\n###|\n##)/.exec(md)?.[1] || ''
  const nums = [...block.matchAll(/(\d+(?:\.\d+)?)\s*(?:pt|px)?/g)].map((m) => Number(m[1])).filter((n) => n >= 2 && n <= 80)
  const uniq = [...new Set(nums)].sort((a, b) => a - b)
  const pickN = (i, fallback) => `${uniq[Math.min(i, uniq.length - 1)] ?? fallback}px`
  return { xxs: pickN(0, 4), xs: pickN(1, 8), sm: pickN(2, 12), md: pickN(3, 16), lg: pickN(4, 24), xl: pickN(5, 32), section: pickN(6, 40) }
}

function parseDos(md) {
  const block = /##\s*\d*\.?\s*Do'?s?\s+and\s+Don'?ts?([\s\S]*?)(?=\n##\s|\n---\s*$|$)/i.exec(md)?.[1] || ''
  const dos = []
  const donts = []
  let target = null
  for (const line of block.split(/\r?\n/)) {
    if (/^###\s+Do\b/i.test(line)) {
      target = dos
      continue
    }
    if (/^###\s+Don'?t/i.test(line)) {
      target = donts
      continue
    }
    const m = /^[-*]\s+(.+)$/.exec(line.trim())
    if (m && target) target.push(clean(m[1]))
  }
  return {
    dos: dos.slice(0, 6).map((s) => (/^do\b/i.test(s) ? s : `Do ${s}`)),
    donts: donts.slice(0, 6).map((s) => (/^don'?t\b/i.test(s) ? s : `Don't ${s}`)),
  }
}

function firstParagraph(md) {
  const after = md.replace(/^#[^\n]*\n+/, '').replace(/^##[^\n]*\n+/, '')
  return clean(after.split(/\n\s*\n/)[0] || '')
}

function normalizeBody(md, app, category) {
  let body = md.replace(/^#[^\n]*\n+/, '')
  body = body.replace(/^##\s*1\.\s*Visual Theme & Atmosphere/m, '## Overview')
  const metrics = `\nDensity: 6/10\nVariance: 4/10\nMotion: 5/10\n`
  if (/^##\s*Overview/m.test(body)) body = body.replace(/(^##\s*Overview[\s\S]*?)(?=\n##\s)/m, `$1\n${metrics}`)
  const { dos, donts } = parseDos(md)
  if (dos.length || donts.length) {
    body += `\n## Do's and Don'ts\n\n${[...dos, ...donts].map((s) => `- ${s}`).join('\n')}\n`
  }
  return body
}

function convert(file, category, app, index) {
  const md = readFileSync(file, 'utf8')
  const title = md.match(/^#\s+(.+)$/m)?.[1] || app
  const nameGuess = title.replace(/^Design System Inspiration of\s+/i, '').replace(/\s*\(iOS\)\s*$/i, '').trim()
  const colorsRaw = parseColorLines(md)
  const colors = buildColors(colorsRaw, md, app)
  const typo = parseTypography(md)
  const rounded = parseRadius(md)
  const spacing = parseSpacing(md)
  const dark = hexLum(colors.canvas) < 0.2
  const serif = /serif|georgia|times|songti/i.test(typo.fontName)
  const rlg = parseFloat(rounded.lg)
  const tags = [...(AI_APPS.has(app) ? ['AI'] : []), ...(CATEGORY[category] || []), '移动 App']
  tags.push(dark ? '暗色' : '明亮')
  if (serif) tags.push('衬线')
  if (rlg >= 16) tags.push('大圆角')
  if (rlg <= 4) tags.push('直角')
  const rawDesc = firstParagraph(md)
  const description = rawDesc.length > 150 ? rawDesc.slice(0, 150).replace(/\s+\S*$/, '') + '…' : rawDesc
  const typography = Object.fromEntries(typo.rows.map((r) => [r.key, r.token]))
  const components = {
    'button-primary': { backgroundColor: colors.primary, textColor: colors['on-primary'], rounded: rounded.md },
    'tab-bar': { backgroundColor: colors.canvas, textColor: colors.muted, rounded: '0px', height: '49px' },
    card: { backgroundColor: colors.surface, rounded: rounded.lg },
    input: { backgroundColor: colors['surface-alt'], rounded: rounded.md, height: '40px' },
  }
  const gallery = {
    order: index,
    platform: 'mobile',
    author: 'awesome-ios-design-md',
    source: `https://github.com/Meliwat/awesome-ios-design-md/tree/main/design-md/${category}/${app}`,
    tags,
  }
  const front = [
    '---',
    'version: alpha',
    `name: ${yamlVal(`${nameGuess} iOS`)}`,
    `description: ${yamlVal(description)}`,
    'gallery:',
    ...Object.entries(gallery).map(([k, v]) => `  ${k}: ${Array.isArray(v) ? `[${v.map((t) => JSON.stringify(t)).join(', ')}]` : typeof v === 'number' ? v : JSON.stringify(v)}`),
    yamlGroup('colors', colors),
    `typography:\n${Object.entries(typography).map(([k, t]) => `  ${k}:\n${Object.entries(t).map(([p, v]) => `    ${p}: ${typeof v === 'number' ? v : JSON.stringify(v)}`).join('\n')}`).join('\n')}`,
    yamlGroup('rounded', rounded),
    yamlGroup('spacing', spacing),
    `components:\n${Object.entries(components).map(([k, v]) => `  ${k}:\n${Object.entries(v).map(([p, val]) => `    ${p}: ${yamlVal(val)}`).join('\n')}`).join('\n')}`,
    '---',
  ].join('\n')
  const body = normalizeBody(md, app, category)
  return { slug: `ios-${slugify(app)}`, md: `${front}\n\n${body}\n`, name: `${nameGuess} iOS`, tags, dark }
}

const files = readdirSync(SRC, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .flatMap((cat) =>
    readdirSync(join(SRC, cat.name), { withFileTypes: true })
      .filter((e) => e.isDirectory() && existsSync(join(SRC, cat.name, e.name, 'DESIGN.md')))
      .map((e) => ({ category: cat.name, app: e.name, file: join(SRC, cat.name, e.name, 'DESIGN.md') })),
  )
  .sort((a, b) => (a.category + '/' + a.app).localeCompare(b.category + '/' + b.app))

let created = 0
let skipped = 0
const failed = []
for (const [idx, { category, app, file }] of files.entries()) {
  if (ONLY && app !== ONLY) continue
  const order = 202 + idx
  const conv = convert(file, category, app, order)
  if (CORE_SKIP.has(conv.slug)) {
    skipped++
    continue
  }
  const structs = file.split('/design-md/')[1]
  const errors = buildDesign(conv.md, conv.slug).errors
  if (errors.length) {
    failed.push(`${app}: ${errors[0]}`)
    continue
  }
  const out = join(ROOT, 'designs', conv.slug, 'DESIGN.md')
  if (existsSync(out) && !process.argv.includes('--force')) {
    skipped++
    continue
  }
  if (!DRY) {
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, conv.md)
  }
  created++
  if (DRY || ONLY) console.log(`${conv.slug} | ${conv.name} | ${conv.tags.join('/')} | ${errors.length} errors | ${structs}`)
}
console.log(`done: created ${created}, skipped ${skipped}, failed ${failed.length}`)
if (failed.length) console.log(failed.slice(0, 20).join('\n'))
