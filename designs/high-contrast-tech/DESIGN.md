---
version: "alpha"
name: "High-Contrast Tech"
description: "High-contrast tech interface with strict 60/30/10 color distribution. Ideal for ux/ui de produto digital, dashboards analytics, saas platforms, conteúdo tecnológico, apps b2b. AI-ready template."
colors:
  primary: "#1E272E"
  secondary: "#F5F6FA"
  tertiary: "#0984E3"
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
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 467
  author: "designmd.app"
  source: "https://designmd.app/library/high-contrast-tech"
  tags: ["风格模板", "dashboards analytics", "saas platforms", "conteúdo tecnológico"]
---

## Overview

High-contrast tech interface with strict 60/30/10 color distribution. Ideal for ux/ui de produto digital, dashboards analytics, saas platforms, conteúdo tecnológico, apps b2b. AI-ready template. High-contrast interfaces didn't emerge from aesthetic preference — they emerged from necessity. Early terminal displays were high-contrast by default: phosphor green on black, amber on void. There was no design decision there, just physics. When GUIs arrived and everyone rushed toward light themes and soft gradients, the developers kept their dark terminals. They knew something the design world would take decades to rediscover: contrast isn't decoration, it's information density.

The resurgence started around 2015-2018 when tools like VS Code, Figma, and Linear normalized dark-first interfaces for professional software. These weren't "dark modes" bolted onto light designs — they were conceived in darkness. The philosophy shifted: instead of asking users to opt into dark mode, you designed for the void first and treated light as the accommodation. This inversion changed everything about how we think about hierarchy, because when your canvas is already at zero luminance, every pixel of light becomes intentional. You earn attention through precision, not volume.

- Density: 8/10 — Dense
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Dark, Precise, High-Contrast, Conversion-Focused
- **Keywords:** tech, dark mode, contrast, neon, dashboards, product UI, high readability, modern, digital, performance
- **Era:** 2020s Tech Product Design
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Night Black** (#1E272E) — Dark surface, primary background
- **Cloud White** (#F5F6FA) — Secondary surface
- **Electric Blue** (#0984E3) — Secondary accent


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

10%: Cyan Neon #00CEC9 para botões primários, notificações e elementos interativos; brilho controlado, bordas técnicas e transições rápidas (180-220ms)

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Base dark #1E272E predominante (60%)
- Do Leitura forte com #F5F6FA
- Do Estrutura secundária em #0984E3
- Do Destaque neon #00CEC9 limitado a 10%
- Do Contraste AA/AAA validado
- Do Responsivo


## Use Case

Digital product UX/UI, Analytics dashboards, SaaS platforms, Tech content, B2B apps

<!-- Source: https://designmd.app/library/high-contrast-tech · designmd.app -->
