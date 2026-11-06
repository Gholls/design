---
version: "alpha"
name: "Estilo Suíço Educacional"
description: "Design an educational and structured Swiss Style landing page for an online course platform. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#003366"
  tertiary: "#F5F5F5"
  neutral: "#000000"
  surface: "#2ECC40"
  accent: "#FF8C00"
typography:
  h1:
    fontFamily: Roboto
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Roboto
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 20.0px
  md: 40.0px
  lg: 80.0px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 385
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-suico-educacional"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an educational and structured Swiss Style landing page for an online course platform. Ideal for landing pages, modern websites. AI-ready template. Swiss design found its way into education long before screens existed. The International Typographic Style — born in Zurich and Basel during the 1950s — was essentially a teaching methodology disguised as graphic design. Grid systems, clear hierarchy, restrained color. These weren't aesthetic choices. They were cognitive ones. When Josef Müller-Brockmann laid out his grids, he was solving for comprehension, not beauty.

The translation from textbook to screen happened almost naturally. Educational publishers had been using Swiss principles for decades — structured layouts that guide the eye, typography that establishes clear information hierarchy, whitespace that gives the brain room to process. Digital learning interfaces inherited this DNA directly. The best course platforms today look like they could have been designed in 1962, and that's not nostalgia — it's because the problem hasn't changed. People need to absorb complex information without friction.

What makes Swiss style particularly suited to technical education is its refusal to decorate. When you're teaching someone to code or master a new framework, every ornamental element is cognitive load. Every gradient is a distraction. The Swiss approach strips the interface down to pure signal.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Educational, Structured, Clear
- **Keywords:** online education, courses, technical skills, structured, clear, functional, precise, legible, professional, efficient
- **Era:** 2026+ Aprendizado Estruturado
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Azul Escuro** (#003366) — Dark surface, primary background
- **Cinza Claro** (#F5F5F5) — Secondary text, borders, muted elements
- **Preto** (#000000) — Dark surface, primary background
- **Verde Esmeralda** (#2ECC40) — Success states, positive indicators
- **Laranja** (#FF8C00) — Warm accent, call-to-action secondary
- **Roxo** (#8A2BE2) — Accent color, emphasis elements
- **Cinza Médio** (#6C757D) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Roboto — Weight 700, tight tracking, used for headline impact
- **Body:** Roboto — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Roboto — 0.875rem, weight 500, slight letter-spacing
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

Layouts de grid para organização de cursos, tipografia sans-serif (Roboto/Open Sans) com alta legibilidade, ícones informativos, gráficos de progresso limpos, micro-interações de destaque de curso, transições de seção diretas e funcionais.

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

- Do Layouts de grid para cursos
- Do Tipografia sans-serif legível
- Do Ícones informativos
- Do Gráficos de progresso limpos
- Do Micro-interações de destaque de curso
- Do Transições funcionais.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-suico-educacional · designmd.app -->
