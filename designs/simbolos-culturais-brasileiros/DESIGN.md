---
version: "alpha"
name: "Símbolos Culturais Brasileiros"
description: "Design an authentic and engaging landing page for a Brazilian cultural tourism platform, inspired by graphic symbolism. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FFD700"
  secondary: "#009739"
  tertiary: "#87CEEB"
  neutral: "#8B4513"
  surface: "#FF6F61"
  accent: "#CC5500"
typography:
  h1:
    fontFamily: Lora
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Lora
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 711
  author: "designmd.app"
  source: "https://designmd.app/library/simbolos-culturais-brasileiros"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an authentic and engaging landing page for a Brazilian cultural tourism platform, inspired by graphic symbolism. Ideal for landing pages, saas. AI-ready template. Brazilian cultural symbols didn't arrive in design through careful academic study. They crashed in — loud, syncopated, impossible to ignore. Samba rhythms dictated layout tempo decades before anyone called it 'motion design.' Carnival's chromatic excess taught us that restraint isn't always the answer. Capoeira's fluid geometry — that constant negotiation between attack and grace — maps directly onto interaction patterns that feel alive rather than merely functional.

The regional layer is where it gets genuinely interesting. Marajoara ceramics from the Amazon carry geometric systems that predate European grid theory by centuries. Cordel literature woodcuts from the Northeast deliver narrative density in a single frame. Bahian candomblé iconography operates on symbolic registers that Western design vocabulary barely touches. These aren't decorative assets to sprinkle over tourism interfaces. They're complete visual languages with their own internal logic.

Designers working in cultural tourism have a responsibility here. Strip these symbols from context and you get airport-gift-shop aesthetics. Embed them with understanding and you create experiences that make visitors feel the difference between consuming a culture and actually encountering one.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Authentic, Engaging, Visual, Cultural
- **Keywords:** cultural tourism, Brazil, authentic experiences, symbolic, engaging, visual, traditional, diverse, immersive, local
- **Era:** 2026+ Imersão Cultural
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Amarelo Ouro** (#FFD700) — Warning states, attention indicators
- **Verde Bandeira** (#009739) — Secondary surface or text color
- **Azul Céu** (#87CEEB) — Accent highlight, links and focus states
- **Marrom Terra** (#8B4513) — Supporting palette color
- **Vermelho Coral** (#FF6F61) — Error states, destructive actions
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Roxo Açaí** (#8A2BE2) — Accent color, emphasis elements
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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Mapas estilizados com ícones de pontos turísticos, tipografia serifada e sans-serif que remete à tradição e modernidade, fotografias de festivais e culinária local, micro-interações de hover com informações culturais, transições de seção com efeito de "desdobramento" de mapa ou "revelação" de paisagem.

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

- Do Paleta de cores brasileira verificada
- Do Autenticidade cultural brasileira verificada
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/simbolos-culturais-brasileiros · designmd.app -->
