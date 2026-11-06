---
version: "alpha"
name: "Caramelo Quente Premium"
description: "Warm, inviting, and artisanal UI with a premium feel. Ideal for cafeterias artesanais, padarias premium, marcas de lifestyle, restaurantes acolhedores, e-commerce de produtos naturais. AI-ready template."
colors:
  primary: "#C77A23"
  secondary: "#E8D8C6"
  tertiary: "#3A2F2B"
  neutral: "#D2691E"
  surface: "#D3D3D3"
  accent: "#F0C98D"
typography:
  h1:
    fontFamily: Lora
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Lora
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 10px
  md: 20px
  lg: 30px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 224
  author: "designmd.app"
  source: "https://designmd.app/library/caramelo-quente-premium"
  tags: ["风格模板", "padarias premium", "marcas de lifestyle"]
---

## Overview

Warm, inviting, and artisanal UI with a premium feel. Ideal for cafeterias artesanais, padarias premium, marcas de lifestyle, restaurantes acolhedores, e-commerce de produtos naturais. AI-ready template. Caramel and golden warm tones have operated as a premium design shorthand long before digital interfaces existed. Think of the amber glow of aged whiskey labels, the burnished gold leaf on Venetian storefronts, the deliberate warmth of craft coffee packaging that signals slow-roasted, small-batch care. These tones tap into something primal — fire, hearth, bread crust — and translate that into a visual promise of comfort without sacrificing sophistication.

The modern revival owes a debt to the third-wave coffee movement and artisanal bakery boom of the 2010s, where brands rejected the cold minimalism of tech aesthetics in favor of warmth that felt human and handmade. Caramel became the anti-corporate color — rich enough to feel premium, warm enough to feel approachable. It says "someone made this with their hands" even when they didn't.

What makes golden warmth work as a premium language is restraint. It's not yellow's optimism or orange's energy — it's the quiet confidence of aged materials, patina, and things that improve with time. Used well, it communicates heritage without stuffiness and luxury without distance.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Artisanal & Cozy
- **Keywords:** Warm, inviting, artisanal, cozy, premium, natural, coffee, baked goods, rustic, sophisticated
- **Era:** Modern Artisanal
- **Light/Dark:** ✓ Full

## Colors

- **Warm Caramel Brown** (#C77A23) — Primary surface or dominant color
- **Creamy Latte** (#E8D8C6) — Light surface, card backgrounds
- **Dark Roast** (#3A2F2B) — Dark surface, primary background
- **Cinnamon Spice** (#D2691E) — Extended palette, decorative use
- **Linen Grey** (#D3D3D3) — Secondary text, borders, muted elements
- **Golden Croissant** (#F0C98D) — Premium accent, decorative highlights


## Typography

- **Display / Hero:** Lora — Weight 700, tight tracking, used for headline impact
- **Accent:** Roboto — Used for decorative or emphasis text
- **Body:** Lora — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Lora — 0.875rem, weight 500, slight letter-spacing
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

Soft, diffused lighting, subtle texture overlays (linen, wood grain), elegant serif typography for headlines, warm sans-serif for body, gentle shadows, focus on natural materials and comfort, smooth transitions

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 10px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (10px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (10px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Warm Caramel Brown primary #C77A23
- Do Earthy and cozy color palette
- Do Elegant serif typography for headlines
- Do Soft
- Do gentle shadows
- Do Natural textures (e.g.
- Do linen
- Do coffee beans)
- Do Responsive design for all devices


## Use Case

Cafeterias artesanais, Padarias premium, Brands de lifestyle, Restaurantes acolhedores, E-commerce de products naturais

<!-- Source: https://designmd.app/library/caramelo-quente-premium · designmd.app -->
