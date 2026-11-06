---
version: "alpha"
name: "Scrapbook / Collage"
description: "Scrapbook/collage landing page with analog handmade tactile aesthetics. Ideal for diários pessoais, convites de casamento, vision boards, publicações acolhedoras em redes sociais. AI-ready template."
colors:
  primary: "#C4A882"
  secondary: "#FFF8F0"
  tertiary: "#F5D5D5"
  neutral: "#4A6A8A"
  surface: "#E8D5A0"
  accent: "#C0392B"
typography:
  h1:
    fontFamily: Kalam
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Kalam
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
  order: 700
  author: "designmd.app"
  source: "https://designmd.app/library/scrapbook-collage"
  tags: ["风格模板", "diários pessoais", "vision boards"]
---

## Overview

Scrapbook/collage landing page with analog handmade tactile aesthetics. Ideal for diários pessoais, convites de casamento, vision boards, publicações acolhedoras em redes sociais. AI-ready template. The scrapbook is one of the oldest forms of personal visual storytelling. Long before Instagram grids or Pinterest boards, people were cutting, tearing, and taping fragments of their lives onto pages — ticket stubs next to polaroids next to handwritten notes. The practice exploded in Victorian England as a bourgeois hobby, but its real power has always been democratic: anyone with scissors and glue could compose a narrative.

Digitally, the collage aesthetic resurfaces every time culture gets tired of clean minimalism. It showed up in zine culture, in early Tumblr, in Y2K revival graphics, and now in apps that want to signal authenticity over polish. The visual language — overlapping layers, visible tape, rotated photos, sticker accents — communicates that something was made by a human hand, even when it wasn't.

What makes scrapbook UI interesting is the tension between chaos and composition. The best implementations look effortless but are carefully art-directed. Random rotation angles that are actually constrained to a range. Overlaps that follow a z-index hierarchy. Tape strips that anchor without obscuring. It's controlled messiness — and that's genuinely hard to pull off.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Analog, Tactile, Layered, Handmade
- **Keywords:** Scrapbook, collage, photos, text cutouts, decorative elements, analog, tactile, handmade, layered, vision board, journal, cozy
- **Era:** Analog Craft Culture
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Kraft Paper** (#C4A882) — Primary surface or dominant color
- **Cream White** (#FFF8F0) — Light surface, card backgrounds
- **Washi Pink** (#F5D5D5) — Primary text color
- **Denim Blue** (#4A6A8A) — Accent highlight, links and focus states
- **Tape Yellow** (#E8D5A0) — Warning states, attention indicators
- **Stamp Red** (#C0392B) — Error states, destructive actions
- **Marker Green** (#4CAF50) — Success states, positive indicators
- **Pencil Grey** (#6B6B6B) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Kalam — Weight 700, tight tracking, used for headline impact
- **Accent:** Special Elite — Used for decorative or emphasis text
- **Body:** Kalam — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Kalam — 0.875rem, weight 500, slight letter-spacing
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

Layered photo-style elements with slight rotation (-3deg to 5deg), washi tape SVG border decorations, paper clip/pin SVG accents, torn paper edges via clip-path, polaroid-style photo frames, handwritten annotation overlays, cork board texture backgrounds, sticker-like decorative elements

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Layered elements with rotation
- Do Washi tape SVG borders
- Do Paper clip/pin accents
- Do Torn paper edge effects
- Do Polaroid photo frames
- Do Handwritten + typewriter typography
- Do Cork board texture background
- Do Cozy handmade atmosphere
- Do Responsive with maintained craft feel


## Use Case

Personal diaries, Wedding invitations, Vision boards, Cozy social media posts

<!-- Source: https://designmd.app/library/scrapbook-collage · designmd.app -->
