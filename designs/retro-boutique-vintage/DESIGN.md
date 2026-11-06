---
version: "alpha"
name: "Retro Boutique Vintage"
description: "Nostalgic and elegant retro landing page for a vintage clothing store. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#704214"
  secondary: "#F5F5DC"
  tertiary: "#6B8E23"
  neutral: "#800020"
  surface: "#008080"
  accent: "#FFD700"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Playfair Display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Playfair Display
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 669
  author: "designmd.app"
  source: "https://designmd.app/library/retro-boutique-vintage"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Nostalgic and elegant retro landing page for a vintage clothing store. Ideal for landing pages, modern websites. AI-ready template. The vintage boutique aesthetic didn't emerge from design studios. It crawled out of Etsy shops, Depop listings, and Instagram accounts run by people who genuinely loved the hunt. Thrift culture — messy, personal, obsessive — needed a visual language that felt found rather than manufactured. Hand-lettered price tags. Polaroid textures. Color palettes pulled from faded concert tees and sun-bleached book covers. The web caught up around 2015 when sustainability became a selling point, not just a lifestyle choice.

What makes this aesthetic stick is the tension between curation and chaos. A vintage shop owner arranges a rack with intention, but the magic is in the dig. Translating that to screen meant embracing imperfection — slightly off-grid layouts, warm grain overlays, typography that references decades without cosplaying them. The sustainability narrative gave it commercial legs. Secondhand became aspirational. The visual language followed: earthy, textured, deliberately un-polished.

Today it reads as both countercultural and mainstream. That's the trick. It signals taste without trying too hard — which is, of course, trying very hard indeed.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Nostalgic, Elegant, Warm
- **Keywords:** vintage fashion, retro clothing, nostalgic, elegant, warm, authentic, unique, classic, curated, stylish
- **Era:** 1950s-1970s Fashion
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Marrom Sépia** (#704214) — Primary surface or dominant color
- **Bege** (#F5F5DC) — Secondary surface or text color
- **Verde Oliva** (#6B8E23) — Supporting palette color
- **Vermelho Borgonha** (#800020) — Error states, destructive actions
- **Azul Petróleo** (#008080) — Secondary accent
- **Amarelo Mostarda** (#FFD700) — Warning states, attention indicators
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Branco** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Body:** Playfair Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Playfair Display — 0.875rem, weight 500, slight letter-spacing
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

Texturas de papel envelhecido e grão de filme, tipografia serifada clássica e script, fotografias com filtro sépia ou desbotado, bordas decorativas, micro-interações de hover com efeito de "polaroid", transições de seção suaves e com efeito de "desvanecimento".

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

- Do Texturas de papel envelhecido
- Do Tipografia serifada/script
- Do Fotos com filtro sépia
- Do Bordas decorativas
- Do Micro-interações de "polaroid"
- Do Transições de desvanecimento.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/retro-boutique-vintage · designmd.app -->
