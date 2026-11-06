---
version: "alpha"
name: "Cyberpunk Dark Mode Flow"
description: "Cyberpunk dark mode landing page, sleek flow design, neon blue accents, circuit patterns, modern dark ui, tech aesthetic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#080a12"
  secondary: "#ffffff"
  tertiary: "#00c4fa"
  neutral: "#1a1d26"
  surface: "#00ff9d"
  accent: "#bd00ff"
typography:
  h1:
    fontFamily: Sora
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Sora
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 301
  author: "designmd.app"
  source: "https://designmd.app/library/cyberpunk-dark-mode-flow"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Cyberpunk dark mode landing page, sleek flow design, neon blue accents, circuit patterns, modern dark ui, tech aesthetic. Ideal for landing pages, modern websites. AI-ready template. Cyberpunk as a visual language didn't start with Blade Runner, but that's where it learned to breathe. The rain-slicked neons of Ridley Scott's Los Angeles gave designers permission to treat darkness not as absence but as canvas. By the late 2010s, dark mode had gone mainstream — iOS, Android, every SaaS tool scrambling to flip their whites to near-blacks. But cyberpunk dark mode is something else entirely. It's not about reducing eye strain. It's about building atmosphere.

The lineage runs through Tron's light cycles, Ghost in the Shell's data overlays, and the terminal aesthetics of early hacker culture. What changed is fidelity. Modern displays render deep blacks and saturated neons with zero compromise. Designers working in crypto dashboards and dev tools noticed: when your interface already lives in a terminal-adjacent world, why fight it? Lean into the glow. Let data streams pulse like arterial flow through a circuit board.

This isn't nostalgia cosplay. It's a functional acknowledgment that dense information environments benefit from high-contrast luminous hierarchies against void-dark backgrounds. The cyberpunk frame just happens to make it feel alive.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Futuristic, Analytical, Sophisticated
- **Keywords:** cyberpunk, dark mode, flow, neon, circuit, glow, tech, sleek
- **Era:** Sleek Future
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Background** (#080a12) — Primary background surface
- **Text** (#ffffff) — Primary text color
- **Accent** (#00c4fa) — Primary accent, CTAs and interactive elements
- **Dark Grey** (#1a1d26) — Deep contrast surface
- **Neon Green** (#00ff9d) — Success states, positive indicators
- **Soft Purple** (#bd00ff) — Accent color, emphasis elements


## Typography

- **Display / Hero:** Sora — Weight 700, tight tracking, used for headline impact
- **Body:** Sora — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Sora — 0.875rem, weight 500, slight letter-spacing
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

Glowing borders, rounded rectangular containers, faint circuit-board background patterns, smooth digital matte, self-emitting neon strokes.

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

- Do Dark blue/black background
- Do Neon Blue/Green accents
- Do Subtle circuit patterns
- Do Glowing borders/buttons
- Do Clean modern typography


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/cyberpunk-dark-mode-flow · designmd.app -->
