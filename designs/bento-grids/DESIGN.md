---
version: "alpha"
name: "Bento Grids"
description: "Bento Grid layout. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#F5F5F7"
  secondary: "#FFFFFF"
  tertiary: "#1D1D1F"
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
  sm: 20px
  md: 40px
  lg: 60px
spacing:
  sm: 20.0px
  md: 40.0px
  lg: 80.0px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 193
  author: "designmd.app"
  source: "https://designmd.app/library/bento-grids"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Bento Grid layout. Ideal for landing pages, saas. AI-ready template. Apple didn't invent the bento grid. They just made everyone notice it. But the version that ate SaaS whole — the one you see on every startup's feature page now — that came from Linear and Vercel circa 2023. Where Apple's bento was theatrical (big keynote energy, hero moments surrounded by supporting tiles), the Linear interpretation was quieter. Flatter. Cards with generous padding, subtle borders or no borders at all, content that breathed. Vercel's marketing pages took it further: asymmetric columns, mixed aspect ratios, the occasional full-bleed tile breaking the rhythm.

By mid-2024, bento was no longer a layout choice — it was the layout. Every SaaS marketing page defaulted to it. The pattern worked because it solved a real problem: how do you present twelve features without a twelve-item bullet list? You give each one a card, vary the sizes to imply hierarchy, and let the grid do the storytelling.

The risk now is sameness. When every product page looks like a Linear clone, the grid stops communicating and starts blending. The best implementations in 2025-2026 push back — mixing media types, breaking alignment intentionally, using motion to reintroduce surprise.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Modular, Grid, Clean, Organized
- **Keywords:** Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft
- **Era:** 2020s Apple/Linear
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Off-white** (#F5F5F7) — Light surface, card backgrounds
- **Clean White** (#FFFFFF) — Light surface, card backgrounds
- **Text** (#1D1D1F) — Primary text color


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

Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 20px. See rounded tokens in front matter for the full scale.


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

- Do Grid layout (CSS Grid)
- Do Rounded corners 16-24px
- Do Varied card spans
- Do Content fits card size
- Do Responsive re-flow
- Do Apple-like aesthetic


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/bento-grids · designmd.app -->
