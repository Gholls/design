---
version: "alpha"
name: "Editorial Tri-Tone"
description: "Editorial Tri-Tone — Three-color editorial system: dusty pink, mustard cream, and deep burgundy, set in Bricolage + Instrument Serif. Bricolage Grotesque typography. dusty pink, mustard cream, and deep burgundy used as full-bleed color blocks. Best for editorial / magazine pitch, fashion brand deck, lifestyle media. AI-ready design system."
colors:
  primary: "#F2B6C6"
  secondary: "#F2D86A"
  tertiary: "#7A1F35"
typography:
  h1:
    fontFamily: Bricolage Grotesque
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Bricolage Grotesque
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 350
  author: "designmd.app"
  source: "https://designmd.app/library/editorial-tri-tone"
  tags: ["风格模板", "mustard cream", "and deep burgundy"]
---

## Overview

Editorial Tri-Tone — Three-color editorial system: dusty pink, mustard cream, and deep burgundy, set in Bricolage + Instrument Serif. Bricolage Grotesque typography. dusty pink, mustard cream, and deep burgundy used as full-bleed color blocks. Best for editorial / magazine pitch, fashion brand deck, lifestyle media. AI-ready design system. The tri-tone palette isn't new — it's a deliberate rejection of the maximalist color explosions that dominated digital design through the 2010s. Its roots sit squarely in mid-century European fashion publishing, where art directors at magazines like Nova and Jardin des Modes understood that restraint creates desire. Three colors. That's it. The constraint forces hierarchy.

Dusty pink entered the design lexicon through 1970s Italian interior photography — think Gio Ponti's later work, those faded terracotta walls in Milan apartments shot on expired Kodachrome. Mustard cream arrived via post-war British typography, the yellowed stock of Penguin paperbacks and Festival of Britain ephemera. Together with a grounding neutral, these three tones create what I'd call 'warm editorial tension' — sophisticated enough for luxury, approachable enough for lifestyle.

The current revival owes everything to independent fashion magazines like Apartamento and Kinfolk's early issues, which proved you could build an entire visual identity on tonal restraint rather than chromatic noise.

- Density: 5/10 — Balanced
- Variance: 6/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Tri-Tone Editorial, Fashion, Full-Bleed, Moody
- **Keywords:** Tri-tone, dusty pink, mustard cream, burgundy, Bricolage Grotesque, fashion editorial, full-bleed blocks
- **Era:** 2010s Editorial
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Pink** (#F2B6C6) — Primary surface or dominant color
- **Cream Yellow** (#F2D86A) — Accent highlight, links and focus states
- **Burgundy** (#7A1F35) — Secondary accent


## Typography

- **Display / Hero:** Bricolage Grotesque — Weight 700, tight tracking, used for headline impact
- **Body:** sans-serif — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** sans-serif — 0.875rem, weight 500, slight letter-spacing
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

display font Bricolage Grotesque for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, alternating light/dark sections for rhythm, full-bleed color-block slides in pink/cream/burgundy tri-tone

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

- Do Bricolage Grotesque display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)


## Use Case

editorial / magazine pitch, fashion brand deck, lifestyle media, literary / cultural, art direction review

<!-- Source: https://designmd.app/library/editorial-tri-tone · designmd.app -->
