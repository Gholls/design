---
version: "alpha"
name: "Glass Gradient Creative"
description: "Full-screen hero page with a vertical white-to-magenta gradient background, overlapping blurred triangular shapes in purple and pink, and tall glass columns using glassmorphism. Ideal for landing pages criativas, portfólios de design, digital agencies, produtos visuais premium. AI-ready template."
colors:
  primary: "#FDFDFD"
  secondary: "#FF00C3"
  tertiary: "#7000FF"
  neutral: "#E3E3E3"
  surface: "#FF0080"
  accent: "#C38CFF"
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
  sm: 18px
  md: 36px
  lg: 54px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 428
  author: "designmd.app"
  source: "https://designmd.app/library/glass-gradient-creative"
  tags: ["风格模板", "portfólios de design", "digital agencies"]
---

## Overview

Full-screen hero page with a vertical white-to-magenta gradient background, overlapping blurred triangular shapes in purple and pink, and tall glass columns using glassmorphism. Ideal for landing pages criativas, portfólios de design, digital agencies, produtos visuais premium. AI-ready template. Glassmorphism didn't appear out of nowhere. It's the logical conclusion of a decade-long oscillation between flat and skeuomorphic thinking. Apple's iOS 7 blur panels in 2013 planted the seed — frosted acrylic over content, depth without literal shadow. Microsoft's Fluent Design picked it up with Acrylic Material in 2017, proving that translucency could organize hierarchy without heavy borders. But the term 'glassmorphism' only crystallized around 2020 when designers on Dribbble started pushing frosted panels with visible borders and background blur to absurd, beautiful extremes.

The vertical gradient variant takes this further. Instead of uniform frost, you get directional color bleeding through glass columns — a technique that owes as much to print poster design and light photography as it does to UI trends. The gradient isn't decoration; it's wayfinding. Each column catches a different slice of the spectrum, creating implicit grouping without explicit containers.

What makes this pattern endure where others fade is restraint in its best implementations. The glass is a lens, not a wall. When designers forget that — when blur becomes so heavy it obscures everything — the pattern collapses into noise. The best glass gradient work remembers that transparency is a contract with the user: you're showing them layers exist.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** General
- **Keywords:** glassmorphism, gradiente vertical, colunas de vidro, glow magenta, tipografia elegante centrada, layout minimal, hero fullscreen
- **Era:** 2020s Glassmorphism Creative
- **Light/Dark:** ◐ Partial

## Colors

- **Branco suave** (#FDFDFD) — Light surface, card backgrounds
- **Magenta neon** (#FF00C3) — Decorative accent, highlight elements
- **Roxo intenso** (#7000FF) — Accent color, emphasis elements
- **Cinza claro** (#E3E3E3) — Secondary text, borders, muted elements
- **Rosa** (#FF0080) — Decorative accent, highlight elements
- **Roxo claro** (#C38CFF) — Accent color, emphasis elements


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

Gradiente vertical do branco ao magenta, formas triangulares sobrepostas com blur, colunas altas com glass effect (desfoque e borda clara), sombras suaves, glow na base

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 18px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (18px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (18px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Hero fullscreen com gradiente vertical branco → magenta → roxo
- Do Formas triangulares sobrepostas com blur e variação de opacidade
- Do Colunas verticais com efeito glass (backdrop-filter + borda clara + sombra suave)
- Do Headline serif elegante centralizada em branco
- Do CTA principal destacado na região mais intensa do gradiente


## Use Case

Landing pages creative, Portfolios de design, Digital agencies, Products visuais premium

<!-- Source: https://designmd.app/library/glass-gradient-creative · designmd.app -->
