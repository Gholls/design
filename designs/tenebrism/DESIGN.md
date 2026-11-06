---
version: "alpha"
name: "Tenebrism"
description: "Tenebrism-inspired landing page with extreme contrast between light and deep darkness. Ideal for pôsteres atmosféricos, flyers de eventos, spreads editoriais, embalagens premium. AI-ready template."
colors:
  primary: "#050505"
  secondary: "#F5D5A0"
  tertiary: "#3A2A1A"
  neutral: "#FFF8E7"
  surface: "#8B0000"
  accent: "#B8860B"
typography:
  h1:
    fontFamily: Cormorant
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cormorant
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 2.5rem
  md: 5.0rem
  lg: 10.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 772
  author: "designmd.app"
  source: "https://designmd.app/library/tenebrism"
  tags: ["风格模板", "flyers de eventos", "spreads editoriais", "embalagens premium"]
---

## Overview

Tenebrism-inspired landing page with extreme contrast between light and deep darkness. Ideal for pôsteres atmosféricos, flyers de eventos, spreads editoriais, embalagens premium. AI-ready template. Tenebrism isn't just chiaroscuro turned up to eleven — it's a philosophical stance disguised as a lighting technique. When Caravaggio started plunging his backgrounds into absolute blackness around 1600, he wasn't being dramatic for drama's sake. He was rejecting the idealized, evenly-lit world of Mannerism and forcing viewers to confront raw, unfiltered humanity emerging from void. The light in tenebrism doesn't illuminate a scene — it interrogates it.

The technique spread like wildfire through the Caravaggisti — Artemisia Gentileschi, Georges de La Tour, Jusepe de Ribera — each understanding that darkness isn't absence, it's presence. De La Tour's candlelit scenes prove you can build entire emotional architectures with a single light source and the courage to let everything else disappear. This wasn't subtlety. This was conviction.

What makes tenebrism endure in design is its brutal editorial clarity. It forces hierarchy. When 80% of your canvas is black, whatever catches light becomes undeniable. There's no hiding behind busy compositions or safe middle-gray compromises. You commit to the darkness, or you don't. Half-measures produce mud.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Extreme Contrast, Spotlight, Moody, Dramatic
- **Keywords:** Tenebrism, extreme contrast, light vs dark, spotlight effect, moody, dramatic, Caravaggio, chiaroscuro, intense, atmospheric
- **Era:** 17th Century Baroque Painting
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Deep Black** (#050505) — Dark surface, primary background
- **Warm Spotlight** (#F5D5A0) — Secondary surface or text color
- **Rich Brown** (#3A2A1A) — Supporting palette color
- **Ivory Highlight** (#FFF8E7) — Light surface, card backgrounds
- **Blood Red** (#8B0000) — Error states, destructive actions
- **Deep Gold** (#B8860B) — Premium accent, decorative highlights
- **Midnight Blue** (#0D1B2A) — Deep contrast surface
- **Warm Grey** (#4A4A3A) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Cormorant — Weight 700, tight tracking, used for headline impact
- **Body:** Cormorant — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant — 0.875rem, weight 500, slight letter-spacing
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

Dramatic radial-gradient spotlight effects, deep dark backgrounds with isolated light areas, heavy vignette overlays, warm golden light accents, smooth reveal animations from darkness (800ms), text emerging from shadow with text-shadow layers

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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Extreme light/dark contrast
- Do Radial spotlight gradient backgrounds
- Do Deep dark base with isolated light
- Do Heavy vignette overlays
- Do Warm golden light accents
- Do Text emerging from shadow
- Do Moody dramatic atmosphere
- Do Responsive with maintained drama


## Use Case

Atmospheric posters, Event flyers, Editorial spreads, Premium packaging

<!-- Source: https://designmd.app/library/tenebrism · designmd.app -->
