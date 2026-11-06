---
version: "alpha"
name: "Reuso Criativo Disruptivo"
description: "Design an innovative and playful landing page for a creative reuse and upcycling platform, inspired by Irmãos Campana. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#32CD32"
  secondary: "#FF8C00"
  tertiary: "#00BFFF"
  neutral: "#A9A9A9"
  surface: "#8A2BE2"
  accent: "#FFD700"
typography:
  h1:
    fontFamily: Permanent Marker
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Permanent Marker
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 5px
  md: 10px
  lg: 15px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 676
  author: "designmd.app"
  source: "https://designmd.app/library/reuso-criativo-disruptivo"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an innovative and playful landing page for a creative reuse and upcycling platform, inspired by Irmãos Campana. Ideal for landing pages, saas. AI-ready template. Brazil never needed permission to invent. Long before upcycling became a design conference buzzword, favela architects were turning shipping pallets into furniture, oil drums into planters, tire rubber into sandals that outlasted anything from a factory. This is gambiarra — not a trend, but a survival aesthetic refined over generations. It treats scarcity as a creative constraint, not a limitation.

The movement gained formal recognition in the 2000s when designers like the Campana Brothers brought woven-wire and stuffed-animal chairs to Milan, forcing the global design establishment to confront an uncomfortable truth: discarded materials carry more narrative weight than virgin ones. Every scratch tells a story. Every weld mark is a decision.

What makes Brazilian creative reuse disruptive — not merely sustainable — is its refusal to apologize. These aren't objects that look recycled. They look inevitable. The palette runs raw: exposed cardboard browns, oxidized metals, sun-bleached plastics. Texture dominates color. Imperfection is the point. The aesthetic says: beauty was always here, in what you threw away.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Innovative, Sustainable, Raw, Playful
- **Keywords:** upcycling, creative reuse, sustainable, innovative, raw, playful, unconventional, DIY, community, eco-friendly
- **Era:** 2026+ Economia Circular
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Verde Limão** (#32CD32) — Primary surface or dominant color
- **Laranja Vibrante** (#FF8C00) — Warm accent, call-to-action secondary
- **Azul Elétrico** (#00BFFF) — Accent highlight, links and focus states
- **Cinza Concreto** (#A9A9A9) — Secondary text, borders, muted elements
- **Roxo Profundo** (#8A2BE2) — Primary background surface
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Vermelho Tijolo** (#CB4154) — Error states, destructive actions
- **Branco** (#FFFFFF) — Secondary surface


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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Elementos de UI com texturas de sucata, cordas e materiais reciclados, tipografia "imperfeita" e com efeito de stencil, fotografias de objetos upcycled com foco na transformação, micro-interações de hover com efeito de "montagem" ou "desmontagem" de peças, transições de seção com efeito de "colagem" ou "recorte".

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 5px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (5px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (5px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Paleta de cores brasileira verificada
- Do Elementos de sustentabilidade presentes
- Do Elementos de comunidade presentes
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/reuso-criativo-disruptivo · designmd.app -->
