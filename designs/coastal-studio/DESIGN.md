---
version: "alpha"
name: "Coastal Studio"
description: "Creative studio landing page inspired by rocky coastal cliffs, using deep navy, slate blue, and ocean pearl overlays. Ideal for portfólios de fotografia, estúdios criativos, agências de branding, arquitetura costeira. AI-ready template."
colors:
  primary: "#263C59"
  secondary: "#6D89A6"
  tertiary: "#AFC3D4"
  neutral: "#C8D9E6"
  surface: "#E6DED4"
  accent: "#111827"
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
  order: 259
  author: "designmd.app"
  source: "https://designmd.app/library/coastal-studio"
  tags: ["风格模板", "estúdios criativos", "agências de branding", "arquitetura costeira"]
---

## Overview

Creative studio landing page inspired by rocky coastal cliffs, using deep navy, slate blue, and ocean pearl overlays. Ideal for portfólios de fotografia, estúdios criativos, agências de branding, arquitetura costeira. AI-ready template. The relationship between photography and the coast has always been one of tension — the camera trying to hold still what refuses to stay. Early coastal studios in California and Cornwall understood this. They didn't fight the light; they let it blow out edges, wash over surfaces, turn architecture into atmosphere. The best ones felt like walking into a photograph before it was taken.

Coastal Studio picks up that thread. The photographic hero isn't decoration — it's the entire thesis statement. Full-bleed imagery does the heavy lifting while editorial typography sits on top with the confidence of a magazine masthead. There's no grid fighting the ocean; the layout breathes horizontally the way shorelines do.

What separates this from generic photography templates is restraint in the wrong places and excess in the right ones. The type is oversized but never competes. The whitespace is generous but never empty. It's a template that trusts the photographer's work enough to get out of the way — which, frankly, most templates are too insecure to do.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** General
- **Keywords:** estúdio criativo costeiro, hero fotográfico, tipografia editorial, blocos semi-transparentes, clima de penhascos e mar
- **Era:** Coastal Creative Studio
- **Light/Dark:** ◐ Partial

## Colors

- **Deep Current** (#263C59) — Primary surface or dominant color
- **Coastal Slate** (#6D89A6) — Secondary surface or text color
- **Ocean Pearl** (#AFC3D4) — Supporting palette color
- **Seafoam Cloud** (#C8D9E6) — Extended palette, decorative use
- **Driftwood Pale** (#E6DED4) — Extended palette, decorative use
- **Preto suave** (#111827) — Deep contrast surface


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

Hero com foto de costa rochosa, overlays semi-transparentes em Coastal Slate, títulos serif grandes, textos em branco sobre navy, botões em Driftwood Pale com texto em Deep Current

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 20px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (20px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (20px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Hero com foto costeira em tela cheia
- Do Painéis semi-transparentes em Coastal Slate/Ocean Pearl
- Do Títulos serif grandes em branco
- Do Botões em Driftwood Pale com texto em Deep Current
- Do Layout que balanceia fotografia forte com UI minimal


## Use Case

Portfolios de fotografia, Studios criativos, Agencies de branding, Arquitetura costeira

<!-- Source: https://designmd.app/library/coastal-studio · designmd.app -->
