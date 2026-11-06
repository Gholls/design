---
version: "alpha"
name: "8-Bit Orbit"
description: "8-Bit Orbit — Pixel-art neon arcade aesthetic on a deep navy void. Tektur typography. deep navy/black void with neon pink, cyan, and yellow pops. Best for gaming pitch, hackathon demo, web3 / crypto deck. AI-ready design system."
colors:
  primary: "#F0A6CA"
  secondary: "#5EDCF4"
  tertiary: "#F4D03F"
  neutral: "#0F1B3D"
  surface: "#0A0E27"
  accent: "#E2D5F2"
typography:
  h1:
    fontFamily: Tektur
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Tektur
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 112
  author: "designmd.app"
  source: "https://designmd.app/library/8-bit-orbit"
  tags: ["风格模板", "cyan", "hackathon demo"]
---

## Overview

8-Bit Orbit — Pixel-art neon arcade aesthetic on a deep navy void. Tektur typography. deep navy/black void with neon pink, cyan, and yellow pops. Best for gaming pitch, hackathon demo, web3 / crypto deck. AI-ready design system. The pixel aesthetic we now romanticize was born from brutal hardware constraints. Early arcade cabinets and home consoles like the Atari 2600 rendered everything in chunky, addressable blocks — not because designers wanted to, but because memory was measured in bytes, not gigabytes. Space games were the perfect fit: black backgrounds meant fewer pixels to push, and the cosmic void forgave the limitations of 8-bit color palettes.

By the mid-1980s, CRT phosphor glow and scanline gaps became inseparable from the experience itself. The hardware's imperfections — the bleeding neon edges, the slight flicker between frames — created an atmosphere that no clean LCD could replicate. Games like Galaga and Asteroids didn't just use space as a theme; they used the screen's own physics as a design material.

The revival started in the late 2000s with indie developers who grew up feeding quarters into cabinets. They understood that pixel art isn't low-effort — it's a discipline of economy. Every single pixel carries weight when you only have 16×16 to communicate a character.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 7/10 — Kinetic

- **Style:** Retro-Tech, Neon, Pixel-Art, Cyberpunk
- **Keywords:** Pixel art, neon glow, CRT scanlines, retro-tech, arcade, deep navy, cyberpunk, Tektur font, monospace
- **Era:** 1980s Retro
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Neon Pink** (#F0A6CA) — Primary surface or dominant color
- **Neon Cyan** (#5EDCF4) — Accent highlight, links and focus states
- **Neon Yellow** (#F4D03F) — Secondary accent
- **Deep Navy** (#0F1B3D) — Accent color, emphasis elements
- **Void** (#0A0E27) — Extended palette, decorative use
- **Lavender** (#E2D5F2) — Background alternate


## Typography

- **Display / Hero:** Tektur — Weight 700, tight tracking, used for headline impact
- **Body:** Chakra Petch — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Chakra Petch — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

display font Tektur for hero headlines, bold hover color shift (150ms), high-contrast active states, dark canvas with glow/shadow accents, CRT scanlines overlay, pixel border decorations, neon glow (text-shadow 0 0 8px)

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 0px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 0px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Tektur display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Dark background contrast ≥ 7:1 for body text
- Do CRT / retro pixel decorations included
- Do Mobile responsive layout (stack below 768px)


## Use Case

gaming pitch, hackathon demo, web3 / crypto deck, indie product launch, developer tools, synthwave brand

<!-- Source: https://designmd.app/library/8-bit-orbit · designmd.app -->
