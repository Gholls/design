---
version: "alpha"
name: "Creative Mode"
description: "Creative Mode — Cream paper canvas with confident multi-color (green, pink, orange, yellow) accents and Archivo Black display. Archivo Black typography. warm cream paper background with a saturated multi-accent palette (forest green,. Best for creative agency pitch, design studio deck, ad shop credentials. AI-ready design system."
colors:
  primary: "#EFE9D9"
  secondary: "#E4DCC4"
  tertiary: "#1F8A4C"
  neutral: "#F06CA8"
  surface: "#E85A1F"
  accent: "#F5C518"
typography:
  h1:
    fontFamily: Archivo Black
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Archivo Black
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
  order: 283
  author: "designmd.app"
  source: "https://designmd.app/library/creative-mode"
  tags: ["风格模板", "pink", "orange", "design studio deck"]
---

## Overview

Creative Mode — Cream paper canvas with confident multi-color (green, pink, orange, yellow) accents and Archivo Black display. Archivo Black typography. warm cream paper background with a saturated multi-accent palette (forest green,. Best for creative agency pitch, design studio deck, ad shop credentials. AI-ready design system. The tension between structured typography and expressive color has defined creative studio identity since the Bauhaus collapsed the boundary between fine art and commercial design. Archivo Black — a grotesque with the density of a woodblock poster face — carries that lineage forward. It doesn't whisper. It occupies space the way a linocut occupies paper: unapologetically, with mass and conviction.

Multi-accent palettes emerged from the same instinct that drove Alvin Lustig and Bradbury Thompson to reject the single-spot-color constraint of mid-century printing. When you layer three or four deliberate hues against a warm cream ground, you're referencing risograph culture, silkscreen editions, and the entire tradition of the artist's proof — work that announces itself as made, not manufactured.

The cream paper texture isn't nostalgia. It's a deliberate rejection of the sterile white canvas that digital defaults impose. Cream absorbs light differently, softens contrast ratios just enough to feel human, and gives every accent color a warmer undertone. Studios that adopt this language are signaling craft over polish, process over perfection.

- Density: 7/10 — Rich
- Variance: 5/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Design-Studio, Multi-Accent, Expressive, Confident
- **Keywords:** Archivo Black, multi-accent, cream paper, design studio, expressive, confident, saturated palette
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Cream** (#EFE9D9) — Primary surface or dominant color
- **Cream 2** (#E4DCC4) — Accent highlight, links and focus states
- **Green** (#1F8A4C) — Secondary accent
- **Pink** (#F06CA8) — Accent color, emphasis elements
- **Orange** (#E85A1F) — Extended palette, decorative use
- **Yellow** (#F5C518) — Background alternate
- **Ink** (#0F0F0F) — Muted text / borders


## Typography

- **Display / Hero:** Archivo Black — Weight 700, tight tracking, used for headline impact
- **Body:** Space Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Space Grotesk — 0.875rem, weight 500, slight letter-spacing
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

display font Archivo Black for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, multi-color accent splashes (green/pink/orange/yellow), Archivo Black ultra-heavy headlines

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

- Do Archivo Black display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)


## Use Case

creative agency pitch, design studio deck, ad shop credentials, brand creative review, concept presentation

<!-- Source: https://designmd.app/library/creative-mode · designmd.app -->
