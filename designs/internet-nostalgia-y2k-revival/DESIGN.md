---
version: "alpha"
name: "Internet Nostalgia Y2K Revival"
description: "Landing page with full Windows 95/98 internet nostalgia aesthetic. Ideal for portfolios criativos retro, jogos indie, eventos tematicos, blogs pessoais nostalgicos, lancamentos de produto ironicos, comunidades de nicho. AI-ready template."
colors:
  primary: "#C0C0C0"
  secondary: "#000080"
  tertiary: "#FFFFFF"
  neutral: "#000000"
  surface: "#00FF00"
  accent: "#00FFFF"
typography:
  h1:
    fontFamily: Courier New
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Courier New
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 487
  author: "designmd.app"
  source: "https://designmd.app/library/internet-nostalgia-y2k-revival"
  tags: ["风格模板", "jogos indie", "eventos tematicos", "comunidades de nicho"]
---

## Overview

Landing page with full Windows 95/98 internet nostalgia aesthetic. Ideal for portfolios criativos retro, jogos indie, eventos tematicos, blogs pessoais nostalgicos, lancamentos de produto ironicos, comunidades de nicho. AI-ready template. The early web was ugly and nobody cared. That was the point. GeoCities pages with tiled backgrounds, hit counters, "under construction" GIFs, and Comic Sans used unironically — it was a frontier built by amateurs who were genuinely excited about hyperlinks. Windows 95 gave an entire generation their first taste of personal computing through a beige box that felt like magic. The visual language was clunky system fonts, beveled buttons, 16-color palettes, and dialog boxes that asked if you were really, truly sure.

Y2K revival isn't about faithfully recreating that era — it's about channeling the energy. The optimism of dial-up, the chaos of early HTML, the democratized ugliness before design became professionalized. Around 2018-2020, designers started pulling these references back not as mockery but as genuine aesthetic choice. Brutalist web design cracked the door open, and Y2K nostalgia kicked it down. Brands realized that millennials don't just remember this era — they miss the feeling of a web that wasn't optimized, surveilled, and A/B tested into sterility.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Windows 95/98, Retro Web, Pixel Art, ASCII, Table Layout, Beveled Buttons
- **Keywords:** internet nostalgia, Y2K revival, Windows 95, Windows 98, retro web, pixel art, ASCII art, table layout, beveled buttons, blue title bar, dialog box, custom cursor, 16-bit, dial-up era, system font, geocities
- **Era:** 1995-2000 Dial-Up Era Revival
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Cinza Sistema** (#C0C0C0) — Secondary text, borders, muted elements
- **Azul Titulo** (#000080) — Accent highlight, links and focus states
- **Branco Janela** (#FFFFFF) — Light surface, card backgrounds
- **Preto Texto** (#000000) — Dark surface, primary background
- **Verde Terminal** (#00FF00) — Success states, positive indicators
- **Ciano DOS** (#00FFFF) — Extended palette, decorative use
- **Magenta Retro** (#FF00FF) — Decorative accent, highlight elements
- **Amarelo Alerta** (#FFFF00) — Error states, destructive actions
- **Prata Borda** (#808080) — Extended palette, decorative use


## Typography

- **Display / Hero:** Courier New — Weight 700, tight tracking, used for headline impact
- **Body:** Courier New — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Courier New — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Courier New — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem


## Layout

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Janelas desenhadas em tabelas com bordas chanfradas (inset/outset), botoes classicos com sombras duras indicando elevacao (border-style: outset, active: inset), barras de titulo azuis (#000080) com texto branco centralizado, caixas de dialogo pop-up literais, arte ASCII feita de caracteres textuais, graficos pixelados (image-rendering: pixelated), cursores ludicos personalizados (cursor: url()), fontes bitmap/sistema (MS Sans Serif simulado), scrollbars estilizadas retro

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Janelas com bordas chanfradas outset/inset
- Do Barras de titulo azuis #000080
- Do Botoes classicos com efeito 3D (outset/inset)
- Do Caixas de dialogo pop-up
- Do Arte ASCII em pre tags
- Do Graficos pixelados com image-rendering pixelated
- Do Fundo cinza sistema #C0C0C0
- Do Fonte monospace para ASCII e system-ui para UI
- Do Elementos decorativos Geocities-era
- Do Scrollbars retro estilizadas


## Use Case

Portfolios criativos retro, Games indie, Events tematicos, Blogs personal nostalgicos, Lancamentos de produto ironicos, Comunidades de nicho

<!-- Source: https://designmd.app/library/internet-nostalgia-y2k-revival · designmd.app -->
