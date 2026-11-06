---
version: "alpha"
name: "Together Pastel Cloud"
description: "Together AI-inspired pastel cloud landing page. Ideal for infraestrutura ai, cloud computing, plataformas de modelos, gpu clusters. AI-ready template."
colors:
  primary: "#ffffff"
  secondary: "#000000"
  tertiary: "#010120"
  neutral: "#ef2cc1"
  surface: "#fc4c02"
  accent: "#bdbbff"
typography:
  h1:
    fontFamily: The Future
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: The Future
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: The Future
    fontSize: 0.75rem
    fontWeight: 500
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
  order: 791
  author: "designmd.app"
  source: "https://designmd.app/library/together-pastel-cloud"
  tags: ["风格模板", "infraestrutura ai", "cloud computing", "gpu clusters"]
---

## Overview

Together AI-inspired pastel cloud landing page. Ideal for infraestrutura ai, cloud computing, plataformas de modelos, gpu clusters. AI-ready template. The pastel cloud aesthetic in tech branding didn't emerge from nowhere — it's a direct descendant of the vaporwave-to-corporate pipeline that dominated 2018-2021, filtered through the lens of AI companies desperate to appear approachable. Together's visual identity sits at an interesting inflection point: infrastructure companies historically defaulted to dark themes, terminal greens, and brutalist grids to signal seriousness. Together broke from that orthodoxy by embracing soft gradients and ethereal cloud forms, essentially saying 'yes, we run GPU clusters, but we're not going to make you feel like you need a PhD to use them.'

The pastel palette specifically borrows from illustration traditions — watercolor washes, risograph printing, and the Japanese kawaii aesthetic that infiltrated Western design through apps like Notion and Linear. What makes Together's approach distinct is the tension between the softness of the palette and the industrial scale of what they actually do. It's a deliberate misdirection, and honestly, it works. The cloud motif does double duty: literal (cloud computing) and atmospheric (dreamy, boundless possibility). That duality is rare in infrastructure branding, where most competitors still lean on circuit-board metaphors that stopped feeling fresh around 2015.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Pastel Gradients, Midnight Blue Dark, The Future Font, Sharp Geometry, Enterprise Stats
- **Keywords:** together, pastel, cloud, midnight blue, The Future font, sharp geometry, enterprise stats, PP Neue Montreal Mono, lavender, infrastructure
- **Era:** 2024-2026 AI Infrastructure Cloud
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Branco** (#ffffff) — Light surface, card backgrounds
- **Preto** (#000000) — Dark surface, primary background
- **Midnight Blue** (#010120) — Dark surface, primary background
- **Magenta** (#ef2cc1) — Decorative accent, highlight elements
- **Laranja** (#fc4c02) — Warm accent, call-to-action secondary
- **Lavanda** (#bdbbff) — Extended palette, decorative use
- **Vidro** (rgba(255,255,255,0.12)) — Extended palette, decorative use
- **Borda** (rgba(0,0,0,0.08)) — Extended palette, decorative use


## Typography

- **Display / Hero:** The Future — Weight 700, tight tracking, used for headline impact
- **Accent:** system-ui — Used for decorative or emphasis text
- **Body:** The Future — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** The Future — 0.875rem, weight 500, slight letter-spacing
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

Gradientes pastel suaves (rosa, azul, lavanda) contra canvas branco. Seções dark em midnight blue (#010120 — não cinza-preto). Font 'The Future' com tracking negativo em todo tamanho (-0.16px a -1.92px). PP Neue Montreal Mono uppercase para labels técnicos. Geometria sharp (4px, 8px radius). Magenta (#ef2cc1) e laranja (#fc4c02) apenas em ilustrações. Stats enterprise proeminentes (2x, 60%, 90%). Sombras blue-tinted (rgba(1,1,32,0.1)).

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Gradientes pastel suaves
- Do Dark sections midnight blue
- Do Tracking negativo em tudo
- Do Mono uppercase labels
- Do Geometria sharp 4-8px
- Do Stats enterprise
- Do Sombras blue-tinted
- Do Responsivo


## Use Case

Infraestrutura AI, Cloud computing, Platforms de modelos, GPU clusters

<!-- Source: https://designmd.app/library/together-pastel-cloud · designmd.app -->
