---
version: "alpha"
name: "Lambe-Lambe Brasileiro"
description: "Brazilian lambe-lambe street poster style landing page. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FF0000"
  secondary: "#FFD700"
  tertiary: "#006400"
  neutral: "#000000"
  surface: "#FF6600"
  accent: "#0066CC"
typography:
  h1:
    fontFamily: Oswald
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Oswald
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 509
  author: "designmd.app"
  source: "https://designmd.app/library/lambe-lambe-brasileiro"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Brazilian lambe-lambe street poster style landing page. Ideal for landing pages, saas. AI-ready template. Lambe-lambe is glue and urgency. Before social media, before screens, Brazilian streets spoke through wheat-paste posters — hand-lettered, woodcut-printed, screen-printed overnight and slapped onto concrete by morning. The tradition pulls from cordel literature of the Northeast, from carnival typography, from political resistance during the dictatorship. It was never precious. It was fast, loud, disposable by design but permanent in memory.

What makes lambe-lambe singular is the collision: folk craft meets punk ethos. Xilogravura woodcut aesthetics next to spray-painted stencil type. São Paulo's Beco do Batman, Rio's Santa Teresa — these walls became galleries without permission slips. The roughness was the point. Ink bleeding into wet paper, registration slightly off, colors oversaturated because subtlety doesn't survive rain.

Now that visual language lives in brand systems, album covers, festival identities. The analog imperfection became a digital design vocabulary — distressed textures, hand-drawn lettering, high-contrast palettes that refuse to whisper. It's Brazilian popular culture refusing to be polished into silence.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Tropical, Vibrante, Cultural, Brasileiro
- **Keywords:** Street art, Brazilian folk, vibrant, high contrast, handcrafted, typography-driven, woodcut, xylography, urban, tropical, activist, cultural
- **Era:** Folk Urbano Brasileiro
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Vermelho** (#FF0000) — Error states, destructive actions
- **Amarelo** (#FFD700) — Warning states, attention indicators
- **Verde** (#006400) — Supporting palette color
- **Preto** (#000000) — Dark surface, primary background
- **Laranja** (#FF6600) — Warm accent, call-to-action secondary
- **Azul Royal** (#0066CC) — Secondary accent
- **Rosa Choque** (#FF1493) — Decorative accent, highlight elements
- **Branco** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Oswald — Weight 700, tight tracking, used for headline impact
- **Accent:** Anton — Used for decorative or emphasis text
- **Body:** Oswald — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Oswald — 0.875rem, weight 500, slight letter-spacing
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

Tipografia ousada e bold como elemento visual principal, ilustrações xilográficas/linocut, bordas visíveis e marcadas, layouts densos e informacionais, texturas de colagem rasgada, sombras duras e sem blur, cores vibrantes de alto contraste para destaque urbano, sobreposições gráficas intencionais

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

- Do Tipografia bold/uppercase em headlines
- Do Cores vibrantes tropicais (vermelho
- Do amarelo
- Do verde)
- Do Sombras duras sem blur
- Do Bordas visíveis 3-4px
- Do Layout denso e informativo
- Do Alto contraste urbano
- Do Texturas de colagem/woodcut


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/lambe-lambe-brasileiro · designmd.app -->
