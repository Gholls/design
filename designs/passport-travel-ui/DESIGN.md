---
version: "alpha"
name: "Passport Travel UI"
description: "Passport style landing page, travel document aesthetic, ink stamps, visa stickers, paper texture, official look, travel theme. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#F5F2E9"
  secondary: "#2D2D2D"
  tertiary: "#FF7F50"
  neutral: "#1A237E"
  surface: "#B71C1C"
  accent: "#FFFFFF"
typography:
  h1:
    fontFamily: Courier Prime
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Courier Prime
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 621
  author: "designmd.app"
  source: "https://designmd.app/library/passport-travel-ui"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Passport style landing page, travel document aesthetic, ink stamps, visa stickers, paper texture, official look, travel theme. Ideal for landing pages, modern websites. AI-ready template. Passport aesthetics in digital design trace back to the early skeuomorphic era — when iOS apps literally rendered leather-bound booklets and stamped pages. Cheesy? Sometimes. But the impulse was right. Travel documents carry an emotional weight that few other paper artifacts match. The worn edges, the ink stamps from foreign ports, the perforated boarding pass torn at the gate — these textures signal adventure before a single word is read.

The stamp collection pattern deserves its own mention. Gamification borrowed it early: unlock a city, earn a stamp. Foursquare did it. Airline loyalty apps still do. It works because it mirrors a real behavior — flipping through passport pages and remembering where you've been. The metaphor doesn't need explanation. That's rare in UI.

Boarding pass layouts, meanwhile, gave designers a gift: a rigid information hierarchy baked into a familiar form. Departure. Arrival. Gate. Seat. The constraint is the feature. You don't fight the format — you lean into it, and users parse it instantly because they've held the real thing a hundred times.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Adventurous, Official, Textured
- **Keywords:** passport, travel, stamp, visa, official, paper, journey, document
- **Era:** Modern Travel
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#F5F2E9) — Primary background surface
- **Text** (#2D2D2D) — Primary text color
- **Accent** (#FF7F50) — Primary accent, CTAs and interactive elements
- **Dark Blue** (#1A237E) — Deep contrast surface
- **Stamp Ink** (#B71C1C) — Primary text color
- **Paper White** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Courier Prime — Weight 700, tight tracking, used for headline impact
- **Body:** Courier Prime — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Courier Prime — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Courier Prime — Used for code, metadata, and technical values

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

Passport booklet mockup, ink stamps, visa stickers, barcode elements, matte paper grain, porous ink bleed, worn edges.

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

- Do Passport page background
- Do Stamp/Postmark elements
- Do Monospace 'typewriter' text
- Do Sticker-like UI elements
- Do Official-looking borders


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/passport-travel-ui · designmd.app -->
