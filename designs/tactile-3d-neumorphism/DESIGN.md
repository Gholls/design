---
version: "alpha"
name: "Tactile 3D Neumorphism"
description: "Tactile 3D neumorphic interface with inflated, puffy shapes that look extruded from the background. Ideal for modern apps, dashboards, premium interfaces, produtos digitais, fintech. AI-ready template."
colors:
  primary: "#E8E0F0"
  secondary: "#F0F0F3"
  tertiary: "#E8F5E9"
  neutral: "#F8BBD0"
  surface: "#B3C7E6"
  accent: "#FFDAB9"
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
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 764
  author: "designmd.app"
  source: "https://designmd.app/library/tactile-3d-neumorphism"
  tags: ["风格模板", "modern apps", "dashboards", "premium interfaces"]
---

## Overview

Tactile 3D neumorphic interface with inflated, puffy shapes that look extruded from the background. Ideal for modern apps, dashboards, premium interfaces, produtos digitais, fintech. AI-ready template. Neumorphism emerged around 2019-2020 as a direct rebellion against the flatness that had dominated UI since iOS 7. Designers were bored. Flat design solved legibility but killed personality — every app looked like the same Figma template. Alexander Plyuto's Dribbble shot of a soft, extruded calculator UI went viral and suddenly everyone was experimenting with inner shadows and subtle gradients that made elements look physically pressed into or raised from their background.

The style draws from real-world industrial design — think Braun knobs, Dieter Rams' radio dials, the satisfying click of a physical toggle switch. It's skeuomorphism's quieter, more refined cousin. Where Apple's old leather textures were loud and literal, neumorphism abstracts physicality into light behavior alone. Two shadows — one light, one dark — create the illusion of depth without any texture mapping.

The movement faced immediate criticism around accessibility. Low contrast between element and background made boundaries hard to perceive. The best implementations learned from this: they pair the soft dimensional effect with clear state changes, color accents on interaction, and sufficient contrast ratios. The style works when you treat it as a lighting system, not a gimmick.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Soft 3D, Inflated, Glossy, Extruded
- **Keywords:** neumorphism, 3D, tactile, inflated, glossy, soft shadows, extruded, puffy, rounded, squishy
- **Era:** 2020s Modern / Skeuomorphic Revival
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Soft Lavender** (#E8E0F0) — Primary surface or dominant color
- **Cloud White** (#F0F0F3) — Light surface, card backgrounds
- **Mint Cream** (#E8F5E9) — Light surface, card backgrounds
- **Bubblegum Pink** (#F8BBD0) — Primary text color
- **Sky Periwinkle** (#B3C7E6) — Primary text color
- **Soft Peach** (#FFDAB9) — Extended palette, decorative use
- **Lilac** (#CE93D8) — Extended palette, decorative use


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

Multi-layer neumorphic shadows (convex + concave), glossy highlight gradient on top edge, inflated/puffy 3D appearance via border-radius 20-30px, smooth press animation (scale 0.97), subtle inner glow for glass-like finish, 200ms transitions

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

- Do Multi-layer neumorphic shadows
- Do Large border-radius 20-30px
- Do Glossy highlight on top edges
- Do Inflated/puffy appearance
- Do Press animation on interactive elements
- Do Pastel color palette consistent


## Use Case

Modern apps, Dashboards, Premium interfaces, Digital products, Fintech

<!-- Source: https://designmd.app/library/tactile-3d-neumorphism · designmd.app -->
