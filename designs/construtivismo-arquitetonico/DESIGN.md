---
version: "alpha"
name: "Construtivismo Arquitetônico"
description: "Precise and structured constructivist landing page for a modern architecture firm. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#607D8B"
  secondary: "#FFFFFF"
  tertiary: "#212121"
  neutral: "#263238"
  surface: "#FF5722"
  accent: "#4CAF50"
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
  order: 270
  author: "designmd.app"
  source: "https://designmd.app/library/construtivismo-arquitetonico"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Precise and structured constructivist landing page for a modern architecture firm. Ideal for landing pages, modern websites. AI-ready template. Tatlin's Monument to the Third International never got built. That's almost the point. The 1920 proposal — a leaning double helix of iron and glass, taller than the Eiffel Tower — was pure structural ambition rendered visible. No ornament. No apology. The skeleton was the building.

Russian Constructivism treated architecture as ideology made physical. Rodchenko's graphics, Melnikov's workers' clubs, the Vesnin brothers' competition entries — they shared a conviction that form should expose its own logic. Diagonal tension. Asymmetric balance. Materials doing exactly what materials do, nothing more.

This translates to digital design more directly than most historical movements. When you strip a UI to its structural bones — visible grid lines, exposed hierarchy, type that announces its own weight — you're working in the same territory. The Constructivists didn't decorate structure. They made structure the entire visual argument. That honesty hits different in an era of gratuitous blur and floating cards.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Precise, Structured, Modern
- **Keywords:** architecture, modern, innovative, precise, structured, geometric, functional, clean, professional, dynamic
- **Era:** 2026+ Design Urbano
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Cinza Concreto** (#607D8B) — Secondary text, borders, muted elements
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#212121) — Dark surface, primary background
- **Azul Escuro** (#263238) — Dark surface, primary background
- **Laranja Queimado** (#FF5722) — Warm accent, call-to-action secondary
- **Verde Floresta** (#4CAF50) — Success states, positive indicators
- **Amarelo Ouro** (#FFC107) — Warning states, attention indicators
- **Cinza Claro** (#B0BEC5) — Secondary text, borders, muted elements


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

Grids complexos e sobrepostos, formas geométricas que guiam o olhar, tipografia sans-serif limpa e técnica, fotografias de arquitetura com ângulos dramáticos, micro-interações de hover com expansão de elementos, transições de seção com efeito de "construção".

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

- Do Grids complexos/sobrepostos
- Do Formas geométricas
- Do Tipografia sans-serif técnica
- Do Fotos de arquitetura
- Do Micro-interações de expansão
- Do Transições de "construção".


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/construtivismo-arquitetonico · designmd.app -->
