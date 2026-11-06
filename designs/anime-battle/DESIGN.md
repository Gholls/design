---
version: "alpha"
name: "Anime Battle"
description: "Design an anime battle-style landing page with intense, dynamic energy. Ideal for games, esports, entertainment, fan sites, streaming de anime. AI-ready template."
colors:
  primary: "#DC143C"
  secondary: "#0066FF"
  tertiary: "#0A0A0A"
  neutral: "#FFD700"
  surface: "#9B30FF"
  accent: "#FFFFFF"
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
  order: 140
  author: "designmd.app"
  source: "https://designmd.app/library/anime-battle"
  tags: ["风格模板", "games", "esports", "entertainment"]
---

## Overview

Design an anime battle-style landing page with intense, dynamic energy. Ideal for games, esports, entertainment, fan sites, streaming de anime. AI-ready template. The anime battle aesthetic didn't emerge from nowhere — it's the direct descendant of 1970s manga panel composition, where artists like Go Nagai and Kazuo Koike figured out how to make static ink feel violent. Speed lines, exaggerated foreshortening, and impossible anatomy weren't mistakes. They were solutions to a print medium that couldn't move.

When anime hit television, those conventions translated into limited animation shortcuts that became style signatures. Toei's cost-saving techniques — held frames with radiating backgrounds, impact flashes, dramatic zoom-ins — accidentally created an entire visual grammar. By the time Dragon Ball Z and Saint Seiya dominated the late '80s, the "battle pose against an energy burst" was as codified as Swiss grid typography.

The retro-pop revival we're seeing now strips these conventions back to their graphic roots. It's less about faithful recreation and more about extracting the raw kinetic energy — the diagonal compositions, the contrast explosions, the sense that something is about to break the frame. Designers working in gaming and esports recognized that this visual language communicates intensity faster than any Western equivalent.

- Density: 7/10 — Compact
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Dynamic, Intense, Action-Packed, Manga-Inspired
- **Keywords:** anime, manga, battle, action, speed lines, dynamic poses, intense colors, shonen, energy burst, dramatic
- **Era:** Japanese Manga/Anime (1990s-present)
- **Light/Dark:** ✗ No / ✓ Only

## Colors

- **Crimson Red** (#DC143C) — Error states, destructive actions
- **Electric Blue** (#0066FF) — Accent highlight, links and focus states
- **Deep Black** (#0A0A0A) — Dark surface, primary background
- **Energy Gold** (#FFD700) — Premium accent, decorative highlights
- **Plasma Purple** (#9B30FF) — Accent color, emphasis elements
- **Lightning White** (#FFFFFF) — Secondary surface
- **Impact Orange** (#FF6600) — Warm accent, call-to-action secondary


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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Speed lines radiating from center (CSS radial gradients), energy burst glow effects, dramatic diagonal layouts, screen-shake animation on hover, bold manga-style borders (3-4px), intense text-shadow for impact typography

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Speed lines visible
- Do Manga-style thick borders
- Do Dynamic diagonal layouts
- Do Energy glow effects
- Do Bold impactful typography
- Do Dark background with neon accents


## Use Case

Games, Esports, Entertainment, Fan sites, Streaming de anime

<!-- Source: https://designmd.app/library/anime-battle · designmd.app -->
