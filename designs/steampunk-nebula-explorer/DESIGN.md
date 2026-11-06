---
version: "alpha"
name: "Steampunk Nebula Explorer"
description: "Steampunk space landing page, nebula background, brass and copper gears, vintage sci-fi aesthetic, explorer style, cosmic industrial. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#0d1b33"
  secondary: "#2b1d0e"
  tertiary: "#cd7f32"
  neutral: "#b5a642"
  surface: "#b87333"
  accent: "#5d3a9b"
typography:
  h1:
    fontFamily: Rye
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Rye
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 737
  author: "designmd.app"
  source: "https://designmd.app/library/steampunk-nebula-explorer"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Steampunk space landing page, nebula background, brass and copper gears, vintage sci-fi aesthetic, explorer style, cosmic industrial. Ideal for landing pages, modern websites. AI-ready template. Before NASA, before radio telescopes and satellite arrays, there were people in wool coats squinting through brass tubes at infinity. Victorian astronomers mapped the cosmos with hand-ground lenses and obsessive patience — their observatories were temples of gears, copper fittings, and hand-drawn star charts inked on vellum. That tension between the impossibly vast and the painstakingly handmade is where steampunk-meets-space lives.

The aesthetic pulls from a real moment in history: the 1800s, when nebulae were first sketched (not photographed) by people who had no idea what they were actually looking at. Lord Rosse built a 72-inch telescope — a monster of riveted iron and speculum metal — just to peer at the Whirlpool Galaxy. The drawings that came out of those sessions look like fever dreams. Swirling, organic, deeply human interpretations of cosmic structure.

Steampunk Nebula Explorer channels that energy. Mechanical precision meeting cosmic chaos. Brass against the void. It's not retro-futurism for nostalgia's sake — it's a reminder that wonder and craft used to be the same thing.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Adventurous, Industrial, Imaginative
- **Keywords:** steampunk, space, nebula, gear, brass, copper, cosmic, vintage sci-fi
- **Era:** Retro-Future
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Background** (#0d1b33) — Primary background surface
- **Text** (#2b1d0e) — Primary text color
- **Accent** (#cd7f32) — Primary accent, CTAs and interactive elements
- **Brass** (#b5a642) — Extended palette, decorative use
- **Copper** (#b87333) — Metallic accent, decorative detail
- **Nebula Purple** (#5d3a9b) — Accent color, emphasis elements
- **Star White** (#ffffff) — Secondary surface


## Typography

- **Display / Hero:** Rye — Weight 700, tight tracking, used for headline impact
- **Body:** Rye — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Rye — 0.875rem, weight 500, slight letter-spacing
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

Interlocking brass gears, copper piping, torn parchment containers, weathered paper grain, brushed bronze metal, cosmic void.

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

- Do Deep blue/space background
- Do Brass/Copper metallic accents
- Do Gear/Machine visuals
- Do Vintage display typography
- Do Glowing nebula effects


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/steampunk-nebula-explorer · designmd.app -->
