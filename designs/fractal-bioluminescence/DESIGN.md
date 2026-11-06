---
version: "alpha"
name: "Fractal Bioluminescence"
description: "Fractal landing page, bioluminescent design, glowing organic shapes, dark background, electric purple and green, intricate geometry. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#050005"
  secondary: "#FFFFFF"
  tertiary: "#E040FB"
  neutral: "#00E676"
  surface: "#4A148C"
  accent: "#2979FF"
typography:
  h1:
    fontFamily: Montserrat
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Montserrat
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 413
  author: "designmd.app"
  source: "https://designmd.app/library/fractal-bioluminescence"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Fractal landing page, bioluminescent design, glowing organic shapes, dark background, electric purple and green, intricate geometry. Ideal for landing pages, modern websites. AI-ready template. Bioluminescence has fascinated humans since we first watched the ocean glow at night. But it took computational thinking—specifically fractal geometry—to give us a language for its underlying structure. Mandelbrot showed us that nature repeats itself at every scale. Jellyfish tendrils, mycelium networks, the branching of deep-sea corals: all fractal. The visual intersection of these two phenomena didn't emerge in design until generative artists in the early 2010s began simulating organic light systems through recursive algorithms.

What makes fractal bioluminescence compelling as a design system isn't novelty—it's inevitability. As biotech interfaces matured, flat gradients and sterile whites started feeling dishonest. The science itself is messy, recursive, alive. Designers working in genomics dashboards and lab platforms needed a visual language that honored complexity without drowning in it. Fractal bioluminescence offered that: structured chaos, light emerging from depth, patterns that reward closer inspection rather than punishing it.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Intricate, Scientific, Mesmerizing
- **Keywords:** fractal, bioluminescence, organic, glow, spiral, geometric, nature, neon
- **Era:** Organic Future
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Background** (#050005) — Primary background surface
- **Text** (#FFFFFF) — Primary text color
- **Accent** (#E040FB) — Primary accent, CTAs and interactive elements
- **Bio Green** (#00E676) — Success states, positive indicators
- **Deep Purple** (#4A148C) — Accent color, emphasis elements
- **Electric Blue** (#2979FF) — Secondary accent


## Typography

- **Display / Hero:** Montserrat — Weight 700, tight tracking, used for headline impact
- **Body:** Montserrat — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Montserrat — 0.875rem, weight 500, slight letter-spacing
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

Complex Mandelbrot fractal spirals, recursive geometry, glowing filaments, smooth gradient flows, digital precision.

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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Deep black background
- Do Highly saturated glowing colors
- Do Fractal/Spiral patterns
- Do Organic/Curved lines
- Do Centralized radial layout


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/fractal-bioluminescence · designmd.app -->
