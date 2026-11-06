---
version: "alpha"
name: "Vintage Analog / Retro Film"
description: "Design with vintage analog film aesthetic. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#F5E6C8"
  secondary: "#D4A574"
  tertiary: "#4A7B7C"
  neutral: "#E8B4B8"
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
  order: 824
  author: "designmd.app"
  source: "https://designmd.app/library/vintage-analog-retro-film"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design with vintage analog film aesthetic. Ideal for landing pages, saas. AI-ready template. There's a reason the lo-fi hip hop girl never stopped studying. She became shorthand for a feeling — warmth in a cold digital landscape. The analog revival in design didn't start with nostalgia; it started with distrust. When everything on screen became too clean, too vector-perfect, designers reached backward. Film grain. VHS tracking lines. The soft blur of a cassette dub copied three times over. These artifacts weren't flaws anymore — they were proof of human touch.

The 2010s YouTube lo-fi explosion made it mainstream, but the roots go deeper. Graphic designers in the early 2000s were already scanning old Polaroids, layering halftone dots over digital layouts, trying to make pixels feel less sterile. Then AI-generated imagery arrived and the need intensified. When any machine can produce a flawless render, imperfection becomes the new authenticity. A slightly blown-out highlight, a color shift toward amber — these say "a person was here."

Today the aesthetic lives everywhere: album covers, indie brand packaging, editorial photography sites. It's not about faking the past. It's about borrowing its texture to make the present feel less disposable.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Analog, Film-Grain, Warm, Nostalgic
- **Keywords:** Film grain, VHS, cassette tape, polaroid, analog warmth, faded colors, light leaks, vintage photography
- **Era:** 1970s-90s Analog Revival
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Faded Cream** (#F5E6C8) — Light surface, card backgrounds
- **Warm Sepia** (#D4A574) — Secondary surface or text color
- **Muted Teal** (#4A7B7C) — Secondary text, borders, muted elements
- **Soft Pink** (#E8B4B8) — Primary text color


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

Film grain overlay, VHS tracking effect, polaroid shake, fade-in transitions, light leak animations

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

- Do Film grain visible
- Do Colors faded/warm
- Do Light leaks present
- Do Nostalgic feel achieved
- Do Performance with filters
- Do Images look vintage


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/vintage-analog-retro-film · designmd.app -->
