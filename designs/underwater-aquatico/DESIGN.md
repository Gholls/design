---
version: "alpha"
name: "Underwater / Aquático"
description: "Design an underwater aquatic infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#E0F6FF"
  secondary: "#0B3C5D"
  tertiary: "#006994"
  neutral: "#0277BD"
  surface: "#01579B"
  accent: "#004D73"
typography:
  h1:
    fontFamily: System UI stack
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: System UI stack
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: System UI stack
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 803
  author: "designmd.app"
  source: "https://designmd.app/library/underwater-aquatico"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Design an underwater aquatic infographic. Ideal for landing pages, modern websites. AI-ready template. Underwater aesthetics have fascinated designers since the Art Nouveau era — think Mucha's flowing forms, Lalique's jellyfish brooches. But the real shift happened when deep-sea photography became accessible in the mid-20th century. Suddenly we had a visual language for pressure, for darkness punctuated by bioluminescence, for color that disappears as depth increases. Red vanishes first. Then orange. By 200 meters, everything is blue and black. That gradient isn't decorative — it's physics, and it creates a natural visual hierarchy that data designers have been borrowing ever since.

The ocean conservation movement of the 2000s accelerated aquatic design into mainstream consciousness. Brands needed to communicate urgency about coral bleaching, plastic pollution, microplastics — complex data stories that demanded infographic systems. Organizations like Ocean Conservancy and Surfrider Foundation pioneered visual frameworks where depth became a metaphor for severity, where layered transparency communicated ecosystem interconnection. Water brands followed, adopting these visual codes to signal environmental responsibility.

Today, underwater design systems sit at the intersection of scientific visualization and emotional storytelling. The challenge is specific: how do you represent three-dimensional space, constant motion, and variable light conditions in flat, static infographics? The best solutions embrace the constraint rather than fighting it.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Underwater elements, aquatic life, water plants, waves, ocean aesthetics, calming, peaceful, exploratory, marine, deep sea
- **Era:** Nature Aquatic
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Light Aqua** (#E0F6FF) — Primary surface or dominant color
- **Deep Navy** (#0B3C5D) — Secondary surface or text color
- **Ocean Blue** (#006994) — Accent highlight, links and focus states
- **Cerulean** (#0277BD) — Supporting palette color
- **Dark Blue** (#01579B) — Deep contrast surface
- **Teal** (#004D73) — Secondary accent
- **Steel Blue** (#005885) — Secondary accent
- **Cobalt** (#0D47A1) — Extended palette, decorative use


## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

Cool blue illumination, underwater lighting effects, bubble floating animations, wave motion, fish swimming paths, coral sway, depth layering

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Subtly rounded (0.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Subtly rounded (0.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Ocean blue palette
- Do Marine elements present
- Do Bubble animations
- Do Wave patterns
- Do Depth layering
- Do Calming underwater feel


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/underwater-aquatico · designmd.app -->
