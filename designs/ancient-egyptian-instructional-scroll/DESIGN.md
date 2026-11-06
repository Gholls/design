---
version: "alpha"
name: "Ancient Egyptian Instructional Scroll"
description: "Ancient egypt landing page, papyrus scroll background, hieroglyphics design, gold and lapis lazuli, flat profile art, historical aesthetic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#DCCB96"
  secondary: "#2B2118"
  tertiary: "#009DA0"
  neutral: "#26619C"
  surface: "#FFD700"
  accent: "#B31B1B"
typography:
  h1:
    fontFamily: Cinzel Decorative
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Cinzel Decorative
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Cinzel Decorative
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 138
  author: "designmd.app"
  source: "https://designmd.app/library/ancient-egyptian-instructional-scroll"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Ancient egypt landing page, papyrus scroll background, hieroglyphics design, gold and lapis lazuli, flat profile art, historical aesthetic. Ideal for landing pages, modern websites. AI-ready template. The Egyptians were doing information design four thousand years before we gave it a name. Hieroglyphs weren't just writing — they were pictographic systems that merged illustration with instruction, image with meaning. Every temple wall was an infographic. Every burial chamber told a sequential story. The scroll format itself was the original long-form content experience: unrolling knowledge progressively, controlling pacing through physical revelation.

Papyrus aesthetics carry an immediate educational weight. That warm, fibrous texture signals "this knowledge has survived centuries" in a way no clean white background ever could. There's a reason museums still use parchment tones in their exhibit design — it triggers a cognitive association with preserved wisdom, with something worth keeping.

The instructional scroll as a UX pattern is genuinely underexplored. Ancient scribes understood progressive disclosure intuitively: content revealed as you unrolled, illustrations placed exactly where comprehension needed support, hieratic annotations guiding the reader's eye. It's vertical storytelling with built-in rhythm. We reinvented this with infinite scroll and called it innovation.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Authoritative, Mythological, Timeless
- **Keywords:** egyptian, scroll, papyrus, hieroglyphcs, gold, stone, pyramid, ancient
- **Era:** Ancient Egypt
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#DCCB96) — Primary background surface
- **Text** (#2B2118) — Primary text color
- **Accent** (#009DA0) — Primary accent, CTAs and interactive elements
- **Lapis Lazuli** (#26619C) — Secondary accent
- **Gold** (#FFD700) — Premium accent, decorative highlights
- **Carnelian** (#B31B1B) — Extended palette, decorative use


## Typography

- **Display / Hero:** Cinzel Decorative — Weight 700, tight tracking, used for headline impact
- **Body:** Cinzel Decorative — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cinzel Decorative — 0.875rem, weight 500, slight letter-spacing
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

Flat profile figures, hieroglyphic borders, architectural diagrams, aged papyrus grain, stone-carved aesthetic.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
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

- Do Papyrus texture background
- Do Hieroglyphic borders/patterns
- Do Gold/Blue/Red accent palette
- Do Flat 'wall painting' style graphics
- Do Columnar layout


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/ancient-egyptian-instructional-scroll · designmd.app -->
