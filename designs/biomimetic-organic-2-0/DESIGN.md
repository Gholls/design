---
version: "alpha"
name: "Biomimetic / Organic 2.0"
description: "Biomimetic organic interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FF9999"
  secondary: "#00FF41"
  tertiary: "#001E3C"
  neutral: "#FF7F50"
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
  order: 198
  author: "designmd.app"
  source: "https://designmd.app/library/biomimetic-organic-2-0"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Biomimetic organic interface. Ideal for landing pages, saas. AI-ready template. Designers have always stolen from nature. Buckminster Fuller's geodesic domes, Frei Otto's soap-film tensile structures, the Voronoi diagrams that showed up in everything from architecture to textile design — biomimicry isn't new. What changed is the tooling.

Around 2018, creative coders started pushing p5.js and Three.js beyond demo reels into production interfaces. Reaction-diffusion patterns, L-systems, flocking algorithms — suddenly these weren't just generative art experiments. They were navigation systems, data visualizations, brand identities. The math that describes how cells divide or how slime mold finds the shortest path became a legitimate design language.

Organic 2.0 is the maturation of that moment. It's not about slapping a leaf texture on a card component. It's algorithmic: growth patterns that respond to data, fluid simulations driven by user input, cellular structures that reorganize based on content density. The aesthetic emerges from rules, not decoration. Nature as system logic, not surface treatment.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Organic, Generative, Natural, Flowing
- **Keywords:** Nature-inspired, cellular, fluid, breathing, generative, algorithms, life-like
- **Era:** 2024+ Generative
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Cellular Pink** (#FF9999) — Primary text color
- **Chlorophyll Green** (#00FF41) — Secondary surface or text color
- **Deep Ocean** (#001E3C) — Extended palette, decorative use
- **Coral** (#FF7F50) — Extended palette, decorative use


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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Breathing animations, fluid morphing, generative growth, physics-based movement

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Organic shapes present
- Do Animations feel alive
- Do Generative elements
- Do Performance monitored
- Do Mobile fallback
- Do Accessibility alt content


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/biomimetic-organic-2-0 · designmd.app -->
