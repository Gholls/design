---
version: "alpha"
name: "Estilo de IA Criativa"
description: "Design an artistic and innovative landing page for a creative AI tool. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FF0000"
  secondary: "#2D2D2D"
  tertiary: "#FFFFFF"
  neutral: "#00FFFF"
  surface: "#800080"
  accent: "#FFA500"
typography:
  h1:
    fontFamily: Helvetica Neue
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Helvetica Neue
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 369
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-de-ia-criativa"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an artistic and innovative landing page for a creative AI tool. Ideal for landing pages, modern websites. AI-ready template. Something strange happened around 2022. The tools we built to generate images started generating taste. Midjourney's early outputs had this unmistakable quality — painterly, slightly overcooked, dripping with atmosphere. DALL-E went a different direction: flatter, more diagrammatic, weirdly clinical. Runway leaned cinematic. Each model developed aesthetic fingerprints that nobody explicitly designed.

Here's the meta-loop that fascinates me: those AI-generated aesthetics started bleeding back into human-made interfaces. Designers began borrowing the gradient language, the impossible lighting, the organic-meets-geometric forms that only emerged because a diffusion model hallucinated them into existence. Suddenly UI design had a new vernacular — one that no single designer authored.

We're now in a feedback cycle where AI aesthetics inform UI trends, those UIs train the next generation of models, and the visual language keeps mutating. It's genuinely new territory. The machine isn't just a tool anymore — it's a collaborator with opinions about color.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Artistic, Innovative, User-Empowering
- **Keywords:** creative, AI, generative, design, art, innovation, intuitive, powerful, vibrant, seamless
- **Era:** 2026+ Creative AI Revolution
- **Light/Dark:** ✓ Full / ✗ No (com opções de tema)

## Colors

- **Vermelho Criativo** (#FF0000) — Error states, destructive actions
- **Cinza Escuro** (#2D2D2D) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Ciano** (#00FFFF) — Supporting palette color
- **Roxo** (#800080) — Accent color, emphasis elements
- **Laranja** (#FFA500) — Warm accent, call-to-action secondary
- **Verde** (#00FF00) — Success states, positive indicators
- **Cinza Claro** (#E0E0E0) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Helvetica Neue — Weight 700, tight tracking, used for headline impact
- **Body:** Helvetica Neue — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Helvetica Neue — 0.875rem, weight 500, slight letter-spacing
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

Animações de transformação de imagem por IA, gradientes criativos, micro-interações de arrastar e soltar, tipografia artística (sans-serif), elementos de interface personalizáveis, visualizações de antes e depois, transições fluidas.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (8px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (8px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Animações de transformação de imagem
- Do Gradientes criativos
- Do Micro-interações de arrastar e soltar
- Do Tipografia artística
- Do Visualizações de antes e depois
- Do Foco em IA generativa.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-de-ia-criativa · designmd.app -->
