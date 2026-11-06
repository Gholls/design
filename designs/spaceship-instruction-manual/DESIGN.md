---
version: "alpha"
name: "Spaceship Instruction Manual"
description: "Landing page that looks like a spaceship instruction manual or engineering blueprint. Ideal for produtos de hardware, startups deep-tech, apis e ferramentas dev, plataformas de engenharia, documentacao tecnica, cybersecurity. AI-ready template."
colors:
  primary: "#0A1628"
  secondary: "#E8ECF1"
  tertiary: "#00D4FF"
  neutral: "#6B7B8D"
  surface: "#FFB800"
  accent: "#00E676"
typography:
  h1:
    fontFamily: JetBrains Mono
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 0.5rem
  md: 1.0rem
  lg: 2.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 727
  author: "designmd.app"
  source: "https://designmd.app/library/spaceship-instruction-manual"
  tags: ["风格模板", "produtos de hardware", "startups deep-tech", "documentacao tecnica"]
---

## Overview

Landing page that looks like a spaceship instruction manual or engineering blueprint. Ideal for produtos de hardware, startups deep-tech, apis e ferramentas dev, plataformas de engenharia, documentacao tecnica, cybersecurity. AI-ready template. The spaceship manual aesthetic didn't start as a design trend — it started as necessity. NASA's technical documentation from the 1960s and 70s had to communicate life-or-death procedures through dense diagrams, monospace type, and ruthlessly structured layouts. Every page was a blueprint for survival. There was no room for decoration, only clarity.

Then Hollywood got hold of it. Prop designers for Alien, 2001, and later Blade Runner built fictional interfaces that borrowed heavily from real aerospace documentation. They added grid overlays, section numbering systems, and that unmistakable combination of technical illustration with sparse, uppercase labeling. The fictional manuals looked more compelling than the real ones because they were designed to be seen, not just read.

What we have now is the convergence: designers pulling from both the authentic NASA lineage and the cinematic interpretation. The result is a UI language that feels simultaneously functional and aspirational — like you're operating something that matters.

- Density: 7/10 — Compact
- Variance: 4/10 — Moderate
- Motion: 1/10 — Static

- **Style:** Technical Blueprint, Monospace, Sci-Fi Engineering, Deconstructed, Callout Lines
- **Keywords:** spaceship manual, blueprint, monospace, technical drawing, callout lines, engineering labels, exploded view, sci-fi technical, low-fi schematic, deconstructed, technical credibility, specification sheet
- **Era:** 2025-2026 Sci-Fi Technical
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Azul Blueprint** (#0A1628) — Accent highlight, links and focus states
- **Branco Tecnico** (#E8ECF1) — Light surface, card backgrounds
- **Ciano Linha** (#00D4FF) — Supporting palette color
- **Cinza Anotacao** (#6B7B8D) — Secondary text, borders, muted elements
- **Amarelo Alerta** (#FFB800) — Error states, destructive actions
- **Verde Status** (#00E676) — Success states, positive indicators
- **Vermelho Critico** (#FF3D00) — Error states, destructive actions


## Typography

- **Display / Hero:** JetBrains Mono — Weight 700, tight tracking, used for headline impact
- **Accent:** Fira Code — Used for decorative or emphasis text
- **Body:** JetBrains Mono — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** JetBrains Mono — 0.875rem, weight 500, slight letter-spacing
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

Fontes monoespaçadas transmitindo rigor tecnico, linhas finas conectoras (callouts) ligando dados a imagens com SVG paths, rotulos e legendas tecnicas decorativas em uppercase com letter-spacing largo, ilustracoes esquematicas low-fi imitando vistas em explosao de pecas internas, grid com linhas visiveis tipo blueprint, numeracao de secoes estilo manual tecnico (01. 02. 03.), bordas tracejadas finas

- Minimal motion design. Hover states use color transitions only (150ms).
- No entry animations. No page transitions. Instant, utilitarian feedback.
- Performance: No animation overhead. Static-first approach.


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

- Do Fonte monoespaçada em TODO o texto
- Do Fundo azul blueprint escuro
- Do Linhas conectoras SVG (callouts) com setas
- Do Rotulos tecnicos uppercase com letter-spacing largo
- Do Grid de fundo visivel sutil
- Do Numeracao de secoes estilo manual (01. 02.)
- Do Bordas tracejadas finas
- Do Indicadores de status coloridos
- Do Estetica de engenharia profunda


## Use Case

Hardware products, Deep-tech startups, APIs and dev tools, Engineering platforms, Technical documentation, Cybersecurity

<!-- Source: https://designmd.app/library/spaceship-instruction-manual · designmd.app -->
