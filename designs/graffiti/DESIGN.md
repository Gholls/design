---
version: "alpha"
name: "Graffiti"
description: "Graffiti-inspired landing page with bright spray-paint colors on gritty urban backgrounds. Ideal for campanhas de marcas provocadoras, pôsteres de música, linhas de streetwear, eventos urbanos. AI-ready template."
colors:
  primary: "#FF2D2D"
  secondary: "#FFE600"
  tertiary: "#39FF14"
  neutral: "#0D0D0D"
  surface: "#0080FF"
  accent: "#FF1493"
typography:
  h1:
    fontFamily: Permanent Marker
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Permanent Marker
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 448
  author: "designmd.app"
  source: "https://designmd.app/library/graffiti"
  tags: ["风格模板", "pôsteres de música", "linhas de streetwear", "eventos urbanos"]
---

## Overview

Graffiti-inspired landing page with bright spray-paint colors on gritty urban backgrounds. Ideal for campanhas de marcas provocadoras, pôsteres de música, linhas de streetwear, eventos urbanos. AI-ready template. Graffiti didn't ask for permission. It emerged from the subway tunnels and freight yards of 1970s New York — writers like TAKI 183, Phase 2, and Dondi tagging their names across a city that refused to see them. It was territorial, political, and deeply personal. The wildstyle lettering that evolved wasn't decoration; it was encryption. Messages meant for those who knew how to read them.

By the 1980s, graffiti collided with gallery culture through figures like Basquiat and Keith Haring, but the tension never resolved. The street version stayed raw — dripping fills, cracked caps, paint running down concrete. That imperfection is the point. Every surface tells you about the hand that made it, the weather that day, the urgency of the moment.

Today graffiti's visual language has been absorbed into everything from typeface design to motion graphics. But the best applications remember where it came from: unauthorized, loud, and impossible to ignore. The grit isn't a filter you apply — it's the DNA of the form.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Bright, Gritty, Spray-Paint, Urban-Rebel
- **Keywords:** Graffiti, bright colors, gritty, spray paint, urban art, street art, rebel, concrete, tags, bold lettering, personality
- **Era:** 1970s-Present Street Art Culture
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Spray Red** (#FF2D2D) — Error states, destructive actions
- **Electric Yellow** (#FFE600) — Warning states, attention indicators
- **Neon Green** (#39FF14) — Supporting palette color
- **Deep Black** (#0D0D0D) — Dark surface, primary background
- **Spray Blue** (#0080FF) — Secondary accent
- **Hot Pink** (#FF1493) — Primary text color
- **Concrete Grey** (#808080) — Secondary text, borders, muted elements
- **Brick Brown** (#8B4513) — Extended palette, decorative use


## Typography

- **Display / Hero:** Permanent Marker — Weight 700, tight tracking, used for headline impact
- **Body:** Permanent Marker — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Permanent Marker — 0.875rem, weight 500, slight letter-spacing
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

Spray paint texture overlays (CSS noise/grain), drip effects on borders via SVG, concrete/brick texture backgrounds, bold graffiti-style lettering, tag-style decorative elements, gritty shadow effects, splatter animations on hover

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.


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

- Do Bright spray-paint colors
- Do Concrete/brick texture backgrounds
- Do Drip effect borders
- Do Bold graffiti-style lettering
- Do Tag-style decorative elements
- Do Gritty urban atmosphere
- Do Irregular rotation on elements
- Do Responsive with maintained street energy


## Use Case

Provocative brand campaigns, Music posters, Streetwear lines, Urban events

<!-- Source: https://designmd.app/library/graffiti · designmd.app -->
