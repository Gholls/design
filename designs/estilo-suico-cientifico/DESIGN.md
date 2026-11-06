---
version: "alpha"
name: "Estilo Suíço Científico"
description: "Design an academic and precise Swiss Style landing page for an online scientific publication. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#000000"
  tertiary: "#0047AB"
  neutral: "#EFEFEF"
  surface: "#006400"
  accent: "#8B0000"
typography:
  h1:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 382
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-suico-cientifico"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an academic and precise Swiss Style landing page for an online scientific publication. Ideal for landing pages, modern websites. AI-ready template. The Swiss style didn't arrive in laboratories by accident. It was pulled there — by necessity. When you're presenting dense datasets, complex nomenclature, and multi-variable relationships, decoration isn't just unhelpful, it's hostile. The International Typographic Style gave scientific publishing what it desperately needed: a grid rigid enough to hold chaos.

Think of the journal layouts from ETH Zürich in the 1960s, or the CERN technical reports that followed. Columns weren't aesthetic choices — they were information architecture. Müller-Brockmann's grids weren't designed for posters alone; they were systems for managing cognitive load. The same 12-column structure that organized a concert announcement could hold a periodic table, a regression analysis, or a phylogenetic tree. That's not coincidence. That's universality.

What makes this lineage matter today: scientific communication still drowns in noise. The Swiss approach strips interfaces back to pure signal. No gradients softening the data. No rounded corners pretending complexity is friendly. Just structure, hierarchy, and the quiet confidence that the content speaks loudest when nothing else is shouting.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Academic, Precise, Structured
- **Keywords:** scientific, academic, research, precise, structured, clean, legible, informative, professional, authoritative
- **Era:** 2026+ Conhecimento Estruturado
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#000000) — Dark surface, primary background
- **Azul Científico** (#0047AB) — Accent highlight, links and focus states
- **Cinza Claro** (#EFEFEF) — Secondary text, borders, muted elements
- **Verde Escuro** (#006400) — Deep contrast surface
- **Vermelho Escuro** (#8B0000) — Deep contrast surface
- **Amarelo Ouro** (#FFD700) — Warning states, attention indicators
- **Cinza Médio** (#6C757D) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Akzidenz-Grotesk — Weight 700, tight tracking, used for headline impact
- **Body:** Akzidenz-Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Akzidenz-Grotesk — 0.875rem, weight 500, slight letter-spacing
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

Layouts de grid com forte ênfase em tipografia e legibilidade, uso de sans-serif (Akzidenz-Grotesk/Roboto) para corpo e títulos, gráficos e tabelas de dados limpos, micro-interações de destaque de texto e links, transições de página rápidas e diretas.

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

- Do Layouts de grid com tipografia
- Do Tipografia sans-serif legível
- Do Gráficos/tabelas limpos
- Do Micro-interações de destaque
- Do Transições rápidas
- Do Foco em legibilidade.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-suico-cientifico · designmd.app -->
