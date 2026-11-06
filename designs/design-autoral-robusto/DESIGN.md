---
version: "alpha"
name: "Design Autoral Robusto"
description: "Design an authentic and robust landing page for an online store of authorial Brazilian design products, inspired by Sérgio Rodrigues. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#4A2C2A"
  secondary: "#F5F5DC"
  tertiary: "#B8860B"
  neutral: "#000000"
  surface: "#006400"
  accent: "#000080"
typography:
  h1:
    fontFamily: Lora
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Lora
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
  order: 326
  author: "designmd.app"
  source: "https://designmd.app/library/design-autoral-robusto"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an authentic and robust landing page for an online store of authorial Brazilian design products, inspired by Sérgio Rodrigues. Ideal for landing pages, saas. AI-ready template. Brazilian authorial design didn't emerge from European modernism's clean-room logic. It grew from sawdust and sweat — from marceneiros in São Paulo workshops who understood that jacarandá has a temper, that freijó bends differently in humidity. Zanini de Zanine built his early reputation literally from demolition debris, turning reclaimed peroba rosa into furniture that felt both ancient and confrontational. That's the lineage.

Jader Almeida took a different path but arrived somewhere adjacent. His work is precision-obsessed — CNC-milled curves that reference organic forms without mimicking them. There's a tension in his pieces between industrial capability and handcraft sensibility that feels uniquely Brazilian. Not Italian minimalism, not Scandinavian restraint. Something warmer, denser, more tactile.

This tradition produces objects that refuse neutrality. The Campana brothers pushed it toward chaos; designers like Guilherme Wentz and Aristeu Pires pull it back toward discipline. But the through-line remains: material honesty, volumetric confidence, and an unapologetic rejection of the disposable.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Authentic, Curated, Crafted, Unique
- **Keywords:** authorial design, Brazilian, crafted, unique, authentic, robust, natural materials, artistic, exclusive, curated
- **Era:** 2026+ Valor do Artesanato
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Marrom Escuro** (#4A2C2A) — Dark surface, primary background
- **Bege** (#F5F5DC) — Secondary surface or text color
- **Dourado Envelhecido** (#B8860B) — Premium accent, decorative highlights
- **Preto** (#000000) — Dark surface, primary background
- **Verde Garrafa** (#006400) — Success states, positive indicators
- **Azul Marinho** (#000080) — Secondary accent
- **Cinza Chumbo** (#36454F) — Secondary text, borders, muted elements
- **Branco** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Lora — Weight 700, tight tracking, used for headline impact
- **Body:** Lora — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Lora — 0.875rem, weight 500, slight letter-spacing
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

Texturas de madeira maciça e couro em elementos de UI, tipografia serifada clássica e sans-serif limpa, fotografias de produtos com foco em detalhes e acabamento, micro-interações de hover com efeito de "zoom" em detalhes do produto, transições de seção suaves e com efeito de "revelação" de camadas.

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
- Do Elementos orgânicos/naturais presentes
- Do Autenticidade cultural brasileira verificada
- Do Texturas artesanais/rústicas aplicadas
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/design-autoral-robusto · designmd.app -->
