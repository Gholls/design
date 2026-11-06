---
version: "alpha"
name: "Pastel Geometry"
description: "Friendly, organized, modern landing page with pastel geometry. Ideal for apps de produtividade, educational platforms, saas friendly, health apps. AI-ready template."
colors:
  primary: "#c8d9e6"
  secondary: "#faf9f7"
  tertiary: "#1a1a1a"
  neutral: "#f0b4d4"
  surface: "#a8d4c4"
  accent: "#5a7c6a"
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 24px
  md: 48px
  lg: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 623
  author: "designmd.app"
  source: "https://designmd.app/library/pastel-geometry"
  tags: ["风格模板", "saas friendly", "health apps"]
---

## Overview

Friendly, organized, modern landing page with pastel geometry. Ideal for apps de produtividade, educational platforms, saas friendly, health apps. AI-ready template. Pastel geometry didn't emerge from nowhere — it's the logical endpoint of two parallel movements colliding. On one side, you had the flat design revolution of 2012-2014 stripping interfaces down to pure color and shape. On the other, the wellness industry was quietly rejecting the clinical whites and sterile blues of healthcare UI, reaching instead for warmth. The merger happened around 2018 when apps like Calm and Headspace proved that soft color palettes could carry serious product experiences without feeling childish.

What makes this system interesting is its deliberate rejection of edge. Where material design gave us shadows and depth, pastel geometry insists on flatness as a philosophical stance — nothing here demands attention aggressively. The rounded pills and blob shapes aren't decorative; they're functional signals that say 'this space is safe, slow down.' It borrows from Scandinavian product design's obsession with approachable form, translated into pixels.

The geometry part matters more than people think. Without structural rigor — consistent radii, mathematical spacing, repeating shape languages — pastels collapse into nursery aesthetics. The geometry is what gives it adult credibility.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Friendly, Organized, Modern, Approachable
- **Keywords:** pastel, geometry, pills, vertical pills, Plus Jakarta Sans, friendly, organized, modern, approachable, soft shadow, rounded card
- **Era:** 2024-2026 Friendly Modern
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Pastel Blue BG** (#c8d9e6) — Primary background surface
- **Card White** (#faf9f7) — Light surface, card backgrounds
- **Text Dark** (#1a1a1a) — Dark surface, primary background
- **Pill Pink** (#f0b4d4) — Primary text color
- **Pill Mint** (#a8d4c4) — Extended palette, decorative use
- **Pill Sage** (#5a7c6a) — Extended palette, decorative use
- **Pill Lavender** (#9b8dc4) — Extended palette, decorative use
- **Pill Violet** (#7c6aad) — Accent color, emphasis elements


## Typography

- **Display / Hero:** Plus Jakarta Sans — Weight 700, tight tracking, used for headline impact
- **Body:** Plus Jakarta Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Plus Jakarta Sans — 0.875rem, weight 500, slight letter-spacing
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

Rounded card with soft shadow, vertical pills on right edge with varying heights (short-medium-tall-medium-short), consistent pill width, download/action icon in corner, smooth hover 250ms

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Pill-shaped (9999px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Pill-shaped (9999px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Plus Jakarta Sans carregada
- Do Pastel blue background #c8d9e6
- Do White card com soft shadow
- Do Vertical pills na borda direita
- Do Pills com alturas variadas
- Do Cores pastel consistentes
- Do Responsivo mobile/tablet/desktop


## Use Case

Apps de produtividade, Educational platforms, SaaS friendly, Health apps

<!-- Source: https://designmd.app/library/pastel-geometry · designmd.app -->
