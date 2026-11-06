---
version: "alpha"
name: "Storytelling-Driven"
description: "Storytelling landing page. Ideal for marketing, conversão, lead gen. AI-ready template."
colors:
  primary: "#1A1A1A"
  secondary: "#4A4A4A"
  tertiary: "#0066FF"
  neutral: "#FFFFFF"
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

gallery:
  order: 745
  author: "designmd.app"
  source: "https://designmd.app/library/storytelling-driven"
  tags: ["风格模板", "marketing", "conversão", "lead gen"]
---

## Overview

Storytelling landing page. Ideal for marketing, conversão, lead gen. AI-ready template. Somewhere around 2015, Apple stopped listing specs and started telling stories. Their product pages became vertical films — each scroll tick revealing a new act, a new emotion, a new reason to care. The iPhone wasn't 6.1 inches anymore. It was a cinematic experience unfolding in your hands. That shift broke the dam. Suddenly every brand wanted narrative depth over information density.

The real innovation wasn't parallax or sticky headers. It was structure. Beginning, middle, end. Tension and release. Designers borrowed from documentary filmmaking and longform journalism — the scroll became a timeline, and sections became scenes. Feature lists felt like spreadsheets by comparison.

By the early 2020s, storytelling-driven layouts were the default for any brand that took itself seriously. Nonprofits used them to build empathy. Startups used them to manufacture inevitability. The pattern matured: big type sets the mood, imagery carries emotion, and whitespace controls pacing. No one scrolls a bullet list with goosebumps.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Landing Page
- **Keywords:** Narrative flow, visual story progression, section transitions, consistent character/brand voice, emotional messaging, journey visualization
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- Palette derived from style keywords and era context


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

Section-to-section animations, scroll-triggered reveals, character/icon animations, morphing transitions, parallax narrative

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

- Do Story flows naturally
- Do Scroll reveals smooth
- Do Sections timed well
- Do Emotional hooks present
- Do Mobile story readable
- Do Skip option available


## Use Case

Marketing, Conversion, Lead gen

<!-- Source: https://designmd.app/library/storytelling-driven · designmd.app -->
