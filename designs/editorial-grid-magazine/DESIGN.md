---
version: "alpha"
name: "Editorial Grid / Magazine"
description: "Design an editorial magazine layout. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
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
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 343
  author: "designmd.app"
  source: "https://designmd.app/library/editorial-grid-magazine"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an editorial magazine layout. Ideal for landing pages, saas. AI-ready template. Print editorial design spent a century perfecting the art of guiding eyes across a page. Brodovitch at Harper's Bazaar, Neville Brody at The Face — they understood that white space is structure, not absence. Columns weren't containers; they were rhythm.

Then the web happened and we lost all of it. Floats gave us two columns if we were lucky. The editorial tradition — asymmetric grids, pull quotes bleeding into margins, type that breathes differently at different scales — was simply impossible to build. We faked it with absolute positioning and prayed nothing broke.

CSS Grid changed everything around 2017-2018, but it took publications like Bloomberg Businessweek's digital edition and the NYT's Snow Fall descendants to prove the model. They showed that a browser could hold the same tension between order and surprise that a printed spread delivers. Grid template areas, subgrid, container queries — suddenly the vocabulary matched the ambition. Magazine layout on the web stopped being a metaphor and became a real practice.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Editorial, Grid, Magazine, Typographic
- **Keywords:** Magazine layout, asymmetric grid, editorial typography, pull quotes, drop caps, column layout, print-inspired
- **Era:** 2020s Editorial Digital
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Black** (#000000) — Dark surface, primary background
- **White** (#FFFFFF) — Light surface, card backgrounds


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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Smooth scroll, reveal on scroll, parallax images, text animations, page-flip transitions

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

- Do Grid asymmetric
- Do Typography editorial
- Do Pull quotes styled
- Do Drop caps present
- Do Images large/impactful
- Do Mobile reflows well


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/editorial-grid-magazine · designmd.app -->
