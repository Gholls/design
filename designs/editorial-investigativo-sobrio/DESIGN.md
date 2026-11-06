---
version: "alpha"
name: "Editorial Investigativo Sóbrio"
description: "Serious and informative editorial landing page for an investigative journalism platform. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#2C3E50"
  secondary: "#FFFFFF"
  tertiary: "#8B0000"
  neutral: "#000000"
  surface: "#001F3F"
  accent: "#6B8E23"
typography:
  h1:
    fontFamily: Merriweather
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Merriweather
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 349
  author: "designmd.app"
  source: "https://designmd.app/library/editorial-investigativo-sobrio"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Serious and informative editorial landing page for an investigative journalism platform. Ideal for landing pages, modern websites. AI-ready template. Investigative journalism has always demanded a visual language that says: trust this. The tradition runs deep — from the broadsheet gravity of the early New York Times to the stark, almost clinical layouts ProPublica pioneered in the digital era. These publications understood something fundamental: when you're asking readers to spend forty minutes with a corruption exposé, the design cannot compete with the content. It must recede. It must signal rigor.

The Guardian's 2018 redesign crystallized this thinking for the web age. Egyptian Slab headlines. Generous whitespace. A type hierarchy so clear you could navigate a 6,000-word investigation without ever feeling lost. The Intercept pushed further — monospaced accents, document-style callouts, layouts that evoked declassified files. Every choice whispered authenticity.

What connects these approaches isn't minimalism for its own sake. It's restraint as editorial position. The sobriety of the page becomes an argument: we did the work, we have the evidence, we don't need to shout. Typography carries the weight that sensationalism refuses to.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Serious, Informative, Authoritative
- **Keywords:** investigative journalism, news, analysis, authoritative, informative, serious, clean, structured, deep, trustworthy
- **Era:** 2026+ Informação Crítica
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Cinza Escuro** (#2C3E50) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Vermelho Escuro** (#8B0000) — Dark surface, primary background
- **Preto** (#000000) — Dark surface, primary background
- **Azul Marinho** (#001F3F) — Secondary accent
- **Verde Oliva** (#6B8E23) — Success states, positive indicators
- **Amarelo Ocre** (#CC7722) — Warning states, attention indicators
- **Cinza Claro** (#E0E0E0) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Merriweather — Weight 700, tight tracking, used for headline impact
- **Body:** Merriweather — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Merriweather — 0.875rem, weight 500, slight letter-spacing
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

Tipografia serifada clássica para títulos e sans-serif para corpo, layouts de coluna de jornal, imagens em preto e branco ou com tons sépios, elementos gráficos de infográficos e dados, micro-interações de destaque de texto importante, transições de seção diretas e sem distrações.

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

- Do Tipografia serifada/sans-serif
- Do Layouts de coluna de jornal
- Do Imagens P&B/sépia
- Do Infográficos/dados
- Do Micro-interações de destaque de texto
- Do Transições diretas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/editorial-investigativo-sobrio · designmd.app -->
