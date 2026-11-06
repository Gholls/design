---
version: "alpha"
name: "Blueprint / Engineering"
description: "Blueprint engineering interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#1E5DA2"
  secondary: "#FFFFFF"
  tertiary: "#A8D5FF"
  neutral: "#5B9BD5"
  surface: "#2E4053"
  accent: "#E8E8E8"
typography:
  h1:
    fontFamily: monospace/technical
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: monospace/technical
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: monospace/technical
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 203
  author: "designmd.app"
  source: "https://designmd.app/library/blueprint-engineering"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Blueprint engineering interface. Ideal for landing pages, saas. AI-ready template. The blueprint is an accident of chemistry turned into an entire visual language. Cyanotype — invented by John Herschel in 1842 — was never meant to be beautiful. It was cheap reproduction: coat paper with iron salts, lay a translucent drawing on top, expose to sunlight, wash. White lines on Prussian blue. Architects and engineers used it for decades because it was fast and expendable. The originals stayed safe; the blueprints got marked up, folded, rained on.

What's interesting is how the constraints of the process created the aesthetic. No fills, no gradients — just line weight and annotation. Dimension markers, section cuts, leader lines pointing to callouts. Everything exists to communicate measurement and intent. The drawing isn't the building; it's the instruction set.

That's exactly why it works as a design style now. It signals process visibility — the idea that you're looking behind the curtain at how something gets made. There's an honesty to it. No decoration for its own sake. Every mark has a job. When brands adopt blueprint aesthetics, they're borrowing that credibility: we think precisely, we build deliberately, we show our work.

- Density: 7/10 — Compact
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Technical, Precise, Blueprint, Engineering
- **Keywords:** Technical blueprint, white lines on blue, dimension markers, architectural symbols, drafting grid, semi-circular timeline, engineering precision
- **Era:** Technical Engineering
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Blueprint Blue** (#1E5DA2) — Accent highlight, links and focus states
- **White Lines** (#FFFFFF) — Light surface, card backgrounds
- **Light Blue** (#A8D5FF) — Accent highlight, links and focus states
- **Steel Blue** (#5B9BD5) — Accent highlight, links and focus states
- **Dark Slate** (#2E4053) — Deep contrast surface
- **Light Grey** (#E8E8E8) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** monospace/technical — Weight 700, tight tracking, used for headline impact
- **Body:** monospace/technical — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** monospace/technical — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** monospace/technical — Used for code, metadata, and technical values

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

Flat uniform technical lighting, line drawing animations (stroke-dasharray), dimension marker reveals, grid fade-in, technical precision transitions

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

- Do Blueprint blue background
- Do White technical lines
- Do Grid overlay visible
- Do Dimension markers
- Do Engineering precision
- Do Technical typography


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/blueprint-engineering · designmd.app -->
