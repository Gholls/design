---
version: "alpha"
name: "NVIDIA Power Green"
description: "Design an NVIDIA-inspired high-contrast landing page. Ideal for gpu computing, hardware, tecnologia de alto desempenho, data centers, gaming. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#ffffff"
  tertiary: "#76b900"
  neutral: "#1a1a1a"
  surface: "#bff230"
  accent: "#df6500"
typography:
  h1:
    fontFamily: system-ui
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: system-ui
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: system-ui
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 2px
  md: 4px
  lg: 8px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 607
  author: "designmd.app"
  source: "https://designmd.app/library/nvidia-power-green"
  tags: ["风格模板", "gpu computing", "hardware", "data centers"]
---

## Overview

Design an NVIDIA-inspired high-contrast landing page. Ideal for gpu computing, hardware, tecnologia de alto desempenho, data centers, gaming. AI-ready template. NVIDIA's green didn't start as a brand color — it started as a statement. When Jensen Huang founded the company in 1993, the GPU was a niche component for gamers who wanted smoother frame rates. The green was loud, almost aggressive, deliberately chosen to cut through the beige-and-gray monotony of 90s computing hardware. It said: this isn't your office PC. This is something else entirely.

Fast-forward three decades and that same green now represents the backbone of artificial intelligence infrastructure. The color carried NVIDIA from gaming peripherals to trillion-dollar market cap without ever getting a rebrand. That's rare. Most tech companies soften their palette as they mature — NVIDIA doubled down. The green got darker, more saturated, more confident. It went from "look at me" to "you already know."

What makes Power Green interesting from a design perspective is its refusal to be neutral. In an industry obsessed with minimalism and safe grays, NVIDIA kept pushing a color that demands attention. It's become shorthand for computational power itself — when you see that green glow, you expect performance numbers that make other hardware look quaint.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** High-Contrast, Neon Green Accent, Industrial Typography, Sharp Corners, GPU Power
- **Keywords:** nvidia, power green, high-contrast, industrial, sharp corners, GPU, green borders, uppercase nav, Font Awesome, dark/light alternation
- **Era:** 2024-2026 GPU Computing Power
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Verde NVIDIA** (#76b900) — Supporting palette color
- **Quase Preto** (#1a1a1a) — Dark surface, primary background
- **Verde Claro** (#bff230) — Success states, positive indicators
- **Laranja** (#df6500) — Warm accent, call-to-action secondary
- **Cinza** (#a7a7a7) — Secondary text, borders, muted elements
- **Borda** (#5e5e5e) — Extended palette, decorative use


## Typography

- **Display / Hero:** system-ui — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui — 0.875rem, weight 500, slight letter-spacing
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

Verde NVIDIA (#76b900) como acento puro — bordas, underlines e highlights interativos, nunca como superfície. Fundo preto dominante com texto branco em seções escuras. Tipografia industrial pesada (weight 700 padrão para headlines). Border-radius mínimo (1-2px) — cantos afiados e engenheirados. Botões com borda verde 2px solid #76b900. Nav uppercase weight 700. Seções alternando preto/branco. Sombra mínima rgba(0,0,0,0.3) 0px 0px 5px.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 2px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Verde #76b900 apenas como acento
- Do Fundo preto dominante
- Do Headlines weight 700
- Do Radius mínimo 1-2px
- Do Botões borda verde 2px
- Do Nav uppercase
- Do Alternância preto/branco
- Do Responsivo


## Use Case

GPU computing, Hardware, Tecnologia de alto desempenho, Data centers, Gaming

<!-- Source: https://designmd.app/library/nvidia-power-green · designmd.app -->
