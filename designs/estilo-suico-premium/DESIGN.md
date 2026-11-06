---
version: "alpha"
name: "Estilo Suíço Premium"
description: "Design an elegant and minimalist Swiss Style landing page for a premium product brand. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#2F4F4F"
  tertiary: "#B8860B"
  neutral: "#000000"
  surface: "#F5F5DC"
  accent: "#000080"
typography:
  h1:
    fontFamily: Univers
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Univers
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 384
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-suico-premium"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an elegant and minimalist Swiss Style landing page for a premium product brand. Ideal for landing pages, modern websites. AI-ready template. Swiss design never tried to be luxury. It just refused to be cheap. The International Typographic Style emerged in the 1950s from a radical premise: strip everything that doesn't earn its place. Grids weren't decoration — they were discipline. Helvetica wasn't trendy — it was inevitable. What happened next is interesting: luxury brands noticed that restraint communicates confidence. When you remove ornament, what remains must be flawless. Every pixel carries weight.

In digital products, this translates directly. Premium SaaS interfaces that breathe — generous whitespace, considered type hierarchies, deliberate color restraint — signal that the product itself is the luxury. No gradients screaming for attention. No animations compensating for weak hierarchy. The Swiss approach to premium digital design isn't about adding expensive-looking elements. It's about having the confidence to subtract until only precision remains.

The math is simple: fewer elements means each one matters more. A single typeface at three weights. A palette of two colors plus neutrals. Spacing that follows a strict scale. This is how restraint becomes opulence.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Elegant, Minimalist, High-End
- **Keywords:** premium products, luxury, elegant, minimalist, high-end, sophisticated, clean, precise, quality, exclusive
- **Era:** 2026+ Luxo Discreto
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Cinza Chumbo** (#2F4F4F) — Secondary text, borders, muted elements
- **Dourado Suave** (#B8860B) — Premium accent, decorative highlights
- **Preto** (#000000) — Dark surface, primary background
- **Bege** (#F5F5DC) — Extended palette, decorative use
- **Azul Marinho** (#000080) — Secondary accent
- **Verde Escuro** (#006400) — Deep contrast surface
- **Marrom** (#A52A2A) — Extended palette, decorative use


## Typography

- **Display / Hero:** Univers — Weight 700, tight tracking, used for headline impact
- **Body:** Univers — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Univers — 0.875rem, weight 500, slight letter-spacing
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

Layouts limpos e simétricos, tipografia sans-serif (Univers/Akzidenz-Grotesk) com espaçamento preciso, imagens de produto de alta resolução com foco em detalhes, uso mínimo de cores, micro-interações de hover com destaque de informações, transições de seção suaves e controladas.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Layouts limpos/simétricos
- Do Tipografia sans-serif precisa
- Do Imagens de produto de alta resolução
- Do Uso mínimo de cores
- Do Micro-interações de destaque
- Do Transições controladas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-suico-premium · designmd.app -->
