---
version: "alpha"
name: "Neon Cyber"
description: "Futuristic, techy, confident landing page with neon cyber aesthetic. Ideal for plataformas gaming, startups tech, apps de criptomoeda, eventos de tecnologia. AI-ready template."
colors:
  primary: "#0a0f1c"
  secondary: "#00ffcc"
  tertiary: "#ff00aa"
  neutral: "#0d1a3a"
  surface: "#8b00ff"
  accent: "#0066ff"
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
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 593
  author: "designmd.app"
  source: "https://designmd.app/library/neon-cyber"
  tags: ["风格模板", "plataformas gaming", "startups tech", "apps de criptomoeda"]
---

## Overview

Futuristic, techy, confident landing page with neon cyber aesthetic. Ideal for plataformas gaming, startups tech, apps de criptomoeda, eventos de tecnologia. AI-ready template. Neon as a design language didn't start with Blade Runner, but that's where it became ideology. The 1982 film crystallized decades of neon signage — from Tokyo's Kabukichō to Las Vegas strips — into a visual shorthand for futures that feel lived-in rather than sterile. Before that, neon was just commerce. After it, neon meant something.

The cyber aesthetic evolved through waves. First the '80s retrofuturism of Syd Mead's production design, then the '90s rave flyer explosion where glowing type on black became the universal language of underground electronic culture. The 2000s brought a lull — Web 2.0 gradients and Apple's clean minimalism pushed neon into kitsch territory. But by 2018, the pendulum swung hard. Cyberpunk 2077's marketing, synthwave album art, and LED-drenched esports arenas brought the aesthetic back with force.

What makes neon cyber work today isn't nostalgia — it's contrast. Dark interfaces with selective luminance create natural hierarchy. The human eye tracks light. Designers who understand this use glow not as decoration but as information architecture, guiding attention through darkness the way airport runway lights guide planes home.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 8/10 — Cinematic

- **Style:** Futuristic, Techy, Confident, Neon
- **Keywords:** neon, cyber, futuristic, deep navy, cyan, magenta, particle backgrounds, neon glow, grid patterns, Clash Display, Satoshi
- **Era:** 2024-2026 Cyber Future
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Deep Navy** (#0a0f1c) — Primary surface or dominant color
- **Cyan Accent** (#00ffcc) — Primary accent, CTAs and interactive elements
- **Magenta** (#ff00aa) — Decorative accent, highlight elements
- **Dark Blue** (#0d1a3a) — Deep contrast surface
- **Neon Purple** (#8b00ff) — Accent color, emphasis elements
- **Electric Blue** (#0066ff) — Secondary accent
- **White** (#ffffff) — Secondary surface


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

Particle backgrounds via CSS, neon glow effects (text-shadow, box-shadow), grid patterns overlay, cyan/magenta color contrast, smooth neon pulse animations, transitions 200ms

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (50%) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (50%) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Deep navy background #0a0f1c
- Do Neon glow effects cyan/magenta
- Do Grid pattern overlay
- Do Particle backgrounds CSS
- Do Text-shadow neon em headings
- Do Box-shadow neon em cards/buttons
- Do Responsivo mobile/tablet/desktop


## Use Case

Gaming platforms, Tech startups, Crypto apps, Tech events

<!-- Source: https://designmd.app/library/neon-cyber · designmd.app -->
