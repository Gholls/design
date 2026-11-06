---
version: "alpha"
name: "Grove"
description: "Grove — Forest-green canvas with cream type, classical Playfair serifs, and a single rust accent. Playfair Display typography. deep forest green canvas with warm bone type and a single rust-red accent. Best for sustainability brand, wellness brand, outdoor / nature product. AI-ready design system."
colors:
  primary: "#192b1b"
  secondary: "#1e3221"
  tertiary: "#d4cfbf"
  neutral: "#c8524a"
  surface: "#e8e4d6"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Jost
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Jost
    fontSize: 0.75rem
    fontWeight: 500
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
  order: 459
  author: "designmd.app"
  source: "https://designmd.app/library/grove"
  tags: ["风格模板", "wellness brand"]
---

## Overview

Grove — Forest-green canvas with cream type, classical Playfair serifs, and a single rust accent. Playfair Display typography. deep forest green canvas with warm bone type and a single rust-red accent. Best for sustainability brand, wellness brand, outdoor / nature product. AI-ready design system. The pairing of deep greens with earthy rust tones isn't a trend — it's a return to something older than graphic design itself. William Morris built an entire movement around it in the 1870s, rejecting industrial aesthetics in favor of natural pigments and botanical forms. The Arts & Crafts palette was never about decoration; it was ideological. Green meant growth, craft, resistance to the machine.

Playfair Display carries that same tension between refinement and groundedness. Its high contrast and sharp serifs feel editorial, almost aristocratic, but paired with forest green it reads as something rooted rather than precious. The rust accent does the heavy lifting here — it stops the palette from feeling too pristine, too "wellness brand circa 2019." Rust is the color of iron oxidizing, of leaves turning, of things that have been outside long enough to earn their texture.

This combination works because it doesn't try to aestheticize nature — it references the actual material reality of organic things. Soil, bark, lichen, patina. Designers who reach for mint and sage are decorating. Grove is documenting.

- Density: 5/10 — Balanced
- Variance: 6/10 — Dynamic
- Motion: 2/10 — Minimal

- **Style:** Organic, Forest, Classical-Serif, Considered
- **Keywords:** Forest green, rust accent, Playfair serif, organic, natural, sustainability, classical, warm
- **Era:** Mid-Century Modern
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Bg** (#192b1b) — Primary surface or dominant color
- **Bg Alt** (#1e3221) — Accent highlight, links and focus states
- **Fg** (#d4cfbf) — Secondary accent
- **Accent** (#c8524a) — Accent color, emphasis elements
- **Bg Light** (#e8e4d6) — Extended palette, decorative use


## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Body:** Jost — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Jost — 0.875rem, weight 500, slight letter-spacing
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

display font Playfair Display for hero headlines, subtle hover (opacity 0.8, 200ms), refined focus rings, alternating light/dark sections for rhythm, forest-green full-bleed hero, rust accent rule lines, cream text

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

- Do Playfair Display display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Serif typography hierarchy clear (display vs body)
- Do Mobile responsive layout (stack below 768px)


## Use Case

sustainability brand, wellness brand, outdoor / nature product, winery or restaurant, literary or arts deck, advisory deliverable, bilingual EN/CN deck

<!-- Source: https://designmd.app/library/grove · designmd.app -->
