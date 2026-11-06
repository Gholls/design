---
version: "alpha"
name: "Azulejaria Digital Moderna"
description: "Geometric and modular landing page for a collaborative digital art platform, inspired by Brazilian modernist azulejaria. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#0047AB"
  secondary: "#FFFFFF"
  tertiary: "#000000"
  neutral: "#F0F0F0"
  surface: "#FFD700"
  accent: "#2ECC40"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 173
  author: "designmd.app"
  source: "https://designmd.app/library/azulejaria-digital-moderna"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Geometric and modular landing page for a collaborative digital art platform, inspired by Brazilian modernist azulejaria. Ideal for landing pages, saas. AI-ready template. The azulejo never belonged to museums. It belonged to streets, to kitchens, to the curved walls of colonial churches where light hit glazed surfaces and scattered. Portuguese colonizers brought the tradition to Brazil in the 1600s, and Brazilian artisans immediately broke the rules — bolder colors, looser geometry, narrative panels that told local stories instead of repeating Moorish abstractions. Athos Bulcão shattered the grid entirely in Brasília, proving tiles could be modern, could be architecture itself.

Digital azulejaria picks up exactly there. Artists like Gustavo Magalhães and collectives such as Azulejo Coletivo treat the pixel as a tessera, building modular pattern systems that snap together like ceramic but propagate through screens. The key shift: collaboration. Where a single artisan once painted a panel, now dozens of contributors submit individual tile designs to shared repositories. The pattern emerges from the collective, not the individual.

This isn't nostalgia rendered in vectors. It's a living practice — generative algorithms producing variations no hand could sustain, open-source tile libraries anyone can fork, public projections turning building facades into participatory mosaics. The modularity that made azulejos scalable across colonial architecture makes them native to digital systems.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Geometric, Modular, Dynamic, Artistic
- **Keywords:** digital art, collaborative, modular, geometric, dynamic, artistic, Brazilian modernism, azulejo, pattern, vibrant
- **Era:** 2026+ Arte e Tecnologia Brasileira
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Azul Cobalto** (#0047AB) — Accent highlight, links and focus states
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#000000) — Dark surface, primary background
- **Cinza Claro** (#F0F0F0) — Secondary text, borders, muted elements
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Verde Esmeralda** (#2ECC40) — Success states, positive indicators
- **Vermelho Coral** (#FF6F61) — Error states, destructive actions
- **Cinza Médio** (#6C757D) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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

Layouts de grid modular inspirados em azulejos, com elementos geométricos que rotacionam e se combinam, tipografia sans-serif limpa e moderna, ícones vetoriais que remetem a formas abstratas, micro-interações de hover com mudança de padrão ou cor do azulejo, transições de seção com efeito de "montagem" de módulos.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (4px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (4px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Layouts de grid modular (azulejo)
- Do Elementos geométricos rotacionáveis
- Do Tipografia sans-serif limpa
- Do Ícones vetoriais abstratos
- Do Micro-interações de mudança de padrão/cor
- Do Transições de "montagem" de módulos.


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/azulejaria-digital-moderna · designmd.app -->
