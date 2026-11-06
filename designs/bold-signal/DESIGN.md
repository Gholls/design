---
version: "alpha"
name: "Bold Signal"
description: "Bold, confident dark landing page. Ideal for creative agencies, startups tech, portfolios de design, apresentações corporativas. AI-ready template."
colors:
  primary: "#1a1a1a"
  secondary: "#FF5722"
  tertiary: "#FFFFFF"
  neutral: "#2d2d2d"
  surface: "#1a1a1a"
  accent: "#888888"
typography:
  h1:
    fontFamily: Archivo Black
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Archivo Black
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 211
  author: "designmd.app"
  source: "https://designmd.app/library/bold-signal"
  tags: ["风格模板", "creative agencies", "startups tech", "portfolios de design"]
---

## Overview

Bold, confident dark landing page. Ideal for creative agencies, startups tech, portfolios de design, apresentações corporativas. AI-ready template. There's a moment in every design era where whisper stops working. The mid-2010s had it — everyone got quiet, minimal, polite. Thin type. Muted palettes. Careful spacing. And then the pendulum swung hard. Balenciaga's campaigns hit billboards with raw, oversized Helvetica on nothing. Brutalist web design stopped apologizing. Suddenly, taking up space wasn't arrogance — it was clarity.

The bold signal movement isn't about volume for volume's sake. It's a rejection of the idea that sophistication requires restraint. Some messages deserve to land like a fist on a table. Oversized type, high-contrast color, zero ornamentation — these choices say "we know exactly what we are." No hedge. No maybe.

This lineage runs through punk zines, through Barbara Kruger, through early Nike editorial. It's design that refuses to be scrolled past. Not loud — direct. There's a difference, and the best bold work knows it.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Confident, Bold, Modern, High-Impact
- **Keywords:** bold, confident, modern, high-impact, dark gradient, colored card, large numbers, navigation breadcrumbs, grid-based, Archivo Black, Space Grotesk
- **Era:** 2024-2026 Modern Bold
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Dark Background** (#1a1a1a) — Primary background surface
- **Card Orange** (#FF5722) — Warm accent, call-to-action secondary
- **White** (#FFFFFF) — Light surface, card backgrounds
- **Dark Gradient** (#2d2d2d) — Deep contrast surface
- **Text on Card** (#1a1a1a) — Primary text color
- **Muted Grey** (#888888) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Archivo Black — Weight 700, tight tracking, used for headline impact
- **Accent:** Space Grotesk — Used for decorative or emphasis text
- **Body:** Archivo Black — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Archivo Black — 0.875rem, weight 500, slight letter-spacing
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

Bold colored card as focal point, large section numbers (01, 02), navigation breadcrumbs with opacity states, grid-based layout, smooth hover transitions 250ms

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

- Do Archivo Black + Space Grotesk carregados
- Do Dark gradient background
- Do Colored card focal point (#FF5722)
- Do Large section numbers (01
- Do 02
- Do 03)
- Do Navigation breadcrumbs com opacity
- Do Grid-based layout preciso
- Do Responsivo mobile/tablet/desktop


## Use Case

Creative agencies, Tech startups, Design portfolios, Corporate presentations

<!-- Source: https://designmd.app/library/bold-signal · designmd.app -->
