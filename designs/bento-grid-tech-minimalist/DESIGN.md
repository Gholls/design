---
version: "alpha"
name: "Bento Grid Tech Minimalist"
description: "Bento grid landing page, apple style aesthetic, modular layout, rounded cards, clean minimalist tech, organized grid system. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#1D1D1F"
  tertiary: "#9562E3"
  neutral: "#F5F5F7"
  surface: "#86868b"
  accent: "#0071e3"
typography:
  h1:
    fontFamily: "-apple-system"
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: "-apple-system"
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
  order: 194
  author: "designmd.app"
  source: "https://designmd.app/library/bento-grid-tech-minimalist"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Bento grid landing page, apple style aesthetic, modular layout, rounded cards, clean minimalist tech, organized grid system. Ideal for landing pages, modern websites. AI-ready template. Apple made bento grids famous with those splashy keynote slides — big rounded cards, candy gradients, product shots floating in space. Beautiful stuff. But somewhere around 2021, a quieter mutation emerged. Linear shipped their landing page with bento cards that felt more like terminal windows than marketing material. Dark backgrounds, monospace type, subtle borders that barely whispered. Vercel followed. Then Raycast. The pattern crystallized into something distinctly developer-facing.

This tech-minimalist variant strips the bento grid down to its structural bones. Where Apple uses the format to dazzle, dev-tool companies use it to organize. The cards become containers for code snippets, API response previews, architecture diagrams. Color is functional, not decorative — maybe a single accent against near-black surfaces. The grid itself does the talking.

What's interesting is how this restraint actually increases information density. You can pack more into a bento layout when you're not competing with gradients and blur effects. Companies like Planetscale, Railway, and Resend understood this early. The grid becomes documentation that happens to look good, rather than marketing that happens to contain information.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Modern, Grid, Geometric
- **Keywords:** bento grid, card layout, apple style, geometric, rounded, organized, modular, clean
- **Era:** Modern Tech
- **Light/Dark:** ✓ Full / ◐ Part

## Colors

- **Background** (#FFFFFF) — Primary background surface
- **Text** (#1D1D1F) — Primary text color
- **Accent** (#9562E3) — Primary accent, CTAs and interactive elements
- **Light Grey** (#F5F5F7) — Secondary text, borders, muted elements
- **Dark Grey** (#86868b) — Deep contrast surface
- **Soft Blue** (#0071e3) — Secondary accent


## Typography

- **Display / Hero:** Segoe UI — Weight 700, tight tracking, used for headline impact
- **Accent:** -apple-system — Used for decorative or emphasis text
- **Body:** Segoe UI — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Segoe UI — 0.875rem, weight 500, slight letter-spacing
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

Modular bento-box layout, rounded container corners (squircles), large typographic metrics, minimalist iconography, smooth matte finish.

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Grid-based (Bento) layout
- Do Large rounded corners (20px+)
- Do Card based content organization
- Do Clean typography (San Francisco/Inter)
- Do Minimalist icons


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/bento-grid-tech-minimalist · designmd.app -->
