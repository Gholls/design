---
version: "alpha"
name: "Risograph Zine Aesthetic"
description: "Risograph landing page, zine aesthetics, grainy texture, multiply blending mode, retro print style, bright pink and blue ink. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FDFBF6"
  secondary: "#1C1C5E"
  tertiary: "#E63E85"
  neutral: "#0078BF"
  surface: "#FFE800"
  accent: "#00A95C"
typography:
  h1:
    fontFamily: Work Sans
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Work Sans
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 680
  author: "designmd.app"
  source: "https://designmd.app/library/risograph-zine-aesthetic"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Risograph landing page, zine aesthetics, grainy texture, multiply blending mode, retro print style, bright pink and blue ink. Ideal for landing pages, modern websites. AI-ready template. Zines never needed permission. From the punk photocopied pamphlets of the late '70s to the riot grrrl manifestos of the '90s, the zine was always the medium of people who couldn't wait for gatekeepers to let them in. Cheap, fast, imperfect on purpose.

Then risograph entered the picture — or rather, re-entered it. Originally a Japanese office duplicator from the 1980s, the Riso machine found a second life in the 2010s among artists, illustrators, and small publishers who craved that specific look: soy-based inks with a grain you can almost feel through the page, misregistered layers that turn accidents into texture. Studios like Hato Press in London and Perfectly Acceptable in Minneapolis turned the machine into a creative tool, not just a reproduction one.

What makes the risograph revival stick is economics meeting aesthetics. Short runs of 50–500 copies become viable. Each print carries slight variation — no two copies identical. That imperfection became the point. In a world of pixel-perfect screens, riso reminded people that print could breathe.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 1/10 — Static

- **Style:** Tactile, Retro-Intellectual, Approachable
- **Keywords:** risograph, zine, print, overlay, texture, grain, multiply, ink
- **Era:** Indie Print
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#FDFBF6) — Primary background surface
- **Text** (#1C1C5E) — Primary text color
- **Accent** (#E63E85) — Primary accent, CTAs and interactive elements
- **Riso Blue** (#0078BF) — Secondary accent
- **Riso Yellow** (#FFE800) — Warning states, attention indicators
- **Mint** (#00A95C) — Extended palette, decorative use


## Typography

- **Display / Hero:** Work Sans — Weight 700, tight tracking, used for headline impact
- **Body:** Work Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Work Sans — 0.875rem, weight 500, slight letter-spacing
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

Simulated offset printing, varying opacity layers (multiply effect), coarse paper grain, ink bleed, rough stamp-like stroke edges.

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Off-white/Paper background
- Do Multiply blending modes on colors
- Do Grainy/Noise texture overlay
- Do Misaligned registration effects
- Do Limited color palette (CMYK-ish)


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/risograph-zine-aesthetic · designmd.app -->
