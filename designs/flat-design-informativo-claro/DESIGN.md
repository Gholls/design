---
version: "alpha"
name: "Flat Design Informativo Claro"
description: "Clear and informative flat design landing page for a news and articles platform. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#333333"
  tertiary: "#001F3F"
  neutral: "#CC0000"
  surface: "#2ECC40"
  accent: "#FFD700"
typography:
  h1:
    fontFamily: Roboto
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Roboto
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 407
  author: "designmd.app"
  source: "https://designmd.app/library/flat-design-informativo-claro"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Clear and informative flat design landing page for a news and articles platform. Ideal for landing pages, modern websites. AI-ready template. The web spent years burying text under chrome. Gradients, textures, skeuomorphic containers — all fighting for attention against the very content people came to read. Then Medium showed up in 2012 and stripped everything back. White space. A single column. Typography doing all the heavy lifting. It wasn't minimalism for aesthetics. It was flat design in service of comprehension.

Substack followed the same logic years later, proving the pattern wasn't a trend but a permanent shift in how we think about information delivery. No sidebar widgets, no decorative flourishes, no visual noise competing with the paragraph you're trying to finish. The interface disappears. What remains is the relationship between reader and writer — mediated by nothing more than good type, generous margins, and a background that knows when to shut up.

This lineage matters. Flat design for news and content platforms isn't about looking modern. It's a deliberate editorial choice: the container should never upstage the content. Every pixel of decoration you add is a pixel of attention you're stealing from the words.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Clear, Informative, Simple
- **Keywords:** news platform, articles, informative, flat design, clear, simple, legible, modern, structured, accessible
- **Era:** 2026+ Informação Descomplicada
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#333333) — Dark surface, primary background
- **Azul Marinho** (#001F3F) — Accent highlight, links and focus states
- **Vermelho Alerta** (#CC0000) — Error states, destructive actions
- **Verde Esmeralda** (#2ECC40) — Success states, positive indicators
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Laranja Vibrante** (#FF8C00) — Warm accent, call-to-action secondary
- **Cinza Claro** (#F5F5F5) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Roboto — Weight 700, tight tracking, used for headline impact
- **Body:** Roboto — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Roboto — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Layouts de grade limpos para artigos, tipografia sans-serif de alta legibilidade, ícones de categoria simples, imagens de capa de artigo em estilo flat, micro-interações de destaque de artigo com feedback de cor, transições de página rápidas e diretas.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Subtly rounded (0.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Subtly rounded (0.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Layouts de grade limpos
- Do Tipografia sans-serif legível
- Do Ícones de categoria simples
- Do Imagens de capa flat
- Do Micro-interações de destaque de artigo
- Do Transições rápidas e diretas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/flat-design-informativo-claro · designmd.app -->
