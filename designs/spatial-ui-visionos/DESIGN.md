---
version: "alpha"
name: "Spatial UI (VisionOS)"
description: "VisionOS-style spatial interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FFFFFF"
typography:
  h1:
    fontFamily: System UI stack
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: System UI stack
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: System UI stack
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 24px
  md: 48px
  lg: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 731
  author: "designmd.app"
  source: "https://designmd.app/library/spatial-ui-visionos"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

VisionOS-style spatial interface. Ideal for landing pages, saas. AI-ready template. When Apple dropped Vision Pro in early 2024, spatial UI stopped being a concept deck and became a shipping platform. Overnight, designers had to reckon with a new canvas — one where windows float, backgrounds don't exist, and depth is literal, not metaphorical.

visionOS broke from iOS in ways that matter. Gone is the opaque surface. In its place: glass. A dynamic, light-responsive material that refracts the user's actual environment. Elements don't sit on a screen — they hover in a room. The design guidelines read less like a style guide and more like a physics lesson. Z-axis spacing, eye-tracking hit targets, ergonomic gaze angles. It's a different discipline.

For 2D designers, the shift is uncomfortable and exciting in equal measure. Your Figma muscle memory still applies — hierarchy, typography, contrast — but the mental model is architectural now. You're placing objects in space, not pixels on a plane. The glass material system forces restraint: if everything is translucent, nothing can scream. Subtlety becomes structural.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Spatial, Translucent, Immersive, Futuristic
- **Keywords:** Glass, depth, immersion, spatial, translucent, gaze, gesture, apple, vision-pro
- **Era:** 2024 Spatial Era
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Frosted Glass** (#FFFFFF) — Primary surface or dominant color


## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

Parallax depth, dynamic lighting response, gaze-hover effects, smooth scale on focus

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

- Do Glass effect visible
- Do Depth layers clear
- Do Hover states defined
- Do Colors vibrant on active
- Do Floating feel achieved
- Do Contrast maintained


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/spatial-ui-visionos · designmd.app -->
