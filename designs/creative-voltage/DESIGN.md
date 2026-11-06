---
version: "alpha"
name: "Creative Voltage"
description: "Bold, creative, energetic landing page with retro-modern vibes. Ideal for creative agencies, estúdios de música, marcas jovens, eventos culturais. AI-ready template."
colors:
  primary: "#0066ff"
  secondary: "#1a1a2e"
  tertiary: "#d4ff00"
  neutral: "#ffffff"
  surface: "#333333"
  accent: "#3388ff"
typography:
  h1:
    fontFamily: Syne
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Syne
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 288
  author: "designmd.app"
  source: "https://designmd.app/library/creative-voltage"
  tags: ["风格模板", "creative agencies", "estúdios de música", "marcas jovens"]
---

## Overview

Bold, creative, energetic landing page with retro-modern vibes. Ideal for creative agencies, estúdios de música, marcas jovens, eventos culturais. AI-ready template. Electric blue paired with neon yellow didn't emerge from careful color theory workshops. It came from rave flyers, from early-2000s sneaker culture, from the moment designers decided legibility was less important than attitude. The combination screams before it speaks.

By 2015, every creative agency worth its retainer had some version of this palette on their homepage. Split panels — dark left, bright right — became the visual equivalent of a firm handshake. The formula worked because it communicated exactly one thing: we are not boring. Pentagram wouldn't touch it. That was the point.

What's interesting is how the pairing survived the minimalism purge. While other high-energy combinations got flattened into pastels, electric blue and neon yellow kept showing up in pitch decks, hackathon branding, and startup launch pages. The colors carry an implicit promise of velocity — of things being built fast, shipped loud, iterated on publicly. They're the visual language of teams that want you to know they move.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Bold, Creative, Energetic, Retro-Modern
- **Keywords:** electric blue, neon yellow, split panels, halftone texture, neon badges, Syne, Space Mono, creative, energetic, retro-modern
- **Era:** 2024-2026 Creative Energy
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Electric Blue** (#0066ff) — Accent highlight, links and focus states
- **Dark Navy** (#1a1a2e) — Dark surface, primary background
- **Neon Yellow** (#d4ff00) — Warning states, attention indicators
- **White** (#ffffff) — Secondary surface
- **Dark Grey** (#333333) — Deep contrast surface
- **Light Blue** (#3388ff) — Secondary accent


## Typography

- **Display / Hero:** Syne — Weight 700, tight tracking, used for headline impact
- **Accent:** Space Mono — Used for decorative or emphasis text
- **Body:** Syne — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Syne — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Space Mono — Used for code, metadata, and technical values

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

Electric blue + neon yellow contrast, halftone texture patterns via CSS, neon badges/callouts, split panels blue left dark right, script typography accents, bold transitions 200ms

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (4px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (4px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Syne + Space Mono carregados
- Do Split panels azul/escuro
- Do Halftone texture patterns
- Do Neon badges amarelo (#d4ff00)
- Do Contraste elétrico forte
- Do Script typography accents
- Do Responsivo mobile/tablet/desktop


## Use Case

Creative agencies, Music studios, Youth brands, Cultural events

<!-- Source: https://designmd.app/library/creative-voltage · designmd.app -->
