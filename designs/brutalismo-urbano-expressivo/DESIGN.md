---
version: "alpha"
name: "Brutalismo Urbano Expressivo"
description: "Design an edgy and expressive brutalist landing page for an urban art and streetwear store. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#CC5500"
  neutral: "#00BFFF"
  surface: "#39FF14"
  accent: "#6A0DAD"
typography:
  h1:
    fontFamily: Permanent Marker
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Permanent Marker
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 219
  author: "designmd.app"
  source: "https://designmd.app/library/brutalismo-urbano-expressivo"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an edgy and expressive brutalist landing page for an urban art and streetwear store. Ideal for landing pages, modern websites. AI-ready template. Graffiti never asked for permission. It showed up on concrete walls, train cars, shuttered storefronts — raw, loud, unapologetic. When streetwear brands started building websites in the early 2000s, the smart ones didn't sanitize that energy. They brought the grit straight to the screen. Stüssy's early web presence felt like a zine. Supreme treated their site like a wheat-paste poster. The typography was aggressive, the layouts were deliberately off-kilter, and whitespace was something that happened to other people.

Urban brutalism in digital design isn't about being ugly — it's about being honest. It borrows from the same impulse that drives a writer to tag a wall at 3am: the need to mark territory, to exist loudly in a space that wasn't designed for you. The aesthetic pulls from hand-drawn lettering, spray-paint texture, photocopy degradation, and the chaotic layering you see on a construction site hoarding covered in six months of posters.

This approach rejects the polished minimalism that dominates most e-commerce. It says: our audience doesn't want calm. They want energy. They want something that feels like the street smells — diesel, paint, concrete dust.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Edgy, Expressive, Urban
- **Keywords:** streetwear, urban art, graffiti, edgy, expressive, raw, bold, authentic, disruptive, unique
- **Era:** 2026+ Cultura de Rua
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Azul Elétrico** (#00BFFF) — Accent highlight, links and focus states
- **Verde Neon** (#39FF14) — Success states, positive indicators
- **Roxo Grafite** (#6A0DAD) — Accent color, emphasis elements
- **Amarelo Mostarda** (#FFD700) — Warning states, attention indicators
- **Cinza Concreto** (#A9A9A9) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Permanent Marker — Weight 700, tight tracking, used for headline impact
- **Body:** Permanent Marker — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Permanent Marker — 0.875rem, weight 500, slight letter-spacing
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

Texturas de parede de concreto, tipografia de stencil e grafite, imagens de arte de rua em grande escala, elementos de interface com "rasgos" ou "desgastes", micro-interações de hover com efeitos de spray, animações de transição de elementos bruscas.

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

- Do Texturas de concreto
- Do Tipografia de stencil/grafite
- Do Imagens de arte de rua
- Do Elementos com "rasgos"
- Do Micro-interações de spray
- Do Transições bruscas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/brutalismo-urbano-expressivo · designmd.app -->
