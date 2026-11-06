---
version: "alpha"
name: "Vernacular Acolhedor Brasileiro"
description: "Design an authentic and rustic landing page for a vernacular interior design blog, inspired by Brazilian material culture. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#8B4513"
  secondary: "#D2B48C"
  tertiary: "#6B8E23"
  neutral: "#FFFFFF"
  surface: "#CC5500"
  accent: "#001F3F"
typography:
  h1:
    fontFamily: Dancing Script
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Dancing Script
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
  order: 827
  author: "designmd.app"
  source: "https://designmd.app/library/vernacular-acolhedor-brasileiro"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an authentic and rustic landing page for a vernacular interior design blog, inspired by Brazilian material culture. Ideal for landing pages, saas. AI-ready template. Brazilian vernacular design didn't emerge from studios or manifestos. It grew from necessity — from the hand-painted pharmacy signs in Minas Gerais, the improvised tile mosaics on favela walls, the sun-bleached color palettes of northeastern fishing villages. These weren't aesthetic choices made by designers. They were solutions made by people who needed things to work, to communicate, to feel like home.

What makes this tradition remarkable is its warmth. Unlike European vernacular traditions that often lean austere or functional, Brazilian everyday design carries an inherent generosity. The corner bar with mismatched chairs and hand-lettered menus. The ceramic work passed between generations in Vale do Jequitinhonha. The woven hammocks that define domestic space across the entire north. Every object tells you: sit, stay, you belong here.

The shift from unconscious tradition to intentional design language happened gradually through the 2000s and 2010s, as Brazilian designers — tired of importing Scandinavian minimalism wholesale — began documenting and elevating these patterns. Not as nostalgia. As living vocabulary.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Authentic, Rustic, Inspiring, Community
- **Keywords:** vernacular design, interior design, Brazilian, authentic, rustic, natural materials, cozy, inspiring, sustainable, local
- **Era:** 2026+ Raízes e Tradição
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Marrom Terra** (#8B4513) — Primary surface or dominant color
- **Bege Argila** (#D2B48C) — Secondary surface or text color
- **Verde Musgo** (#6B8E23) — Supporting palette color
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Azul Profundo** (#001F3F) — Primary background surface
- **Amarelo Ocre** (#CC7722) — Warning states, attention indicators
- **Cinza Claro** (#E0E0E0) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Dancing Script — Weight 700, tight tracking, used for headline impact
- **Body:** Dancing Script — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Dancing Script — 0.875rem, weight 500, slight letter-spacing
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

Texturas de barro, cerâmica e fibras naturais em elementos de UI, tipografia que remete a caligrafia ou escrita manual, fotografias de interiores com elementos artesanais, micro-interações de hover com efeito de "desgaste" ou "envelhecimento" sutil, transições de seção suaves e com elementos que se "desdobram" como tecidos.

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
- Do Autenticidade cultural brasileira verificada
- Do Elementos de sustentabilidade presentes
- Do Atmosfera acolhedora e calorosa verificada
- Do Texturas artesanais/rústicas aplicadas
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/vernacular-acolhedor-brasileiro · designmd.app -->
