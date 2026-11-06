---
version: "alpha"
name: "Estilo de Elegância Espacial"
description: "Minimalist premium landing page for a spatial computing device. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#1C1C1E"
  secondary: "#E0E0E0"
  tertiary: "#FFFFFF"
  neutral: "#000080"
  surface: "#F0EAD6"
  accent: "#E8C3BA"
typography:
  h1:
    fontFamily: "-apple-system"
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: "-apple-system"
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 12px
  md: 24px
  lg: 36px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 368
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-de-elegancia-espacial"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Minimalist premium landing page for a spatial computing device. Ideal for landing pages, modern websites. AI-ready template. Spatial computing didn't invent depth. But it forced us to reckon with it. Before Apple Vision Pro shipped in early 2024, most "3D interfaces" were glorified parallax tricks — flat layers stacked with drop shadows pretending to occupy space. Vision Pro changed the conversation. Suddenly glass wasn't a metaphor. It was a material system: specular highlights responding to real light, surfaces refracting the world behind them, elements floating at actual distances from your eyes. The design language that emerged owes more to architecture than graphic design.

Elegance in 3D space is a fundamentally different problem than elegance on a screen. In 2D, you control every pixel. In spatial UI, the environment talks back. Your glass panel picks up the color of whatever room the user sits in. Your typography casts subtle shadows that shift with head movement. Restraint becomes structural — not just aesthetic. You can't hide behind a grid when your interface literally surrounds someone.

The material system that defines this era — glass, depth, light — isn't decorative. It's functional. Glass communicates hierarchy through opacity. Depth separates actions from content. Light provides orientation. These aren't style choices. They're the physics of a new medium.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Minimalist, Premium, Futuristic
- **Keywords:** spatial computing, elegance, innovation, seamless, intuitive, premium, minimalist, futuristic, immersive, sleek
- **Era:** 2026+ Spatial Computing
- **Light/Dark:** ✓ Full / ✗ No (com elementos adaptáveis)

## Colors

- **Cinza Espacial** (#1C1C1E) — Secondary text, borders, muted elements
- **Prata** (#E0E0E0) — Secondary surface or text color
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Azul Meia-Noite** (#000080) — Accent highlight, links and focus states
- **Luz Estelar** (#F0EAD6) — Extended palette, decorative use
- **Areia Rosa** (#E8C3BA) — Decorative accent, highlight elements
- **Roxo Profundo** (#581845) — Primary background surface
- **Vermelho Produto** (#FF3B30) — Error states, destructive actions


## Typography

- **Display / Hero:** -apple-system — Weight 700, tight tracking, used for headline impact
- **Body:** -apple-system — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** -apple-system — 0.875rem, weight 500, slight letter-spacing
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

Vidro fosco (frosted glass), paralaxe suave, micro-interações táteis, tipografia limpa e espaçada, elementos flutuantes, transições fluidas, profundidade sutil, foco na experiência do usuário.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (12px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (12px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Efeito de vidro fosco
- Do Paralaxe suave
- Do Tipografia limpa
- Do Elementos flutuantes
- Do Transições fluidas
- Do Foco na experiência imersiva.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-de-elegancia-espacial · designmd.app -->
