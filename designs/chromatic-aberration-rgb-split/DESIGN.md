---
version: "alpha"
name: "Chromatic Aberration / RGB Split"
description: "Design with chromatic aberration RGB split effect. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FF0000"
  secondary: "#00FF00"
  tertiary: "#0000FF"
  neutral: "#000000"
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
  order: 242
  author: "designmd.app"
  source: "https://designmd.app/library/chromatic-aberration-rgb-split"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design with chromatic aberration RGB split effect. Ideal for landing pages, saas. AI-ready template. Chromatic aberration was never supposed to be beautiful. It's a lens failure — light refracting at slightly different wavelengths, producing those telltale red-cyan fringes at the edges of an image. Photographers spent decades engineering it out. Then somewhere around 2012, glitch artists started engineering it back in.

The glitch art movement treated digital errors as raw material. Datamoshing, pixel sorting, signal corruption — all fair game. RGB channel splitting fit right in: take an image, offset the red and blue channels by a few pixels, and suddenly you've got something that feels unstable. Dangerous. Alive. It wasn't decoration. It was a statement about the fragility of digital media.

By the late 2010s, the aesthetic had been fully absorbed by mainstream design. Gaming brands, music platforms, tech startups — everyone wanted that split-channel energy. The effect became shorthand for 'we're technical, we're edgy, we don't play it safe.' Sometimes that's earned. Sometimes it's a crutch. The line between intentional disruption and lazy signaling is thinner than a one-pixel offset.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Glitchy, RGB-Split, Retro-Tech, Dynamic
- **Keywords:** RGB split, color fringing, glitch, retro tech, VHS, analog error, distortion, lens effect
- **Era:** 2020s Retro-Tech
- **Light/Dark:** ✓ Full / ✓ Dark preferred

## Colors

- **Red** (#FF0000) — Error states, destructive actions
- **Green** (#00FF00) — Secondary surface or text color
- **Blue** (#0000FF) — Accent highlight, links and focus states
- **Black** (#000000) — Dark surface, primary background


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

RGB offset animation, glitch timing, scan line movement, noise flicker, distortion on hover

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

- Do RGB split visible
- Do Glitch effect controlled
- Do Scan lines subtle
- Do Performance ok
- Do Readability maintained
- Do Reduced motion option


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/chromatic-aberration-rgb-split · designmd.app -->
