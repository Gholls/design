---
version: "alpha"
name: "Art Deco"
description: "Design an Art Deco landing page with elegant glamour from the 1920s-30s. Ideal for embalagens de luxo, bares de cocktails, hotéis, interiores com toque great gatsby. AI-ready template."
colors:
  primary: "#0A0A0A"
  secondary: "#D4AF37"
  tertiary: "#1B2838"
  neutral: "#FFFFF0"
  surface: "#046307"
  accent: "#9B111E"
typography:
  h1:
    fontFamily: Poiret One
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Poiret One
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
  order: 152
  author: "designmd.app"
  source: "https://designmd.app/library/art-deco"
  tags: ["风格模板", "embalagens de luxo", "bares de cocktails", "hotéis"]
---

## Overview

Design an Art Deco landing page with elegant glamour from the 1920s-30s. Ideal for embalagens de luxo, bares de cocktails, hotéis, interiores com toque great gatsby. AI-ready template. Art Deco didn't ask permission. It exploded out of 1920s Paris as a full rejection of the organic, flowing lines that Art Nouveau had made fashionable. Where Nouveau whispered, Deco shouted — in gold leaf, in chrome, in obsidian marble. It was the aesthetic of a world drunk on industrialization, jazz, and the intoxicating belief that the future would be glamorous. The Chrysler Building wasn't just architecture; it was a manifesto in stainless steel.

What makes Deco endure isn't nostalgia — it's the sheer confidence of its geometry. Sunbursts, chevrons, stepped forms, symmetrical compositions that feel inevitable rather than designed. It borrowed from Egyptian tombs, Aztec temples, and Cubist painting without apology. The movement understood something most designers forget: luxury isn't about restraint. It's about precision applied to excess.

Deco collapsed under the weight of wartime austerity, but its DNA never left. Every time a hotel lobby uses brass inlays and geometric tile, every time a cocktail menu reaches for that angular serif — that's Deco's ghost, still insisting that elegance and boldness aren't opposites.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 8/10 — Cinematic

- **Style:** Elegant, Glamorous, Geometric, Metallic
- **Keywords:** Art Deco, elegant, glamorous, symmetric, geometric, metallic accents, 1920s, Great Gatsby, luxury modern, clean patterns
- **Era:** 1920s-1930s Art Deco Movement
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Jet Black** (#0A0A0A) — Dark surface, primary background
- **Gold Metallic** (#D4AF37) — Premium accent, decorative highlights
- **Deep Navy** (#1B2838) — Supporting palette color
- **Ivory** (#FFFFF0) — Light surface, card backgrounds
- **Emerald** (#046307) — Extended palette, decorative use
- **Ruby Red** (#9B111E) — Error states, destructive actions
- **Silver** (#C0C0C0) — Extended palette, decorative use
- **Champagne** (#F7E7CE) — Extended palette, decorative use


## Typography

- **Display / Hero:** Poiret One — Weight 700, tight tracking, used for headline impact
- **Accent:** Cinzel — Used for decorative or emphasis text
- **Body:** Poiret One — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Poiret One — 0.875rem, weight 500, slight letter-spacing
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

Geometric symmetric patterns via CSS (chevrons, sunbursts, fan shapes), metallic gold borders and accents, clean sharp lines, art deco fan dividers via SVG, subtle shimmer animation on gold elements, elegant fade transitions (400ms)

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

- Do Geometric symmetric patterns
- Do Metallic gold accents throughout
- Do Clean sharp lines and borders
- Do Art deco fan/sunburst dividers
- Do Uppercase geometric typography
- Do Dark + gold color scheme
- Do Responsive with maintained symmetry


## Use Case

Luxury packaging, Cocktail bars, Hotels, Great Gatsby-inspired interiors

<!-- Source: https://designmd.app/library/art-deco · designmd.app -->
