---
version: "alpha"
name: "Mid-Century Modern"
description: "Mid-century modern landing page with clean lines, organic curves and muted vibrant colors from the 1950s. Ideal for branding de móveis, layouts de pôsteres retro, decoração de interiores, produtos lifestyle. AI-ready template."
colors:
  primary: "#D4A017"
  secondary: "#008080"
  tertiary: "#CC5500"
  neutral: "#FFF8DC"
  surface: "#6B8E23"
  accent: "#D4A0A0"
typography:
  h1:
    fontFamily: Josefin Sans
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Josefin Sans
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 558
  author: "designmd.app"
  source: "https://designmd.app/library/mid-century-modern"
  tags: ["风格模板", "branding de móveis", "produtos lifestyle"]
---

## Overview

Mid-century modern landing page with clean lines, organic curves and muted vibrant colors from the 1950s. Ideal for branding de móveis, layouts de pôsteres retro, decoração de interiores, produtos lifestyle. AI-ready template. Mid-Century Modern emerged between the mid-1940s and late 1960s as a direct rejection of prewar ornamentation. Designers like Charles and Ray Eames, Eero Saarinen, and Arne Jacobsen weren't decorating — they were solving problems. New materials (molded plywood, fiberglass, aluminum) enabled forms that previous generations couldn't manufacture. The movement democratized good design; the Eames lounge chair was aspirational, but their molded plywood chairs were meant for everyone.

What makes MCM endure isn't nostalgia — it's the logic. Every curve exists because the material wanted to go there. Every leg is tapered because it's structurally honest. The style spread from furniture to architecture to graphic design because its principles are universal: respect materials, eliminate the unnecessary, let function generate form.

The postwar optimism baked into MCM gives it warmth that pure modernism lacks. It's modernism that actually wants you to sit down and stay awhile.

- Density: 3/10 — Airy
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Clean Lines, Organic Curves, Muted Vibrant, Space Age
- **Keywords:** Mid-century modern, clean lines, sleek silhouettes, organic curves, Space Age, 1950s, muted vibrant, retro, atomic, Eames
- **Era:** 1940s-1960s Mid-Century Design
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Mustard Yellow** (#D4A017) — Warning states, attention indicators
- **Teal** (#008080) — Accent highlight, links and focus states
- **Burnt Orange** (#CC5500) — Warm accent, call-to-action secondary
- **Cream** (#FFF8DC) — Light surface, card backgrounds
- **Olive Green** (#6B8E23) — Success states, positive indicators
- **Dusty Pink** (#D4A0A0) — Primary text color
- **Charcoal** (#36454F) — Deep contrast surface
- **Warm Wood** (#8B6914) — Extended palette, decorative use


## Typography

- **Display / Hero:** Josefin Sans — Weight 700, tight tracking, used for headline impact
- **Body:** Josefin Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Josefin Sans — 0.875rem, weight 500, slight letter-spacing
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

Atomic-era starburst SVG decorations, organic boomerang/kidney shapes via clip-path, clean thin lines as dividers, muted color blocks, subtle retro texture overlays, smooth slide-in animations (400ms), tapered leg-inspired border details

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

- Do Muted vibrant color palette
- Do Atomic starburst decorations
- Do Organic boomerang/kidney shapes
- Do Clean thin line dividers
- Do Geometric sans-serif typography
- Do Space Age retro atmosphere
- Do Muted color blocks
- Do Responsive with maintained retro elegance


## Use Case

Branding de móveis, Layouts de pôsteres retro, Interior decoration, Products lifestyle

<!-- Source: https://designmd.app/library/mid-century-modern · designmd.app -->
