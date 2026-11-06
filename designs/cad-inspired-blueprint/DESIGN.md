---
version: "alpha"
name: "CAD-Inspired Blueprint"
description: "CAD landing page style, blueprint aesthetic, dark blue background, white technical lines, mechanical details, engineering look. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#1C4E80"
  secondary: "#FFFFFF"
  tertiary: "#E85D35"
  neutral: "#FFD700"
  surface: "#AAAAAA"
typography:
  h1:
    fontFamily: Consolas
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Consolas
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 223
  author: "designmd.app"
  source: "https://designmd.app/library/cad-inspired-blueprint"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

CAD landing page style, blueprint aesthetic, dark blue background, white technical lines, mechanical details, engineering look. Ideal for landing pages, modern websites. AI-ready template. AutoCAD shipped in 1982 and quietly rewired how an entire generation thinks about precision. Those cyan lines on dark backgrounds, the obsessive dimensioning, the grid snaps — none of it was designed to be beautiful. It was designed to be correct. And yet, decades later, web designers keep returning to that visual language because correctness has its own magnetism.

SolidWorks and CATIA pushed things further into 3D, but the flat blueprint aesthetic stuck around. There's something about the orthographic projection — that flattened, annotated view of complex geometry — that translates remarkably well to screen interfaces. It communicates: we built this with intention. Every measurement exists for a reason.

The influence shows up in subtle ways across modern UI. Monospaced type for data. Hairline rules instead of heavy borders. Coordinate-based layouts that feel plotted rather than placed. When a product needs to signal engineering rigor without drowning users in complexity, CAD aesthetics deliver that credibility instantly. The blueprint doesn't lie.

- Density: 7/10 — Compact
- Variance: 2/10 — Structured
- Motion: 1/10 — Static

- **Style:** Computer Aided Design, Technical, Structured
- **Keywords:** CAD, blueprint, autocad, dark blue, white lines, technical, gears, mechanical
- **Era:** Digital CAD
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Background** (#1C4E80) — Primary background surface
- **Text** (#FFFFFF) — Primary text color
- **Accent** (#E85D35) — Primary accent, CTAs and interactive elements
- **Grid Light** (#FFFFFF1A) — Extended palette, decorative use
- **Guide Line** (#FFD700) — Extended palette, decorative use
- **Dim** (#AAAAAA) — Extended palette, decorative use


## Typography

- **Display / Hero:** Consolas — Weight 700, tight tracking, used for headline impact
- **Accent:** Monaco — Used for decorative or emphasis text
- **Body:** Consolas — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Consolas — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Consolas — Used for code, metadata, and technical values

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

Mechanical gear motifs, flowchart connectors, modular blocks, white square mesh overlay, precise fine-line vector grid.

- Minimal motion design. Hover states use color transitions only (150ms).
- No entry animations. No page transitions. Instant, utilitarian feedback.
- Performance: No animation overhead. Static-first approach.


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

- Do Dark blue blueprint background
- Do White thin lines for elements
- Do Mechanical/Gear decorative elements
- Do Monospace fonts
- Do Measurement ticks on borders


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/cad-inspired-blueprint · designmd.app -->
