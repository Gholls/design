---
version: "alpha"
name: "Z-Shape"
description: "Z-shape infographic with characters. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#333333"
  tertiary: "#5DADE2"
  neutral: "#E74C3C"
  surface: "#F5B041"
  accent: "#34495E"
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
  order: 864
  author: "designmd.app"
  source: "https://designmd.app/library/z-shape"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Z-shape infographic with characters. Ideal for landing pages, modern websites. AI-ready template. The Z-pattern isn't some trendy discovery — it's rooted in the Gutenberg diagram, a model of how Western readers scan pages that dates back to print layout theory. Eyes sweep top-left to top-right, then diagonal down to bottom-left, finishing bottom-right. Newspapers knew this. Magazine designers exploited it for decades before the web existed.

What changed is density tolerance. Somewhere around 2012, the startup landing page killed the paragraph. Teams realized users wouldn't read five sentences explaining a feature — but they'd absorb three icons with one-line captions in under four seconds. Icon-based storytelling became the default because it respects scanning behavior instead of fighting it. Flat vector illustrations with thick outlines emerged as the visual language of choice: friendly, scalable, brand-flexible.

The 'how it works in 3 steps' pattern is now so embedded in product marketing that its absence feels like a gap. It works because it maps perfectly onto the Z-shape: step one top-left, step two center, step three bottom-right. The eye does the sequencing for free.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Flat vector illustrations, thick outlines, icon-based storytelling, numbered list, central character anchors, zig-zag flow, alternating bands, approachable
- **Era:** Modern Infographic
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Dark Text** (#333333) — Dark surface, primary background
- **Sky Blue** (#5DADE2) — Accent highlight, links and focus states
- **Red** (#E74C3C) — Error states, destructive actions
- **Amber** (#F5B041) — Warning states, attention indicators
- **Dark Slate** (#34495E) — Deep contrast surface
- **Twitter Blue** (#1DA1F2) — Secondary accent
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

Uniform flat lighting, minimal drop shadows, character entrance animations, zig-zag scroll reveal, alternating band color transitions, icon pop-in effects

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

- Do Zig-zag flow clear
- Do Characters anchored
- Do Alternating bands
- Do Numbered steps
- Do Thick outlines
- Do Mobile stacks vertically


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/z-shape · designmd.app -->
