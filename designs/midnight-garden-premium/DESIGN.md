---
version: "alpha"
name: "Midnight Garden Premium"
description: "Create an elegant, premium UI with a nocturnal botanical garden atmosphere. Ideal for marcas sustentáveis premium, jardins botânicos, cosméticos naturais, wellness de luxo, resorts ecológicos. AI-ready template."
colors:
  primary: "#001F3F"
  secondary: "#74C365"
  tertiary: "#F6F7ED"
  neutral: "#DBE64C"
  surface: "#00804C"
  accent: "#1E488F"
typography:
  h1:
    fontFamily: DM Serif Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: DM Sans
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: DM Sans
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 10px
  md: 20px
  lg: 30px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 555
  author: "designmd.app"
  source: "https://designmd.app/library/midnight-garden-premium"
  tags: ["风格模板", "jardins botânicos", "cosméticos naturais", "wellness de luxo"]
---

## Overview

Create an elegant, premium UI with a nocturnal botanical garden atmosphere. Ideal for marcas sustentáveis premium, jardins botânicos, cosméticos naturais, wellness de luxo, resorts ecológicos. AI-ready template. Dark florals have a lineage that predates digital design by centuries. Dutch Golden Age still lifes — Bosschaert, van Huysum — placed luminous botanicals against pitch-black voids not for drama alone, but because darkness made color truthful. Every petal read as precious. That visual logic resurfaced in Victorian mourning textiles, Art Nouveau posters, and eventually the lacquered packaging of mid-century French perfumeries where deep navy replaced pure black to suggest night rather than absence.

The contemporary dark botanical trend owes less to minimalism and more to maximalism held under tension. When brands like Byredo and Aesop shifted luxury packaging toward muted restraint, a counter-movement emerged: richness without loudness. Deep blue grounds — not black, never pure black — allow floral illustrations to feel alive rather than gothic. The distinction matters. Black kills depth; midnight blue creates it.

What we now call 'Midnight Garden' as a design direction is really the intersection of two impulses: the desire for visual opulence and the modern demand for sophistication. It works because it refuses to choose between them.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Natural Elegance & Deep Contrast
- **Keywords:** Elegant, botanical, deep blue, verdant, sophisticated, nocturnal, lush, premium, contrast, organic
- **Era:** 2020s Premium Botanical
- **Light/Dark:** ✓ Full

## Colors

- **Midnight Mirage** (#001F3F) — Dark surface, primary background
- **Mantis Green** (#74C365) — Secondary surface or text color
- **Praxeti White** (#F6F7ED) — Light surface, card backgrounds
- **Spring Lime** (#DBE64C) — Extended palette, decorative use
- **Book Green** (#00804C) — Success states, positive indicators
- **Nuit Blanche Blue** (#1E488F) — Secondary accent


## Typography

- **Display / Hero:** DM Serif Display — Weight 700, tight tracking, used for headline impact
- **Accent:** DM Sans — Used for decorative or emphasis text
- **Body:** DM Serif Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** DM Serif Display — 0.875rem, weight 500, slight letter-spacing
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

Deep dark backgrounds with vivid green accents, botanical SVG illustrations, layered depth with translucent panels (rgba overlays), crisp typography contrast (light on dark), subtle glow effects on interactive elements, smooth 300ms transitions, fine 1px borders with low opacity

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 10px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (10px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (10px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Midnight Mirage #001F3F background
- Do Mantis Green #74C365 accent
- Do Praxeti White #F6F7ED text
- Do Botanical SVG illustrations
- Do Translucent card panels
- Do High contrast typography
- Do Subtle green glow on hover
- Do Responsive layout


## Use Case

Brands sustentáveis premium, Jardins botânicos, Cosméticos naturais, Wellness de luxo, Resorts ecológicos

<!-- Source: https://designmd.app/library/midnight-garden-premium · designmd.app -->
