---
version: "alpha"
name: "Linear Precision Dark"
description: "Precision-engineered dark landing page inspired by Linear. Ideal for ferramentas de gestão de projetos, saas developer, plataformas de engenharia, issue trackers. AI-ready template."
colors:
  primary: "#08090a"
  secondary: "#0f1011"
  tertiary: "#191a1b"
  neutral: "#f7f8f8"
  surface: "#5e6ad2"
  accent: "#7170ff"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 516
  author: "designmd.app"
  source: "https://designmd.app/library/linear-precision-dark"
  tags: ["风格模板", "saas developer", "issue trackers"]
---

## Overview

Precision-engineered dark landing page inspired by Linear. Ideal for ferramentas de gestão de projetos, saas developer, plataformas de engenharia, issue trackers. AI-ready template. Before Linear showed up in 2019, developer tools looked like they were designed by committee in 2012. Jira's cluttered interfaces, GitHub's utilitarian gray — nobody was treating project management as a craft. Linear changed the conversation entirely. They proved that a dark interface with surgical precision wasn't just aesthetic preference — it was a productivity statement. The purple accent wasn't arbitrary; it cut through dark backgrounds with enough contrast to guide attention without screaming.

What Linear really did was legitimize obsessive attention to detail in B2B software. Every transition timed to the millisecond, every shadow calculated, every interaction feeling like it responded before you finished clicking. The dark+purple palette became shorthand for 'we care about craft' in the developer tool space. Raycast, Warp, Arc — they all owe something to Linear's proof that developers would pay more for software that respected their visual intelligence.

The ripple effect is undeniable. Linear didn't invent dark mode, but they made precision-dark into a genre. A genre that says: this tool was built by people who ship.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Dark-Mode First, Precision Engineering, Indigo Accent, Inter Variable
- **Keywords:** linear, dark mode, precision, indigo-violet, Inter Variable, cv01 ss03, weight 510, semi-transparent borders, engineering aesthetic
- **Era:** 2024-2026 Precision Engineering
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Marketing Black** (#08090a) — Dark surface, primary background
- **Painel** (#0f1011) — Secondary surface or text color
- **Superfície** (#191a1b) — Supporting palette color
- **Texto** (#f7f8f8) — Primary text color
- **Indigo** (#5e6ad2) — Accent color, emphasis elements
- **Violeta** (#7170ff) — Accent color, emphasis elements
- **Hover** (#828fff) — Extended palette, decorative use
- **Borda** (rgba(255,255,255,0.05)) — Extended palette, decorative use


## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
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

Dark-mode-first com canvas near-black (#08090a). Inter Variable com features cv01 e ss03 para estética geométrica. Weight 510 como peso padrão (entre regular e medium). Letter-spacing agressivo negativo (-1.584px em 72px). Bordas semi-transparentes brancas (rgba 0.05-0.08). Botões com background near-zero opacity (rgba 0.02-0.05). Acento indigo-violeta (#5e6ad2) como única cor cromática.

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

- Do Canvas near-black #08090a
- Do Inter com cv01 ss03
- Do Weight 510 padrão
- Do Headlines com tracking negativo agressivo
- Do Bordas semi-transparentes brancas
- Do Acento indigo-violeta único
- Do Botões near-zero opacity
- Do Responsivo


## Use Case

Project management tools, Developer SaaS, Engineering platforms, Issue trackers

<!-- Source: https://designmd.app/library/linear-precision-dark · designmd.app -->
