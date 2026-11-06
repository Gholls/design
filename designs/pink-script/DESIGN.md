---
version: "alpha"
name: "Pink Script — After Hours"
description: "Pink Script — After Hours — Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury. Instrument Serif typography. near-black canvas with one saturated hot pink accent and a pearl-cream paper for. Best for fashion brand deck, creator personal brand, after-hours product (nightlife / dating / spirits). AI-ready design system."
colors:
  primary: "#060507"
  secondary: "#F5EDF1"
  tertiary: "#ED3D8C"
  neutral: "#FF66A8"
  surface: "#B81D67"
typography:
  h1:
    fontFamily: Instrument Serif
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Instrument Serif
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 631
  author: "designmd.app"
  source: "https://designmd.app/library/pink-script"
  tags: ["风格模板", "hot pink accent", "pearl-cream paper"]
---

## Overview

Pink Script — After Hours — Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury. Instrument Serif typography. near-black canvas with one saturated hot pink accent and a pearl-cream paper for. Best for fashion brand deck, creator personal brand, after-hours product (nightlife / dating / spirits). AI-ready design system. Hot pink as a typographic color has always been confrontational. It refuses to sit quietly on a page. The pairing with near-black backgrounds traces back to 1980s nightclub flyers and punk zines — spaces where legibility was secondary to attitude. Designers like Neville Brody and the Face magazine era understood that fluorescent hues against dark fields created an almost phosphorescent glow, mimicking neon signage viewed through rain-slicked streets.

Instrument Serif in italic carries a specific weight here. Unlike the overwrought script faces that dominate nightlife branding, it maintains editorial credibility while still moving. The italic slant suggests forward motion, late nights, momentum. It's the difference between a cocktail menu that looks like a wedding invitation and one that looks like it belongs in a dimly lit room where interesting people gather.

This combination — hot pink, near-black canvas, serif italic — is essentially a distillation of after-hours culture into typographic form. It's the visual equivalent of a whispered invitation to somewhere better.

- Density: 2/10 — Airy
- Variance: 6/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Nocturnal Luxury, Italic-Serif, High-Contrast, Editorial
- **Keywords:** Hot pink, near-black canvas, Instrument Serif italic, nocturnal, luxe, magazine, low density
- **Era:** 2020s Design Studio
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Ink** (#060507) — Primary surface or dominant color
- **Paper** (#F5EDF1) — Accent highlight, links and focus states
- **Pink** (#ED3D8C) — Secondary accent
- **Pink 2** (#FF66A8) — Accent color, emphasis elements
- **Pink Deep** (#B81D67) — Extended palette, decorative use


## Typography

- **Display / Hero:** Instrument Serif — Weight 700, tight tracking, used for headline impact
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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

display font Instrument Serif for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, dark canvas with glow/shadow accents, hot-pink italic accent on near-black canvas, pearl-cream paper slides, generous whitespace, clamp(4rem,8vw,8rem) section gaps

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 4px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 4px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Instrument Serif display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Dark background contrast ≥ 7:1 for body text
- Do Mobile responsive layout (stack below 768px)


## Use Case

fashion brand deck, creator personal brand, after-hours product (nightlife / dating / spirits), luxury launch, editorial feature

<!-- Source: https://designmd.app/library/pink-script · designmd.app -->
