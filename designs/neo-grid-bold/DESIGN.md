---
version: "alpha"
name: "Neo-Grid Bold"
description: "Neo-Grid Bold — Editorial neo-brutalism with a single neon yellow accent on off-white paper. Space Grotesk typography. off-white paper background, ink black, signature neon yellow accent used sparing. Best for product launch, design review, founder pitch. AI-ready design system."
colors:
  primary: "#ECECE8"
  secondary: "#0A0A0A"
  tertiary: "#F5F4EF"
  neutral: "#E6FF3D"
  surface: "#8A8A85"
typography:
  h1:
    fontFamily: Bebas Neue
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Bebas Neue
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.0rem
  md: 2.0rem
  lg: 4.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 587
  author: "designmd.app"
  source: "https://designmd.app/library/neo-grid-bold"
  tags: ["风格模板", "ink black", "design review"]
---

## Overview

Neo-Grid Bold — Editorial neo-brutalism with a single neon yellow accent on off-white paper. Space Grotesk typography. off-white paper background, ink black, signature neon yellow accent used sparing. Best for product launch, design review, founder pitch. AI-ready design system. Neo-brutalism didn't emerge from nowhere — it's the rebellious grandchild of Swiss modernism filtered through 90s rave flyers and early-web geocities chaos. When designers got tired of the same rounded-corner, soft-shadow SaaS aesthetic dominating every landing page from 2016 onward, they reached back to Brutalist architecture's raw concrete honesty and slammed it into digital interfaces. The movement gained real traction around 2019-2021 when studios like Locomotive and agencies tired of "clean" started shipping work with hard edges, visible grids, and colors that hurt.

Neo-Grid Bold takes this lineage and pushes the structural obsession further. Where early neo-brutalism was often chaotic — overlapping elements, broken layouts — this approach imposes a rigid, thick-bordered grid system that contains the energy without killing it. Bebas Neue isn't decorative here; it's architectural. Each letterform becomes a structural column. The neon yellow isn't accent — it's load-bearing. You're looking at punk rock that learned drafting.

- Density: 8/10 — Dense
- Variance: 5/10 — Moderate
- Motion: 7/10 — Kinetic

- **Style:** Neo-Brutalist, Editorial, Neon-Accent, Graphic
- **Keywords:** Neon yellow, neo-brutalist, Bebas Neue, editorial, off-white, confident, graphic, stat-heavy
- **Era:** 2020s Neo-Brutalist
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bg** (#ECECE8) — Primary surface or dominant color
- **Ink** (#0A0A0A) — Accent highlight, links and focus states
- **Paper** (#F5F4EF) — Secondary accent
- **Accent** (#E6FF3D) — Accent color, emphasis elements
- **Muted** (#8A8A85) — Extended palette, decorative use


## Typography

- **Display / Hero:** Space Grotesk — Weight 700, tight tracking, used for headline impact
- **Body:** Space Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Space Grotesk — 0.875rem, weight 500, slight letter-spacing
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

display font Space Grotesk for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, neon-yellow single accent on off-white, thick border columns, high-contrast stats, dense grid, compact 1.2rem gaps

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 0px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 0px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Space Grotesk display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Brutalist borders 2-3px solid applied
- Do Offset box-shadow on cards
- Do Mobile responsive layout (stack below 768px)


## Use Case

product launch, design review, founder pitch, brand deck, consulting findings, conference talk

<!-- Source: https://designmd.app/library/neo-grid-bold · designmd.app -->
