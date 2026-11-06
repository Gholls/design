---
version: "alpha"
name: "Daisy Days"
description: "Daisy Days — Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm. Fredoka One typography. warm cream base with a full pastel rainbow (mint, lavender, peach, sky, soft pin. Best for education / classroom, kids product launch, wellness program. AI-ready design system."
colors:
  primary: "#F5F0E6"
  secondary: "#7ECDC0"
  tertiary: "#F7C8D4"
  neutral: "#FDE68A"
  surface: "#A8E6CF"
  accent: "#D4A5E8"
typography:
  h1:
    fontFamily: Fredoka One
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Fredoka One
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 12px
  md: 24px
  lg: 36px
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 309
  author: "designmd.app"
  source: "https://designmd.app/library/daisy-days"
  tags: ["风格模板", "stars", "soft", "lavender"]
---

## Overview

Daisy Days — Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm. Fredoka One typography. warm cream base with a full pastel rainbow (mint, lavender, peach, sky, soft pin. Best for education / classroom, kids product launch, wellness program. AI-ready design system. Hand-drawn florals have anchored children's visual culture since the Arts and Crafts movement rejected industrial sterility in favor of organic, imperfect linework. The daisy — simple enough for a child to draw, universal enough to transcend language — became shorthand for innocence across decades of picture books, nursery textiles, and educational materials.

The pastel rainbow palette here isn't arbitrary nostalgia. It descends directly from the soft chromatic ranges popularized by Japanese kawaii culture in the 1970s and later absorbed into Western children's branding through Sanrio's global expansion. That specific intersection — Western botanical illustration meets Eastern color sensibility — created the visual language we now instinctively read as 'gentle, playful, safe.'

Fredoka One anchors the typography with rounded terminals that echo the petal shapes themselves. It's a deliberate rejection of the geometric sans-serifs that dominated children's branding in the 2010s. The font says: we're not trying to look modern, we're trying to feel warm. That distinction matters when you're designing for audiences who process emotion before information.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Illustrated, Cheerful, Pastel, Hand-Drawn
- **Keywords:** Hand-drawn daisies, pastel rainbow, Fredoka One, chunky offset shadows, cheerful, wholesome, illustrated
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Cream** (#F5F0E6) — Primary surface or dominant color
- **Turquoise** (#7ECDC0) — Accent highlight, links and focus states
- **Soft Pink** (#F7C8D4) — Secondary accent
- **Butter** (#FDE68A) — Accent color, emphasis elements
- **Mint** (#A8E6CF) — Extended palette, decorative use
- **Lavender** (#D4A5E8) — Background alternate
- **Peach** (#FFCBA4) — Muted text / borders
- **Sky** (#A8D8F0) — Extended palette
- **Coral** (#F8635F) — Extended palette, decorative use
- **Ink** (#2D2D2D) — Extended palette, decorative use


## Typography

- **Display / Hero:** Fredoka One — Weight 700, tight tracking, used for headline impact
- **Body:** Quicksand — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Quicksand — 0.875rem, weight 500, slight letter-spacing
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

display font Fredoka One for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, hand-drawn SVG daisy/star decorations, 6px chunky offset shadows, rounded sans

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 12px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 12px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fredoka One display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Hand-drawn / crafted SVG decorations present
- Do Mobile responsive layout (stack below 768px)


## Use Case

education / classroom, kids product launch, wellness program, community workshop, creator portfolio (craft / illustration), team kickoff, wedding / baby shower planning

<!-- Source: https://designmd.app/library/daisy-days · designmd.app -->
