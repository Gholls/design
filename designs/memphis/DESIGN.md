---
version: "alpha"
name: "Memphis"
description: "Memphis-style landing page with vibrant bold colors, geometric shapes (triangles, circles, squiggles), postmodern 80s aesthetic. Ideal for branding retro, peças editoriais, embalagens funky, campanhas jovens. AI-ready template."
colors:
  primary: "#FF1493"
  secondary: "#0066FF"
  tertiary: "#FFD700"
  neutral: "#FF3333"
  surface: "#00E5A0"
  accent: "#FF7F50"
typography:
  h1:
    fontFamily: Poppins
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Poppins
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 545
  author: "designmd.app"
  source: "https://designmd.app/library/memphis"
  tags: ["风格模板", "branding retro", "peças editoriais", "embalagens funky"]
---

## Overview

Memphis-style landing page with vibrant bold colors, geometric shapes (triangles, circles, squiggles), postmodern 80s aesthetic. Ideal for branding retro, peças editoriais, embalagens funky, campanhas jovens. AI-ready template. Memphis exploded out of Milan in 1981 when Ettore Sottsass gathered a crew of designers who were collectively sick of the beige rationalism that dominated everything. They named the group after a Bob Dylan track playing during their first meeting — "Stuck Inside of Mobile with the Memphis Blues Again" — and proceeded to violate every rule modernism held sacred. Clashing colors, plastic laminates, terrazzo patterns, and shapes that served no functional purpose whatsoever. The establishment hated it. That was the point.

What Memphis understood, and what most design movements miss entirely, is that taste is political. By rejecting "good taste" as defined by the Bauhaus lineage, they exposed how much of modernist design was really about class signaling dressed up as universal truth. The squiggles and triangles weren't random — they were deliberate provocations against a design orthodoxy that had calcified into dogma.

The movement burned hot and brief. By 1988 Sottsass dissolved the group, but the DNA persists everywhere — from 90s Nickelodeon to contemporary brand identities that refuse to take themselves seriously. Every time a designer reaches for a zigzag or an arbitrary geometric accent, they're channeling Memphis whether they know it or not.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Vibrant, Geometric, Bold, Postmodern
- **Keywords:** Memphis, vibrant colors, geometric shapes, bold, postmodern, 80s, playful, squiggles, triangles, circles, patterns
- **Era:** 1980s Memphis Group
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Hot Pink** (#FF1493) — Primary text color
- **Electric Blue** (#0066FF) — Accent highlight, links and focus states
- **Bright Yellow** (#FFD700) — Warning states, attention indicators
- **Vivid Red** (#FF3333) — Error states, destructive actions
- **Mint Green** (#00E5A0) — Success states, positive indicators
- **Coral** (#FF7F50) — Extended palette, decorative use
- **Purple** (#9B59B6) — Accent color, emphasis elements
- **Turquoise** (#1ABC9C) — Extended palette, decorative use


## Typography

- **Display / Hero:** Poppins — Weight 700, tight tracking, used for headline impact
- **Body:** Poppins — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Poppins — 0.875rem, weight 500, slight letter-spacing
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

Bold geometric shapes as decorative elements (CSS triangles, circles), squiggly line borders via SVG, confetti-like scattered patterns, playful rotation on hover (5-15deg), pop-in animations, dotted and zigzag patterns as backgrounds

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
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

- Do Vibrant bold color palette (4+ colors)
- Do Geometric decorative shapes scattered
- Do Squiggly/zigzag pattern backgrounds
- Do Bold heavy typography
- Do Playful rotation on elements
- Do Anti-minimalist busy aesthetic
- Do Responsive with maintained energy


## Use Case

Retro branding, Editorial pieces, Funky packaging, Youth campaigns

<!-- Source: https://designmd.app/library/memphis · designmd.app -->
