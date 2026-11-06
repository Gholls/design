---
version: "alpha"
name: "Bento Grid"
description: "Bento Grid landing page inspired by Japanese bento boxes and Apple's design language. Ideal for ui/ux, dashboards, portfólios, web design limpo, branding de produtos apple. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#F5F5F7"
  tertiary: "#1D1D1F"
  neutral: "#0071E3"
  surface: "#E8E8ED"
  accent: "#86868B"
typography:
  h1:
    fontFamily: SF Pro
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: SF Pro
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: SF Pro
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 20px
  md: 40px
  lg: 60px
spacing:
  sm: 16.0px
  md: 32.0px
  lg: 64.0px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 190
  author: "designmd.app"
  source: "https://designmd.app/library/bento-grid"
  tags: ["风格模板", "ui/ux", "dashboards", "portfólios"]
---

## Overview

Bento Grid landing page inspired by Japanese bento boxes and Apple's design language. Ideal for ui/ux, dashboards, portfólios, web design limpo, branding de produtos apple. AI-ready template. The bento grid didn't emerge from some design system committee. It came from Japanese lunch boxes — compartmentalized, purposeful, every section earning its space. Apple's marketing pages around 2020-2022 made the pattern unavoidable: asymmetric cards of varying heights and widths, each one a self-contained story. Suddenly every SaaS landing page wanted that same energy.

What makes bento work where traditional grids feel rigid is the deliberate breaking of uniformity. A 2×2 card sits next to a 1×1. A tall vertical piece anchors the left while three small squares stack on the right. The asymmetry isn't random — it's editorial hierarchy expressed through spatial proportion. The bigger the card, the bigger the idea.

The pattern matured quickly. Early implementations were just CSS Grid with span tricks. The good ones today treat each cell as a micro-composition — its own typographic hierarchy, its own breathing room, its own moment. The grid is the scaffolding, not the design.

- Density: 8/10 — Dense
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Modular, Organized, Compartmentalized, Apple-Inspired
- **Keywords:** Bento grid, bento box, modular, organized, compartments, Apple-style, clean, dedicated spaces, dashboard, tidy
- **Era:** 2020s Apple Design Language
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Light Grey** (#F5F5F7) — Secondary text, borders, muted elements
- **Dark Grey** (#1D1D1F) — Dark surface, primary background
- **Accent Blue** (#0071E3) — Primary accent, CTAs and interactive elements
- **Soft Grey** (#E8E8ED) — Secondary text, borders, muted elements
- **Medium Grey** (#86868B) — Secondary text, borders, muted elements
- **Black** (#000000) — Deep contrast surface
- **Accent Green** (#34C759) — Primary accent, CTAs and interactive elements


## Typography

- **Display / Hero:** SF Pro — Weight 700, tight tracking, used for headline impact
- **Body:** SF Pro — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** SF Pro — 0.875rem, weight 500, slight letter-spacing
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

CSS grid with varying span sizes (1x1, 2x1, 1x2, 2x2), uniform gap (12-16px), subtle rounded corners (16-20px), very soft shadows (0 2px 8px rgba(0,0,0,0.04)), smooth hover lift (translateY -2px), clean compartment borders

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 20px. See rounded tokens in front matter for the full scale.


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

- Do CSS grid with varying span sizes
- Do Uniform gap spacing (16px)
- Do Rounded corners (16-20px)
- Do Very soft shadows
- Do Each compartment with dedicated content
- Do Clean Apple-inspired aesthetic
- Do Responsive: 4→2→1 columns on breakpoints


## Use Case

UI/UX, Dashboards, Portfolios, Clean web design, Apple-style product branding

<!-- Source: https://designmd.app/library/bento-grid · designmd.app -->
