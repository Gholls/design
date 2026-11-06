---
version: "alpha"
name: "Albert Sans Typography"
description: "Render a 2D isolated text on a solid background. Ideal for startups, lifestyle brands, landing pages, and simple marketing sites.. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#0208F9"
typography:
  h1:
    fontFamily: Albert Sans
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Albert Sans
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 129
  author: "designmd.app"
  source: "https://designmd.app/library/albert-sans-typography"
  tags: ["风格模板", "startups", "lifestyle brands", "landing pages"]
---

## Overview

Render a 2D isolated text on a solid background. Ideal for startups, lifestyle brands, landing pages, and simple marketing sites.. AI-ready template. Albert Sans belongs to a lineage of geometric sans-serifs that deliberately soften their construction to feel less clinical. Where Futura cuts with precision and Inter optimizes for screens with mechanical neutrality, Albert Sans rounds its terminals and opens its apertures just enough to breathe warmth into every glyph. It's a typeface that understands the difference between geometric and cold.

Designed by Andreas Rasmussen, Albert Sans takes the structural clarity of geometric type and injects humanity through subtle optical corrections — slightly rounded stroke endings, generous counters, and a vertical rhythm that feels relaxed rather than rigid. The lowercase 'a' and 'g' are telling: they maintain geometric DNA but refuse to be austere about it. This is a face that wants to be read, not admired from a distance.

What makes Albert Sans genuinely useful is its refusal to be cute. Many 'friendly' typefaces overcorrect into territory that feels juvenile or unserious. Albert Sans holds the line — approachable at body sizes, confident at display sizes, never patronizing. It communicates trust without demanding attention, which is exactly what most product interfaces actually need.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Friendly, modern grotesque sans
- **Keywords:** Albert Sans, soft, approachable, modern grotesque, startups, landing pages
- **Era:** Contemporary Web
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **#FFFFFF** (#FFFFFF) — Primary surface or dominant color
- **#0208F9** (#0208F9) — Extended palette, decorative use


## Typography

- **Display / Hero:** Albert Sans — Weight 700, tight tracking, used for headline impact
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

Tight tracking (-5%), 90% leading

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Albert Sans font
- Do Color: #FFFFFF
- Do Tracking -5%
- Do Background #0208F9


## Use Case

Startups, lifestyle brands, Landing pages, and simple marketing sites.

<!-- Source: https://designmd.app/library/albert-sans-typography · designmd.app -->
