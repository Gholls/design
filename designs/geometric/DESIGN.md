---
version: "alpha"
name: "Geometric"
description: "Geometric patterns infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#2B3A42"
  tertiary: "#2E3B8F"
  neutral: "#34495E"
  surface: "#BDC3C7"
  accent: "#95A5A6"
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
  order: 426
  author: "designmd.app"
  source: "https://designmd.app/library/geometric"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Geometric patterns infographic. Ideal for landing pages, modern websites. AI-ready template. Geometry has always been the skeleton of clear thinking. Long before software existed, cartographers and engineers used grids, triangles, and hexagonal tessellations to impose legibility on chaos. The idea is simple: mathematical relationships don't lie. A circle divided into proportional arcs communicates ratio faster than any paragraph ever could.

The Bauhaus understood this instinctively. Kandinsky's point-line-plane framework wasn't just art theory — it was information architecture avant la lettre. When Swiss designers later codified the grid system in the 1950s, they were essentially building the first design systems for data. Josef Müller-Brockmann's concert posters proved that geometric constraint doesn't flatten expression; it amplifies signal.

Today geometric infographics carry that same DNA. Tessellation patterns tile complex datasets into digestible units. Symmetrical layouts create visual anchors so the eye knows where to rest and where to read. The math does the heavy lifting — the designer's job is choosing which geometry serves the story.

- Density: 7/10 — Compact
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Geometric shapes, tessellation patterns, symmetrical layouts, mathematical diagrams, grid-based, precise lines, structured, modern, technical
- **Era:** Modern Technical
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Dark Teal** (#2B3A42) — Dark surface, primary background
- **Navy** (#2E3B8F) — Supporting palette color
- **Dark Slate** (#34495E) — Dark surface, primary background
- **Silver Grey** (#BDC3C7) — Secondary text, borders, muted elements
- **Cool Grey** (#95A5A6) — Secondary text, borders, muted elements
- **Medium Grey** (#7F8C8D) — Secondary text, borders, muted elements
- **Light Grey** (#ECF0F1) — Secondary text, borders, muted elements


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

Flat uniform technical lighting, geometric shape rotation animations, tessellation pattern reveals, symmetrical transitions, mathematical precision movements

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
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

- Do Geometric shapes dominant
- Do Tessellation patterns
- Do Symmetrical layout
- Do Grid-based precision
- Do Clean vector lines
- Do Mathematical balance


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/geometric · designmd.app -->
