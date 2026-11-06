---
version: "alpha"
name: "Acanthus"
description: "Landing page inspired by acanthus leaf patterns from Greek and Roman architecture. Ideal for detalhes arquitetônicos, tipografia sofisticada, layouts de impressão elegantes, museums. AI-ready template."
colors:
  primary: "#8C8C7A"
  secondary: "#A08C3A"
  tertiary: "#F2E8D0"
  neutral: "#2D3A2D"
  surface: "#C67A4B"
  accent: "#8B7355"
typography:
  h1:
    fontFamily: Cinzel
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cinzel
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 2.5rem
  md: 5.0rem
  lg: 10.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 119
  author: "designmd.app"
  source: "https://designmd.app/library/acanthus"
  tags: ["风格模板", "museums"]
---

## Overview

Landing page inspired by acanthus leaf patterns from Greek and Roman architecture. Ideal for detalhes arquitetônicos, tipografia sofisticada, layouts de impressão elegantes, museums. AI-ready template. The acanthus leaf is arguably the most consequential decorative motif in Western design history. It first appeared on the Corinthian capital around 450 BCE — legend credits the sculptor Callimachus, who supposedly spotted acanthus leaves growing around a basket on a young girl's grave. Whether apocryphal or not, the story captures something true: this ornament was born from observing nature under emotional circumstances, not from pure geometric abstraction.

What makes acanthus remarkable is its survivability across millennia of stylistic upheaval. Roman architects scaled it up for imperial propaganda. Byzantine craftsmen flattened it into mosaic borders. Renaissance designers rediscovered it through Vitruvius and made it central to the vocabulary of humanist architecture. The Baroque stretched and curled it into near-unrecognizable exuberance. Even Art Nouveau — ostensibly a rejection of classicism — owes its whiplash curves to the same organic logic that drives acanthus scrollwork.

The motif endures because it solves a fundamental design problem: how to transition between structural geometry and organic beauty. A column is rigid; an acanthus capital softens that rigidity without undermining it. That tension between discipline and flourish is why it still works.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Classical, Decorative, Architectural, Leaf-Pattern
- **Keywords:** Acanthus, leaf patterns, Greek columns, Roman capitals, decorative borders, typographic flourishes, classical architecture, ornamental, elegant
- **Era:** Ancient Greece & Rome
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Stone Grey** (#8C8C7A) — Secondary text, borders, muted elements
- **Olive Gold** (#A08C3A) — Premium accent, decorative highlights
- **Parchment** (#F2E8D0) — Supporting palette color
- **Deep Forest** (#2D3A2D) — Supporting palette color
- **Terracotta** (#C67A4B) — Extended palette, decorative use
- **Aged Bronze** (#8B7355) — Metallic accent, decorative detail
- **Sage Green** (#7A8B6A) — Success states, positive indicators
- **Warm Cream** (#F5EDD6) — Secondary surface


## Typography

- **Display / Hero:** Cinzel — Weight 700, tight tracking, used for headline impact
- **Body:** Cinzel — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cinzel — 0.875rem, weight 500, slight letter-spacing
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

SVG acanthus leaf border ornaments, classical column-inspired section dividers, subtle emboss effect on headings, warm parchment texture backgrounds, gentle parallax on decorative elements, smooth transitions (350ms)

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Acanthus leaf SVG border ornaments
- Do Classical column section dividers
- Do Parchment/stone texture backgrounds
- Do Serif typography with flourishes
- Do Olive gold accent color consistent
- Do Responsive with simplified ornaments on mobile


## Use Case

Architectural details, Sophisticated typography, Elegant print layouts, Museums

<!-- Source: https://designmd.app/library/acanthus · designmd.app -->
