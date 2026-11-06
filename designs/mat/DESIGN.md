---
version: "alpha"
name: "Mat"
description: "Mat — Dark sage canvas with bone paper and burnt-orange accent; mid-century modern with wood undertones. Bricolage Grotesque typography. muted sage green canvas with warm bone paper and a saturated burnt-orange accent. Best for design studio credentials, architecture / interior brand, ceramics or craft brand. AI-ready design system."
colors:
  primary: "#232e26"
  secondary: "#2e3d30"
  tertiary: "#f0e8d2"
  neutral: "#c07030"
  surface: "#ede6d0"
  accent: "#7a4e24"
typography:
  h1:
    fontFamily: Jost
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Jost
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
  order: 539
  author: "designmd.app"
  source: "https://designmd.app/library/mat"
  tags: ["风格模板"]
---

## Overview

Mat — Dark sage canvas with bone paper and burnt-orange accent; mid-century modern with wood undertones. Bricolage Grotesque typography. muted sage green canvas with warm bone paper and a saturated burnt-orange accent. Best for design studio credentials, architecture / interior brand, ceramics or craft brand. AI-ready design system. Mat finishes have roots in Japanese wabi-sabi and Scandinavian craft traditions—surfaces that refuse to perform. The dark sage and bone paper combination draws directly from 1970s back-to-land publishing: think Whole Earth Catalog covers, hand-set type on uncoated stock, ink that sat heavy and uneven. There's a reason artisan ceramicists and natural dyers keep returning to these palettes. They signal process over polish.

The burnt-orange accent isn't decorative—it's functional warmth. Historically it appeared in terracotta glazes, aged leather tooling, and the oxidized edges of copper vessels. It's the color of things that have been touched, used, lived with. When you pair it against sage and bone, you get a palette that feels inherited rather than designed. That's the entire point. Mat rejects the clinical precision of luxury minimalism in favor of something more honest: surfaces you want to run your hand across.

- Density: 5/10 — Balanced
- Variance: 5/10 — Moderate
- Motion: 2/10 — Minimal

- **Style:** Mid-Century Modern, Tactile, Warm-Analog, Craft
- **Keywords:** Dark sage, bone paper, burnt-orange, mid-century, tactile, craft, Jost, considered
- **Era:** Mid-Century Modern
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Bg** (#232e26) — Primary surface or dominant color
- **Bg Alt** (#2e3d30) — Accent highlight, links and focus states
- **Fg** (#f0e8d2) — Secondary accent
- **Accent** (#c07030) — Accent color, emphasis elements
- **Bg Light** (#ede6d0) — Extended palette, decorative use
- **Wood** (#7a4e24) — Background alternate


## Typography

- **Display / Hero:** Bricolage Grotesque — Weight 700, tight tracking, used for headline impact
- **Body:** DM Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** DM Sans — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** DM Mono — Used for code, metadata, and technical values

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

display font Bricolage Grotesque for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, alternating light/dark sections for rhythm, dark sage canvas, bone paper cards, burnt-orange rule accents

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 4px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 4px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Bricolage Grotesque display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Serif typography hierarchy clear (display vs body)
- Do Mobile responsive layout (stack below 768px)


## Use Case

design studio credentials, architecture / interior brand, ceramics or craft brand, furniture pitch, advisory deliverable, bilingual EN/CN deck

<!-- Source: https://designmd.app/library/mat · designmd.app -->
