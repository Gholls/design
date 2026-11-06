---
version: "alpha"
name: "Vintage Editorial"
description: "Witty, confident editorial landing page with personality. Ideal for blogs premium, digital magazines, marcas artesanais, consultorias criativas. AI-ready template."
colors:
  primary: "#f5f3ee"
  secondary: "#1a1a1a"
  tertiary: "#555555"
  neutral: "#e8d4c0"
  surface: "#c4a882"
  accent: "#faf8f4"
typography:
  h1:
    fontFamily: Fraunces
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Fraunces
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 828
  author: "designmd.app"
  source: "https://designmd.app/library/vintage-editorial"
  tags: ["风格模板", "blogs premium", "digital magazines", "marcas artesanais"]
---

## Overview

Witty, confident editorial landing page with personality. Ideal for blogs premium, digital magazines, marcas artesanais, consultorias criativas. AI-ready template. The vintage editorial aesthetic isn't nostalgia — it's a deliberate rejection of the frictionless, over-optimized digital page. Before screens flattened everything into system fonts and infinite scroll, printed matter had weight. Letterpress ink bit into cotton stock. Typesetters made decisions about measure and leading that demanded the reader slow down. Fraunces, as a variable serif, carries that DNA forward — its optical sizes and wonky alternates reference the irregularities of metal type without cosplaying as a museum piece.

What makes this system work isn't the ornament or the sepia tones people lazily associate with "vintage." It's the underlying grid discipline of mid-century editorial: generous margins, considered hierarchy, restrained color palettes where a single accent does all the heavy lifting. The best literary magazines — Granta, The Paris Review, early Emigre — understood that typography IS the design. You don't decorate around it.

This approach demands confidence. You're betting that your content deserves the space, that readers will meet you halfway. In an era of dopamine-optimized feeds, that's a radical position.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Witty, Confident, Editorial, Personality-Driven
- **Keywords:** vintage, editorial, Fraunces serif, Work Sans, cream background, geometric shapes, circle outline, witty, confident, personality-driven, bordered CTA
- **Era:** 2024-2026 Editorial Revival
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Cream** (#f5f3ee) — Light surface, card backgrounds
- **Text Dark** (#1a1a1a) — Dark surface, primary background
- **Text Secondary** (#555555) — Primary text color
- **Warm Accent** (#e8d4c0) — Primary accent, CTAs and interactive elements
- **Soft Brown** (#c4a882) — Extended palette, decorative use
- **Light Cream** (#faf8f4) — Secondary surface


## Typography

- **Display / Hero:** Fraunces — Weight 700, tight tracking, used for headline impact
- **Accent:** Work Sans — Used for decorative or emphasis text
- **Body:** Fraunces — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Fraunces — 0.875rem, weight 500, slight letter-spacing
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

Abstract geometric shapes (circle outline + line + dot), bold bordered CTA boxes, witty conversational copy style, no illustrations only geometric CSS shapes, elegant spacing, smooth transitions 300ms

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (50%) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (50%) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fraunces + Work Sans carregados
- Do Cream background #f5f3ee
- Do Geometric shapes CSS (círculos
- Do linhas
- Do pontos)
- Do Bold bordered CTA boxes
- Do Sem ilustrações
- Do apenas shapes CSS
- Do Copy style editorial e witty
- Do Responsivo mobile/tablet/desktop


## Use Case

Premium blogs, Digital magazines, Artisan brands, Creative consulting

<!-- Source: https://designmd.app/library/vintage-editorial · designmd.app -->
