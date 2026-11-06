---
version: "alpha"
name: "Arctic Forsythia Premium"
description: "Fresh, minimal, and luminous UI inspired by Scandinavian design. Ideal for saas moderno, fintechs, apps de produtividade, startups de tecnologia, plataformas de saúde digital. AI-ready template."
colors:
  primary: "#F1F6F4"
  secondary: "#FFC801"
  tertiary: "#114C5A"
  neutral: "#D9E8E2"
  surface: "#FF9932"
  accent: "#172B36"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 150
  author: "designmd.app"
  source: "https://designmd.app/library/arctic-forsythia-premium"
  tags: ["风格模板", "saas moderno", "fintechs"]
---

## Overview

Fresh, minimal, and luminous UI inspired by Scandinavian design. Ideal for saas moderno, fintechs, apps de produtividade, startups de tecnologia, plataformas de saúde digital. AI-ready template. The pairing of icy blue and forsythia yellow isn't decorative coincidence — it's rooted in the Nordic tradition of designing against darkness. Scandinavian modernists understood that when daylight is scarce for half the year, you engineer luminosity into surfaces. The yellow isn't warm; it's electric, the way forsythia blooms hit against late-March snow. That tension — frozen ground, defiant color — became a visual shorthand for renewal in Nordic graphic design from the 1960s onward.

This palette gained commercial traction through Scandinavian cosmetics and fresh-goods packaging in the 1990s, where brands needed to signal purity without sterility. Pure white felt clinical. But white cut with glacial blue and punctuated by botanical yellow? That read as alive. Clean but not dead. The combination works because it borrows from observable nature rather than from trend forecasting — it's what spring actually looks like at 60° latitude.

Arctic Forsythia codifies that specific moment: the forty-eight hours when ice recedes and the first yellow appears. It's not pastel spring. It's sharp, bright, and unapologetically cold.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Fresh Minimal & Luminous
- **Keywords:** Fresh, minimal, luminous, clean, airy, bright, teal, yellow, modern, spacious, crisp, Scandinavian
- **Era:** 2020s Scandinavian Minimal
- **Light/Dark:** ✓ Full

## Colors

- **Arctic Powder** (#F1F6F4) — Primary surface or dominant color
- **Forsythia Yellow** (#FFC801) — Warning states, attention indicators
- **Nocturnal Teal** (#114C5A) — Accent highlight, links and focus states
- **Mystic Mint** (#D9E8E2) — Extended palette, decorative use
- **Deep Saffron** (#FF9932) — Extended palette, decorative use
- **Oceanic Noir** (#172B36) — Extended palette, decorative use


## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Accent:** Outfit — Used for decorative or emphasis text
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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

Generous white space, crisp thin borders (1px), luminous yellow accent pops against cool neutrals, clean geometric layouts, subtle mint-tinted card backgrounds, minimal shadows (2-4px blur), precise grid alignment, smooth 250ms transitions, focus on breathing room and clarity

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (8px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (8px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Arctic Powder #F1F6F4 background
- Do Forsythia Yellow #FFC801 accent
- Do Nocturnal Teal #114C5A headings
- Do Generous white space
- Do Crisp thin borders
- Do Clean geometric grid
- Do Minimal shadows
- Do Mystic Mint card backgrounds
- Do Responsive layout


## Use Case

Modern SaaS, Fintechs, Productivity apps, Tech startups, Digital health platforms

<!-- Source: https://designmd.app/library/arctic-forsythia-premium · designmd.app -->
