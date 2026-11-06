---
version: "alpha"
name: "Architectural Portfolio Cinematic"
description: "High-end cinematic 2-page architectural portfolio. Ideal for portfolios de arquitetura, estúdios de design, creative agencies, portfolios pessoais premium, showcases de projetos tech. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Space Grotesk
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 9999px
  md: 19998px
  lg: 29997px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 148
  author: "designmd.app"
  source: "https://designmd.app/library/architectural-portfolio-cinematic"
  tags: ["风格模板", "estúdios de design", "creative agencies"]
---

## Overview

High-end cinematic 2-page architectural portfolio. Ideal for portfolios de arquitetura, estúdios de design, creative agencies, portfolios pessoais premium, showcases de projetos tech. AI-ready template. The cinematic architectural portfolio owes its existence to the collision of two worlds: the film industry's obsession with atmosphere and the architectural visualization boom of the 2010s. When studios like MIR and Luxigon started treating renders less like technical documents and more like movie stills, everything shifted. Suddenly, architects realized their work could be presented with the same emotional weight as a Villeneuve film — moody lighting, shallow depth of field, fog rolling through unbuilt spaces.

This wasn't just aesthetic posturing. The dark theme emerged because architects were tired of the sterile white-background portfolio that dominated for decades. Black backgrounds do what white never could: they make light the protagonist. Every render becomes a scene, every material catches exactly the illumination you intended. The format borrows heavily from cinematography — aspect ratios stretch wider, typography retreats to the margins, and negative space becomes structural rather than decorative.

What we're looking at now is the mature form of this language. The early experiments were heavy-handed — too much lens flare, too much post-processing. The best contemporary examples show restraint. They trust the architecture to carry the frame.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 8/10 — Cinematic

- **Style:** Cinematic Dark, Minimalist Portfolio, Orbitron Display, Glass Cards, Two-Page Navigation
- **Keywords:** architectural portfolio, cinematic, dark theme, minimalist, Orbitron, Space Grotesk, JetBrains Mono, glass morphism, video background, vignette, two-page, project showcase, technical specs, pill tags
- **Era:** 2025-2026 Portfolio/Creative
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Preto Fundo** (#000000) — Primary background surface
- **Branco Texto** (#FFFFFF) — Light surface, card backgrounds
- **20 bordas** (rgba(255,255,255,0.2)) — Supporting palette color
- **5 cards** (rgba(255,255,255,0.05)) — Extended palette, decorative use
- **10 hover** (rgba(255,255,255,0.1)) — Extended palette, decorative use
- **60 texto secundário** (rgba(255,255,255,0.6)) — Primary text color
- **40 labels** (rgba(255,255,255,0.4)) — Extended palette, decorative use


## Typography

- **Display / Hero:** Space Grotesk — Weight 700, tight tracking, used for headline impact
- **Accent:** Orbitron — Used for decorative or emphasis text
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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Vídeo background full-screen com vignette radial (70% transparente centro para 70% preto bordas) no desktop e gradient bottom-fade no mobile, glassmorphism cards (bg-white/5 backdrop-blur-xl), navegação entre duas páginas com transições de opacidade e offset Y, tipografia hierárquica com 3 fontes (Orbitron display, Space Grotesk body, JetBrains Mono technical), pill tags com borda white/20, specs técnicas com separadores thin border, counter 1/01 com linha de progresso

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.


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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Fundo preto puro #000000 com texto branco
- Do Vídeo background full-screen com vignette radial
- Do Três fontes carregadas (Orbitron + Space Grotesk + JetBrains Mono)
- Do Hierarquia tipográfica clara entre display/body/mono
- Do Glass card com backdrop-blur-xl
- Do Navegação entre duas páginas com transição suave
- Do Specs técnicas com separadores thin border
- Do Pill tags com borda white/20
- Do Counter 1/01 com linha de progresso
- Do Mobile: vídeo 50vh com gradient fade
- Do Custom selection color branco/preto


## Use Case

Portfolios de arquitetura, Design studios, Creative agencies, Portfolios personal premium, Showcases de projects tech

<!-- Source: https://designmd.app/library/architectural-portfolio-cinematic · designmd.app -->
