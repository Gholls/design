---
version: "alpha"
name: "Steampunk"
description: "Steampunk landing page fusing Victorian elegance with steam-powered mechanical aesthetics. Ideal for capas de livros de fantasia, merchandise temático, gráficos de videojogos, eventos cosplay. AI-ready template."
colors:
  primary: "#B5A642"
  secondary: "#3C1F0A"
  tertiary: "#B87333"
  neutral: "#E8D5B0"
  surface: "#6B6B6B"
  accent: "#A0A0A0"
typography:
  h1:
    fontFamily: Cinzel
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cinzel
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 735
  author: "designmd.app"
  source: "https://designmd.app/library/steampunk"
  tags: ["风格模板", "merchandise temático", "eventos cosplay"]
---

## Overview

Steampunk landing page fusing Victorian elegance with steam-powered mechanical aesthetics. Ideal for capas de livros de fantasia, merchandise temático, gráficos de videojogos, eventos cosplay. AI-ready template. Steampunk didn't emerge from a design studio — it crawled out of speculative fiction in the 1980s, when writers like K.W. Jeter and William Gibson started asking what would happen if the Victorian era never ended. The aesthetic crystallized around a simple premise: what if computation ran on steam and brass instead of silicon? That question unlocked an entire visual language — exposed gears, riveted copper panels, analog gauges, leather straps, and the ornamental excess of Industrial Revolution machinery.

What makes Steampunk endure as a design system isn't nostalgia — it's the tension between mechanical honesty and decorative extravagance. Victorian engineering celebrated visible function: you could see how a clock worked, trace the logic of a locomotive's pistons. Steampunk borrows that transparency and pushes it into fantasy. Every gear is both structural and ornamental. Every rivet is both fastener and decoration.

The movement gained mainstream traction through gaming, cosplay, and maker culture in the 2000s. It proved that audiences crave interfaces and environments where the mechanics are legible — where the system shows its work rather than hiding behind flat minimalism.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Victorian-Mechanical, Brass, Gears, Retro-Futuristic
- **Keywords:** Steampunk, Victorian, mechanical, steam-powered, brass, gears, cogs, gadgets, retro-futuristic, industrial, copper
- **Era:** Victorian Era meets Industrial Revolution Fiction
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Brass Gold** (#B5A642) — Premium accent, decorative highlights
- **Dark Leather** (#3C1F0A) — Dark surface, primary background
- **Copper** (#B87333) — Metallic accent, decorative detail
- **Aged Parchment** (#E8D5B0) — Supporting palette color
- **Steam Grey** (#6B6B6B) — Secondary text, borders, muted elements
- **Rivet Silver** (#A0A0A0) — Extended palette, decorative use
- **Deep Mahogany** (#4E1A0A) — Extended palette, decorative use
- **Verdigris Green** (#43B3AE) — Success states, positive indicators


## Typography

- **Display / Hero:** Cinzel — Weight 700, tight tracking, used for headline impact
- **Accent:** Special Elite — Used for decorative or emphasis text
- **Body:** Cinzel — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cinzel — 0.875rem, weight 500, slight letter-spacing
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

Gear/cog SVG decorative elements (rotating on hover), brass rivet border accents, leather texture backgrounds, Victorian ornamental frames, steam/fog gradient overlays, mechanical gauge-inspired progress indicators, copper metallic text effects

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (4px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (4px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Gear/cog SVG decorations
- Do Brass and copper color accents
- Do Leather texture backgrounds
- Do Victorian ornamental frames
- Do Steam/fog gradient overlays
- Do Mechanical gauge indicators
- Do Victorian + industrial typography
- Do Responsive with maintained steampunk feel


## Use Case

Fantasy book covers, Themed merchandise, Video game graphics, Cosplay events

<!-- Source: https://designmd.app/library/steampunk · designmd.app -->
