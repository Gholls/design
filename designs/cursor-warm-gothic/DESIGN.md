---
version: "alpha"
name: "Cursor Warm Gothic"
description: "Cursor-inspired warm landing page. Ideal for editores de código ai, ferramentas developer, ides inteligentes, plataformas de coding. AI-ready template."
colors:
  primary: "#f2f1ed"
  secondary: "#26251e"
  tertiary: "#f54e00"
  neutral: "#ebeae5"
  surface: "#c08532"
  accent: "#cf2d56"
typography:
  h1:
    fontFamily: system-ui for display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: system-ui for display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: system-ui for display
    fontSize: 0.75rem
    fontWeight: 500
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
  order: 294
  author: "designmd.app"
  source: "https://designmd.app/library/cursor-warm-gothic"
  tags: ["风格模板", "ides inteligentes"]
---

## Overview

Cursor-inspired warm landing page. Ideal for editores de código ai, ferramentas developer, ides inteligentes, plataformas de coding. AI-ready template. When Cursor launched with serif typography in their marketing and product identity, it felt like a quiet rebellion. Every other developer tool was screaming in geometric sans-serifs — Inter, SF Pro, the usual suspects — trying to look fast, clean, technical. Cursor chose warmth. They chose a gothic serif that whispered editorial confidence instead of startup velocity.

This wasn't accidental. The warm gothic approach — serifs with generous x-heights, slightly rounded terminals, ink-trap details that nod to print heritage — positions Cursor as the thinking developer's tool. It says: we respect your intelligence. We're not trying to gamify your workflow or reduce coding to button-mashing. The typography carries the weight of a literary magazine, not a SaaS dashboard.

The boldness here is in the restraint. In a market where every AI coding tool races to look more futuristic than the last, Cursor's serif identity ages like wood, not plastic. It borrows from the editorial tradition where type was chosen to be read for hours — exactly what developers do with code.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Warm Minimalism, Gothic Display, Serif Body, oklab Borders, Three-Font System
- **Keywords:** cursor, warm gothic, serif body, oklab borders, three fonts, cream background, orange accent, AI timeline, code editor aesthetic
- **Era:** 2024-2026 Warm Code Editor
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Creme** (#f2f1ed) — Primary surface or dominant color
- **Escuro Quente** (#26251e) — Dark surface, primary background
- **Laranja** (#f54e00) — Warm accent, call-to-action secondary
- **Superfície** (#ebeae5) — Supporting palette color
- **Ouro** (#c08532) — Premium accent, decorative highlights
- **Erro** (#cf2d56) — Extended palette, decorative use
- **Superfície Clara** (#e6e5e0) — Extended palette, decorative use


## Typography

- **Display / Hero:** system-ui for display — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui for display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui for display — 0.875rem, weight 500, slight letter-spacing
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

Canvas off-white quente (#f2f1ed) com texto warm near-black (#26251e) com subtom amarelado. Gothic display font com letter-spacing agressivo negativo (-2.16px em 72px). Serif body font com swash alternates para passagens editoriais. Bordas em espaço de cor oklab para uniformidade perceptual. Acento laranja (#f54e00) para links e marca. Pill elements com radius extremo. Hover muda texto para crimson (#cf2d56).

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Fundo creme quente #f2f1ed
- Do Gothic display com tracking negativo
- Do Serif body editorial
- Do Bordas oklab
- Do Acento laranja #f54e00
- Do Hover crimson
- Do Pill elements
- Do Responsivo


## Use Case

Editores de código AI, Tools developer, IDEs inteligentes, Platforms de coding

<!-- Source: https://designmd.app/library/cursor-warm-gothic · designmd.app -->
