---
version: "alpha"
name: "Stencil & Tablet"
description: "Stencil & Tablet — Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand. Bowlby One typography. warm bone and paper neutrals with a saturated earthy palette (sienna, magenta, o. Best for museum / cultural institution, art / architecture brand, longform research. AI-ready design system."
colors:
  primary: "#E2DCC9"
  secondary: "#0A0A0A"
  tertiary: "#F4EFE0"
  neutral: "#A06A3C"
  surface: "#C73B7A"
  accent: "#EE7A2E"
typography:
  h1:
    fontFamily: Stencil
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Stencil
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
  order: 740
  author: "designmd.app"
  source: "https://designmd.app/library/stencil-tablet"
  tags: ["风格模板", "magenta"]
---

## Overview

Stencil & Tablet — Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand. Bowlby One typography. warm bone and paper neutrals with a saturated earthy palette (sienna, magenta, o. Best for museum / cultural institution, art / architecture brand, longform research. AI-ready design system. Stencil lettering wasn't designed to be beautiful. It was designed to survive — stamped onto ammunition crates, cargo containers, and field equipment where legibility under duress mattered more than elegance. The broken letterforms exist because of physical bridges holding the stencil plate together, not because some typographer thought disconnected strokes looked cool. That constraint became an aesthetic.

The earth palette follows the same logic. Olive drab, raw umber, sand — these aren't mood board choices, they're camouflage doctrine translated into communication design. Field manuals from the 1940s through Vietnam established a visual language where information hierarchy was life-or-death: bold stencil headers, tight mono body text, diagrams with zero decoration. Every element earned its place or got cut.

What makes this system compelling today is that same ruthless economy. When you strip a design system down to stencil display type and terrain colors, you're borrowing from a tradition where visual noise could literally get someone killed. That discipline reads as authenticity.

- Density: 5/10 — Balanced
- Variance: 6/10 — Dynamic
- Motion: 2/10 — Minimal

- **Style:** Archival, Field-Manual, Graphic, Earth-Tone
- **Keywords:** Stencil display, earth palette, field manual, archival, tactile, museum, heritage, graphic
- **Era:** Mid-Century Modern
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bone** (#E2DCC9) — Primary surface or dominant color
- **Ink** (#0A0A0A) — Accent highlight, links and focus states
- **Paper** (#F4EFE0) — Secondary accent
- **Sienna** (#A06A3C) — Accent color, emphasis elements
- **Magenta** (#C73B7A) — Extended palette, decorative use
- **Orange** (#EE7A2E) — Background alternate
- **Teal** (#2D7E73) — Muted text / borders
- **Blue** (#3F73B7) — Extended palette
- **Olive** (#6F7A2E) — Extended palette, decorative use


## Typography

- **Display / Hero:** Bowlby One — Weight 700, tight tracking, used for headline impact
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

display font Bowlby One for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, stencil-cut display headlines, six-color earth palette, field-manual grid

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

- Do Bowlby One display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)


## Use Case

museum / cultural institution, art / architecture brand, longform research, heritage / craft brand, manifesto

<!-- Source: https://designmd.app/library/stencil-tablet · designmd.app -->
