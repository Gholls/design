---
version: "alpha"
name: "Bento Box Grid"
description: "Bento Box grid layout. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#F5F5F5"
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
rounded:
  sm: 24px
  md: 48px
  lg: 72px
spacing:
  sm: 16.0px
  md: 32.0px
  lg: 64.0px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 184
  author: "designmd.app"
  source: "https://designmd.app/library/bento-box-grid"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Bento Box grid layout. Ideal for landing pages, saas. AI-ready template. Apple didn't invent the grid. But they made it sexy.

WWDC 2020 rolls around and suddenly every slide deck is this gorgeous arrangement of rounded rectangles — different sizes, different weights, all breathing together. The Japanese bento box metaphor clicked instantly: compartments of varying proportion, each holding something distinct, the whole greater than its parts. It wasn't a new idea in layout theory, but Apple's execution — that specific combination of generous radius, flat color, and asymmetric sizing — turned it into a visual language overnight.

Within months, every SaaS feature page looked like this. Linear did it. Raycast did it. Vercel did it. The bento grid became the default way to say "we have multiple features and they're all polished." It replaced the tired three-column icon grid that dominated the 2010s. Whether that's progress or just a new monoculture depends on your tolerance for trends — but the layout works because it creates visual hierarchy without requiring the viewer to read a single word.

- Density: 8/10 — Dense
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Modular, Grid, Organized, Apple-Inspired
- **Keywords:** Modular cards, asymmetric grid, varied sizes, Apple-style, dashboard tiles, negative space, clean hierarchy, cards
- **Era:** 2020s Apple
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **#FFFFFF** (#FFFFFF) — Primary surface or dominant color
- **#F5F5F5** (#F5F5F5) — Secondary surface or text color


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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

grid-template with varied spans, rounded-xl (16px), subtle shadows, hover scale (1.02), smooth transitions

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

- Do Grid responsive (4→2→1 cols)
- Do Card spans varied
- Do Rounded corners consistent
- Do Shadows subtle
- Do Content fits cards
- Do Hover scale (1.02)


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/bento-box-grid · designmd.app -->
