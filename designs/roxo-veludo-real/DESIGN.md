---
version: "alpha"
name: "Roxo Veludo Real"
description: "Luxurious and sophisticated UI with a royal feel. Ideal for marcas de luxo, joalherias, moda premium, hotéis boutique, eventos exclusivos. AI-ready template."
colors:
  primary: "#4B0082"
  secondary: "#2C003E"
  tertiary: "#0A0A2A"
  neutral: "#8E44AD"
  surface: "#D4AF37"
  accent: "#36454F"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Playfair Display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Playfair Display
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 12px
  md: 24px
  lg: 36px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 684
  author: "designmd.app"
  source: "https://designmd.app/library/roxo-veludo-real"
  tags: ["风格模板", "marcas de luxo", "joalherias", "moda premium"]
---

## Overview

Luxurious and sophisticated UI with a royal feel. Ideal for marcas de luxo, joalherias, moda premium, hotéis boutique, eventos exclusivos. AI-ready template. Purple wasn't chosen as the color of royalty — it was forced into that role by economics. Tyrian purple, extracted from the mucus of predatory sea snails off the Phoenician coast, required twelve thousand shellfish to yield barely 1.5 grams of dye. The labor was grotesque, the smell unbearable, and the cost astronomical. Only emperors and senators could afford it. Sumptuary laws in Rome literally made it illegal for commoners to wear the color. That's not branding — that's state-enforced exclusivity.

The association stuck because it was never democratized the way other luxury signifiers were. When synthetic mauveine arrived in 1856, it opened purple to the masses, but deep purple — that specific, saturated, almost-black violet — retained its gravity. It reads as velvet even on a flat screen. There's a tactile weight to it that lighter purples simply don't carry.

In modern design, deep purple operates as a shorthand for 'this costs more than you think.' It's the color of VIP lounges, not dance floors. Of private banking interfaces, not fintech apps. It communicates that the brand has nothing to prove and no need to shout.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Luxury & Sophisticated
- **Keywords:** Royal, velvet, luxury, rich, deep, sophisticated, elegant, berry, mysterious, opulent, premium
- **Era:** Timeless Opulence
- **Light/Dark:** ✓ Full

## Colors

- **Royal Velvet Purple** (#4B0082) — Accent color, emphasis elements
- **Deep Berry** (#2C003E) — Secondary surface or text color
- **Midnight Blue** (#0A0A2A) — Dark surface, primary background
- **Plum** (#8E44AD) — Extended palette, decorative use
- **Antique Gold** (#D4AF37) — Premium accent, decorative highlights
- **Charcoal Grey** (#36454F) — Deep contrast surface
- **Silver Mist** (#C0C0C0) — Extended palette, decorative use


## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Accent:** Lato — Used for decorative or emphasis text
- **Body:** Playfair Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Playfair Display — 0.875rem, weight 500, slight letter-spacing
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

Soft, plush textures, subtle metallic sheen, deep and dramatic shadows, elegant serif typography for headlines, refined sans-serif for body, smooth and flowing transitions, focus on depth and richness

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (12px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (12px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Royal Velvet Purple primary #4B0082
- Do Deep and rich color palette
- Do Elegant serif typography for headlines
- Do Deep
- Do dramatic shadows
- Do Plush textures (e.g.
- Do velvet
- Do silk)
- Do Responsive design for all devices


## Use Case

Luxury brands, Jewelry stores, Moda premium, Hotéis boutique, Events exclusivos

<!-- Source: https://designmd.app/library/roxo-veludo-real · designmd.app -->
