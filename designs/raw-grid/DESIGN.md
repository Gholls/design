---
version: "alpha"
name: "Raw Grid"
description: "Raw Grid — Neo-brutalist deck with thick borders, offset shadows, and a pink/sage/ink palette. Segoe UI / system-ui typography. white background with ink-black structure, soft pink and sage green as flat colo. Best for startup pitch, accelerator demo day, founder pitch. AI-ready design system."
colors:
  primary: "#FFFFFF"
  secondary: "#0A0A0A"
  tertiary: "#F2D4CF"
  neutral: "#E5EDD6"
  surface: "#F5F5F5"
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Space Grotesk
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
  order: 660
  author: "designmd.app"
  source: "https://designmd.app/library/raw-grid"
  tags: ["风格模板", "offset shadows", "accelerator demo day"]
---

## Overview

Raw Grid — Neo-brutalist deck with thick borders, offset shadows, and a pink/sage/ink palette. Segoe UI / system-ui typography. white background with ink-black structure, soft pink and sage green as flat colo. Best for startup pitch, accelerator demo day, founder pitch. AI-ready design system. Brutalism in graphic design didn't emerge from laziness — it was a deliberate rejection of the polished, corporate-sanitized interfaces that dominated the early 2010s. Designers were suffocating under flat design's beige uniformity, and brutalism said: show the structure, expose the grid, stop pretending software is a magazine spread.

The neo-brutalist wave that followed — thick borders, raw grids, offset shadows in confrontational colors — owes as much to zine culture and punk typography as it does to Béton brut architecture. It's the visual language of people who build things in public and refuse to sand down the edges. The pink offset shadow specifically became a signature move around 2019-2021, a way to inject irreverence without losing legibility.

What makes Raw Grid interesting is that it takes the brutalist ethos and gives it just enough system to be usable at scale. It's not chaos cosplay — it's structured rebellion. The grid is visible because the grid IS the design.

- Density: 8/10 — Dense
- Variance: 5/10 — Moderate
- Motion: 7/10 — Kinetic

- **Style:** Neo-Brutalist, Scrappy, Graphic, Direct
- **Keywords:** Neo-brutalist, thick borders, pink offset shadow, sage, scrappy, direct, no-nonsense, Space Grotesk
- **Era:** 2020s Neo-Brutalist
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Primary** (#FFFFFF) — Primary surface or dominant color
- **Ink** (#0A0A0A) — Accent highlight, links and focus states
- **Pink** (#F2D4CF) — Secondary accent
- **Green** (#E5EDD6) — Accent color, emphasis elements
- **Gray** (#F5F5F5) — Extended palette, decorative use


## Typography

- **Display / Hero:** Segoe UI / system-ui — Weight 700, tight tracking, used for headline impact
- **Body:** Segoe UI / system-ui — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Segoe UI / system-ui — 0.875rem, weight 500, slight letter-spacing
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

display font Segoe UI / system-ui for hero headlines, bold hover color shift (150ms), high-contrast active states, 3px black offset shadows, pink/sage ink palette, neo-brutalist card borders, dense grid, compact 1.2rem gaps

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

- Do Segoe UI / system-ui display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Brutalist borders 2-3px solid applied
- Do Offset box-shadow on cards
- Do Mobile responsive layout (stack below 768px)


## Use Case

startup pitch, accelerator demo day, founder pitch, indie product launch, brand deck, creator portfolio

<!-- Source: https://designmd.app/library/raw-grid · designmd.app -->
