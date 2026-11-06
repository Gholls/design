---
version: "alpha"
name: "Biennale Yellow"
description: "Biennale Yellow — Solar yellow on warm parchment with deep indigo serif and atmospheric sun-glow gradients. Instrument Serif typography. warm parchment ground with a signature solar-yellow accent, deep indigo navy ink. Best for exhibition or biennale, arts institution programme, design or typography conference. AI-ready design system."
colors:
  primary: "#E9E5DB"
  secondary: "#1B2566"
  tertiary: "#F1EE2E"
  neutral: "#E26B4A"
  surface: "#F0DA7C"
typography:
  h1:
    fontFamily: Instrument Serif
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Instrument Serif
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 197
  author: "designmd.app"
  source: "https://designmd.app/library/biennale-yellow"
  tags: ["风格模板"]
---

## Overview

Biennale Yellow — Solar yellow on warm parchment with deep indigo serif and atmospheric sun-glow gradients. Instrument Serif typography. warm parchment ground with a signature solar-yellow accent, deep indigo navy ink. Best for exhibition or biennale, arts institution programme, design or typography conference. AI-ready design system. The Dutch editorial tradition never played it safe. From Werkman's druksel experiments in the 1930s to the Werkplaats Typografie graduates reshaping contemporary publishing, the Netherlands produced designers who treated the page as contested territory. Yellow — specifically the aggressive, unapologetic solar yellow — entered this lineage through exhibition catalogues and biennale identity systems where visibility wasn't optional, it was ideological.

Biennale Yellow sits at the intersection of two impulses: the Dutch commitment to typographic structure and the art world's need to signal that something unprecedented is happening. When Irma Boom used saturated color fields as navigational architecture, or when Experimental Jetset stripped the Stedelijk's identity to pure chromatic force, they proved that yellow wasn't decorative — it was structural. It carried information.

This palette treats yellow as the Dutch editorial school always intended: not as accent, but as ground. The typography doesn't compete with it — it inhabits it. Experimental type choices reference the biennale tradition of commissioning custom letterforms that exist only within the context of a single cultural moment, then disappear.

- Density: 5/10 — Balanced
- Variance: 8/10 — Complex
- Motion: 4/10 — Subtle

- **Style:** Editorial, Atmospheric, Warm, Cultural-Institution
- **Keywords:** Dutch editorial, solar yellow, biennale, warm parchment, serif, cultural institution, atmospheric, poster-like
- **Era:** 2010s Editorial
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Paper** (#E9E5DB) — Primary surface or dominant color
- **Ink** (#1B2566) — Accent highlight, links and focus states
- **Sun** (#F1EE2E) — Secondary accent
- **Ember** (#E26B4A) — Accent color, emphasis elements
- **Haze** (#F0DA7C) — Extended palette, decorative use


## Typography

- **Display / Hero:** Instrument Serif — Weight 700, tight tracking, used for headline impact
- **Body:** Archivo — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Archivo — 0.875rem, weight 500, slight letter-spacing
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

display font Instrument Serif for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, sun-glow radial gradients at corners, atmospheric depth

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 4px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 4px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Instrument Serif display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Grid overlay or texture applied
- Do Whitespace generous — section gaps ≥ 5rem
- Do Mobile responsive layout (stack below 768px)


## Use Case

exhibition or biennale, arts institution programme, design or typography conference, literary or curatorial publication, studio annual report, museum season announcement

<!-- Source: https://designmd.app/library/biennale-yellow · designmd.app -->
