---
version: "alpha"
name: "Holographic Data-Viz"
description: "Holographic landing page, data visualization style, futuristic hud, 3d floating elements, glowing blue interface, sci-fi aesthetic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#020712"
  secondary: "#E1F5FE"
  tertiary: "#00E5FF"
  neutral: "#40C4FF"
  surface: "#010408"
typography:
  h1:
    fontFamily: Rajdhani
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Rajdhani
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 470
  author: "designmd.app"
  source: "https://designmd.app/library/holographic-data-viz"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Holographic landing page, data visualization style, futuristic hud, 3d floating elements, glowing blue interface, sci-fi aesthetic. Ideal for landing pages, modern websites. AI-ready template. Every designer remembers the first time they saw Tony Stark swipe through JARVIS. That moment — translucent data hanging in mid-air, responsive to gesture, dimensionally rich — rewired our collective expectation of what interfaces could be. Minority Report did it earlier, sure. But Iron Man made it aspirational. Suddenly every dashboard mockup on Dribbble wanted to float.

The problem? Reality didn't cooperate. We had flat screens, fixed viewports, and RGB pixels that stubbornly refused to leave the glass. So designers faked it. Bloom effects, glassmorphism, parallax depth layers, pseudo-3D charts with dramatic perspective. The holographic aesthetic became a language unto itself — a way to signal "this is the future" even when the tech wasn't there yet.

Now the gap is closing. WebGL matured. Spatial computing shipped. AR headsets actually exist in living rooms. The sci-fi reference frame is no longer fantasy — it's a design target with real constraints, real users, and real accessibility questions we never had to answer when it was just a movie prop.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Sophisticated, Analytical, Visionary
- **Keywords:** holographic, data, visualization, hud, 3d, floating, glow, interface, sci-fi
- **Era:** Future Interface
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Background** (#020712) — Primary background surface
- **Text** (#E1F5FE) — Primary text color
- **Accent** (#00E5FF) — Primary accent, CTAs and interactive elements
- **Holo Blue** (#40C4FF) — Secondary accent
- **Deep Navy** (#010408) — Extended palette, decorative use
- **Glass White** (#FFFFFF20) — Secondary surface


## Typography

- **Display / Hero:** Rajdhani — Weight 700, tight tracking, used for headline impact
- **Body:** Rajdhani — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Rajdhani — 0.875rem, weight 500, slight letter-spacing
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

Floating isometric screens, wireframe brain models, luminous particle streams, hexagonal data blocks, glassy ethereal gradients.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Deep dark background
- Do Cyan/Blue glowing elements
- Do Semi-transparent 'glass' panels
- Do Isometric/3D elements
- Do Thin technical lines/borders


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/holographic-data-viz · designmd.app -->
