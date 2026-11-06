---
version: "alpha"
name: "Tropicalismo Aventureiro Natural"
description: "Design an adventurous and natural landing page for an ecotourism travel agency in Brazil, inspired by tropicalism. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#2ECC40"
  secondary: "#40E0D0"
  tertiary: "#8B4513"
  neutral: "#FFD700"
  surface: "#CC5500"
  accent: "#FF6F61"
typography:
  h1:
    fontFamily: Montserrat
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Montserrat
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 10px
  md: 20px
  lg: 30px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 798
  author: "designmd.app"
  source: "https://designmd.app/library/tropicalismo-aventureiro-natural"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an adventurous and natural landing page for an ecotourism travel agency in Brazil, inspired by tropicalism. Ideal for landing pages, saas. AI-ready template. Brazilian ecotourism design didn't emerge from boardrooms. It crawled out of the Pantanal wetlands, salt-crusted from Fernando de Noronha tides, carrying red clay under its fingernails. The country's absurd biodiversity — 60,000 plant species, the Amazon basin alone holding 10% of Earth's creatures — forced designers to abandon the sanitized resort aesthetic that dominated travel marketing for decades. You can't reduce the Cerrado to a stock photo gradient.

What emerged instead was a visual language rooted in texture and imperfection. Cracked earth palettes. The specific green of bromeliad leaves catching filtered canopy light. Typography that breathes like humid air — loose tracking, organic weight distribution. Fernando de Noronha's volcanic geology introduced sharp angular contrasts against soft oceanic blues. The Pantanal brought golden-hour warmth and the patience of slow water.

This isn't decoration. It's a design philosophy that says: the wilderness is the product. Every layout choice serves immersion over polish, presence over performance.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Adventurous, Natural, Engaging, Sustainable
- **Keywords:** ecotourism, travel agency, Brazil, adventurous, natural, engaging, sustainable, immersive, exploration, vibrant
- **Era:** 2026+ Aventura Sustentável
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Verde Esmeralda** (#2ECC40) — Primary surface or dominant color
- **Azul Turquesa** (#40E0D0) — Accent highlight, links and focus states
- **Marrom Terra** (#8B4513) — Supporting palette color
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Vermelho Coral** (#FF6F61) — Error states, destructive actions
- **Bege Areia** (#F5DEB3) — Extended palette, decorative use
- **Branco** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Montserrat — Weight 700, tight tracking, used for headline impact
- **Body:** Montserrat — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Montserrat — 0.875rem, weight 500, slight letter-spacing
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

Imagens de paisagens naturais brasileiras em tela cheia, tipografia sans-serif que transmite aventura, elementos de UI com formas de folhas e montanhas, micro-interações de hover com efeito de "descoberta" de detalhes da paisagem, transições de seção com efeito de "exploração" ou "zoom" em mapas.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 10px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (10px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (10px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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
- Do Elementos orgânicos/naturais presentes
- Do Cores vibrantes aplicadas corretamente
- Do Elementos de sustentabilidade presentes
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/tropicalismo-aventureiro-natural · designmd.app -->
