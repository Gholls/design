---
version: "alpha"
name: "Replicate Blaze Gallery"
description: "Replicate-inspired explosive landing page. Ideal for plataformas de modelos ai, apis de ml, comunidades developer, marketplaces de ai. AI-ready template."
colors:
  primary: "#202020"
  secondary: "#ffffff"
  tertiary: "#ea2804"
  neutral: "#dd4425"
  surface: "#2b9a66"
  accent: "#24292e"
typography:
  h1:
    fontFamily: system-ui display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: system-ui display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: system-ui display
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 9999px
  md: 19998px
  lg: 29997px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 667
  author: "designmd.app"
  source: "https://designmd.app/library/replicate-blaze-gallery"
  tags: ["风格模板", "apis de ml", "marketplaces de ai"]
---

## Overview

Replicate-inspired explosive landing page. Ideal for plataformas de modelos ai, apis de ml, comunidades developer, marketplaces de ai. AI-ready template. The gradient hero pattern didn't emerge from aesthetic whimsy — it solved a real problem. Early AI model platforms like Replicate needed to communicate technical sophistication without alienating creative users. The solution was borrowed from demo culture and generative art: large-format gradient fields that signal computation, transformation, and possibility without requiring literal illustration.

Blaze Gallery takes this lineage seriously. Where most ML marketplaces default to dark themes with neon accents (the lazy shorthand for 'technical'), this approach uses warm, saturated gradient compositions that reference illustration and fine art traditions. The hero becomes a canvas rather than a billboard. It says: this is where models live, and models make beautiful things.

The broader pattern — gradient-as-hero on model platforms — matured around 2023-2024 as the market shifted from developer-only tools to creative professional audiences. Replicate's own evolution mirrors this: from API documentation aesthetic to gallery experience. The gradient hero became the bridge between technical infrastructure and artistic output.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Explosive Gradient Hero, Heavy Display Font, All-Pill Geometry, Developer Community, AI Gallery
- **Keywords:** replicate, blaze, gradient hero, heavy display, all-pill, developer community, rb-freigeist, basier-square, JetBrains Mono, model gallery
- **Era:** 2024-2026 AI Model Playground
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Escuro** (#202020) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Vermelho Brand** (#ea2804) — Primary accent, CTAs and interactive elements
- **Vermelho Secundário** (#dd4425) — Error states, destructive actions
- **Verde Status** (#2b9a66) — Success states, positive indicators
- **GitHub Dark** (#24292e) — Deep contrast surface
- **Cinza** (#646464) — Secondary text, borders, muted elements
- **Silver** (#bbbbbb) — Extended palette, decorative use


## Typography

- **Display / Hero:** system-ui display — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui display — 0.875rem, weight 500, slight letter-spacing
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

Hero explosivo com gradiente laranja-vermelho-magenta-rosa (#ea2804 âncora). Tipografia display massiva (até 128px) em font heavy bold. Geometria exclusivamente pill (9999px) em TUDO. Alto contraste preto (#202020) e branco. Galeria de modelos AI com imagens geradas. Links com underline pontilhado. Badges verdes (#2b9a66) para status. Manifesto de fechamento 'Imagine o que você pode construir' em 128px. Tags lowercase (text-transform: lowercase).

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.


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

- Do Hero gradiente explosivo
- Do Display até 128px weight 700
- Do Pill 9999px em tudo
- Do Alto contraste
- Do Galeria de modelos AI
- Do Links pontilhados
- Do Badges verdes
- Do Tags lowercase
- Do Responsivo


## Use Case

Platforms de modelos AI, APIs de ML, Comunidades developer, Marketplaces de AI

<!-- Source: https://designmd.app/library/replicate-blaze-gallery · designmd.app -->
