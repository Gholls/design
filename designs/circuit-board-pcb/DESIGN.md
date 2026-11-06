---
version: "alpha"
name: "Circuit Board / PCB"
description: "Circuit board PCB interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#0F3B2C"
  secondary: "#D98C53"
  tertiary: "#EAD0AC"
  neutral: "#2D5C4E"
  surface: "#8B7355"
  accent: "#C17817"
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
  order: 245
  author: "designmd.app"
  source: "https://designmd.app/library/circuit-board-pcb"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Circuit board PCB interface. Ideal for landing pages, saas. AI-ready template. Circuit boards were never meant to be beautiful. They were engineered — routed by necessity, constrained by physics. Copper traces follow the shortest viable path between components. Solder pads exist at precise intervals dictated by pin spacing. Every line serves a function. And yet, somewhere in the late '80s, designers started lifting these patterns out of their enclosures and plastering them across posters, album covers, and tech branding. The PCB became shorthand for 'this is the future.'

It makes sense if you think about it. A circuit board is an engineering drawing that actually works. It's a blueprint that conducts electricity. There's something deeply satisfying about that overlap — form following function so literally that the function becomes the form. The green soldermask, the gold traces, the repetitive geometry of vias marching across a substrate. It reads as complexity, as intelligence, as something built with intention.

The aesthetic peaked in the '90s cyberpunk era but never really left. It just got more refined. Today's PCB-inspired patterns strip away the literal green-and-gold and keep the topology — the branching paths, the nodes, the sense of interconnection. Less motherboard, more abstract network.

- Density: 7/10 — Compact
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Technical, Electronic, Structured, Precise
- **Keywords:** Printed circuit board, copper traces, solder pads, IC chip outlines, electronic schematic, precision-engineered, technical, network-based
- **Era:** Technical Electronic
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **PCB Green** (#0F3B2C) — Primary surface or dominant color
- **Copper Trace** (#D98C53) — Metallic accent, decorative detail
- **Cream Label** (#EAD0AC) — Light surface, card backgrounds
- **Dark Green** (#2D5C4E) — Dark surface, primary background
- **Warm Brown** (#8B7355) — Extended palette, decorative use
- **Gold Pin** (#C17817) — Premium accent, decorative highlights


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

Flat technical illustration, trace drawing animations (stroke-dasharray), signal pulse along traces, component highlight on hover, data flow visualization

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

- Do PCB green background
- Do Copper traces visible
- Do Solder pad nodes
- Do IC chip outlines
- Do Network layout
- Do Technical precision


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/circuit-board-pcb · designmd.app -->
