---
version: "alpha"
name: "Risograph / Retro-Pop"
description: "Risograph retro-pop interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FDF5E6"
  secondary: "#2B2D42"
  tertiary: "#EF476F"
  neutral: "#FFD166"
  surface: "#06A77D"
  accent: "#118AB2"
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
  order: 679
  author: "designmd.app"
  source: "https://designmd.app/library/risograph-retro-pop"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Risograph retro-pop interface. Ideal for landing pages, saas. AI-ready template. The Risograph is a Japanese stencil duplicator — born in the 1980s as a cheap, fast alternative to offset printing. Think of it as a photocopier that uses soy-based inks, one color at a time, each pass through the drum laying a single layer. It was never meant to be beautiful. It was meant to be economical.

But here's the thing about constraints: they breed style. The limited color palette (you pick your drums — fluorescent pink, teal, gold, whatever's loaded), the slight misregistration between passes, the halftone grain that emerges at lower densities — all of these 'flaws' became the entire point. Indie publishers in the 2010s grabbed Risographs and turned zine production into an art form. Small studios in Brooklyn, Tokyo, Berlin started printing short runs that felt alive in a way laser printing never could.

Translating this to screen means embracing what digital usually eliminates: imprecision, texture, the visible mechanics of production. You're designing with the ghost of a physical process — halftone dots that shouldn't be smooth, colors that overlap into unexpected thirds, edges that don't quite line up. It's anti-perfection as a deliberate stance.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 1/10 — Static

- **Style:** Textured, Retro-Pop, Layered, Colorful
- **Keywords:** Halftone dots, limited ink layers, registration misalignment, grainy paper, bold flat shapes, retro print, zine aesthetic, screen-printed
- **Era:** 1950s-80s Print Revival
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Warm Paper** (#FDF5E6) — Primary surface or dominant color
- **Deep Navy** (#2B2D42) — Secondary surface or text color
- **Coral Pink** (#EF476F) — Primary text color
- **Mustard** (#FFD166) — Supporting palette color
- **Teal** (#06A77D) — Secondary accent
- **Ocean Blue** (#118AB2) — Secondary accent
- **Dark Teal** (#073B4C) — Deep contrast surface


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

No smooth gradients (use halftone), registration offset effect (2-3px misalignment), grain texture overlay, instant transitions, bold shape reveals

- Minimal motion design. Hover states use color transitions only (150ms).
- No entry animations. No page transitions. Instant, utilitarian feedback.
- Performance: No animation overhead. Static-first approach.


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

- Do Limited colors (2-3 inks)
- Do Halftone dots visible
- Do Registration offset subtle
- Do Paper grain texture
- Do Bold flat shapes
- Do Retro print feel


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/risograph-retro-pop · designmd.app -->
