---
version: "alpha"
name: "Claymation 3D"
description: "Claymation 3D interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#AEE2F6"
  secondary: "#4A3B32"
  tertiary: "#FF8A5B"
  neutral: "#7EC466"
  surface: "#FFD93D"
  accent: "#E86F6F"
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
rounded:
  sm: 20px
  md: 40px
  lg: 60px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 254
  author: "designmd.app"
  source: "https://designmd.app/library/claymation-3d"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Claymation 3D interface. Ideal for landing pages, saas. AI-ready template. Claymation has always carried weight — literal and emotional. Aardman's Wallace & Gromit proved that imperfection was charming, that thumbprints in plasticine could carry more soul than any polygon. That was the 90s. Fast forward: 3D artists in Blender and Cinema4D started recreating that matte, squishy aesthetic digitally. Not because they couldn't do photorealism — because they chose not to.

The clay render trend exploded around 2020. Suddenly every SaaS landing page wanted blobby characters with fingerprint textures. Some of it was derivative. But the best work understood why clay works: it signals craft. It says someone shaped this by hand, even when they didn't. The tactile quality triggers something primal — we want to touch it, squeeze it, hold it.

What started as nostalgia became a legitimate brand differentiator. Companies targeting younger audiences or creative professionals adopted clay 3D not as decoration, but as personality. The matte finish, the soft shadows, the deliberate imperfection — these aren't limitations. They're decisions.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** 3D, Playful, Soft, Colorful
- **Keywords:** 3D clay-rendered, tactile appearance, matte clay finish, fingerprint imperfections, soft edges, isometric, playful, warm, engaging
- **Era:** 2020s 3D Illustration
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Sky Blue** (#AEE2F6) — Accent highlight, links and focus states
- **Warm Brown** (#4A3B32) — Secondary surface or text color
- **Coral Orange** (#FF8A5B) — Warm accent, call-to-action secondary
- **Leaf Green** (#7EC466) — Supporting palette color
- **Sunny Yellow** (#FFD93D) — Warning states, attention indicators
- **Soft Red** (#E86F6F) — Error states, destructive actions


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

Soft studio lighting, gentle shadows, clay squish animations, bounce effects, isometric rotation, tactile press response, material deformation

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 20px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Clay material feel
- Do Soft rounded edges
- Do Matte finish effect
- Do Warm color palette
- Do Playful arrangement
- Do Tactile interaction


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/claymation-3d · designmd.app -->
