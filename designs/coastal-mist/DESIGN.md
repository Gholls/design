---
version: "alpha"
name: "Coastal Mist"
description: "Serene coastal UI using deep navy, pale seafoam, and soft slate blues. Ideal for saas de bem-estar, apps de meditação, turismo costeiro, imobiliárias de praia, clínicas e spas. AI-ready template."
colors:
  primary: "#263C59"
  secondary: "#C8D9E6"
  tertiary: "#6D89A6"
  neutral: "#E6DED4"
  surface: "#AFC3D4"
  accent: "#F2F4F6"
typography:
  h1:
    fontFamily: System UI stack
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: System UI stack
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: System UI stack
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 14px
  md: 28px
  lg: 42px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 261
  author: "designmd.app"
  source: "https://designmd.app/library/coastal-mist"
  tags: ["风格模板", "saas de bem-estar", "apps de meditação", "turismo costeiro"]
---

## Overview

Serene coastal UI using deep navy, pale seafoam, and soft slate blues. Ideal for saas de bem-estar, apps de meditação, turismo costeiro, imobiliárias de praia, clínicas e spas. AI-ready template. Coastal Mist draws from a lineage that most designers never bother to trace — the intersection of Scandinavian restraint and Pacific Northwest atmosphere. Think of the fog rolling into Big Sur, or the muted mornings along the Danish coastline. There's a reason wellness brands gravitate toward this palette: it carries the emotional weight of stillness without feeling sterile.

The typographic tradition here is rooted in Swiss modernism, but softened. Where Helvetica felt clinical, coastal-inspired systems lean into generous whitespace and optical weight that breathes. The mist metaphor isn't decorative — it's structural. It dictates how layers interact, how contrast is rationed, how information reveals itself gradually rather than shouting.

This aesthetic matured in the early 2020s when meditation apps and DTC wellness brands rejected the saturated gradients of tech culture. They needed something that felt human and unhurried. Coastal Mist is what emerged — not a trend, but a tonal commitment to calm as a design value.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** General
- **Keywords:** costeiro sereno, atmosfera de neblina, tipografia clean, foco em respiro, sensação de calma e confiança
- **Era:** Contemporary Coastal
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Deep Current** (#263C59) — Primary surface or dominant color
- **Seafoam Cloud** (#C8D9E6) — Secondary surface or text color
- **Coastal Slate** (#6D89A6) — Supporting palette color
- **Driftwood Pale** (#E6DED4) — Extended palette, decorative use
- **Ocean Pearl** (#AFC3D4) — Extended palette, decorative use
- **Cinza neblina** (#F2F4F6) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

Background com gradiente suave azul-acizentado, sombras delicadas, bordas arredondadas leves, imagens com overlay de neblina, blur sutil em elementos de fundo

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 14px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (14px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (14px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Gradiente de fundo inspirado em céu costeiro nublado
- Do Uso equilibrado de Deep Current
- Do Seafoam Cloud e Coastal Slate
- Do Tipografia clean com bastante espaço em branco
- Do Cards com sombras suaves e bordas arredondadas
- Do Imagens com overlay levemente azulado para reforçar o clima costeiro


## Use Case

SaaS de bem-estar, Apps de meditação, Turismo costeiro, Imobiliárias de praia, Clínicas e spas

<!-- Source: https://designmd.app/library/coastal-mist · designmd.app -->
