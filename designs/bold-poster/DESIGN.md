---
version: "alpha"
name: "Bold Poster"
description: "Bold Poster — Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent. Shrikhand typography. white and warm-cream paper with deep almost-black ink, lifted by a single satura. Best for brand manifesto, creative-led pitch, magazine / editorial. AI-ready design system."
colors:
  primary: "#FFFFFF"
  secondary: "#1C1410"
  tertiary: "#D8000F"
  neutral: "#F5F2EF"
typography:
  h1:
    fontFamily: Shrikhand
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Shrikhand
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
  order: 214
  author: "designmd.app"
  source: "https://designmd.app/library/bold-poster"
  tags: ["风格模板", "creative-led pitch"]
---

## Overview

Bold Poster — Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent. Shrikhand typography. white and warm-cream paper with deep almost-black ink, lifted by a single satura. Best for brand manifesto, creative-led pitch, magazine / editorial. AI-ready design system. The oversized poster tradition owes everything to the reckless confidence of 1960s Swiss Punk and the Italian manifesti that plastered cinema walls with type so large you could read it from a moving Vespa. Shrikhand — a typeface born from Gujarati calligraphic traditions — carries that same unapologetic weight. Its thick strokes and high contrast weren't designed for body copy; they were designed to stop traffic.

Fire-engine red as a background choice isn't decorative. It's confrontational. The combination references Constructivist propaganda posters, punk zine covers, and the raw energy of letterpress broadsides where ink pooled heavy in the counters. When you pair that red with display type scaled beyond reason, you're not designing a layout — you're engineering a physical reaction. The viewer doesn't read it. They feel it hit them.

This template exists in the lineage of designers who understood that restraint is a choice, not a default. Sometimes the brief demands volume.

- Density: 2/10 — Airy
- Variance: 5/10 — Moderate
- Motion: 7/10 — Kinetic

- **Style:** Editorial Poster, High-Contrast, Manifesto, Typographic
- **Keywords:** Magazine poster, Shrikhand, fire-engine red, editorial, loud, confident, high typographic contrast, manifesto
- **Era:** 2020s Design Studio
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bg** (#FFFFFF) — Primary surface or dominant color
- **Dark** (#1C1410) — Accent highlight, links and focus states
- **Red** (#D8000F) — Secondary accent
- **Light** (#F5F2EF) — Accent color, emphasis elements


## Typography

- **Display / Hero:** Shrikhand — Weight 700, tight tracking, used for headline impact
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

display font Shrikhand for hero headlines, bold hover color shift (150ms), high-contrast active states, massive Shrikhand display text, fire-engine red single accent, poster-scale type, generous whitespace, clamp(4rem,8vw,8rem) section gaps

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

- Do Shrikhand display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)


## Use Case

brand manifesto, creative-led pitch, magazine / editorial, founder vision deck, art / culture

<!-- Source: https://designmd.app/library/bold-poster · designmd.app -->
