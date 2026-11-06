---
version: "alpha"
name: "Soft Maximalism"
description: "Soft maximalist landing page with CONTROLLED CHAOS energy. Ideal for marcas jovens, agencias criativas, lancamentos de produto, portfolios ousados, eventos e festivais. AI-ready template."
colors:
  primary: "#0A0A0A"
  secondary: "#FAFAFA"
  tertiary: "#2D2D2D"
  neutral: "#FF2D6F"
  surface: "#FFE600"
  accent: "#3D5AFE"
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 717
  author: "designmd.app"
  source: "https://designmd.app/library/soft-maximalism"
  tags: ["风格模板", "marcas jovens", "agencias criativas", "portfolios ousados"]
---

## Overview

Soft maximalist landing page with CONTROLLED CHAOS energy. Ideal for marcas jovens, agencias criativas, lancamentos de produto, portfolios ousados, eventos e festivais. AI-ready template. Soft maximalism emerged as a direct rebellion against the sterile minimalism that dominated digital design through the 2010s. Designers got bored — and rightfully so. But instead of swinging into full visual anarchy like the early-2000s rave flyer aesthetic, soft maximalism introduced restraint into excess. Think of it as maximalism that went to art school and actually paid attention.

The movement draws heavily from 1960s pop art, Memphis Group's irreverence, and the layered editorial layouts of magazines like The Face and Emigre. What makes it distinct from pure chaos is intentional hierarchy — every oversized headline, every clashing color block, every overlapping element still serves a reading order. You can pile textures, mix type scales aggressively, and stack visual layers without losing the user.

It's controlled chaos with a grid underneath. The density is the point, but legibility is never sacrificed for spectacle. That's the discipline most people miss when they attempt this style.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Controlled Chaos, Bold Typography, Scroll-Reactive, Layered Animation
- **Keywords:** soft maximalism, controlled chaos, oversized typography, bold, scroll-driven, layered animations, vibrant pops, dynamic components, youth-focused, energetic, viewport-filling text
- **Era:** 2025-2026 Gen-Z Energy
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Preto Base** (#0A0A0A) — Primary background surface
- **Branco Off-White** (#FAFAFA) — Light surface, card backgrounds
- **Cinza Quente** (#2D2D2D) — Secondary text, borders, muted elements
- **Pop Magenta** (#FF2D6F) — Decorative accent, highlight elements
- **Pop Amarelo** (#FFE600) — Warning states, attention indicators
- **Pop Azul Eletrico** (#3D5AFE) — Secondary accent
- **Pop Verde Lima** (#76FF03) — Success states, positive indicators


## Typography

- **Display / Hero:** Space Grotesk — Weight 700, tight tracking, used for headline impact
- **Accent:** Inter — Used for decorative or emphasis text
- **Body:** Space Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Space Grotesk — 0.875rem, weight 500, slight letter-spacing
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

Tipografia gigantesca ocupando 80% da viewport, animacoes em camadas reagindo ao scroll, componentes dinamicos com parallax, pops de cor unicos e disruptivos por secao, transicoes bold 400-600ms com easing dramatico, mix-blend-mode para sobreposicoes

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Tipografia hero ocupando 80% viewport
- Do Animacoes reagindo ao scroll
- Do Um pop de cor disruptivo por secao
- Do Mix-blend-mode em sobreposicoes
- Do Parallax em camadas
- Do Hover states dramaticos
- Do Usabilidade mantida apesar do caos visual
- Do Responsivo com stack vertical no mobile


## Use Case

Youth brands, Agencias creative, Lancamentos de produto, Portfolios ousados, Events e festivais

<!-- Source: https://designmd.app/library/soft-maximalism · designmd.app -->
