---
version: "alpha"
name: "Playful"
description: "Playful — Sun-warm peach background with Syne display: a friendly indie launch deck. Syne typography. warm peach / sand backgrounds with ink-black structure and lighter cream cards. Best for creator portfolio, indie product launch, lifestyle brand. AI-ready design system."
colors:
  primary: "#F0C8A0"
  secondary: "#E8B88E"
  tertiary: "#1A1A1A"
  neutral: "#F7DEC6"
typography:
  h1:
    fontFamily: Syne
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Syne
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 24px
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 636
  author: "designmd.app"
  source: "https://designmd.app/library/playful"
  tags: ["风格模板", "indie product launch"]
---

## Overview

Playful — Sun-warm peach background with Syne display: a friendly indie launch deck. Syne typography. warm peach / sand backgrounds with ink-black structure and lighter cream cards. Best for creator portfolio, indie product launch, lifestyle brand. AI-ready design system. Flat design killed skeuomorphism, but it also killed warmth. The first wave of flat UI was cold — stark whites, thin grays, surgical precision. It took years for designers to realize you could be flat without being sterile. Somewhere around 2019, indie makers started pushing back. They brought color back — not the neon gradients of startup culture, but softer tones. Peach. Cream. Muted coral. The kind of palette you'd find in a Wes Anderson set, not a Silicon Valley pitch deck.

Syne landed as a typeface that refused to behave like a system font. Its quirky geometry gave headlines personality without resorting to hand-lettered chaos. Paired with generous border-radius and soft shadows (or none at all), it became the backbone of a visual language that said: we're a real product, built by real people, and we don't take ourselves too seriously.

This aesthetic owes as much to zine culture and Japanese stationery design as it does to any UI framework. It's design that feels handpicked, not generated. Intentionally imperfect. Deliberately cozy.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Warm Indie, Friendly, Informal, Creator
- **Keywords:** Peach background, Syne, warm indie, approachable, friendly, informal, creator, welcoming
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bg** (#F0C8A0) — Primary surface or dominant color
- **Bg Alt** (#E8B88E) — Accent highlight, links and focus states
- **Text** (#1A1A1A) — Secondary accent
- **Light** (#F7DEC6) — Accent color, emphasis elements


## Typography

- **Display / Hero:** Syne — Weight 700, tight tracking, used for headline impact
- **Body:** Space Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Space Grotesk — 0.875rem, weight 500, slight letter-spacing
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

display font Syne for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, sun-warm peach canvas, Syne geometric sans, friendly indie warmth

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 12px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 12px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Syne display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)


## Use Case

creator portfolio, indie product launch, lifestyle brand, small-business pitch, newsletter / community

<!-- Source: https://designmd.app/library/playful · designmd.app -->
