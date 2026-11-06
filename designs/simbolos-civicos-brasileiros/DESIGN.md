---
version: "alpha"
name: "Símbolos Cívicos Brasileiros"
description: "Design an informative and symbolic landing page for a civic education platform, inspired by Aloísio Magalhães' graphic identity. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#009739"
  secondary: "#FFD700"
  tertiary: "#002776"
  neutral: "#FFFFFF"
  surface: "#E4002B"
  accent: "#FF8C00"
typography:
  h1:
    fontFamily: Montserrat
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Montserrat
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 710
  author: "designmd.app"
  source: "https://designmd.app/library/simbolos-civicos-brasileiros"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an informative and symbolic landing page for a civic education platform, inspired by Aloísio Magalhães' graphic identity. Ideal for landing pages, saas. AI-ready template. Brazil's civic visual language didn't emerge from a design studio. It was forged through political rupture — the Republic's flag adopted in 1889 carried positivist philosophy literally stitched into its fabric. Green for the House of Braganza, yellow for the Habsburgs, the celestial globe frozen at a specific moment in time over Rio. These aren't arbitrary choices. They're ideological artifacts.

Translating this weight into digital platforms is where most government projects fail. They flatten the symbolism into decorative stripe patterns or slap the flag on a header and call it civic design. The real opportunity is structural: how do you encode the democratic tension between order and progress into an interface that teaches citizenship? The green-yellow-blue palette carries baggage — it's been co-opted by political movements across the spectrum. A civic design system must acknowledge this complexity rather than pretend neutrality.

The best Brazilian civic digital work treats national symbols as living typography — elements that carry meaning through context, not just color. Platforms like gov.br started getting this right around 2020, moving away from literal flag reproduction toward systemic use of civic color relationships.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Informative, Symbolic, Engaging, Modern
- **Keywords:** civic education, social awareness, Brazilian identity, symbolic, engaging, modern, clear, structured, impactful, community
- **Era:** 2026+ Cidadania Digital
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Verde Bandeira** (#009739) — Primary surface or dominant color
- **Amarelo Ouro** (#FFD700) — Warning states, attention indicators
- **Azul Céu** (#002776) — Accent highlight, links and focus states
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Vermelho Vivo** (#E4002B) — Error states, destructive actions
- **Laranja Vibrante** (#FF8C00) — Warm accent, call-to-action secondary
- **Cinza Claro** (#F0F0F0) — Secondary text, borders, muted elements
- **Preto** (#000000) — Deep contrast surface


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

Uso de símbolos gráficos abstratos e geométricos, tipografia sans-serif limpa e impactante, infográficos e visualizações de dados claros, micro-interações de hover com destaque de informações importantes, transições de seção com efeito de "revelação" de conceito.

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
- Do Elementos de comunidade presentes
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/simbolos-civicos-brasileiros · designmd.app -->
