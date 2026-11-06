---
version: "alpha"
name: "Mistral Golden Amber"
description: "Mistral AI-inspired golden landing page. Ideal for ia europeia, marcas de luxo, plataformas premium, tecnologia francesa. AI-ready template."
colors:
  primary: "#fa520f"
  secondary: "#fffaeb"
  tertiary: "#fff0c2"
  neutral: "#1f1f1f"
  surface: "#ffa110"
  accent: "#ffd900"
typography:
  h1:
    fontFamily: Arial
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Arial
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 8px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 567
  author: "designmd.app"
  source: "https://designmd.app/library/mistral-golden-amber"
  tags: ["风格模板", "ia europeia", "marcas de luxo", "plataformas premium"]
---

## Overview

Mistral AI-inspired golden landing page. Ideal for ia europeia, marcas de luxo, plataformas premium, tecnologia francesa. AI-ready template. Golden amber carries centuries of European craft memory — from the Baltic amber trade routes that defined medieval commerce to the warm lacquer finishes on French ormolu furniture. It's a color that whispers old money without shouting it. When Mistral emerged from Paris as a serious contender in the AI race, their visual identity leaned into this exact territory: warmth over the cold blues of Silicon Valley, sophistication over sterility.

The choice wasn't accidental. French design has always understood that technology doesn't need to feel clinical. The amber-gold spectrum sits at the intersection of intellectual rigor and sensory pleasure — think gilded manuscript illuminations, the patina on a brass astrolabe, afternoon light through Haussmann windows. It signals that intelligence can be beautiful, that precision and warmth aren't opposites.

For AI brands specifically, golden amber solves a real problem: it humanizes. While competitors default to electric blue or void-black to signal 'advanced technology,' amber grounds the product in something tactile and historical. It says 'we built something powerful, and we're not afraid to make it feel approachable.'

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Golden Warm, Amber Gradients, Billboard Typography, Sharp Geometry, European Luxury
- **Keywords:** mistral, golden, amber, warm, billboard, sharp corners, European, luxury AI, golden shadows, single weight 400
- **Era:** 2024-2026 European AI Luxury
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Laranja Mistral** (#fa520f) — Warm accent, call-to-action secondary
- **Marfim Quente** (#fffaeb) — Secondary surface or text color
- **Creme** (#fff0c2) — Supporting palette color
- **Preto Mistral** (#1f1f1f) — Dark surface, primary background
- **Sunshine** (#ffa110) — Extended palette, decorative use
- **Ouro Brilhante** (#ffd900) — Premium accent, decorative highlights
- **Flame** (#fb6424) — Extended palette, decorative use
- **Block Orange** (#ff8105) — Warm accent, call-to-action secondary


## Typography

- **Display / Hero:** Arial — Weight 700, tight tracking, used for headline impact
- **Body:** Arial — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Arial — 0.875rem, weight 500, slight letter-spacing
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

Universo de cor golden-amber — cada tom do marfim pálido ao laranja queimado. Headlines massivas (82px) weight 400 com letter-spacing -2.05px — autoridade sem peso bold. Sombras golden multi-camada com rgba(127,99,21) criando efeito 'golden hour'. Cantos afiados (near-zero radius) — geometria arquitetônica. Gradiente de bloco Mistral (amarelo → âmbar → laranja). Fotografia de paisagem em tons dourados. Uppercase em labels de botão para formalidade europeia.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fundo marfim quente #fffaeb
- Do Headlines 82px weight 400
- Do Sombras golden amber
- Do Cantos afiados zero radius
- Do Gradiente bloco Mistral
- Do Uppercase em botões
- Do Peso único 400
- Do Responsivo


## Use Case

IA europeia, Luxury brands, Platforms premium, Tecnologia francesa

<!-- Source: https://designmd.app/library/mistral-golden-amber · designmd.app -->
