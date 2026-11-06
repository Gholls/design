---
version: "alpha"
name: "Tactile Digital / Deformable UI"
description: "Tactile deformable interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#C0C0C0"
  secondary: "#FF9ECD"
  tertiary: "#87CEEB"
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
    padding: 12px

gallery:
  order: 765
  author: "designmd.app"
  source: "https://designmd.app/library/tactile-digital-deformable-ui"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Tactile deformable interface. Ideal for landing pages, saas. AI-ready template. Flat design killed texture. For nearly a decade, we pretended interfaces had no weight, no give, no physicality. Then something shifted — around 2022, designers on Dribbble and Twitter started posting these absurdly satisfying jelly buttons. Chrome blobs. Clay renders that looked like you could squeeze them. It wasn't nostalgia for skeuomorphism exactly. It was a response to haptics.

Phones had been vibrating with intention for years — tap a toggle and feel a click that isn't there. Our fingers learned to expect resistance from glass. The visual language finally caught up. If a button buzzes like it has mass, shouldn't it look like it has mass? The deformable UI trend answered yes, loudly, with wobbly spring animations and inflated surfaces that compress on press.

The chrome-and-clay aesthetic peaked on social feeds through 2024-2025, moving from experimental posts into shipping products. Gaming interfaces adopted it first. Then children's apps. Then brave consumer brands who understood that playfulness isn't immaturity — it's confidence. We're in the tactile era now. Flat was the palate cleanser. This is the meal.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Tactile, Deformable, Interactive, Playful
- **Keywords:** Jelly buttons, chrome, clay, squishy, deformable, bouncy, physical, tactile feedback, press response
- **Era:** 2025+ Tactile Era
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Chrome Silver** (#C0C0C0) — Primary surface or dominant color
- **Jelly Pink** (#FF9ECD) — Primary text color
- **Soft Blue** (#87CEEB) — Accent highlight, links and focus states


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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Press deformation (scale + squish), bounce-back (cubic-bezier), material response, haptic-like feedback, spring physics

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
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

- Do Press effect visible
- Do Bounce-back smooth
- Do Material feels tactile
- Do Spring physics tuned
- Do Mobile touch responsive
- Do Reduced motion option


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/tactile-digital-deformable-ui · designmd.app -->
