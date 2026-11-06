---
version: "alpha"
name: "Elementos Musicais"
description: "Musical elements infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#2C2C2C"
  tertiary: "#E74C3C"
  neutral: "#3498DB"
  surface: "#9B59B6"
  accent: "#F39C12"
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
  order: 352
  author: "designmd.app"
  source: "https://designmd.app/library/elementos-musicais"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Musical elements infographic. Ideal for landing pages, modern websites. AI-ready template. SoundCloud changed everything. Before 2008, audio on the web was a play button and a progress bar — maybe a spinning disc if you were lucky. Then those orange waveforms appeared, and suddenly you could *see* where the drop hits, where the quiet part lives, where someone left a comment at 2:34. It was metadata made tangible.

Spotify took a different route. Less literal, more atmospheric — color extraction from album art, those behind-the-lyrics animations, the year-wrapped visualizations that turned listening habits into shareable identity. The insight was sharp: people don't just want to hear music, they want to see themselves in it.

The fundamental tension hasn't changed though. Sound is temporal. It exists in time, not space. Every audio visualization is a translation — frequency to height, amplitude to brightness, tempo to motion. The best ones don't try to be accurate representations. They're interpretations. They give you a feeling that matches what your ears already know. The worst ones look like screensavers from 2003.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Musical notes, sound waves, instruments, audio visualization, rhythm patterns, dynamic flow, creative, artistic, engaging
- **Era:** Creative Musical
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Dark Text** (#2C2C2C) — Dark surface, primary background
- **Red** (#E74C3C) — Error states, destructive actions
- **Blue** (#3498DB) — Accent highlight, links and focus states
- **Purple** (#9B59B6) — Accent color, emphasis elements
- **Amber** (#F39C12) — Warning states, attention indicators
- **Green** (#27AE60) — Success states, positive indicators
- **Dark Slate** (#34495E) — Deep contrast surface


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

Vibrant energetic illumination, sound wave animations, note floating effects, rhythm-based transitions, frequency visualization, beat-synced reveals

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

- Do Musical notes present
- Do Sound waves visible
- Do Instrument icons
- Do Rhythm-based layout
- Do Vibrant colors
- Do Dynamic energy feel


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/elementos-musicais · designmd.app -->
