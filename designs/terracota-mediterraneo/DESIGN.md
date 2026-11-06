---
version: "alpha"
name: "Terracota Mediterrâneo"
description: "Mediterranean terracotta landing page. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#C2452D"
  secondary: "#1565C0"
  tertiary: "#E8D5B7"
  neutral: "#6B7F3B"
  surface: "#FFF8F0"
  accent: "#D4956B"
typography:
  h1:
    fontFamily: DM Serif Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: DM Serif Display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: DM Serif Display
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 785
  author: "designmd.app"
  source: "https://designmd.app/library/terracota-mediterraneo"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Mediterranean terracotta landing page. Ideal for landing pages, saas. AI-ready template. Terracotta isn't a color you pick from a swatch. It's fired earth — literally. Centuries of Mediterranean builders understood something we keep rediscovering: warmth isn't decoration, it's architecture. From Moroccan riads to Greek island chapels, that burnt sienna-to-ochre range wasn't chosen for aesthetics alone. It emerged from the ground itself, shaped by hands, hardened by sun.

In digital contexts, this matters more than you'd think. Travel and hospitality brands chase "warmth" constantly, but most land on generic beige or oversaturated sunset gradients. The Mediterranean palette is more specific — it's dusty, it has texture memory, it implies age without looking dated. Think of how a terracotta pot weathers: it doesn't decay, it gains character.

Translating sun-baked warmth to screens means restraint. You're not recreating a Tuscan villa. You're borrowing its confidence — the way warm stone meets deep shadow, how bleached linen sits against clay. The best Mediterranean digital work feels unhurried. It breathes. It doesn't shout luxury; it assumes it.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Warm, Rustic-Elegant, Sun-Kissed
- **Keywords:** terracotta, mediterranean, warm, rustic-elegant, sun-kissed, olive groves, arch motifs, earthenware, coastal, artisanal
- **Era:** Timeless Mediterranean Villa
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Terracotta** (#C2452D) — Primary surface or dominant color
- **Mediterranean Blue** (#1565C0) — Accent highlight, links and focus states
- **Sandy Beige** (#E8D5B7) — Supporting palette color
- **Olive Leaf** (#6B7F3B) — Supporting palette color
- **Sun White** (#FFF8F0) — Secondary surface
- **Warm Clay** (#D4956B) — Extended palette, decorative use
- **Deep Fig** (#4A1942) — Extended palette, decorative use
- **Sea Foam** (#A8D8C8) — Extended palette, decorative use


## Typography

- **Display / Hero:** DM Serif Display — Weight 700, tight tracking, used for headline impact
- **Body:** DM Serif Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** DM Serif Display — 0.875rem, weight 500, slight letter-spacing
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

Arch-shaped containers and frames, sun-baked texture overlays, olive branch dividers, warm golden hour gradients, textured plaster backgrounds, mosaic tile accents, terracotta shadow layering, coastal breeze subtle parallax

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (50% 50% 0 0) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (50% 50% 0 0) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Arch-shaped containers
- Do Sun-baked texture overlays
- Do Olive branch dividers
- Do Warm golden hour gradients
- Do Textured plaster backgrounds
- Do Mosaic tile accents


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/terracota-mediterraneo · designmd.app -->
