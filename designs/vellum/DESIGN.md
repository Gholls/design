---
version: "alpha"
name: "Vellum"
description: "Vellum — Deep navy canvas with warm-yellow italic Cormorant serifs and a single dusty teal accent. A quiet, scholarly aesthetic. Cormorant Garamond Italic typography. deep periwinkle navy canvas with warm yellow italic-serif type and one dusty-tea. Best for research findings, white paper or longform report, academic or university deck. AI-ready design system."
colors:
  primary: "#2a3870"
  secondary: "#343f80"
  tertiary: "#E8D85C"
  neutral: "#3a7878"
typography:
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cormorant Garamond
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 816
  author: "designmd.app"
  source: "https://designmd.app/library/vellum"
  tags: ["风格模板"]
---

## Overview

Vellum — Deep navy canvas with warm-yellow italic Cormorant serifs and a single dusty teal accent. A quiet, scholarly aesthetic. Cormorant Garamond Italic typography. deep periwinkle navy canvas with warm yellow italic-serif type and one dusty-tea. Best for research findings, white paper or longform report, academic or university deck. AI-ready design system. Vellum was the surface before paper — calfskin stretched and scraped until it became translucent, holding ink with a warmth that wood pulp never replicated. The name matters here because this system is explicitly about that pre-industrial relationship between text and surface, where typography wasn't consumed but inhabited.

Cormorant in italic carries the DNA of Garamond's Renaissance punchcutting, but with a contemporary optical refinement that lets it breathe at display sizes without losing its calligraphic memory. The italic specifically — not the roman — because italic was originally a separate typeface entirely, designed for continuous reading in compact Aldine pocket editions. Choosing italic as the display voice is a deliberate inversion: what was once the economical choice becomes the luxurious one.

Deep navy against warm yellow isn't arbitrary. It's the color relationship of gilt lettering on cloth-bound spines — the palette of a library at dusk, where gold tooling catches the last light against indigo boards. This system doesn't reference books; it references the physical object of the book as a designed artifact.

- Density: 2/10 — Airy
- Variance: 8/10 — Complex
- Motion: 2/10 — Minimal

- **Style:** Scholarly, Literary, Dark-Canvas, Italic-Serif
- **Keywords:** Cormorant italic, deep navy, warm yellow, dusty teal, scholarly, literary, quiet, intellectual
- **Era:** 2010s Editorial
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Bg** (#2a3870) — Primary surface or dominant color
- **Bg Alt** (#343f80) — Accent highlight, links and focus states
- **Fg** (#E8D85C) — Secondary accent
- **Accent** (#3a7878) — Accent color, emphasis elements


## Typography

- **Display / Hero:** Cormorant Garamond Italic — Weight 700, tight tracking, used for headline impact
- **Body:** DM Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** DM Sans — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Courier Prime — Used for code, metadata, and technical values

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

display font Cormorant Garamond Italic for hero headlines, subtle hover (opacity 0.8, 200ms), refined focus rings, dark canvas with glow/shadow accents, warm-yellow italic Cormorant on deep navy, dusty teal single accent, scholarly spacing, generous whitespace, clamp(4rem,8vw,8rem) section gaps

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 4px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 4px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Cormorant Garamond Italic display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Dark background contrast ≥ 7:1 for body text
- Do Serif typography hierarchy clear (display vs body)
- Do Whitespace generous — section gaps ≥ 5rem
- Do Mobile responsive layout (stack below 768px)


## Use Case

research findings, white paper or longform report, academic or university deck, advisory deliverable, literary or editorial pitch, founder reflection / vision deck, bilingual EN/CN deck

<!-- Source: https://designmd.app/library/vellum · designmd.app -->
