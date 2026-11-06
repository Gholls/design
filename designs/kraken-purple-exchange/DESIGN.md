---
version: "alpha"
name: "Kraken Purple Exchange"
description: "Kraken-inspired crypto exchange landing page. Ideal for exchanges crypto, trading, plataformas financeiras, defi. AI-ready template."
colors:
  primary: "#7132f5"
  secondary: "#ffffff"
  tertiary: "#101114"
  neutral: "#686b82"
  surface: "#5741d8"
  accent: "#9497a9"
typography:
  h1:
    fontFamily: system-ui
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: system-ui
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: system-ui
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 12px
  md: 24px
  lg: 36px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 508
  author: "designmd.app"
  source: "https://designmd.app/library/kraken-purple-exchange"
  tags: ["风格模板", "exchanges crypto", "trading", "defi"]
---

## Overview

Kraken-inspired crypto exchange landing page. Ideal for exchanges crypto, trading, plataformas financeiras, defi. AI-ready template. Purple has always been the color of the initiated. In ancient Rome, Tyrian purple was reserved for emperors — it signaled power through scarcity. When Kraken adopted deep violet as their primary brand color in the early crypto exchange era, they were making a deliberate statement: this isn't retail finance dressed up in friendly blues and greens. This is something else entirely.

The futuristic tech aesthetic that surrounds Kraken's purple identity draws from a lineage that runs through Blade Runner's neon-soaked interfaces, through the terminal screens of early electronic trading floors, all the way to the synthwave revival of the 2010s. It's a visual language that says "we operate at the edge." The purple-on-dark combination specifically evokes the feeling of late-night trading sessions, of screens glowing in dark rooms where serious money moves.

What makes this palette work for crypto specifically is its rejection of traditional finance's conservative navy-and-white uniform. Purple occupies a psychological space between the authority of blue and the urgency of red — exactly where a trading platform wants to live. It communicates both trust and intensity simultaneously, which is a rare trick in interface design.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Clean White Canvas, Kraken Purple Accent, Dual Font System, 12px Radius, Whisper Shadows
- **Keywords:** kraken, purple, exchange, crypto, Kraken-Brand, Kraken-Product, 12px radius, whisper shadows, cool blue-gray, green success badges
- **Era:** 2024-2026 Crypto Trading
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Kraken Purple** (#7132f5) — Accent color, emphasis elements
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Near Black** (#101114) — Dark surface, primary background
- **Cool Gray** (#686b82) — Secondary text, borders, muted elements
- **Purple Dark** (#5741d8) — Deep contrast surface
- **Silver Blue** (#9497a9) — Secondary accent
- **Verde** (#149e61) — Success states, positive indicators
- **Purple Subtle** (rgba(133,91,251,0.16)) — Accent color, emphasis elements


## Typography

- **Display / Hero:** system-ui — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui — 0.875rem, weight 500, slight letter-spacing
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

Kraken Purple (#7132f5) como acento de marca comandante com variantes escuras (#5741d8, #5b1ecf). Canvas branco limpo com escala de cinzas cool blue-gray. Dual font: Brand (display weight 700 com tracking negativo -1px) + Product (UI weight 400-600). Radius 12px em todos os botões — arredondado mas não pill. Sombras whisper (rgba(0,0,0,0.03) 0px 4px 24px). Badges de sucesso verde (#149e61) em 16% opacity. Botões purple subtle com fundo rgba(133,91,251,0.16).

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


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

- Do Kraken Purple #7132f5 comandante
- Do Canvas branco com cinzas cool
- Do Display weight 700 tracking -1px
- Do Radius 12px em botões
- Do Sombras whisper
- Do Purple subtle buttons
- Do Green badges
- Do Responsivo


## Use Case

Exchanges crypto, Trading, Platforms financeiras, DeFi

<!-- Source: https://designmd.app/library/kraken-purple-exchange · designmd.app -->
