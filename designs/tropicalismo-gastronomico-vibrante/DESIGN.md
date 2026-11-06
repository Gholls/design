---
version: "alpha"
name: "Tropicalismo Gastronômico Vibrante"
description: "Vibrant and flavorful landing page for a Brazilian gastronomy festival, inspired by tropicalism. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#CC5500"
  secondary: "#32CD32"
  tertiary: "#FFD700"
  neutral: "#FF6347"
  surface: "#40E0D0"
  accent: "#8A2BE2"
typography:
  h1:
    fontFamily: Pacifico
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Pacifico
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
  order: 797
  author: "designmd.app"
  source: "https://designmd.app/library/tropicalismo-gastronomico-vibrante"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Vibrant and flavorful landing page for a Brazilian gastronomy festival, inspired by tropicalism. Ideal for landing pages, saas. AI-ready template. Brazilian food design didn't emerge from Michelin-starred kitchens or corporate branding agencies. It came from the street. From the hand-painted signs above juice bars in Belém, the neon-on-black menus of São Paulo's lanchonetes, the improvised typography of feira livre vendors stacking towers of tropical fruit. This is a visual language born from abundance and urgency — where communication needs to be loud, immediate, and unmistakably alive.

The country's culinary identity — açaí bowls in their deep violet geometry, the burnt-orange layers of feijoada served in black iron, the chaotic color of a churrasco spread — generates a palette that no European food tradition can replicate. It's saturated without apology. Warm without restraint. The visual codes carry the heat of the equator and the density of a culture that treats eating as collective ritual, never solitary consumption.

What makes this tradition remarkable for design is its refusal to be minimal. Brazilian gastronomic branding at its best embraces visual maximalism as honesty — the plate is full, the flavor is complex, so the design should match. When farm-to-table movements and food festivals lean into this heritage rather than sanitizing it, they tap into something genuinely powerful: a visual system where excess is authenticity.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Vibrant, Flavorful, Authentic, Engaging
- **Keywords:** food festival, Brazilian cuisine, local ingredients, vibrant, flavorful, authentic, engaging, cultural, fresh, diverse
- **Era:** 2026+ Celebração do Sabor
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Verde Limão** (#32CD32) — Secondary surface or text color
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Vermelho Tomate** (#FF6347) — Error states, destructive actions
- **Azul Turquesa** (#40E0D0) — Secondary accent
- **Roxo Açaí** (#8A2BE2) — Accent color, emphasis elements
- **Marrom Terra** (#8B4513) — Extended palette, decorative use
- **Branco** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Pacifico — Weight 700, tight tracking, used for headline impact
- **Body:** Pacifico — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Pacifico — 0.875rem, weight 500, slight letter-spacing
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

Imagens de alimentos coloridos e frescos em grande destaque, tipografia orgânica e expressiva, elementos de UI com formas de frutas e vegetais, micro-interações de hover com efeito de "sabor" visual, transições de seção com efeito de "camadas" de ingredientes.

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
- Do Autenticidade cultural brasileira verificada
- Do Cores vibrantes aplicadas corretamente
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/tropicalismo-gastronomico-vibrante · designmd.app -->
