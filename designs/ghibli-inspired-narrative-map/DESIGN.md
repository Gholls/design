---
version: "alpha"
name: "Ghibli-Inspired Narrative Map"
description: "Ghibli style landing page, watercolor background, narrative map, whimsical design, soft colors, hand painted look, nature inspired. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FAF8F2"
  secondary: "#2B2B2B"
  tertiary: "#212635"
  neutral: "#7CB342"
  surface: "#4FC3F7"
  accent: "#F48FB1"
typography:
  h1:
    fontFamily: Quicksand
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Quicksand
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 15px
  md: 30px
  lg: 45px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 427
  author: "designmd.app"
  source: "https://designmd.app/library/ghibli-inspired-narrative-map"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Ghibli style landing page, watercolor background, narrative map, whimsical design, soft colors, hand painted look, nature inspired. Ideal for landing pages, modern websites. AI-ready template. Studio Ghibli didn't just make films — they rewired how an entire generation thinks about visual storytelling. Miyazaki's backgrounds, painted by artists like Kazuo Oga, proved that hand-rendered environments could carry emotional weight no CGI pipeline ever matched. That warmth bled into digital design slowly, then all at once. Watercolor textures started appearing in children's apps around 2015, but the real shift was philosophical: designers realized that imperfection communicates care.

The narrative map as interface pattern owes everything to this lineage. Instead of sterile navigation grids, you get a living world — paths that wind, landmarks that breathe, fog rolling over unexplored territory. It's wayfinding through wonder. The user doesn't click a menu; they explore a place.

What makes Ghibli's influence so persistent is restraint. These aren't maximalist illustrations drowning in detail. They're compositions where negative space does half the work, where a single brushstroke suggests an entire forest canopy. That economy translates beautifully to screen — legible at small sizes, emotionally resonant at any scale.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Nostalgic, Whimsical, Soft
- **Keywords:** ghibli, watercolor, narrative, map, soft, painted, nature, magic, story
- **Era:** Anime Fantasy
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#FAF8F2) — Primary background surface
- **Text** (#2B2B2B) — Primary text color
- **Accent** (#212635) — Primary accent, CTAs and interactive elements
- **Grass Green** (#7CB342) — Success states, positive indicators
- **Sky Blue** (#4FC3F7) — Secondary accent
- **Soft Pink** (#F48FB1) — Primary text color


## Typography

- **Display / Hero:** Quicksand — Weight 700, tight tracking, used for headline impact
- **Body:** Quicksand — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Quicksand — 0.875rem, weight 500, slight letter-spacing
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

Digital watercolor with soft outlines, character vignettes, organic connecting paths, soft diffuse natural light, warm ambient glow.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 15px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (15px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (15px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Watercolor texture/background
- Do Soft/Rounded friendly shapes
- Do Nature motifs (clouds
- Do grass)
- Do Narrative path/flow
- Do Hand-drawn style icons


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/ghibli-inspired-narrative-map · designmd.app -->
