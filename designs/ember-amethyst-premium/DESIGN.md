---
version: "alpha"
name: "Ember & Amethyst Premium"
description: "Vibrant, bold, and luxurious UI that fuses fiery warmth with regal depth. Ideal for marcas de moda premium, gastronomia autoral, entretenimento e eventos, vinícolas e destilarias, creative agencies. AI-ready template."
colors:
  primary: "#FFA102"
  secondary: "#432E6F"
  tertiary: "#DD5533"
  neutral: "#F5F9CE"
  surface: "#BC2D29"
  accent: "#450E16"
typography:
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cormorant Garamond
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 354
  author: "designmd.app"
  source: "https://designmd.app/library/ember-amethyst-premium"
  tags: ["风格模板", "gastronomia autoral", "creative agencies"]
---

## Overview

Vibrant, bold, and luxurious UI that fuses fiery warmth with regal depth. Ideal for marcas de moda premium, gastronomia autoral, entretenimento e eventos, vinícolas e destilarias, creative agencies. AI-ready template. Orange and purple sit opposite enough on the wheel to create tension, but share just enough red undertone to feel intentional rather than accidental. This pairing has roots in theatrical poster design of the 1960s and 70s — think Saul Bass meets psychedelia — where the goal was to arrest attention from across a street. The combination fell out of mainstream favor during the minimalism wave, dismissed as "too much." That dismissal was always wrong.

What makes ember orange paired with amethyst purple genuinely premium is the temperature contrast. Ember reads as physical warmth — fire, copper, aged whiskey. Amethyst reads as cool depth — gemstone, twilight, velvet. Together they create a chromatic push-pull that feels expensive because it demands confidence to execute. Cheap brands don't attempt this palette because it punishes timidity. Every element needs to commit fully or the whole thing collapses into carnival territory.

The recent resurgence in maximalist branding has given this combination new legitimacy. Brands tired of the same navy-and-white safety blanket are reaching for palettes that actually say something. Ember and amethyst says: we're not afraid of being remembered.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Vibrant & Bold Luxury
- **Keywords:** Vibrant, warm, bold, fiery, regal, energetic, passionate, luxurious, dramatic, expressive
- **Era:** 2020s Expressive Premium
- **Light/Dark:** ✓ Full

## Colors

- **Vivid Orange** (#FFA102) — Warm accent, call-to-action secondary
- **Her Highness Purple** (#432E6F) — Accent color, emphasis elements
- **Frozen Tomato Red** (#DD5533) — Error states, destructive actions
- **Yoghurt Cream** (#F5F9CE) — Secondary surface
- **Ginshu Crimson** (#BC2D29) — Extended palette, decorative use
- **Rum Chocolate** (#450E16) — Extended palette, decorative use


## Typography

- **Display / Hero:** Cormorant Garamond — Weight 700, tight tracking, used for headline impact
- **Body:** Cormorant Garamond — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant Garamond — 0.875rem, weight 500, slight letter-spacing
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

Bold gradient overlays (orange-to-purple diagonals), dramatic shadow depth, warm ambient glow on CTAs, expressive serif headlines with generous tracking, geometric accent shapes via clip-path, vibrant hover state color shifts, smooth 400ms transitions with ease-out

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


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

- Do Vivid Orange #FFA102 action color
- Do Her Highness Purple #432E6F structure
- Do Frozen Tomato #DD5533 emphasis
- Do Bold diagonal gradients
- Do Dramatic shadow depth
- Do Warm glow on CTAs
- Do Expressive serif headlines
- Do Geometric clip-path accents
- Do Responsive layout


## Use Case

Brands de moda premium, Gastronomia autoral, Entretenimento e events, Vinícolas e destilarias, Creative agencies

<!-- Source: https://designmd.app/library/ember-amethyst-premium · designmd.app -->
