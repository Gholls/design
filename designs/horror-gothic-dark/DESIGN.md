---
version: "alpha"
name: "Horror / Gothic Dark"
description: "Horror gothic dark interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#1A0000"
  secondary: "#FF5050"
  tertiary: "#8B0000"
  neutral: "#800000"
  surface: "#FFFFFF"
  accent: "#330000"
typography:
  h1:
    fontFamily: gothic/blackletter
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: gothic/blackletter
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: gothic/blackletter
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 473
  author: "designmd.app"
  source: "https://designmd.app/library/horror-gothic-dark"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Horror gothic dark interface. Ideal for landing pages, saas. AI-ready template. Gothic design didn't start on screens. It started in cathedrals — pointed arches, grotesques, the deliberate orchestration of shadow to make you feel small. That psychological weight carried straight into print (penny dreadfuls, Hammer Horror posters) and eventually into digital. The tradition is about controlled dread.

When Resident Evil dropped in '96, the UI was part of the horror. That heartbeat monitor, the inventory screen that looked like a blood-stained notebook — every pixel reinforced vulnerability. Bloodborne pushed it further: the HUD barely existed, letting the architecture and fog do the emotional work. Silent Hill's grain and rust. Darkest Dungeon's woodcut stress meters. These aren't decorative choices. They're tension systems.

Dark atmospheric design works because it restricts information. You can't see everything. The palette is suffocating. Typography feels carved, not typed. When done right, the interface itself becomes a source of unease — which is exactly the point.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Dark, Gothic, Dramatic, Mysterious
- **Keywords:** Ominous, dramatic, intense, mysterious, dark textures, dripping effects, gothic typography, grunge, distressed, blood-red, haunted
- **Era:** Gothic Horror
- **Light/Dark:** ✗ No / ✓ Only

## Colors

- **Deep Blood** (#1A0000) — Primary surface or dominant color
- **Blood Red** (#FF5050) — Error states, destructive actions
- **Dark Crimson** (#8B0000) — Dark surface, primary background
- **Maroon** (#800000) — Supporting palette color
- **Pure White** (#FFFFFF) — Secondary surface
- **Dark Red** (#330000) — Deep contrast surface


## Typography

- **Display / Hero:** gothic/blackletter — Weight 700, tight tracking, used for headline impact
- **Body:** gothic/blackletter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** gothic/blackletter — 0.875rem, weight 500, slight letter-spacing
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

Low-key dramatic shadows, blood-red highlights, dripping animations, flicker effects, grunge texture overlays, eerie hover transitions, fog/mist effects

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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Dark background dominant
- Do Blood-red accents
- Do Gothic typography
- Do Grunge textures
- Do Dramatic shadows
- Do Eerie atmosphere


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/horror-gothic-dark · designmd.app -->
