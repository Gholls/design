---
version: "alpha"
name: "Wabi-Sabi Anti-UX"
description: "Wabi-sabi inspired landing page celebrating imperfection and human touch. Ideal for portfolios artisticos, marcas artesanais, cafeterias e restaurantes, estudio de design, blogs pessoais, produtos organicos. AI-ready template."
colors:
  primary: "#F5F0E8"
  secondary: "#1A1A1A"
  tertiary: "#8B7355"
  neutral: "#6B9BD2"
  surface: "#D4A0A0"
  accent: "#7BA68C"
typography:
  h1:
    fontFamily: Libre Baskerville
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Libre Baskerville
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 834
  author: "designmd.app"
  source: "https://designmd.app/library/wabi-sabi-anti-ux"
  tags: ["风格模板", "marcas artesanais", "estudio de design", "blogs pessoais"]
---

## Overview

Wabi-sabi inspired landing page celebrating imperfection and human touch. Ideal for portfolios artisticos, marcas artesanais, cafeterias e restaurantes, estudio de design, blogs pessoais, produtos organicos. AI-ready template. Wabi-sabi entered digital design as a quiet rebellion. While the entire industry obsessed over conversion funnels and frictionless flows, a handful of designers started asking: what if the friction IS the point? What if a slightly misaligned grid, a hand-drawn element that refuses to snap to pixels, or a loading state that invites patience instead of demanding speed — what if these things create more meaningful experiences than another polished SaaS interface?

The roots trace back to Japanese tea ceremony aesthetics — the cracked bowl valued above the perfect one — but the digital application is distinctly contemporary. It emerged from exhaustion with optimization culture, with A/B testing every pixel into submission until websites became indistinguishable from each other. Anti-UX doesn't mean bad UX. It means deliberately choosing where to introduce texture, resistance, and humanity into an interaction.

This is design that breathes. Pages that load like they're being assembled by hand. Typography that wobbles. Interfaces that reward slowness over efficiency. It's a philosophical stance disguised as a design system — the assertion that not everything worth experiencing should be easy to consume.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Handmade, Imperfect, Raw Photography, Tactile Textures, Anti-AI
- **Keywords:** wabi-sabi, anti-UX, handmade, imperfect, hand-drawn arrows, doodles, asymmetric layout, raw photography, paper grain, ink bleed, watercolor splashes, organic, intentional friction, anti-AI aesthetic
- **Era:** 2025-2026 Anti-AI Handmade
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Papel Cru** (#F5F0E8) — Primary surface or dominant color
- **Tinta Nanquim** (#1A1A1A) — Secondary surface or text color
- **Sepia Quente** (#8B7355) — Supporting palette color
- **Aquarela Azul** (#6B9BD2) — Secondary accent
- **Aquarela Rosa** (#D4A0A0) — Decorative accent, highlight elements
- **Aquarela Verde** (#7BA68C) — Success states, positive indicators
- **Tinta Borrada** (#4A4A4A) — Extended palette, decorative use


## Typography

- **Display / Hero:** Libre Baskerville — Weight 700, tight tracking, used for headline impact
- **Accent:** Caveat — Used for decorative or emphasis text
- **Body:** Libre Baskerville — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Libre Baskerville — 0.875rem, weight 500, slight letter-spacing
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

Setas e sublinhados irregulares desenhados a mao (SVG path com stroke-dasharray variavel), ilustracoes tipo rascunho (doodles), layouts deliberadamente assimetricos, texturas tateis de granulacao de papel (CSS noise filter), sangramento de tinta (box-shadow blur alto com cor escura), respingos de aquarela (radial-gradient com opacidade variavel), fotografia crua nao polida, atritos intencionais na interface

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

- Do Setas e sublinhados SVG irregulares desenhados a mao
- Do Layout deliberadamente assimetrico
- Do Textura de papel com grain overlay
- Do Efeito de sangramento de tinta
- Do Respingos de aquarela como backgrounds
- Do Tipografia misturando serif e handwritten
- Do Rotacoes organicas em elementos
- Do Paleta earth-tone com pops de aquarela
- Do Atritos intencionais na navegacao


## Use Case

Portfolios artisticos, Artisan brands, Cafeterias e restaurantes, Estudio de design, Blogs personal, Products organicos

<!-- Source: https://designmd.app/library/wabi-sabi-anti-ux · designmd.app -->
