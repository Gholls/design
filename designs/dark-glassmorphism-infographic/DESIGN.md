---
version: "alpha"
name: "Dark Glassmorphism Infographic"
description: "Dark glassmorphism infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#1A1A2E"
  secondary: "#FFFFFF"
  tertiary: "#00D4FF"
  neutral: "#E0AAFF"
  surface: "#FFB6FF"
  accent: "#FF6B9D"
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
  order: 310
  author: "designmd.app"
  source: "https://designmd.app/library/dark-glassmorphism-infographic"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Dark glassmorphism infographic. Ideal for landing pages, modern websites. AI-ready template. Glassmorphism landed around 2020 as a reaction to flat design fatigue — designers craving depth without returning to full skeuomorphism. Apple's Big Sur pushed it mainstream, but the real magic happened when people started dropping frosted panels onto dark backgrounds for data-heavy interfaces. Suddenly you had hierarchy without borders. Depth without drop shadows competing with your chart lines.

The dark variant works because it solves a genuine problem: dense dashboards suffocate under too many hard containers. Semi-transparent panels let the background bleed through just enough to unify the composition while still separating data regions. Your eye reads the blur differential as z-depth. No extra visual weight required.

Crypto platforms adopted it first — partly aesthetic flex, partly functional. When you're stacking candlestick charts next to order books next to portfolio breakdowns, you need containers that organize without screaming. Frosted glass on dark backgrounds does exactly that. It whispers structure instead of shouting it.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Glassmorphic containers, frosted glass effects, semi-transparent panels, dark ambient, neon accent lighting, layered glass depth, premium, modern UI
- **Era:** 2020s Glassmorphism
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Dark Navy** (#1A1A2E) — Dark surface, primary background
- **White Text** (#FFFFFF) — Light surface, card backgrounds
- **Cyan** (#00D4FF) — Accent highlight, links and focus states
- **Lavender** (#E0AAFF) — Supporting palette color
- **Pink** (#FFB6FF) — Primary text color
- **Rose** (#FF6B9D) — Extended palette, decorative use
- **Purple** (#9D4EDD) — Accent color, emphasis elements
- **Deep Purple** (#3A0CA3) — Accent color, emphasis elements


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

Neon accent lighting, dark ambient background, glass panel fade-in, blur depth animations, glow pulse on hover, layered reveal transitions

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

- Do Glass effect visible
- Do Dark background
- Do Neon accents glowing
- Do Layers create depth
- Do Text readable
- Do Premium feel achieved


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/dark-glassmorphism-infographic · designmd.app -->
