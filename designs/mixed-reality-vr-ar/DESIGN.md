---
version: "alpha"
name: "Mixed Reality / VR-AR"
description: "Mixed reality VR/AR infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#1F1F2E"
  secondary: "#FFFFFF"
  tertiary: "#00FFFF"
  neutral: "#FF00FF"
  surface: "#00FF00"
  accent: "#FFFF00"
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
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 569
  author: "designmd.app"
  source: "https://designmd.app/library/mixed-reality-vr-ar"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Mixed reality VR/AR infographic. Ideal for landing pages, modern websites. AI-ready template. Data visualization spent decades confined to flat rectangles. Charts, dashboards, scatter plots — all projected onto 2D planes regardless of the data's actual dimensionality. Then spatial computing arrived and broke that contract entirely.

The shift wasn't gradual. Once headsets could render stable, readable typography at arm's length, designers started asking dangerous questions. What if a org chart existed as a room you walked through? What if financial data had depth — literal depth — where time moved along the z-axis and you could physically step closer to anomalies? Information architecture stopped being a metaphor and became architecture, full stop.

The challenge is brutal, though. Human spatial reasoning is powerful but imprecise. We're terrible at comparing volumes, inconsistent at judging distances, and easily overwhelmed by visual density in three dimensions. Every VR infographic fights against millennia of evolution that optimized us for scanning flat horizons. The designers who succeed here aren't the ones adding dimensions — they're the ones who know exactly when flatness still wins.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Infographic
- **Keywords:** VR/AR visualization, spatial layouts, immersive perspective, 3D spatial awareness, holographic projections, cutting-edge, futuristic, dimensional
- **Era:** 2025+ Spatial Computing
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Dark Indigo** (#1F1F2E) — Dark surface, primary background
- **White** (#FFFFFF) — Light surface, card backgrounds
- **Cyan** (#00FFFF) — Accent highlight, links and focus states
- **Magenta** (#FF00FF) — Decorative accent, highlight elements
- **Green** (#00FF00) — Success states, positive indicators
- **Yellow** (#FFFF00) — Warning states, attention indicators
- **Hot Pink** (#FF0080) — Primary text color
- **Sky Cyan** (#00CCFF) — Secondary accent


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

Futuristic neon lighting, spatial grid animations, holographic projection effects, dimensional overlay transitions, perspective depth shifts, immersive reveals

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

- Do 3D perspective active
- Do Holographic effects
- Do Spatial grid visible
- Do Neon accents glowing
- Do Depth layering clear
- Do Futuristic immersive feel


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/mixed-reality-vr-ar · designmd.app -->
