---
version: "alpha"
name: "Monochrome"
description: "Monochrome — Ivory ledger paper with all-black type; Lora serif headlines, Jost body, no color at all. Lora typography. ivory and pale-cream paper with deep ink-black type only. Best for user research synthesis, white paper, longform report. AI-ready design system."
colors:
  primary: "#fafadf"
  secondary: "#f2f2d2"
  tertiary: "#f5f0e4"
  neutral: "#1a1a16"
  surface: "#5e5e54"
typography:
  h1:
    fontFamily: Lora
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Lora
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.0rem
  md: 2.0rem
  lg: 4.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 577
  author: "designmd.app"
  source: "https://designmd.app/library/monochrome"
  tags: ["风格模板", "Jost body", "white paper"]
---

## Overview

Monochrome — Ivory ledger paper with all-black type; Lora serif headlines, Jost body, no color at all. Lora typography. ivory and pale-cream paper with deep ink-black type only. Best for user research synthesis, white paper, longform report. AI-ready design system. Monochrome isn't a limitation — it's a declaration. Before Pantone swatches and hex codes colonized every surface, printed matter spoke through contrast alone. The Swiss typographers of the 1950s understood this instinctively: Josef Müller-Brockmann's concert posters needed nothing beyond black ink on stock paper to command absolute attention. The grid did the work. The type carried the weight.

Strip color from a layout and you expose every weakness. Hierarchy must be earned through scale, weight, and spacing — not rescued by a accent hue. This is why monochrome remains the ultimate litmus test for typographic competence. Massimo Vignelli spent decades proving that black and white wasn't austerity but clarity. His Knoll identity, his Piccolo Teatro posters — they breathe because nothing competes with the letterform.

The contemporary revival isn't nostalgia. It's a reaction against the dopamine-gradient aesthetic that saturated digital design post-2018. When everything screams in color, silence becomes the loudest statement in the room.

- Density: 8/10 — Dense
- Variance: 8/10 — Complex
- Motion: 2/10 — Minimal

- **Style:** All-Ink, Archival, Literary, Austere
- **Keywords:** All-ink, ivory paper, zero color, Lora serif, archival, literary, austere, typographic
- **Era:** Timeless Classic
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bg** (#fafadf) — Primary surface or dominant color
- **Bg Alt** (#f2f2d2) — Accent highlight, links and focus states
- **Bg Cream** (#f5f0e4) — Secondary accent
- **Fg** (#1a1a16) — Accent color, emphasis elements
- **Fg 2** (#5e5e54) — Extended palette, decorative use


## Typography

- **Display / Hero:** Lora — Weight 700, tight tracking, used for headline impact
- **Body:** Jost — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Jost — 0.875rem, weight 500, slight letter-spacing
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

display font Lora for hero headlines, subtle hover (opacity 0.8, 200ms), refined focus rings, all-ink system: ivory paper, Lora serif headlines, zero decorative color, dense grid, compact 1.2rem gaps

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 0px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 0px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Lora display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Whitespace generous — section gaps ≥ 5rem
- Do Mobile responsive layout (stack below 768px)


## Use Case

user research synthesis, white paper, longform report, academic deck, policy brief, advisory deliverable, bilingual EN/CN deck

<!-- Source: https://designmd.app/library/monochrome · designmd.app -->
