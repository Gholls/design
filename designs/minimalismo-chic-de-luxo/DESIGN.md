---
version: "alpha"
name: "Minimalismo Chic de Luxo"
description: "Design an elegant and minimalist luxury fashion e-commerce landing page. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#F8F8F8"
  secondary: "#000000"
  tertiary: "#D4AF37"
  neutral: "#36454F"
  surface: "#F5F5DC"
  accent: "#F0D5D5"
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
  order: 559
  author: "designmd.app"
  source: "https://designmd.app/library/minimalismo-chic-de-luxo"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an elegant and minimalist luxury fashion e-commerce landing page. Ideal for landing pages, modern websites. AI-ready template. Phoebe Philo's Céline didn't invent minimalism, but it weaponized it. The website was almost hostile in its spareness — enormous white space, a single product per viewport, typography so restrained it dared you to look away. The Row followed suit: no logos, no navigation clutter, just cloth and negative space doing the talking. Bottega Veneta went further, deleting its social media entirely in 2021, proving that in luxury, absence is the loudest statement.

This lineage traces back to Swiss modernism, but the luxury mutation is distinct. Where Swiss design democratized information, luxury minimalism gatekeeps it. The grid is there, but it breathes differently — slower, more deliberate, with margins that feel like they cost money. Every pixel of whitespace is a flex. The restraint isn't about clarity; it's about exclusivity. You either understand the codes or you don't. The product doesn't explain itself to you.

Today's high-end e-commerce inherits this posture. Quiet interfaces that refuse to sell. No urgency banners, no countdown timers. The design whispers because it doesn't need to shout.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Elegant, Minimalist, Premium
- **Keywords:** luxury, fashion, e-commerce, minimalist, elegant, premium, sophisticated, exclusive, clean, refined
- **Era:** 2026+ Elegância Atemporal
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco Off-White** (#F8F8F8) — Light surface, card backgrounds
- **Preto** (#000000) — Dark surface, primary background
- **Dourado Suave** (#D4AF37) — Premium accent, decorative highlights
- **Cinza Carvão** (#36454F) — Secondary text, borders, muted elements
- **Bege** (#F5F5DC) — Extended palette, decorative use
- **Rosa Blush** (#F0D5D5) — Decorative accent, highlight elements
- **Azul Marinho Profundo** (#000080) — Primary background surface
- **Verde Floresta** (#228B22) — Success states, positive indicators


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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Layouts limpos com muito espaço em branco, tipografia serifada e sans-serif de alta qualidade, imagens de produto em grande escala, navegação sutil, micro-interações de hover em produtos, transições suaves e elegantes.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Espaço em branco
- Do Tipografia de alta qualidade
- Do Imagens de produto em grande escala
- Do Navegação sutil
- Do Micro-interações de hover
- Do Transições elegantes.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/minimalismo-chic-de-luxo · designmd.app -->
