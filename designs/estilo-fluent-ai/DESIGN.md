---
version: "alpha"
name: "Estilo Fluent AI"
description: "Clean and professional landing page for an AI assistant. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#0078D4"
  secondary: "#FFFFFF"
  tertiary: "#2F2F2F"
  neutral: "#F2F2F2"
  surface: "#008080"
  accent: "#107C10"
typography:
  h1:
    fontFamily: Segoe UI
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Segoe UI
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 379
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-fluent-ai"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Clean and professional landing page for an AI assistant. Ideal for landing pages, modern websites. AI-ready template. Fluent Design started as Microsoft's answer to flat design fatigue — acrylic blur, depth layers, motion that actually meant something. It was gorgeous but underused. Then Copilot happened.

The AI era forced Fluent to grow up fast. Suddenly you needed interfaces that could surface AI suggestions without overwhelming a spreadsheet jockey in Accounting. The system evolved from decorative depth into functional layering: AI responses float on acrylic surfaces, contextual actions emerge through motion, and the whole thing still feels like Office — just smarter. That's the trick. Enterprise users don't want revolution. They want Tuesday to feel slightly better than Monday.

What makes Fluent's AI chapter interesting is restraint. Microsoft could have gone full sci-fi. Instead they kept the rounded corners, the familiar toolbar rhythms, the quiet material language — and threaded intelligence through it like electricity through existing wiring. The depth system now serves hierarchy of human vs. machine content. Motion signals when AI is thinking. Acrylic separates your work from its suggestions. It's infrastructure design, not decoration.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Clean, Professional, Adaptive
- **Keywords:** AI, productivity, cloud, enterprise, intelligent, adaptive, clean, professional, modern, integrated
- **Era:** 2026+ AI-Powered Productivity
- **Light/Dark:** ✓ Full / ✓ Full (com alternância de tema)

## Colors

- **Azul Corporativo** (#0078D4) — Accent highlight, links and focus states
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Cinza Escuro** (#2F2F2F) — Dark surface, primary background
- **Cinza Claro** (#F2F2F2) — Secondary text, borders, muted elements
- **Verde-azulado** (#008080) — Success states, positive indicators
- **Verde** (#107C10) — Success states, positive indicators
- **Roxo** (#5C2D91) — Accent color, emphasis elements
- **Laranja** (#FF8C00) — Warm accent, call-to-action secondary


## Typography

- **Display / Hero:** Segoe UI — Weight 700, tight tracking, used for headline impact
- **Body:** Segoe UI — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Segoe UI — 0.875rem, weight 500, slight letter-spacing
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

Fluent Design System, sombras sutis, gradientes dinâmicos, micro-interações suaves, tipografia clara (sans-serif), elementos adaptativos, animações de transição de dados, ícones minimalistas.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (4px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (4px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Princípios Fluent Design
- Do Sombras sutis
- Do Gradientes dinâmicos
- Do Tipografia clara
- Do Elementos adaptativos
- Do Foco em produtividade com IA.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-fluent-ai · designmd.app -->
