---
version: "alpha"
name: "Claymation 3D Illustration"
description: "Claymation landing page, plasticine style, 3d clay illustration, soft lighting, rounded shapes, cute and friendly, stop motion aesthetic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#AEE2F6"
  secondary: "#4A3B32"
  tertiary: "#FF8A5B"
  neutral: "#FFE082"
  surface: "#AED581"
  accent: "#FFFFFF"
typography:
  h1:
    fontFamily: Fredoka One
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Fredoka One
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 25px
  md: 50px
  lg: 75px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 251
  author: "designmd.app"
  source: "https://designmd.app/library/claymation-3d-illustration"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Claymation landing page, plasticine style, 3d clay illustration, soft lighting, rounded shapes, cute and friendly, stop motion aesthetic. Ideal for landing pages, modern websites. AI-ready template. Claymation didn't start as a design trend — it started as a craft. Will Vinton's Californian Raisins, Aardman's Wallace & Gromit, Art Clokey's Gumby. These were physical objects under hot lights, moved frame by frame by people with sore thumbs. The aesthetic carried weight because it literally had weight. Gravity pulled on those little clay bodies.

When 3D software matured enough to fake subsurface scattering and fingerprint impressions, designers started borrowing the language without the labor. Around 2018-2020, the style exploded in UI and branding — partly as a reaction against flat design's sterility, partly because rendering engines finally made it cheap. Blender democratized it completely.

What makes it stick: imperfection is baked into the DNA. The slightly lumpy forms, the visible tool marks, the matte surfaces that absorb light instead of bouncing it. It reads as handmade even when it's procedural. That tension — digital craft pretending to be analog craft — gives it a warmth that geometric 3D never achieves.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Whimsical, Approachable, Warm
- **Keywords:** clay, claymation, 3d, plasticine, soft, rounded, cute, handmade
- **Era:** Digital Craft
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#AEE2F6) — Primary background surface
- **Text** (#4A3B32) — Primary text color
- **Accent** (#FF8A5B) — Primary accent, CTAs and interactive elements
- **Soft Yellow** (#FFE082) — Warning states, attention indicators
- **Grass Green** (#AED581) — Success states, positive indicators
- **Cloud White** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Fredoka One — Weight 700, tight tracking, used for headline impact
- **Body:** Fredoka One — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Fredoka One — 0.875rem, weight 500, slight letter-spacing
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

Stop-motion aesthetic, plasticine characters, button embellishments, speech bubbles, soft matte clay, surface imperfections, soft global illumination.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 25px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (25px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (25px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Soft rounded shapes (everything)
- Do Pastel/Friendly colors
- Do Shadows indicating depth/thickness
- Do Clay/Plasticine texture
- Do Playful topography


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/claymation-3d-illustration · designmd.app -->
