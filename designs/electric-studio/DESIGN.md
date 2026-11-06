---
version: "alpha"
name: "Electric Studio"
description: "Bold, clean professional landing page with a two-panel vertical split layout. Ideal for estúdios de design, digital agencies, portfolios profissionais, consultorias. AI-ready template."
colors:
  primary: "#0a0a0a"
  secondary: "#ffffff"
  tertiary: "#4361ee"
  neutral: "#f5f5f5"
  surface: "#888888"
  accent: "#2d3abe"
typography:
  h1:
    fontFamily: Manrope
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 348
  author: "designmd.app"
  source: "https://designmd.app/library/electric-studio"
  tags: ["风格模板", "estúdios de design", "digital agencies", "consultorias"]
---

## Overview

Bold, clean professional landing page with a two-panel vertical split layout. Ideal for estúdios de design, digital agencies, portfolios profissionais, consultorias. AI-ready template. The split panel didn't emerge from theory. It came from print — specifically from the Swiss poster tradition of dividing a surface into opposing fields of tension. Black ink on white stock, reversed out. When the web matured past single-column blogs, studios grabbed that same device: cleave the viewport in two, let contrast do the talking.

What makes it stick is the violence of the join. A white upper half breathes — airy, typographic, restrained. Then the dark lower half absorbs. It's not decoration; it's pacing. The eye lands on lightness, reads the headline, then drops into density. Agencies figured this out early because their work demands theatrical framing. You don't present a rebrand inside a beige container.

The convention solidified around 2016–2018 as studio sites competed for visual authority. Two panels, hard edge, no gradient softening the seam. It signals confidence. The layout says: we understand composition well enough to let negative space and darkness coexist without mediation.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Bold, Clean, Professional, High Contrast
- **Keywords:** split panel, two-panel, white top, blue bottom, brand marks, Manrope, high contrast, professional, clean, quote typography
- **Era:** 2024-2026 Studio Clean
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Dark Black** (#0a0a0a) — Dark surface, primary background
- **Pure White** (#ffffff) — Light surface, card backgrounds
- **Accent Blue** (#4361ee) — Primary accent, CTAs and interactive elements
- **Light Grey** (#f5f5f5) — Secondary text, borders, muted elements
- **Medium Grey** (#888888) — Secondary text, borders, muted elements
- **Dark Blue** (#2d3abe) — Deep contrast surface


## Typography

- **Display / Hero:** Manrope — Weight 700, tight tracking, used for headline impact
- **Body:** Manrope — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Manrope — 0.875rem, weight 500, slight letter-spacing
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

Two-panel vertical split, accent bar on panel edge, quote typography as hero element, minimal confident spacing, smooth transitions 300ms

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

- Do Manrope font carregada
- Do Two-panel vertical split
- Do Accent bar em bordas
- Do Quote typography como hero
- Do Brand marks nos cantos
- Do Espaçamento confiante e mínimo
- Do Responsivo mobile/tablet/desktop


## Use Case

Design studios, Digital agencies, Professional portfolios, Consulting firms

<!-- Source: https://designmd.app/library/electric-studio · designmd.app -->
