---
version: "alpha"
name: "Estilo Suíço Artístico"
description: "Design an artistic and clean Swiss Style landing page for a modern art gallery. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#000000"
  tertiary: "#333333"
  neutral: "#E0E0E0"
  surface: "#800020"
  accent: "#008080"
typography:
  h1:
    fontFamily: Avenir
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Avenir
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 381
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-suico-artistico"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an artistic and clean Swiss Style landing page for a modern art gallery. Ideal for landing pages, modern websites. AI-ready template. The white cube didn't happen by accident. Brian O'Doherty wrote about it in 1976 — that sealed, pristine gallery space where walls disappear and art floats in controlled nothingness. Swiss design had been doing the same thing on paper since the 1950s. Müller-Brockmann, Ruder, the whole Zurich school: they understood that negative space isn't empty. It's structural. It holds tension.

Translating this to the web means accepting a radical premise — the interface should vanish. No chrome competing with the work. No decorative flourishes announcing themselves. Just typography doing its job, generous whitespace creating breathing room, and content given the dignity of silence around it. The gallery wall becomes the viewport. The frame becomes the grid.

This is harder than it looks. Restraint requires confidence. Every pixel you don't place is a decision. The Swiss approach to art platforms isn't about doing less out of laziness — it's about doing less because you trust the work to carry itself. The design becomes invisible precisely so the art becomes unavoidable.

- Density: 3/10 — Airy
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Artistic, Clean, Structured
- **Keywords:** art gallery, modern art, contemporary, artistic, clean, structured, minimalist, elegant, visual, curated
- **Era:** 2026+ Arte e Design
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#000000) — Dark surface, primary background
- **Cinza Escuro** (#333333) — Dark surface, primary background
- **Cinza Claro** (#E0E0E0) — Secondary text, borders, muted elements
- **Vermelho Borgonha** (#800020) — Error states, destructive actions
- **Azul Petróleo** (#008080) — Secondary accent
- **Verde Oliva** (#6B8E23) — Success states, positive indicators
- **Amarelo Ocre** (#CC7722) — Warning states, attention indicators


## Typography

- **Display / Hero:** Avenir — Weight 700, tight tracking, used for headline impact
- **Body:** Avenir — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Avenir — 0.875rem, weight 500, slight letter-spacing
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

Layouts de grid que destacam obras de arte, tipografia sans-serif limpa e discreta, imagens de arte em alta resolução com foco na composição, uso de espaço em branco para emoldurar o conteúdo, micro-interações de hover com informações da obra, transições de galeria suaves e focadas.

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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Layouts de grid para arte
- Do Tipografia sans-serif discreta
- Do Imagens de arte em alta resolução
- Do Espaço em branco para emoldurar
- Do Micro-interações de informações da obra
- Do Transições de galeria suaves.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-suico-artistico · designmd.app -->
