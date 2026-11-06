---
version: "alpha"
name: "Google Sans Typography"
description: "Render a 2D isolated text on a solid background. Ideal for product and marketing sites that want a clean, big tech aesthetic.. AI-ready template."
colors:
  primary: "#737574"
  secondary: "#F6F9F8"
typography:
  h1:
    fontFamily: Google Sans
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Google Sans
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 440
  author: "designmd.app"
  source: "https://designmd.app/library/google-sans-typography"
  tags: ["风格模板", "big tech aesthetic"]
---

## Overview

Render a 2D isolated text on a solid background. Ideal for product and marketing sites that want a clean, big tech aesthetic.. AI-ready template. Google Sans emerged from the ashes of Product Sans — the geometric typeface Google debuted alongside their 2015 logo redesign. Product Sans was never publicly released; it lived exclusively on google.com and in marketing materials, which only made designers want it more. Google Sans arrived as the productized evolution: slightly more refined optical corrections, better hinting for screens, and crucially, available across Google's entire product ecosystem.

The typeface represents Google's philosophical shift from the engineer-driven Roboto era to something warmer and more consumer-friendly. Where Roboto was designed to disappear, Google Sans was designed to be recognized. Those perfectly circular counters, the generous x-height, the almost-too-friendly rounded terminals — it's a typeface that says 'we're approachable' with the confidence of a trillion-dollar company.

What's fascinating is how Google Sans became shorthand for 'big tech aesthetic.' It spawned an entire generation of geometric sans-serifs from startups trying to borrow that same aura of scale and trustworthiness. The rounded geometry became a visual language that consumers now unconsciously associate with polished, well-funded products.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Branded, geometric‑humanist Google look
- **Keywords:** Google Sans, big tech aesthetic, rounded, geometric, friendly, modern
- **Era:** Contemporary Web
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **#737574** (#737574) — Primary surface or dominant color
- **#F6F9F8** (#F6F9F8) — Extended palette, decorative use


## Typography

- **Display / Hero:** Google Sans — Weight 700, tight tracking, used for headline impact
- **Body:** Google Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Google Sans — 0.875rem, weight 500, slight letter-spacing
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

Tight tracking (-3%), 90% leading

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Google Sans Font
- Do Color: #737574
- Do Tracking -3%
- Do Background #F6F9F8


## Use Case

Product and marketing sites that want a clean, big tech aesthetic.

<!-- Source: https://designmd.app/library/google-sans-typography · designmd.app -->
