---
version: "alpha"
name: "Claude Warm Parchment"
description: "Warm editorial landing page inspired by Claude/Anthropic. Ideal for plataformas de ia, education, editoras, produtos literários. AI-ready template."
colors:
  primary: "#f5f4ed"
  secondary: "#141413"
  tertiary: "#c96442"
  neutral: "#faf9f5"
  surface: "#d97757"
  accent: "#5e5d59"
typography:
  h1:
    fontFamily: Georgia
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Georgia
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 247
  author: "designmd.app"
  source: "https://designmd.app/library/claude-warm-parchment"
  tags: ["风格模板", "plataformas de ia", "education", "editoras"]
---

## Overview

Warm editorial landing page inspired by Claude/Anthropic. Ideal for plataformas de ia, education, editoras, produtos literários. AI-ready template. When every AI company was racing to look like a sci-fi movie — dark interfaces, neon accents, cold sans-serifs screaming "I am the future" — Anthropic walked in wearing a linen shirt. Claude's warm parchment palette wasn't an accident. It was a deliberate rejection of the Silicon Valley playbook that equates intelligence with coldness.

The choice to ground their interface in cream tones, warm serifs, and paper-like textures communicated something radical: that an AI could feel approachable rather than intimidating. While competitors optimized for looking powerful, Anthropic optimized for feeling safe. The parchment aesthetic borrows from centuries of bookmaking and scholarly tradition — it says "I'm here to help you think," not "I'm here to replace you."

This wasn't just branding. It was a philosophical position rendered in HSL values. The warmth signals patience. The serif typography signals care with language. The muted, organic palette signals that technology doesn't have to feel alien to be advanced. It proved you could build a frontier AI product that looks like it belongs in a library, not a spaceship.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 8/10 — Cinematic

- **Style:** Editorial, Warm Parchment, Serif Headlines, Terracotta Accent
- **Keywords:** claude, anthropic, parchment, warm neutrals, serif headlines, terracotta, editorial, literary, ring shadows, organic illustrations
- **Era:** 2024-2026 Literary AI
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Pergaminho** (#f5f4ed) — Primary surface or dominant color
- **Quase Preto** (#141413) — Dark surface, primary background
- **Terracotta** (#c96442) — Supporting palette color
- **Marfim** (#faf9f5) — Supporting palette color
- **Coral** (#d97757) — Extended palette, decorative use
- **Cinza Oliva** (#5e5d59) — Secondary text, borders, muted elements
- **Cinza Pedra** (#87867f) — Secondary text, borders, muted elements
- **Borda Creme** (#f0eee6) — Extended palette, decorative use


## Typography

- **Display / Hero:** Georgia — Weight 700, tight tracking, used for headline impact
- **Accent:** Arial — Used for decorative or emphasis text
- **Body:** Georgia — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Georgia — 0.875rem, weight 500, slight letter-spacing
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

Canvas cor de pergaminho (#f5f4ed) evocando papel premium. Headlines em serif customizada weight 500 com gravitas de título de livro. Acento terracotta (#c96442) para CTAs — deliberadamente terroso e anti-tech. Todos os cinzas com subtom amarelo-marrom. Ring shadows (0px 0px 0px 1px) criando bordas-sombra suaves. Alternância light/dark entre seções como capítulos de um livro.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Fundo pergaminho #f5f4ed
- Do Headlines serif weight 500
- Do Acento terracotta #c96442
- Do Cinzas com subtom quente
- Do Ring shadows
- Do Alternância light/dark
- Do Body line-height 1.60
- Do Responsivo


## Use Case

Platforms de IA, Education, Publishers, Products literários

<!-- Source: https://designmd.app/library/claude-warm-parchment · designmd.app -->
