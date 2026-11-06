---
version: "alpha"
name: "Parallax Storytelling"
description: "Parallax storytelling page. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#1A1A1A"
  secondary: "#4A4A4A"
  tertiary: "#0066FF"
  neutral: "#FFFFFF"
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

gallery:
  order: 625
  author: "designmd.app"
  source: "https://designmd.app/library/parallax-storytelling"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Parallax storytelling page. Ideal for landing pages, saas. AI-ready template. Parallax has roots in side-scrolling video games — Super Mario Bros., Sonic — where layered backgrounds moved at different speeds to fake depth on flat screens. Simple trick, massive impact on spatial perception.

The web caught on late. Nike's "Better World" site in 2011 blew everyone's mind. Suddenly every agency wanted scroll-triggered layers, and by 2013 the technique was everywhere — and I mean everywhere. Portfolio sites, restaurant pages, dental clinics. The backlash was inevitable and deserved. Parallax became synonymous with bloated pages, janky scroll-jacking, and mobile nightmares. Designers with taste abandoned it.

But here's the thing: the idea was never bad. The execution was. Now we have the Scroll-driven Animations API — native, performant, compositor-thread animations tied directly to scroll position. No JavaScript scroll listeners. No layout thrashing. The browser handles interpolation. Parallax finally works the way we always wanted it to: buttery, lightweight, and respectful of the user's scroll intent. It earned its comeback.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Narrative, Scroll-Driven, Immersive, Layered
- **Keywords:** Scroll-driven, narrative, layered scrolling, immersive, progressive disclosure, cinematic, scroll-triggered
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- Palette derived from style keywords and era context


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

transform: translateY(scroll), position: fixed/sticky, perspective: 1px, scroll-triggered animations

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
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

- Do Layers parallax smoothly
- Do Story flows naturally
- Do Mobile alternative provided
- Do Performance optimized
- Do Skip option available
- Do Reduced motion fallback


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/parallax-storytelling · designmd.app -->
