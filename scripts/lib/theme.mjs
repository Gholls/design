export const parseHex = (h) => {
  const s = String(h || '').replace('#', '')
  if (![3, 4, 6, 8].includes(s.length)) return null
  const full = s.length <= 4 ? s.slice(0, 3).split('').map((c) => c + c).join('') : s.slice(0, 6)
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16))
}

export const lum = (hex) => {
  const rgb = parseHex(hex)
  if (!rgb) return 1
  const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4 }
  return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2])
}

export const contrast = (a, b) => {
  const l1 = lum(a), l2 = lum(b)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

export const mix = (a, b, t) => {
  const A = parseHex(a), B = parseHex(b)
  if (!A || !B) return a
  return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join('')
}

const hex6 = (h) => {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(h || '').trim())
  if (!m) return null
  const v = m[1].length === 3 ? m[1].split('').map((c) => c + c).join('') : m[1]
  return '#' + v.toUpperCase()
}

const ROLES = [
  ['bg', /background|canvas|\bbg\b|base/i],
  ['surface', /surface|card background|elevated|panel/i],
  ['text', /primary text|text primary|^text$|main text|foreground|body text/i],
  ['muted', /muted|secondary text|tertiary text|caption text/i],
  ['border', /border|divider|hairline/i],
]

function readPalettes(md) {
  const sections = []
  let cur = null
  for (const line of String(md).split(/\r?\n/)) {
    const h = /^#{2,4}\s+(.+)$/.exec(line)
    if (h) {
      cur = { head: h[1].toLowerCase(), body: [] }
      sections.push(cur)
      continue
    }
    if (cur) cur.body.push(line)
  }
  const out = []
  for (const sec of sections) {
    const mode = /\bdark\b/.test(sec.head) ? 'dark' : /\blight\b/.test(sec.head) ? 'light' : null
    if (!mode || !/(mode|palette|theme|appearance|colors?)/.test(sec.head)) continue
    const got = {}
    for (const line of sec.body) {
      const hm = /#[0-9a-f]{6}/i.exec(line)
      if (!hm) continue
      const before = line.split(/#[0-9a-f]{6}/i)[0]
      for (const [role, re] of ROLES) {
        if (got[role] || !re.test(before)) continue
        got[role] = hex6(hm[0])
      }
    }
    out.push({ mode, got })
  }
  return out
}

export function altPalette(md, palette) {
  const cands = readPalettes(md).filter((c) => c.got.bg && c.got.text)
  if (!cands.length) return null
  const want = lum(palette.bg) < 0.25 ? 'light' : 'dark'
  const pick = cands.find((c) => c.mode === want && contrast(c.got.text, c.got.bg) >= 4.5)
  if (!pick) return null
  const bg = hex6(pick.got.bg)
  const text = hex6(pick.got.text)
  if (Math.abs(lum(bg) - lum(palette.bg)) < 0.25) return null
  const surface = hex6(pick.got.surface) || mix(bg, text, 0.06)
  const muted = hex6(pick.got.muted) || mix(bg, text, 0.45)
  const border = hex6(pick.got.border) || mix(bg, text, 0.14)
  if (contrast(muted, bg) < 3) return null

  const brand = hex6(palette.primary) || text
  const bestOn = (c) => Math.max(contrast(text, c), contrast(bg, c))
  let primary = brand
  if (contrast(brand, bg) < 3 || bestOn(brand) < 4.5) {
    primary = text
    for (const t of [0.35, 0.5, 0.65, 0.8, 0.9]) {
      const cand = mix(brand, text, t)
      if (contrast(cand, bg) >= 3 && bestOn(cand) >= 4.5) {
        primary = cand
        break
      }
    }
  }
  const onPrimary = contrast(text, primary) >= contrast(bg, primary) ? text : bg
  return { bg, surface, surface2: mix(surface, text, 0.06), text, muted, border, primary, onPrimary, dark: lum(bg) < 0.25 }
}
