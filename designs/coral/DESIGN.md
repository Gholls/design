---
version: "alpha"
name: "Coral"
description: "Coral — Cream and coral on near-black, set in oversized Bebas Neue. Bebas Neue typography. near-black canvas, warm cream paper for content, and a saturated coral accent th. Best for fashion / beauty pitch, fitness brand, F&B brand deck. AI-ready design system."
colors:
  primary: "#E85D5D"
  secondary: "#D44A4A"
  tertiary: "#F5F0E8"
  neutral: "#E8E0D4"
  surface: "#1A1A1A"
  accent: "#6B6B6B"
typography:
  h1:
    fontFamily: Bebas Neue
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Bebas Neue
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 277
  author: "designmd.app"
  source: "https://designmd.app/library/coral"
  tags: ["风格模板", "fitness brand"]
---

## Overview

Coral — Cream and coral on near-black, set in oversized Bebas Neue. Bebas Neue typography. near-black canvas, warm cream paper for content, and a saturated coral accent th. Best for fashion / beauty pitch, fitness brand, F&B brand deck. AI-ready design system. Coral as a design accent has roots in the Memphis Group's rejection of modernist restraint — those Italian radicals in the 1980s who decided beige was a moral failing. But the specific pairing of coral against near-black canvas owes more to the editorial tradition of contrast-driven hierarchy. Think Brodovitch at Harper's Bazaar, where a single warm tone against darkness created immediate visual authority.

Bebas Neue enters this lineage as the democratic condensed sans-serif — born from Ryoichi Tsunekawa's 2010 release, it became the typeface that proved you don't need a Grilli Type license to achieve editorial punch. Its tall, narrow letterforms demand vertical space and reward generous leading. When set large against a #1a1a1a canvas with coral (#FF6F61 or thereabouts) as the sole chromatic relief, you get something that feels like a magazine cover without the magazine's budget.

This combination works because it respects a fundamental truth: constraint produces elegance. One typeface, one accent, one dark ground. Everything else is hierarchy and whitespace.

- Density: 5/10 — Balanced
- Variance: 5/10 — Moderate
- Motion: 7/10 — Kinetic

- **Style:** Magazine Editorial, Warm-Graphic, Bold, Condensed
- **Keywords:** Bebas Neue, coral accent, near-black canvas, magazine editorial, warm, bold, fashion, punchy
- **Era:** 2020s Design Studio
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Coral** (#E85D5D) — Primary surface or dominant color
- **Coral Dark** (#D44A4A) — Accent highlight, links and focus states
- **Cream** (#F5F0E8) — Secondary accent
- **Cream Dark** (#E8E0D4) — Accent color, emphasis elements
- **Ink** (#1A1A1A) — Extended palette, decorative use
- **Gray** (#6B6B6B) — Background alternate


## Typography

- **Display / Hero:** Bebas Neue — Weight 700, tight tracking, used for headline impact
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

display font Bebas Neue for hero headlines, bold hover color shift (150ms), high-contrast active states, alternating light/dark sections for rhythm, near-black full-bleed sections alternating with cream cards

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

- Do Bebas Neue display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)


## Use Case

fashion / beauty pitch, fitness brand, F&B brand deck, lifestyle launch, creative agency

<!-- Source: https://designmd.app/library/coral · designmd.app -->
