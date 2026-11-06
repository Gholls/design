---
version: "alpha"
name: "Estilo Suíço Corporativo"
description: "Clean and professional Swiss Style landing page for a corporate IT consulting firm. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#000000"
  tertiary: "#E4002B"
  neutral: "#F0F0F0"
  surface: "#001F3F"
  accent: "#006400"
typography:
  h1:
    fontFamily: Helvetica Neue
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Helvetica Neue
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 20.0px
  md: 40.0px
  lg: 80.0px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 383
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-suico-corporativo"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Clean and professional Swiss Style landing page for a corporate IT consulting firm. Ideal for landing pages, modern websites. AI-ready template. The International Typographic Style didn't conquer corporate America through charm. It won through sheer competence. Born in Basel and Zürich in the 1950s, Swiss design offered something irresistible to postwar businesses scaling globally: a visual language that worked across borders without translation. Grids. Helvetica. Asymmetric balance. Information hierarchy so clean it felt inevitable.

IBM understood this first. Paul Rand's work gave the company a face that said 'we are serious, we are precise, we will not waste your time.' Then the consulting firms followed — McKinsey, Bain, Deloitte — adopting that same Swiss restraint because it communicated exactly what they sold: structured thinking, methodical execution, zero frivolity. The grid became shorthand for institutional credibility.

What's remarkable is how little this has changed. Sixty years later, when an enterprise needs to look trustworthy at scale, they still reach for the same toolkit. Not because designers lack imagination — because the vocabulary genuinely works. Swiss corporate style isn't a trend that survived. It's infrastructure.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Clean, Functional, Professional
- **Keywords:** IT consulting, corporate, professional, clean, functional, structured, precise, reliable, modern, efficient
- **Era:** 2026+ Precisão Corporativa
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#000000) — Dark surface, primary background
- **Vermelho Suíço** (#E4002B) — Error states, destructive actions
- **Cinza Claro** (#F0F0F0) — Secondary text, borders, muted elements
- **Azul Marinho** (#001F3F) — Secondary accent
- **Verde Escuro** (#006400) — Deep contrast surface
- **Amarelo Mostarda** (#FFD700) — Warning states, attention indicators
- **Cinza Médio** (#6C757D) — Secondary text, borders, muted elements


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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Layouts de grid modulares e alinhados, tipografia sans-serif (Helvetica/Arial) com hierarquia clara, uso de cores primárias para destaque, fotografias de alta qualidade alinhadas ao texto, micro-interações de hover com realce sutil, transições de elementos baseadas em grid.

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

- Do Layouts de grid modulares
- Do Tipografia sans-serif clara
- Do Cores primárias para destaque
- Do Fotografias alinhadas
- Do Micro-interações sutis
- Do Transições baseadas em grid.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-suico-corporativo · designmd.app -->
