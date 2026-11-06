---
version: "alpha"
name: "Locomotive Infinite Scroll"
description: "Design an immersive infinite scroll landing page inspired by Locomotive Scroll v5 and Lenis. Ideal for landing pages imersivas, storytelling digital, portfolios criativos, sites de agências, apresentações de produto premium, one-page narrativas. AI-ready template."
colors:
  primary: "#1A1A2E"
  secondary: "#16213E"
  tertiary: "#FFFFFF"
  neutral: "#6C63FF"
  surface: "#A29BFE"
  accent: "#FF6B6B"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 16px
  md: 32px
  lg: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 518
  author: "designmd.app"
  source: "https://designmd.app/library/locomotive-infinite-scroll"
  tags: ["风格模板", "storytelling digital", "portfolios criativos", "sites de agências"]
---

## Overview

Design an immersive infinite scroll landing page inspired by Locomotive Scroll v5 and Lenis. Ideal for landing pages imersivas, storytelling digital, portfolios criativos, sites de agências, apresentações de produto premium, one-page narrativas. AI-ready template. Locomotive Scroll emerged from the Montreal-based creative studio Locomotive around 2019, at a time when the web was rediscovering scroll as a narrative device rather than a mere navigation mechanic. The library gave developers a clean abstraction over smooth scrolling — virtual scroll containers, parallax layers, and scroll-triggered animations — without requiring a physics degree or a week of debugging IntersectionObserver edge cases.

What made it stick wasn't just the tech. It was the philosophy: scrolling should feel intentional. Before Locomotive, smooth scroll implementations were either janky hacks (hijacking the wheel event, fighting the browser) or heavyweight frameworks that demanded you restructure your entire DOM. Locomotive found the middle ground — opinionated enough to enforce good defaults, flexible enough to let you art-direct every pixel of the journey.

The library's influence is visible across award-winning portfolios and agency sites from 2020 onward. It essentially codified a generation's expectation of what a 'premium' scroll experience feels like. Even as native CSS scroll-driven animations gain traction, Locomotive's design language — that buttery, slightly decoupled momentum — remains the reference point for crafted scrolling.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Smooth Scroll, Parallax, Kinetic, Immersive, Scroll-Driven
- **Keywords:** smooth scroll, parallax, infinite scroll, locomotive scroll, lenis, scroll-driven animations, viewport detection, kinetic motion, scroll progress, CSS variables, data attributes, lerp interpolation, scroll speed, scroll hijacking, immersive storytelling
- **Era:** 2020s Modern Scroll-Driven
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Deep Charcoal** (#1A1A2E) — Dark surface, primary background
- **Midnight Blue** (#16213E) — Dark surface, primary background
- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Electric Indigo** (#6C63FF) — Accent color, emphasis elements
- **Soft Lavender** (#A29BFE) — Extended palette, decorative use
- **Warm Coral** (#FF6B6B) — Extended palette, decorative use
- **Mint Glow** (#00D2FF) — Extended palette, decorative use
- **Pale Smoke** (#F0F0F5) — Extended palette, decorative use


## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Accent:** Space Grotesk — Used for decorative or emphasis text
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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

Smooth scroll via Lenis (lerp: 0.1, duration: 1.2), parallax layers com data-scroll-speed (0.1 a 0.8), scroll progress como CSS variable (--progress 0-1), viewport detection com IntersectionObserver, fade-in/slide-up on scroll (translate3d + opacity), staggered reveal (delay incremental 100ms), horizontal scroll sections, scroll-triggered counters, kinetic typography com velocidades diferentes, sticky sections com scroll progress, easing customizado (exponential ease-out)

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 16px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (16px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (16px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Locomotive Scroll v5 CDN incluído (JS + CSS)
- Do new LocomotiveScroll() inicializado
- Do data-scroll em todos os elementos animados
- Do data-scroll-speed com valores variados (0.1-0.8)
- Do data-scroll-css-progress para barra de progresso
- Do Parallax layers no hero (mínimo 3 camadas)
- Do Reveal animations (fade-in + slide-up) com is-inview
- Do Staggered reveals com delay incremental
- Do Seção horizontal scroll
- Do Sticky section com scroll progress
- Do Kinetic typography com velocidades diferentes
- Do GPU-accelerated transforms (translate3d)
- Do Dark palette #1A1A2E verificada
- Do Contraste WCAG AA 4.5:1
- Do Responsivo mobile (parallax desabilitado em touch)


## Use Case

Landing pages imersivas, Storytelling digital, Portfolios criativos, Sites de agencies, Presentations de produto premium, One-page narrativas

<!-- Source: https://designmd.app/library/locomotive-infinite-scroll · designmd.app -->
