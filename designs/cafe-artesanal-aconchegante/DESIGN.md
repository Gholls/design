---
version: "alpha"
name: "Café Artesanal Aconchegante"
description: "Cozy and rustic hand-drawn landing page for an artisanal coffee shop and bakery. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#6F4E37"
  secondary: "#FFFDD0"
  tertiary: "#98FB98"
  neutral: "#FFFFFF"
  surface: "#FFDAB9"
  accent: "#87CEEB"
typography:
  h1:
    fontFamily: Caveat
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Caveat
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 231
  author: "designmd.app"
  source: "https://designmd.app/library/cafe-artesanal-aconchegante"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Cozy and rustic hand-drawn landing page for an artisanal coffee shop and bakery. Ideal for landing pages, modern websites. AI-ready template. Third-wave coffee didn't just change how we drink — it rewired how we expect small businesses to look online. Before 2010, most café websites were clip-art disasters or over-templated WordPress themes. Then came the pour-over revolution, and with it, a visual language borrowed from letterpress printing, kraft paper packaging, and the deliberate imperfection of hand-drawn type. Suddenly every roaster needed a site that felt like their shop smelled.

The aesthetic crystallized around warmth. Muted earth tones, textured backgrounds that mimicked recycled stock, illustrations that looked sketched on a napkin during a slow morning shift. Photography went moody — steam rising, flour-dusted hands, latte art captured mid-pour. The digital experience had to feel analog. Cozy. Like you could almost hear the grinder.

What's interesting is how this language scaled beyond coffee into bakeries, artisan food shops, and neighborhood businesses that trade on craft and proximity. The visual vocabulary says: we made this by hand, we care about the details, come sit down for a while.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Cozy, Rustic, Authentic
- **Keywords:** coffee shop, bakery, handmade, cozy, rustic, authentic, warm, inviting, local, friendly
- **Era:** 2026+ Charme Local
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Marrom Café** (#6F4E37) — Primary surface or dominant color
- **Bege Creme** (#FFFDD0) — Secondary surface or text color
- **Verde Menta** (#98FB98) — Supporting palette color
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Pêssego** (#FFDAB9) — Warm accent, call-to-action secondary
- **Azul Céu** (#87CEEB) — Secondary accent
- **Vermelho Cereja** (#DC143C) — Error states, destructive actions
- **Cinza Ardósia** (#708090) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Caveat — Weight 700, tight tracking, used for headline impact
- **Body:** Caveat — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Caveat — 0.875rem, weight 500, slight letter-spacing
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

Ilustrações de grãos de café e pães, tipografia que simula escrita em lousa, texturas de madeira e juta, bordas com efeito de carimbo, micro-interações de hover com aroma visual, transições de seção suaves e orgânicas.

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

- Do Ilustrações de café/pão
- Do Tipografia de lousa
- Do Texturas de madeira/juta
- Do Bordas com efeito de carimbo
- Do Micro-interações de aroma visual
- Do Transições suaves e orgânicas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/cafe-artesanal-aconchegante · designmd.app -->
