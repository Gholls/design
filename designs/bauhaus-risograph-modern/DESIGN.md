---
version: "alpha"
name: "Bauhaus / Risograph Modern"
description: "Bauhaus risograph modern interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#F4F1E8"
  secondary: "#2D2D2D"
  tertiary: "#D94646"
  neutral: "#4A7BA7"
  surface: "#F4D03F"
  accent: "#2E4053"
typography:
  h1:
    fontFamily: geometric sans-serif
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: geometric sans-serif
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: geometric sans-serif
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 182
  author: "designmd.app"
  source: "https://designmd.app/library/bauhaus-risograph-modern"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Bauhaus risograph modern interface. Ideal for landing pages, saas. AI-ready template. The Bauhaus didn't just teach design — it rewired how we think about visual communication. Founded by Walter Gropius in Weimar in 1919, the school collapsed the boundary between fine art and functional craft. Kandinsky brought spiritual geometry. Klee brought playful systems. Together they built a vocabulary of circles, grids, and primary color that still echoes in every design token we ship today.

Form-follows-function wasn't a slogan — it was a survival mechanism. Strip the ornament, reveal the structure. That ethos translated almost perfectly into digital interfaces decades later: clear hierarchy, intentional whitespace, type as architecture. The Bauhaus masters would have loved component libraries.

Then risograph entered the conversation. That beautiful, imperfect printing process — with its misregistration, grain, and limited ink palette — gave Bauhaus geometry something it desperately needed: warmth. Suddenly those rigid circles and rectangles breathed. The revival isn't nostalgia. It's correction. Clean structure plus analog texture equals something that feels both rigorous and human. That tension is the whole point.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Geometric, Primary-Colors, Functional, Modern
- **Keywords:** Geometric shapes, limited color palette, Bauhaus composition, grid-based, modern retro, structural, analytical, constructivist
- **Era:** 1920s Bauhaus + Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Warm Paper** (#F4F1E8) — Primary surface or dominant color
- **Charcoal** (#2D2D2D) — Dark surface, primary background
- **Bauhaus Red** (#D94646) — Error states, destructive actions
- **Steel Blue** (#4A7BA7) — Accent highlight, links and focus states
- **Bauhaus Yellow** (#F4D03F) — Warning states, attention indicators
- **Dark Slate** (#2E4053) — Deep contrast surface
- **Cool Grey** (#95A5A6) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** geometric sans-serif — Weight 700, tight tracking, used for headline impact
- **Body:** geometric sans-serif — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** geometric sans-serif — 0.875rem, weight 500, slight letter-spacing
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

Flat graphic lighting, slight misregistration effect, geometric shape animations, grid-based reveals, bold shape transitions

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

- Do Geometric shapes dominant
- Do Limited palette (3-4 colors)
- Do Grid-based layout
- Do Bauhaus principles
- Do Misregistration subtle
- Do Constructivist feel


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/bauhaus-risograph-modern · designmd.app -->
