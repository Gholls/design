---
version: "alpha"
name: "Baroque"
description: "Baroque-inspired landing page with dramatic contrasts, rich deep colors (crimson, gold, black), ornate decorative borders, gold leaf accents, theatrical lighting via radial gradients. Ideal for branding de eventos de luxo, layouts editoriais, embalagens elegantes, convites premium. AI-ready template."
colors:
  primary: "#8B0000"
  secondary: "#DAA520"
  tertiary: "#0D0D0D"
  neutral: "#FFFFF0"
  surface: "#4B0082"
  accent: "#046307"
typography:
  h1:
    fontFamily: Cinzel Decorative
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Cinzel Decorative
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Cinzel Decorative
    fontSize: 0.75rem
    fontWeight: 500
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
  order: 183
  author: "designmd.app"
  source: "https://designmd.app/library/baroque"
  tags: ["风格模板", "layouts editoriais", "embalagens elegantes", "convites premium"]
---

## Overview

Baroque-inspired landing page with dramatic contrasts, rich deep colors (crimson, gold, black), ornate decorative borders, gold leaf accents, theatrical lighting via radial gradients. Ideal for branding de eventos de luxo, layouts editoriais, embalagens elegantes, convites premium. AI-ready template. Baroque emerged in late 16th-century Rome as the Catholic Church's visual counteroffensive — a deliberate rejection of Protestant austerity through overwhelming sensory experience. Every surface demanded attention. Bernini's columns twisted, Caravaggio's shadows swallowed entire canvases, and Versailles proved that excess itself could become a governing philosophy. The style spread across Europe not because it was beautiful, but because it was persuasive.

What makes Baroque endure in design isn't the gold leaf or the cherubs — it's the underlying commitment to emotional manipulation through contrast. Deep shadows against blazing highlights. Intimate detail against monumental scale. Stillness against violent motion. The Baroque masters understood something we keep rediscovering: restraint is not the only path to sophistication. Sometimes you earn trust by proving you can control chaos, not by avoiding it.

In digital contexts, Baroque thinking translates to layered depth, theatrical lighting, and compositions that guide the eye through deliberate tension rather than minimalist negative space. It's maximalism with a spine.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Dramatic, Ornate, Rich, Theatrical
- **Keywords:** Baroque, dramatic, ornate, rich colors, intense contrast, luxurious, theatrical, gold leaf, opulent, grandeur
- **Era:** 17th Century Baroque
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Deep Crimson** (#8B0000) — Primary surface or dominant color
- **Royal Gold** (#DAA520) — Premium accent, decorative highlights
- **Midnight Black** (#0D0D0D) — Dark surface, primary background
- **Ivory** (#FFFFF0) — Light surface, card backgrounds
- **Royal Purple** (#4B0082) — Accent color, emphasis elements
- **Emerald** (#046307) — Extended palette, decorative use
- **Burnt Sienna** (#E97451) — Extended palette, decorative use
- **Champagne** (#F7E7CE) — Extended palette, decorative use


## Typography

- **Display / Hero:** Cinzel Decorative — Weight 700, tight tracking, used for headline impact
- **Body:** Cinzel Decorative — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cinzel Decorative — 0.875rem, weight 500, slight letter-spacing
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

Heavy ornamental borders, dramatic shadow gradients, gold leaf textures, rich layered backgrounds, theatrical lighting effects (radial gradients), smooth hover transitions (300ms)

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

- Do Rich deep color palette
- Do Ornate gold borders and accents
- Do Dramatic lighting via gradients
- Do Serif typography with flourishes
- Do Theatrical contrast between light and dark
- Do Responsive ornamental layout


## Use Case

Luxury event branding, Editorial layouts, Elegant packaging, Premium invitations

<!-- Source: https://designmd.app/library/baroque · designmd.app -->
