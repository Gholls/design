---
version: "alpha"
name: "Brutalismo Sonoro Glitch"
description: "Design an edgy and raw brutalist landing page for an experimental electronic music festival. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FF00FF"
  tertiary: "#00FFFF"
  neutral: "#FFFFFF"
  surface: "#32CD32"
  accent: "#FFFF00"
typography:
  h1:
    fontFamily: Press Start 2P
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Press Start 2P
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 217
  author: "designmd.app"
  source: "https://designmd.app/library/brutalismo-sonoro-glitch"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an edgy and raw brutalist landing page for an experimental electronic music festival. Ideal for landing pages, modern websites. AI-ready template. Glitch brutalism in visual design didn't emerge from design schools. It crawled out of basement raves and pirate radio stations. The lineage is direct: Designers for Underground Resistance, Warp Records, and Mille Plateaux weren't decorating—they were translating. Clipping audio becomes clipping type. A bitcrushed kick drum becomes a shattered grid. The rave flyer tradition of the early 90s—photocopied, degraded, illegible on purpose—established that destruction carries information. Legibility was never the point. Energy was.

When Autechre's artwork fractured into pure data noise, when Oval built entire albums from skipping CDs, the visual language followed. Designers like The Designers Republic and Non-Format understood: if the music breaks the signal, the poster breaks the page. Every torn pixel is a deliberate frequency. Every misregistered layer is a tempo shift. The aesthetic isn't chaos—it's controlled feedback, same as Merzbow pushing a mixer into the red and finding structure in the scream.

This isn't retro fetishism. The tradition lives because electronic music keeps pushing past comfortable thresholds, and design must match that voltage.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Edgy, Raw, Experimental
- **Keywords:** music festival, electronic, experimental, edgy, raw, glitch, underground, disruptive, vibrant, intense
- **Era:** 2026+ Cultura Underground
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Magenta** (#FF00FF) — Decorative accent, highlight elements
- **Ciano** (#00FFFF) — Supporting palette color
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Verde Limão** (#32CD32) — Success states, positive indicators
- **Amarelo Neon** (#FFFF00) — Warning states, attention indicators
- **Roxo Elétrico** (#BF00FF) — Accent color, emphasis elements
- **Cinza Escuro** (#1A1A1A) — Deep contrast surface


## Typography

- **Display / Hero:** Press Start 2P — Weight 700, tight tracking, used for headline impact
- **Body:** Press Start 2P — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Press Start 2P — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Efeitos de glitch e distorção, tipografia condensada e pixelizada, imagens de baixa resolução intencionais, sobreposições de texto, animações de loop curtas e repetitivas, micro-interações de hover com feedback visual forte.

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

- Do Efeitos de glitch
- Do Tipografia pixelizada
- Do Imagens de baixa resolução
- Do Sobreposições de texto
- Do Animações de loop
- Do Feedback visual forte.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/brutalismo-sonoro-glitch · designmd.app -->
