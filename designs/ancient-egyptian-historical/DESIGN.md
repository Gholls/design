---
version: "alpha"
name: "Ancient Egyptian / Historical"
description: "Design an Ancient Egyptian historical interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FDF6E3"
  secondary: "#2B2118"
  tertiary: "#C17817"
  neutral: "#B55A2F"
  surface: "#8B7355"
  accent: "#D4A574"
typography:
  h1:
    fontFamily: serif for headings
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: serif for headings
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: serif for headings
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 135
  author: "designmd.app"
  source: "https://designmd.app/library/ancient-egyptian-historical"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an Ancient Egyptian historical interface. Ideal for landing pages, saas. AI-ready template. There's something almost contradictory about rendering ancient Egyptian aesthetics on a backlit screen. Papyrus doesn't glow. Hieroglyphs weren't meant to be tapped. And yet — the best museum interfaces pull it off. The British Museum's digital collections, the Cairo Museum's touchscreen kiosks, countless educational apps that teach kids about pharaohs. They all lean into period texture without pretending the screen is a tomb wall.

The trick is restraint. You borrow the visual grammar — the rigid horizontality, the earth-toned palette, the dense symbolic language — without cosplaying as an artifact. A sandstone gradient behind a card component. Hieroglyphic motifs as decorative borders, never as functional icons. The scholarly weight of serif type paired with generous whitespace that no actual papyrus scroll ever had.

What works is tension. Ancient texture against modern clarity. The feeling of age without the friction of it. Educational platforms especially benefit here: the aesthetic signals "this is serious, this is real history" while the interface stays completely navigable. Authenticity serves the content. It never fights the user.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Ancient, Ornamental, Symbolic, Timeless
- **Keywords:** Papyrus, hieroglyphic, scholarly, timeless, mysterious, ornamental borders, flat profile figures, stone-carved, archaeological
- **Era:** Ancient Historical
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Papyrus** (#FDF6E3) — Primary surface or dominant color
- **Dark Brown** (#2B2118) — Dark surface, primary background
- **Gold Ochre** (#C17817) — Premium accent, decorative highlights
- **Burnt Sienna** (#B55A2F) — Supporting palette color
- **Sandstone** (#8B7355) — Extended palette, decorative use
- **Warm Tan** (#D4A574) — Extended palette, decorative use
- **Charcoal** (#4A4A4A) — Deep contrast surface


## Typography

- **Display / Hero:** serif for headings — Weight 700, tight tracking, used for headline impact
- **Body:** serif for headings — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** serif for headings — 0.875rem, weight 500, slight letter-spacing
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

Flat illustration lighting, uniform illumination, no gradients, subtle scroll reveal, papyrus texture overlay, ornamental border animations

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

- Do Papyrus texture present
- Do Hieroglyphic borders
- Do Gold ochre accents
- Do Aged paper feel
- Do Ornamental frames
- Do Historical authenticity


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/ancient-egyptian-historical · designmd.app -->
