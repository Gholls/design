---
version: "alpha"
name: "ClearInvoice SaaS Hero"
description: "SaaS hero with HLS background video at full opacity no overlay. Ideal for saas de faturamento, plataformas de billing, ferramentas de pagamento, gestão financeira. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#FF3300"
  neutral: "#EE7926"
  surface: "#EA580C"
  accent: "#e7d04c"
typography:
  h1:
    fontFamily: Switzer
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Switzer
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 253
  author: "designmd.app"
  source: "https://designmd.app/library/clearinvoice-saas-hero"
  tags: ["风格模板", "saas de faturamento", "gestão financeira"]
---

## Overview

SaaS hero with HLS background video at full opacity no overlay. Ideal for saas de faturamento, plataformas de billing, ferramentas de pagamento, gestão financeira. AI-ready template. The clean SaaS hero for financial products didn't emerge from aesthetic preference — it emerged from necessity. When Stripe launched their first marketing site, they understood something fundamental: people handing over banking credentials need to feel safe before they feel excited. The entire fintech design language shifted away from the cluttered dashboards and stock-photo-heavy layouts of legacy billing tools toward radical simplicity.

This wasn't minimalism for minimalism's sake. Every removed element was a trust signal. White space said 'we have nothing to hide.' A single gradient button said 'there's one thing to do here, and it's safe.' The futuristic tech aesthetic — subtle glows, clean geometry, restrained color palettes — communicated competence without intimidation. Companies like Paddle, Chargebee, and FreshBooks followed this pattern because conversion data backed it up: fewer visual elements meant higher signup rates for money-handling products.

The clear invoice hero became a genre unto itself. One headline, one subline, one CTA, maybe a floating UI mockup. It works because financial SaaS lives or dies on perceived reliability, and visual noise is the enemy of perceived reliability.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** SaaS, Gradient CTA, Video HLS, Social Proof
- **Keywords:** SaaS, faturamento, gradient button, HLS video, social proof, avatars, glow effect, Switzer font, barra gradiente topo, inner stroke
- **Era:** 2024-2026 SaaS Conversion-Focused
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Gradiente from** (#FF3300) — Warm accent, call-to-action secondary
- **to** (#EE7926) — Supporting palette color
- **** (rgba(255,255,255,0.9)) — Supporting palette color
- **Laranja Glow** (#EA580C) — Warm accent, call-to-action secondary
- **Gradiente Topo from** (#ccf) — Extended palette, decorative use
- **via** (#e7d04c) — Extended palette, decorative use
- **to** (#31fb78) — Extended palette, decorative use
- **Borda Interna** (rgba(255,255,255,0.2)) — Extended palette, decorative use
- **Borda Preta** (rgba(0,0,0,0.05)) — Extended palette, decorative use


## Typography

- **Display / Hero:** Switzer — Weight 700, tight tracking, used for headline impact
- **Accent:** Geist — Used for decorative or emphasis text
- **Body:** Switzer — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Switzer — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Stream HLS de vídeo abstrato com formas fluidas e orgânicas em movimento. Tons escuros com destaques luminosos sutis, criando textura visual dinâmica. Exibido em opacity 100% sem overlay escuro, o vídeo serve como fundo imersivo total. Aspect ratio widescreen (~16:9 baseado no storyboard 284x160px), duração ~14s em loop contínuo. | EFEITOS CSS: Vídeo de fundo HLS (autoplay, loop, muted) com opacity 100% sem overlay, barra gradiente 5px no topo (from #ccf via #e7d04c to #31fb78), botão primário com gradiente laranja e glow (blur-lg opacity-20 atrás), inner stroke 1.5px (border-white/20), hover scale 1.05 com glow opacity-60 e seta deslizante, botão secundário bg-white/90 backdrop-blur, social proof com avatars sobrepostos, animações staggered de entrada

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Vídeo HLS tela cheia sem overlay
- Do Barra gradiente 5px no topo
- Do Botão gradiente laranja com glow e inner stroke
- Do Hover com scale e seta deslizante
- Do Botão secundário branco backdrop-blur
- Do Social proof com avatars sobrepostos
- Do Animações staggered
- Do Responsivo com mobile hamburger


## Use Case

SaaS de faturamento, Platforms de billing, Tools de pagamento, Gestão financeira

<!-- Source: https://designmd.app/library/clearinvoice-saas-hero · designmd.app -->
