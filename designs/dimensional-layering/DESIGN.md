---
version: "alpha"
name: "Dimensional Layering"
description: "Design with dimensional layering. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#F5F5F5"
  tertiary: "#E0E0E0"
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
  order: 327
  author: "designmd.app"
  source: "https://designmd.app/library/dimensional-layering"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design with dimensional layering. Ideal for landing pages, saas. AI-ready template. Screens are flat. Two dimensions. That's the constraint we've been fighting since the first pixel lit up. Early web design accepted this limitation — everything sat on the same plane, politely stacked in document flow. Then CSS got z-index, and suddenly we could cheat. Layers existed. Things could overlap, occlude, create the illusion that some elements lived closer to you than others.

The real shift came with CSS transforms and GPU-accelerated compositing. translate3d wasn't just a performance hack — it gave us a genuine z-axis to play with. Elements could now move independently through space. Parallax scrolling exploited this ruthlessly, sometimes beautifully, sometimes to the point of nausea. But the principle stuck: depth communicates hierarchy better than size alone.

Material Design formalized this intuition in 2014 with its elevation system — discrete shadow levels mapping to semantic importance. A FAB floats above a card, which floats above the surface. It was opinionated and rigid, but it proved something: users intuitively read layered interfaces as having spatial meaning. The 2020s took that foundation and broke it open — overlapping elements, stacked cards with peek-through edges, parallax layers that respond to scroll or cursor. Depth became expressive, not just functional.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Layered, Depth, Parallax, Dimensional
- **Keywords:** Depth, overlapping, z-index, layers, 3D, shadows, elevation, floating, cards, spatial hierarchy
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **#FFFFFF** (#FFFFFF) — Primary surface or dominant color
- **#F5F5F5** (#F5F5F5) — Secondary surface or text color
- **#E0E0E0** (#E0E0E0) — Supporting palette color


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

z-index stacking, box-shadow elevation (4 levels), transform: translateZ(), backdrop-filter, parallax

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

- Do Layers clearly defined
- Do Shadows show depth
- Do Overlaps intentional
- Do Hierarchy clear
- Do Performance optimized
- Do Mobile depth maintained


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/dimensional-layering · designmd.app -->
