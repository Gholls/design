---
version: "alpha"
name: "Earthy & Organic"
description: "Design an earthy and organic interface with 60/30/10 palette discipline. Ideal for design de embalagens, marcas orgânicas, cosméticos naturais, alimentos artesanais, produtos eco-friendly. AI-ready template."
colors:
  primary: "#F5E6CC"
  secondary: "#2D4F1E"
  tertiary: "#4A4A4A"
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
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 340
  author: "designmd.app"
  source: "https://designmd.app/library/earthy-organic"
  tags: ["风格模板", "design de embalagens", "marcas orgânicas", "cosméticos naturais"]
---

## Overview

Design an earthy and organic interface with 60/30/10 palette discipline. Ideal for design de embalagens, marcas orgânicas, cosméticos naturais, alimentos artesanais, produtos eco-friendly. AI-ready template. Earthy palettes didn't emerge from a trend deck — they came from dirt. Literally. The Arts & Crafts movement rejected industrial color in favor of pigments you could pull from clay, bark, and stone. William Morris understood that natural dyes carried an honesty that synthetic anilines never could. That philosophy resurfaced in the 1970s back-to-land movement, then again in the early 2000s when organic food branding needed to visually separate itself from the hyperchrome of processed goods.

What's interesting now is how earthy tones have shed their granola-aisle connotations. Aesop proved you could pair raw umber with typographic sophistication and command luxury pricing. Patagonia showed that muted sage and worn ochre could signal activism without shouting. The current wave isn't about looking 'natural' in a naive sense — it's about communicating material honesty. These palettes reference real substances: terracotta, undyed linen, oxidized copper. They carry weight because they reference the physical world in an increasingly dematerialized design landscape.

The sustainability sector adopted these tones not just for aesthetics but for trust. Consumers learned to distrust greenwashing wrapped in electric green gradients. Earthy palettes signal restraint, and restraint signals sincerity.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Natural, Warm, Sustainable, Authentic
- **Keywords:** organic, earthy, sustainable, packaging, natural, eco-friendly, handcrafted, botanical, warm, calm
- **Era:** Contemporary Sustainable Design
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Warm Beige** (#F5E6CC) — Primary surface or dominant color
- **Forest Green** (#2D4F1E) — Success states, positive indicators
- **e Slate Grey** (#4A4A4A) — Secondary text, borders, muted elements


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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

10%: Terracotta #E27D60 para selos, chamadas e destaque de produto; textura sutil de papel reciclado, bordas orgânicas e microanimações suaves (220-280ms)

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

- Do Warm Beige dominante (60%)
- Do Forest Green e Slate Grey em 30%
- Do Terracotta controlado em 10%
- Do Aparência natural e sustentável
- Do Boa legibilidade em rótulos/textos
- Do Layout responsivo


## Use Case

Design de packaging, Brands orgânicas, Cosméticos naturais, Alimentos artesanais, Products eco-friendly

<!-- Source: https://designmd.app/library/earthy-organic · designmd.app -->
