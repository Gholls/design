---
version: "alpha"
name: "Heat Map & Heatmap Style"
description: "Heatmap visualization. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#0080FF"
  secondary: "#FF0000"
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
  order: 463
  author: "designmd.app"
  source: "https://designmd.app/library/heat-map-heatmap-style"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Heatmap visualization. Ideal for landing pages, modern websites. AI-ready template. Heat maps predate digital interfaces by over a century. Tobler's choropleth work in the 1960s formalized what cartographers had been doing intuitively — encoding magnitude through color. The core idea is dead simple: darker means more. Lighter means less. Your brain processes it before you consciously read anything. That's the power.

Then Hotjar happened. Around 2014-2015, click heatmaps exploded in UX research. Suddenly every product manager could see where users actually tapped versus where the team assumed they would. FullStory, Crazy Egg, Microsoft Clarity — they all rode the same wave. Heatmaps went from geographic tool to behavioral microscope overnight.

The science underneath matters more than most designers realize. Sequential color scales (yellow-to-red, white-to-blue) work because human color perception is non-linear. We're terrible at comparing areas but excellent at reading gradients. Rainbow palettes look fun but distort data — they create false boundaries where none exist. Perceptually uniform scales like viridis exist for a reason. Use them.

- Density: 8/10 — Dense
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** BI/Analytics
- **Keywords:** Color-coded grid/matrix, data intensity visualization, geographical heat maps, correlation matrices, cell-based representation, gradient coloring
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full (with adjustments)

## Colors

- **blue** (#0080FF) — Accent highlight, links and focus states
- **red** (#FF0000) — Error states, destructive actions


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

Color gradient transitions on data change, cell highlighting on hover, tooltip reveal on click, smooth color animation

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Color scale clear
- Do Legend visible
- Do Tooltips informative
- Do Colorblind alternatives
- Do Zoom/pan for geo
- Do Performance for large data


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/heat-map-heatmap-style · designmd.app -->
