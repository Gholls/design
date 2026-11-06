---
version: "alpha"
name: "Art Deco / Golden Age"
description: "Design an Art Deco / Golden Age interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#050507"
  secondary: "#D4AF37"
  tertiary: "#F2E6CF"
  neutral: "#0A0E27"
  surface: "#8C7348"
  accent: "#2B3A42"
typography:
  h1:
    fontFamily: serif
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: serif
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: serif
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 153
  author: "designmd.app"
  source: "https://designmd.app/library/art-deco-golden-age"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an Art Deco / Golden Age interface. Ideal for landing pages, saas. AI-ready template. Art Deco didn't ask permission. It exploded out of 1920s Paris — the 1925 Exposition Internationale des Arts Décoratifs — as a full rejection of the organic curves Art Nouveau had been peddling. Sharp angles. Sunburst motifs. Chevrons stacked like declarations of intent. It was modernism dressed in a tuxedo.

The movement crossed the Atlantic and went vertical. The Chrysler Building's eagle gargoyles and tiered crown became its cathedral. Hollywood adopted the vocabulary wholesale — think Gatsby's parties rendered in chrome and champagne gold. Every surface demanded ornamentation, but disciplined ornamentation. Symmetry was non-negotiable.

In digital, Art Deco translates remarkably well because it was always about precision. The geometric repetition maps cleanly to grid systems. The metallic palettes — gold leaf, brass, oxidized copper — feel native to dark-mode luxury interfaces. When a hotel brand or fashion house needs to signal heritage without looking dusty, this is the visual language that delivers. It's opulence with structure. Excess with rules.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 8/10 — Cinematic

- **Style:** Ornate, Geometric, Luxurious, Golden
- **Keywords:** Elegant, sophisticated, luxurious, timeless, geometric patterns, sunburst motifs, gold accents, symmetrical, ornamental, gatsby
- **Era:** 1920s Art Deco
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Deep Black** (#050507) — Dark surface, primary background
- **Gold** (#D4AF37) — Premium accent, decorative highlights
- **Cream** (#F2E6CF) — Light surface, card backgrounds
- **Dark Navy** (#0A0E27) — Dark surface, primary background
- **bronze accents** (#8C7348) — Primary accent, CTAs and interactive elements
- **dark teal** (#2B3A42) — Deep contrast surface
- **muted silver** (#4A4A4A) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** serif — Weight 700, tight tracking, used for headline impact
- **Body:** serif — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** serif — 0.875rem, weight 500, slight letter-spacing
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

Dramatic spotlight effects, golden shimmer animations, geometric pattern reveals, elegant hover transitions (300ms), parallax on ornamental frames

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

- Do Geometric patterns present
- Do Gold accents consistent
- Do Symmetrical layout
- Do Ornamental frames
- Do Serif typography
- Do Dark+gold contrast verified


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/art-deco-golden-age · designmd.app -->
