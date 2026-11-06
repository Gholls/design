---
version: "alpha"
name: "Kawaii Pastel Pop"
description: "Kawaii landing page, pastel pink background, cute aesthetic, soft shapes, sparkles, japanese pop culture, fluffy clouds. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFD1DC"
  secondary: "#222222"
  tertiary: "#9D84B6"
  neutral: "#B3E5FC"
  surface: "#FFF9C4"
  accent: "#B9F6CA"
typography:
  h1:
    fontFamily: Varela Round
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Varela Round
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 20px
  md: 40px
  lg: 60px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 498
  author: "designmd.app"
  source: "https://designmd.app/library/kawaii-pastel-pop"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Kawaii landing page, pastel pink background, cute aesthetic, soft shapes, sparkles, japanese pop culture, fluffy clouds. Ideal for landing pages, modern websites. AI-ready template. Kawaii Pastel Pop isn't kawaii. Not really. It borrows the vocabulary — the rounded forms, the softness, the deliberate infantilism — but cranks the saturation dial past where traditional kawaii would ever dare. This is Harajuku's Takeshita Street in 2012, not Sanrio in 1985. The difference matters.

Pure kawaii whispers. Pastel Pop shouts in a baby voice. It emerged from the collision of Decora fashion, Fairy Kei, and the hyper-saturated world of purikura photo booths. Where kawaii uses white space and restraint, Pastel Pop fills every pixel. Lavenders sit next to hot pinks. Mint greens crash into peach. The palette reads soft individually but overwhelming collectively — and that's the point.

The movement gained digital traction through LINE stickers, early Instagram aesthetics, and apps like CocoPPa that let users theme their entire phone interface. It's maximalism wearing minimalism's clothing. Every corner radius is generous. Every shadow is colored. Every surface could plausibly be edible.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Playful, Whimsical, Cute
- **Keywords:** kawaii, pastel, cute, pop, soft, pink, cloud, sparkle
- **Era:** Harajuku Pop
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#FFD1DC) — Primary background surface
- **Text** (#222222) — Primary text color
- **Accent** (#9D84B6) — Primary accent, CTAs and interactive elements
- **Baby Blue** (#B3E5FC) — Secondary accent
- **Cream** (#FFF9C4) — Secondary surface
- **Mint** (#B9F6CA) — Extended palette, decorative use


## Typography

- **Display / Hero:** Varela Round — Weight 700, tight tracking, used for headline impact
- **Body:** Varela Round — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Varela Round — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Rainbow gradients, fluffy cloud motifs, sparkle embellishments, cute mascots, soft airbrushed gradients, glossy highlights.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 20px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (20px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (20px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Pastel dominant palette (Pink/Blue/Purple)
- Do Very rounded corners
- Do Sparkle/Cloud decorations
- Do Cute/Rounded typography
- Do Soft shadows and gradients


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/kawaii-pastel-pop · designmd.app -->
