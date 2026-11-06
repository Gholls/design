---
version: "alpha"
name: "Feature-Rich Showcase"
description: "Feature showcase landing page. Ideal for marketing, conversão, lead gen. AI-ready template."
colors:
  primary: "#1A1A1A"
  secondary: "#4A4A4A"
  tertiary: "#0066FF"
  neutral: "#FFFFFF"
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
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem

gallery:
  order: 395
  author: "designmd.app"
  source: "https://designmd.app/library/feature-rich-showcase"
  tags: ["风格模板", "marketing", "conversão", "lead gen"]
---

## Overview

Feature showcase landing page. Ideal for marketing, conversão, lead gen. AI-ready template. Remember when SaaS pages were just a hero, three icons, and a pricing table? That era died somewhere around 2018. Stripe rewrote the rules — suddenly every product page needed animated gradients, layered feature sections, and enough visual density to feel like a product demo without ever opening the app. Linear pushed it further: dark canvases, tight grids, features presented as artifacts rather than bullet points.

The shift wasn't just aesthetic. Products got genuinely complex. You can't sell a platform with a tagline anymore. Teams realized that feature showcases — done well — replace sales calls. The page becomes the demo. Grid layouts let you present twelve capabilities without it reading like a spec sheet. Benefit cards give each feature breathing room and hierarchy.

What we landed on by the early 2020s is a format: dense but scannable, visual but informative. The best examples feel like editorial design applied to product marketing. Not a wall of text. Not a slideshow. Something in between that respects both the product's depth and the reader's time.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Landing Page
- **Keywords:** Multiple feature sections, grid layout, benefit cards, visual feature demonstrations, interactive elements, problem-solution pairs
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- Palette derived from style keywords and era context


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

Card hover effects (lift/scale), icon animations on scroll, feature toggle animations, smooth section transitions

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

- Do Feature grid responsive
- Do Icons consistent style
- Do Card hover effects smooth
- Do Alternating sections contrast
- Do Benefits clearly stated
- Do Mobile stacks properly


## Use Case

Marketing, Conversion, Lead gen

<!-- Source: https://designmd.app/library/feature-rich-showcase · designmd.app -->
