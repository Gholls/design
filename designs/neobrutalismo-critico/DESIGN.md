---
version: "alpha"
name: "Neobrutalismo Crítico"
description: "Direct and bold neobrutalist landing page for a social and political critique blog. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#CC0000"
  neutral: "#36454F"
  surface: "#FFD700"
  accent: "#000080"
typography:
  h1:
    fontFamily: Roboto Condensed
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Roboto Condensed
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 591
  author: "designmd.app"
  source: "https://designmd.app/library/neobrutalismo-critico"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Direct and bold neobrutalist landing page for a social and political critique blog. Ideal for landing pages, modern websites. AI-ready template. Brutalism in architecture was never about beauty. It was about honesty — concrete left bare, structure exposed, no decorative lies. The buildings said: we refuse to perform for you. That same defiance migrated to the screen. Early web brutalism rejected the polished veneer of corporate design, but it often stopped at aesthetics. It was punk cosplay without the politics.

Critical Neobrustalism picks up where that posturing left off. It treats rawness not as style but as stance. The unfinished edge, the visible grid, the refusal to round corners — these aren't choices made for novelty. They're choices made because smoothness is complicity. When every SaaS product looks like it was extruded from the same Figma template, choosing to look uncomfortable is itself a political act.

This isn't anti-design. It's anti-consensus. The roughness communicates that the content matters more than the container — that you're here to read, to think, to act. Not to be soothed into scrolling past.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Direct, Bold, Opinionated
- **Keywords:** social critique, political, opinion, bold, direct, raw, impactful, honest, unfiltered, strong
- **Era:** 2026+ Jornalismo Alternativo
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Vermelho Alerta** (#CC0000) — Error states, destructive actions
- **Cinza Chumbo** (#36454F) — Secondary text, borders, muted elements
- **Amarelo Cuidado** (#FFD700) — Warning states, attention indicators
- **Azul Escuro** (#000080) — Deep contrast surface
- **Verde Militar** (#4B5320) — Success states, positive indicators
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary


## Typography

- **Display / Hero:** Roboto Condensed — Weight 700, tight tracking, used for headline impact
- **Body:** Roboto Condensed — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Roboto Condensed — 0.875rem, weight 500, slight letter-spacing
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

Tipografia grande e em negrito, blocos de texto com bordas fortes, imagens em preto e branco com detalhes em cor, layouts de coluna rígidos, micro-interações de destaque de texto, animações de transição de página abruptas.

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Tipografia grande/negrito
- Do Blocos de texto com bordas
- Do Imagens P&B com cor
- Do Layouts de coluna rígidos
- Do Micro-interações de destaque
- Do Transições abruptas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/neobrutalismo-critico · designmd.app -->
