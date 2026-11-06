---
version: "alpha"
name: "Mintlify Green Docs"
description: "Mintlify-inspired documentation landing page. Ideal for documentação, developer portals, plataformas de docs, knowledge bases. AI-ready template."
colors:
  primary: "#0d0d0d"
  secondary: "#ffffff"
  tertiary: "#18E299"
  neutral: "#d4fae8"
  surface: "#333333"
  accent: "#666666"
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
  order: 572
  author: "designmd.app"
  source: "https://designmd.app/library/mintlify-green-docs"
  tags: ["风格模板", "documentação", "developer portals", "plataformas de docs"]
---

## Overview

Mintlify-inspired documentation landing page. Ideal for documentação, developer portals, plataformas de docs, knowledge bases. AI-ready template. Mintlify didn't invent the green-on-dark documentation aesthetic, but they codified it into something repeatable. Before their templates gained traction, developer docs lived in two camps: the sterile white voids of GitBook clones, or the overly branded chaos of marketing teams who couldn't resist adding gradients to API references. Mintlify's contribution was restraint — a single accent color (that now-iconic emerald green), generous whitespace, and typography that actually respects the hierarchy of technical content.

The Swiss influence here is undeniable but never heavy-handed. You see it in the grid discipline, the consistent vertical rhythm, the way navigation never competes with content. What makes this system interesting is how it borrows from mid-century print rationalism while solving a distinctly modern problem: making dense technical writing feel approachable without dumbing it down.

The green accent does real work. It's not decorative — it signals interactivity, marks navigation state, and creates a visual throughline across pages that might otherwise feel like disconnected walls of monospace text. That single color choice carries the entire personality of the system.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Documentation, Green Accent, Inter, Atmospheric Hero, Ultra-Round Corners
- **Keywords:** mintlify, documentation, green accent, Inter, atmospheric gradient, ultra-round, Geist Mono, developer docs
- **Era:** 2024-2026 Developer Documentation
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Quase Preto** (#0d0d0d) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Verde Brand** (#18E299) — Primary accent, CTAs and interactive elements
- **Verde Claro** (#d4fae8) — Supporting palette color
- **Cinza 700** (#333333) — Secondary text, borders, muted elements
- **Cinza 500** (#666666) — Secondary text, borders, muted elements
- **Cinza 200** (#e5e5e5) — Secondary text, borders, muted elements
- **Verde Deep** (#0fa76e) — Success states, positive indicators


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

Canvas branco com acento verde (#18E299) para CTAs, hover e focus. Hero com gradiente atmosférico verde-branco como nuvem. Cantos ultra-arredondados: 16px containers, 24px featured, 9999px botões. Bordas 5% opacity (rgba(0,0,0,0.05)). Inter com tracking negativo em display (-0.8px a -1.28px). Geist Mono uppercase para labels técnicos. Três pesos: 400 body, 500 UI, 600 headings.

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

- Do Canvas branco com verde #18E299
- Do Hero gradiente atmosférico
- Do Ultra-round corners
- Do Bordas 5% opacity
- Do Inter tracking negativo
- Do Geist Mono labels
- Do Responsivo


## Use Case

Documentation, Developer portals, Docs platforms, Knowledge bases

<!-- Source: https://designmd.app/library/mintlify-green-docs · designmd.app -->
