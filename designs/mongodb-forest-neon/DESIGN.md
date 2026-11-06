---
version: "alpha"
name: "MongoDB Forest Neon"
description: "MongoDB-inspired forest-dark landing page. Ideal for databases, infraestrutura de dados, plataformas developer, apis de dados. AI-ready template."
colors:
  primary: "#001e2b"
  secondary: "#00ed64"
  tertiary: "#00684a"
  neutral: "#ffffff"
  surface: "#006cfa"
  accent: "#3860be"
typography:
  h1:
    fontFamily: Georgia for hero
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Georgia for hero
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Georgia for hero
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 100px
  md: 200px
  lg: 300px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 583
  author: "designmd.app"
  source: "https://designmd.app/library/mongodb-forest-neon"
  tags: ["风格模板", "databases", "apis de dados"]
---

## Overview

MongoDB-inspired forest-dark landing page. Ideal for databases, infraestrutura de dados, plataformas developer, apis de dados. AI-ready template. The marriage of deep forest greens with electric neon emerged from a very specific moment in developer culture — when terminal aesthetics stopped being purely functional and became identity. MongoDB's leaf green wasn't arbitrary; it signaled organic growth, documents branching like trees rather than locking into rigid table structures. That botanical metaphor stuck.

Neon green on dark backgrounds carries decades of CRT phosphor memory. It's the color of data in motion, of cursors blinking at 2am, of systems that never sleep. When you layer that electric charge over forest depths, you get something that feels both ancient and impossibly fast — old-growth timber humming with fiber optics.

This palette found its real footing around 2018-2021 as developer tools embraced dark-first design and needed accent colors that could cut through without feeling corporate. Neon green became the anti-blue — a rejection of enterprise blandness in favor of something that felt alive, dangerous even. It said: this tool has teeth.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Teal-Black Forest, Neon Green Accent, Serif Hero, Source Code Pro Labels, Dual-Mode
- **Keywords:** mongodb, forest, neon green, teal-black, serif hero, Source Code Pro, wide tracking labels, dual-mode, LeafyGreen, pill buttons, bioluminescent
- **Era:** 2024-2026 Document Database
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Forest Black** (#001e2b) — Dark surface, primary background
- **Verde MongoDB** (#00ed64) — Secondary surface or text color
- **Verde Escuro** (#00684a) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Azul Ação** (#006cfa) — Secondary accent
- **Azul Hover** (#3860be) — Secondary accent
- **Cinza Teal** (#b8c4c2) — Secondary text, borders, muted elements
- **Cinza Cool** (#5c6c75) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Georgia for hero — Weight 700, tight tracking, used for headline impact
- **Body:** Georgia for hero — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Georgia for hero — 0.875rem, weight 500, slight letter-spacing
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

Canvas teal-black (#001e2b) evocando floresta profunda — não preto espacial. Verde neon (#00ed64) como acento bioluminescente elétrico e orgânico. Serif para hero headlines (96px weight 400) criando autoridade editorial. Source Code Pro uppercase com tracking largo (1px-3px) para labels técnicos como campos de database. Sombras teal-tinted (rgba(0,30,43,0.12)). Dual-mode: seções dark teal + seções white. Botões pill (100px) com bordas verdes (#00684a). Underlines verdes como decoração assinatura.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 100px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Pill-shaped (9999px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Pill-shaped (9999px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Canvas teal-black #001e2b
- Do Verde neon #00ed64 como acento
- Do Serif hero 96px
- Do Source Code Pro uppercase labels
- Do Sombras teal-tinted
- Do Dual-mode dark/light
- Do Pill buttons 100px
- Do Body weight 300
- Do Responsivo


## Use Case

Databases, Infraestrutura de dados, Platforms developer, APIs de dados

<!-- Source: https://designmd.app/library/mongodb-forest-neon · designmd.app -->
