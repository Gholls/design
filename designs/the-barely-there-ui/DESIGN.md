---
version: "alpha"
name: "The Barely-There UI"
description: "Design an ultra-minimal AI-native interface inspired by OpenAI and Perplexity. Ideal for plataformas de ia, saas b2b enterprise, dashboards analiticos, ferramentas de produtividade, interfaces de dados. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#000000"
  tertiary: "#808080"
  neutral: "#F5F5F5"
  surface: "#BDBDBD"
  accent: "#424242"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 3.0rem
  md: 6.0rem
  lg: 12.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 781
  author: "designmd.app"
  source: "https://designmd.app/library/the-barely-there-ui"
  tags: ["风格模板", "plataformas de ia", "saas b2b enterprise", "interfaces de dados"]
---

## Overview

Design an ultra-minimal AI-native interface inspired by OpenAI and Perplexity. Ideal for plataformas de ia, saas b2b enterprise, dashboards analiticos, ferramentas de produtividade, interfaces de dados. AI-ready template. The barely-there UI didn't emerge from nowhere — it's the logical endpoint of a conversation Swiss designers started in the 1950s. Müller-Brockmann and his grid obsessives proved that restraint communicates more than decoration ever could. But where International Typographic Style still announced itself through bold structure, the barely-there approach takes that philosophy to its vanishing point.

The real catalyst was the reading app boom of the early 2010s. Instapaper, iA Writer, Medium's original design — they all asked the same question: what if the interface just... got out of the way? Not hidden behind hamburger menus, but dissolved into near-invisibility through opacity hierarchies and ultra-thin strokes. The chrome didn't disappear; it became translucent.

What makes this trend genuinely interesting is its confidence. It takes a designer who trusts their content hierarchy completely to reduce UI elements to 40% opacity hairlines. There's no safety net of bold borders or high-contrast containers. You're betting everything on spatial relationships and typographic weight doing the heavy lifting. When it works — and it often does — the user forgets they're looking at an interface at all.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Ultra-Minimal, Opacity-Driven, Data-Focused, AI-Native
- **Keywords:** barely-there, ultra-thin, opacity hierarchy, single typeface, data visualization, white space architecture, cognitive reduction, AI interface, technical minimalism, high-resolution
- **Era:** 2025-2026 AI-Native
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Branco Puro** (#FFFFFF) — Light surface, card backgrounds
- **Preto Absoluto** (#000000) — Dark surface, primary background
- **Cinza Neutro** (#808080) — Secondary text, borders, muted elements
- **Cinza Claro** (#F5F5F5) — Secondary text, borders, muted elements
- **Cinza Medio** (#BDBDBD) — Secondary text, borders, muted elements
- **Cinza Escuro** (#424242) — Deep contrast surface


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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Opacidade como hierarquia (100% titulo, 87% corpo, 60% secundario), transicoes ultra-suaves 300ms, zero sombras, zero gradientes, espacamento arquitetonico generoso, visualizacoes de dados rigorosas substituindo ilustracoes

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Apenas UMA familia tipografica
- Do Pesos ultra-finos (100-300)
- Do Hierarquia por opacidade (4 niveis)
- Do Maximo 3 cores
- Do Zero sombras e gradientes
- Do Visualizacoes de dados no lugar de ilustracoes
- Do Espacamento arquitetonico generoso
- Do Contraste WCAG AA verificado


## Use Case

Platforms de IA, SaaS B2B enterprise, Dashboards analiticos, Tools de produtividade, Interfaces de dados

<!-- Source: https://designmd.app/library/the-barely-there-ui · designmd.app -->
