---
version: "alpha"
name: "Underwater Aquático Deep Sea"
description: "Underwater elements, aquatic life, water plants, bubbles, waves, ocean aesthetics, calming, peaceful, exploratory, marine, deep sea, layered depth, cool blue illumination, flowing liquid, underwater infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#E0F6FF"
  secondary: "#006994"
typography:
  h1:
    fontFamily: System UI stack
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: System UI stack
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: System UI stack
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 805
  author: "designmd.app"
  source: "https://designmd.app/library/underwater-aquatico-deep-sea"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Underwater elements, aquatic life, water plants, bubbles, waves, ocean aesthetics, calming, peaceful, exploratory, marine, deep sea, layered depth, cool blue illumination, flowing liquid, underwater infographic. Ideal for landing pages, modern websites. AI-ready template. Forget everything you know about underwater design. The deep sea — the real deep, below 1,000 meters — operates on entirely different visual rules. There's no sunlight. No familiar blue gradients. What exists down there is darkness punctuated by living light: bioluminescence as the sole design language of an alien world.

The aesthetic shift happened when exploration caught up with imagination. James Cameron's descent to the Mariana Trench in 2012, NOAA's ongoing abyssal surveys, and the explosion of deep-sea footage from ROVs gave designers something photography-based to work with — not illustration, not fantasy, but actual visual data from a place that crushes submarines. The palette is midnight blacks, electric blues, toxic greens, and the occasional arterial red of a tube worm colony. Nothing pastel. Nothing gentle.

What separates deep-sea design from generic underwater aesthetics is pressure — both literal and visual. Shallow-water design is airy, playful, full of coral pinks and dappled light. Abyssal design is claustrophobic, sparse, and profoundly strange. The organisms themselves look designed by someone who never saw the sun. Anglerfish lures, jellyfish trailing impossible geometries, vent ecosystems thriving on chemistry instead of photosynthesis. It's biomechanical without trying to be.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Immersive, Calming, Exploratory
- **Keywords:** Underwater elements, aquatic life, water plants, bubbles, waves, ocean aesthetics, calming, peaceful, exploratory, marine, deep sea, layered depth, cool blue illumination, flowing liquid, underwater infographic
- **Era:** 2020s Thematic
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Light Aqua** (#E0F6FF) — Primary surface or dominant color
- **Deep Navy** (#006994) — Secondary surface or text color


## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

Animações de bolhas com @keyframes (translateY, opacity, scale), SVG de ondas como separadores, depth layering com z-index e parallax, filter: blur em elementos de fundo para simular distância.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Estrutura obrigatória completa
- Do Conteúdo em PT-BR
- Do Ícones SVG (sem emojis)
- Do cursor-pointer e transition-all
- Do Layout responsivo mobile-first
- Do Meta tags SEO e Open Graph
- Do Footer com copyright 2026
- Do Animações suaves
- Do Hierarquia tipográfica clara
- Do Espaços em branco valorizados.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/underwater-aquatico-deep-sea · designmd.app -->
