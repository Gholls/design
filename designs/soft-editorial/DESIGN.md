---
version: "alpha"
name: "Soft Editorial"
description: "Soft Editorial — Cormorant Garamond serif on warm paper with sage, blush, and lemon accents. Cormorant Garamond typography. warm paper canvas with deep ink type, accented by soft pink, lemon, blush, and s. Best for editorial feature, longform brand story, gallery or museum. AI-ready design system."
colors:
  primary: "#F2EEDF"
  secondary: "#2A241B"
  tertiary: "#E1A4C2"
  neutral: "#D6DD63"
  surface: "#E8C9B6"
  accent: "#B7C7A8"
typography:
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cormorant Garamond
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 718
  author: "designmd.app"
  source: "https://designmd.app/library/soft-editorial"
  tags: ["风格模板", "blush", "lemon"]
---

## Overview

Soft Editorial — Cormorant Garamond serif on warm paper with sage, blush, and lemon accents. Cormorant Garamond typography. warm paper canvas with deep ink type, accented by soft pink, lemon, blush, and s. Best for editorial feature, longform brand story, gallery or museum. AI-ready design system. Cormorant Garamond belongs to a lineage that stretches back to Claude Garamond's sixteenth-century punches — type cut for the page, not the screen. What makes Cormorant interesting is that it was drawn specifically for display sizes, with hairlines that would snap on a laser printer but sing on high-resolution screens. It carries the DNA of old-style French Renaissance type without pretending to be a faithful revival.

The soft editorial aesthetic pairs this typeface with palettes borrowed from still-life painting: warm paper tones that recall unbleached cotton stock, sage greens pulled from dried eucalyptus, blush pinks that sit between skin and petal, and lemon yellows muted enough to read as sunlight rather than highlighter. This is the visual language of the slow living movement — editorial that breathes, that leaves margins generous and lets the serif do the talking.

Historically, this territory was owned by print magazines like Kinfolk and Cereal, publications that proved whitespace sells when paired with confident typography. The digital translation demands restraint: fewer weights, larger optical sizes, and color used as punctuation rather than decoration.

- Density: 2/10 — Airy
- Variance: 8/10 — Complex
- Motion: 2/10 — Minimal

- **Style:** Literary Elegant, Warm-Classical, Quiet, Editorial
- **Keywords:** Cormorant Garamond, warm paper, sage blush lemon, literary, elegant, quiet, Sunday supplement
- **Era:** 2010s Editorial
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Paper** (#F2EEDF) — Primary surface or dominant color
- **Ink** (#2A241B) — Accent highlight, links and focus states
- **Pink** (#E1A4C2) — Secondary accent
- **Lemon** (#D6DD63) — Accent color, emphasis elements
- **Blush** (#E8C9B6) — Extended palette, decorative use
- **Sage** (#B7C7A8) — Background alternate


## Typography

- **Display / Hero:** Cormorant Garamond — Weight 700, tight tracking, used for headline impact
- **Body:** Work Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Work Sans — 0.875rem, weight 500, slight letter-spacing
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

display font Cormorant Garamond for hero headlines, subtle hover (opacity 0.8, 200ms), refined focus rings, Cormorant Garamond serifs on warm paper, sage/blush/lemon block accents, generous whitespace, clamp(4rem,8vw,8rem) section gaps

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

- Do Cormorant Garamond display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Serif typography hierarchy clear (display vs body)
- Do Whitespace generous — section gaps ≥ 5rem
- Do Mobile responsive layout (stack below 768px)


## Use Case

editorial feature, longform brand story, gallery or museum, literary pitch, advisory deliverable, wedding / lifestyle media

<!-- Source: https://designmd.app/library/soft-editorial · designmd.app -->
