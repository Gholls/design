---
version: "alpha"
name: "Gatsby Art Deco Noir"
description: "Art deco landing page, great gatsby style, black and gold luxury, geometric patterns, ornate borders, elegant typography, noir aesthetic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#050507"
  secondary: "#F2E6CF"
  tertiary: "#D4AF37"
  neutral: "#C5A059"
  surface: "#101010"
  accent: "#F7E7CE"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Playfair Display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Playfair Display
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 425
  author: "designmd.app"
  source: "https://designmd.app/library/gatsby-art-deco-noir"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Art deco landing page, great gatsby style, black and gold luxury, geometric patterns, ornate borders, elegant typography, noir aesthetic. Ideal for landing pages, modern websites. AI-ready template. Gold on black wasn't always shorthand for luxury. It became that. The 1920s Art Deco movement pulled from Egyptian tombs, Cubist geometry, and machine-age optimism — then dressed it all in gilt. The Gatsby aesthetic specifically? That's wealth performed as spectacle. Geometric sunbursts, chevron patterns, angular typography — every element screaming abundance through precision rather than excess.

The real turning point for contemporary designers was Baz Luhrmann's 2013 adaptation. Catherine Martin's production design codified what had been floating in the cultural ether: that particular combination of matte black, burnished gold, and razor-sharp geometry as the universal visual language of premium exclusivity. Suddenly every upscale venue, every luxury brand refresh, every high-end invitation reached for the same vocabulary.

And honestly? It works. There's something neurologically satisfying about gold catching light against deep black. The contrast ratio alone commands attention. Art Deco noir endures because it solved a design problem permanently — how do you communicate 'this costs more' without saying a word?

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Sophisticated, Opulent, Dramatic
- **Keywords:** art deco, gatsby, gold, black, geometric, luxury, elegant, ornate, noir
- **Era:** Roaring 20s
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Background** (#050507) — Primary background surface
- **Text** (#F2E6CF) — Primary text color
- **Accent** (#D4AF37) — Primary accent, CTAs and interactive elements
- **Gold Foil** (#C5A059) — Premium accent, decorative highlights
- **Velvet Black** (#101010) — Deep contrast surface
- **Champagne** (#F7E7CE) — Extended palette, decorative use


## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Body:** Playfair Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Playfair Display — 0.875rem, weight 500, slight letter-spacing
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

Intricate geometric borders, fan motifs, metallic gradients, polished gold leaf, atmospheric glow, cinematic chiaroscuro.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
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

- Do Black background
- Do Gold gradients/borders
- Do Art Deco geometric patterns
- Do Elegant serif typography
- Do Symmetrical layout


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/gatsby-art-deco-noir · designmd.app -->
