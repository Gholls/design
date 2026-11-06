---
version: "alpha"
name: "Sakura Chroma"
description: "Sakura Chroma — Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes. Big Shoulders Display typography. warm cream paper canvas with dark warm-brown ink and a six-colour primary palett. Best for product launch or catalogue, indie hardware or analog studio brand, music label or release schedule. AI-ready design system."
colors:
  primary: "#F1E6CB"
  secondary: "#3A2516"
  tertiary: "#E5392A"
  neutral: "#E54489"
  surface: "#F09131"
  accent: "#F0BC2A"
typography:
  h1:
    fontFamily: Barlow Condensed
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Barlow Condensed
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
  order: 688
  author: "designmd.app"
  source: "https://designmd.app/library/sakura-chroma"
  tags: ["风格模板", "condensed bold type"]
---

## Overview

Sakura Chroma — Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes. Big Shoulders Display typography. warm cream paper canvas with dark warm-brown ink and a six-colour primary palett. Best for product launch or catalogue, indie hardware or analog studio brand, music label or release schedule. AI-ready design system. The Japanese cassette tape wasn't just a medium — it was a canvas. Throughout the 1980s and early 90s, independent labels in Tokyo and Osaka turned tape packaging into miniature graphic design exhibitions. Rainbow-spectrum gradients, holographic foils, and condensed sans-serifs crammed onto J-cards created a visual language that screamed maximalism before the word entered design discourse. These weren't accidents of taste; they were deliberate acts of rebellion against the sterile minimalism already creeping into corporate Japan.

Barlow Condensed lives in that same tension — industrial bones dressed in pop clothing. It's a typeface that wants to be loud without shouting, dense without suffocating. Pair it with chromatic ribbon motifs and you get something that feels like finding a pristine City Pop cassette in a Shimokitazawa record shop. The nostalgia is real, but the energy is forward-facing.

Sakura Chroma takes this lineage seriously. It doesn't cosplay as retro — it understands why those designers made those choices and translates the intent, not just the aesthetic, into a system that works on screens.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Vintage Japanese, Tactile, Product-Catalogue, Kawaii-Tech
- **Keywords:** Japanese cassette, rainbow ribbons, Barlow Condensed, vintage, kawaii-tech, tactile, product-catalogue
- **Era:** 1980s Retro
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Paper** (#F1E6CB) — Primary surface or dominant color
- **Ink** (#3A2516) — Accent highlight, links and focus states
- **Red** (#E5392A) — Secondary accent
- **Pink** (#E54489) — Accent color, emphasis elements
- **Orange** (#F09131) — Extended palette, decorative use
- **Yellow** (#F0BC2A) — Background alternate
- **Green** (#3D9F47) — Muted text / borders
- **Blue** (#3F8BC4) — Extended palette


## Typography

- **Display / Hero:** Big Shoulders Display — Weight 700, tight tracking, used for headline impact
- **Body:** Albert Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Albert Sans — 0.875rem, weight 500, slight letter-spacing
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

display font Big Shoulders Display for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, diagonal rainbow ribbon stripes, condensed display lockups, JIS checkbox specs

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

- Do Big Shoulders Display display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)


## Use Case

product launch or catalogue, indie hardware or analog studio brand, music label or release schedule, creative studio annual report, magazine or zine pitch, vintage-flavored brand campaign

<!-- Source: https://designmd.app/library/sakura-chroma · designmd.app -->
