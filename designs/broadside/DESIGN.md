---
version: "alpha"
name: "Broadside"
description: "Broadside — Dark editorial canvas with a single fire orange accent and bilingual Latin/Chinese type stack. Barlow typography. near-black newspaper canvas with warm cream text and a single fire-orange headli. Best for brand manifesto, founder vision deck, magazine / cultural pitch. AI-ready design system."
colors:
  primary: "#111111"
  secondary: "#1a1a18"
  tertiary: "#f0ece5"
  neutral: "#e85d26"
  surface: "#282826"
  accent: "#888880"
typography:
  h1:
    fontFamily: Barlow
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Barlow
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
  order: 213
  author: "designmd.app"
  source: "https://designmd.app/library/broadside"
  tags: ["风格模板", "founder vision deck"]
---

## Overview

Broadside — Dark editorial canvas with a single fire orange accent and bilingual Latin/Chinese type stack. Barlow typography. near-black newspaper canvas with warm cream text and a single fire-orange headli. Best for brand manifesto, founder vision deck, magazine / cultural pitch. AI-ready design system. The broadside is the oldest form of mass communication design. Before newspapers existed as we know them, single-sheet broadsides were plastered across city walls — urgent, loud, impossible to ignore. They announced executions, political upheaval, and market prices with equal typographic fury. Everything was hierarchy: massive wood-type headlines dominating the sheet, body text crammed below in tight columns.

What made broadsides work wasn't subtlety. It was the raw collision of scale. A 72-point headline next to 8-point body copy creates tension that still feels electric. The near-black ink on cheap paper, occasionally punctuated by a single spot color for emphasis — that's where the fire orange enters. Not decorative. Functional. A visual alarm bell.

Modern editorial design owes everything to this lineage. The broadside taught us that typography IS the interface. No imagery needed. No illustration required. Just letterforms doing violent, beautiful work at extreme scales.

- Density: 5/10 — Balanced
- Variance: 6/10 — Dynamic
- Motion: 7/10 — Kinetic

- **Style:** Newspaper Editorial, Dark, Dramatic, Graphic
- **Keywords:** Newspaper editorial, near-black, fire orange, Barlow, broadside, bilingual, high contrast, dramatic
- **Era:** 2020s Design Studio
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Bg** (#111111) — Primary surface or dominant color
- **Bg Alt** (#1a1a18) — Accent highlight, links and focus states
- **Fg** (#f0ece5) — Secondary accent
- **Accent** (#e85d26) — Accent color, emphasis elements
- **Border** (#282826) — Extended palette, decorative use
- **Muted** (#888880) — Background alternate


## Typography

- **Display / Hero:** Barlow — Weight 700, tight tracking, used for headline impact
- **Body:** Barlow — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Barlow — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** IBM Plex Mono — Used for code, metadata, and technical values

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

display font Barlow for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, dark canvas with glow/shadow accents, fire-orange accent headlines, high-contrast newspaper grid

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

- Do Barlow display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Dark background contrast ≥ 7:1 for body text
- Do Mobile responsive layout (stack below 768px)


## Use Case

brand manifesto, founder vision deck, magazine / cultural pitch, design talk, bilingual EN/CN deck, campaign launch

<!-- Source: https://designmd.app/library/broadside · designmd.app -->
