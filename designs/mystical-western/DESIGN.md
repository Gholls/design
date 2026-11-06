---
version: "alpha"
name: "Mystical Western"
description: "Mystical western landing page blending classic cowboy desert aesthetics with cosmic spiritual vibes. Ideal for pôsteres de festivais de música, marcas de vestuário indie, branding espiritual, eventos temáticos. AI-ready template."
colors:
  primary: "#C2A878"
  secondary: "#191970"
  tertiary: "#E97451"
  neutral: "#FFD700"
  surface: "#5F7A4A"
  accent: "#C4C4D4"
typography:
  h1:
    fontFamily: Rye
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Rye
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 580
  author: "designmd.app"
  source: "https://designmd.app/library/mystical-western"
  tags: ["风格模板", "branding espiritual", "eventos temáticos"]
---

## Overview

Mystical western landing page blending classic cowboy desert aesthetics with cosmic spiritual vibes. Ideal for pôsteres de festivais de música, marcas de vestuário indie, branding espiritual, eventos temáticos. AI-ready template. The mystical western sits at a crossroads that's been brewing since the 1960s, when Jodorowsky dragged the cowboy archetype through psychedelic ritual in El Topo. But the visual language goes deeper — back to frontier-era broadsheets printed with crude woodcuts of snake oil salesmen and traveling fortune tellers. The American West was always occult territory. Prospectors carried talismans. Saloon walls displayed astrological charts next to wanted posters. The desert itself became a symbol of spiritual transformation long before Georgia O'Keeffe painted bleached skulls against infinite sky.

What we're seeing now is a deliberate collision of two visual traditions: the gritty, sun-bleached typography and worn leather textures of western Americana with the symbolic density of tarot illustration and alchemical diagrams. Think aged parchment meeting celestial maps. Rattlesnakes coiling into ouroboros. Cacti rendered with the reverence of sacred geometry. This isn't costume — it's recognition that the frontier myth was always a spiritual narrative dressed in dust and gunpowder.

The style gained serious traction through independent tarot deck designers and desert festival culture, then bled into brand identity work for mezcal labels, desert retreats, and roots music. It works because it refuses to separate the sacred from the rugged.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Desert, Cosmic, Spiritual, Cowboy-Celestial
- **Keywords:** Mystical western, cowboy, desert, cosmic, spiritual, moonlight, celestial symbols, tarot, stars, indie, boho-western
- **Era:** Modern Indie Western Fusion
- **Light/Dark:** ◐ Partial / ✓ Full

## Colors

- **Desert Tan** (#C2A878) — Primary surface or dominant color
- **Midnight Blue** (#191970) — Dark surface, primary background
- **Burnt Sienna** (#E97451) — Supporting palette color
- **Starlight Gold** (#FFD700) — Premium accent, decorative highlights
- **Cactus Green** (#5F7A4A) — Success states, positive indicators
- **Moonstone Silver** (#C4C4D4) — Extended palette, decorative use
- **Dusty Purple** (#7B6B8A) — Accent color, emphasis elements
- **Warm Black** (#1A1A2E) — Deep contrast surface


## Typography

- **Display / Hero:** Rye — Weight 700, tight tracking, used for headline impact
- **Accent:** Cinzel — Used for decorative or emphasis text
- **Body:** Rye — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Rye — 0.875rem, weight 500, slight letter-spacing
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

Starfield background animation (CSS particles), celestial symbol SVG decorations (moons, stars), desert gradient horizons, tarot-card-style bordered sections, moonlight glow effects on hover, subtle parallax on celestial elements

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 2px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (2px font-family: 'Rye') shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (2px font-family: 'Rye') corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Desert + cosmic color palette
- Do Starfield background animation
- Do Celestial SVG symbols
- Do Desert gradient horizons
- Do Tarot-card-style section borders
- Do Western + mystical typography mix
- Do Moonlight glow effects
- Do Responsive with maintained atmosphere


## Use Case

Music festival posters, Indie clothing brands, Spiritual branding, Themed events

<!-- Source: https://designmd.app/library/mystical-western · designmd.app -->
