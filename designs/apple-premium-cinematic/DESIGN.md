---
version: "alpha"
name: "Apple Premium Cinematic"
description: "Premium Apple-style landing page with binary light/dark section rhythm. Ideal for produtos premium, technology, eletrônicos, marcas de luxo. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#f5f5f7"
  tertiary: "#1d1d1f"
  neutral: "#0071e3"
  surface: "#0066cc"
  accent: "#2997ff"
typography:
  h1:
    fontFamily: SF Pro Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: SF Pro Display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: SF Pro Display
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 980px
  md: 1960px
  lg: 2940px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 147
  author: "designmd.app"
  source: "https://designmd.app/library/apple-premium-cinematic"
  tags: ["风格模板", "produtos premium", "technology", "eletrônicos"]
---

## Overview

Premium Apple-style landing page with binary light/dark section rhythm. Ideal for produtos premium, technology, eletrônicos, marcas de luxo. AI-ready template. Apple didn't invent dark backgrounds or minimal typography — but they made everyone else look like amateurs trying it. The shift started around 2016 with the iPhone 7 product pages: black canvas, SF Pro in massive weights, and scroll-triggered animations that made a phone feel like a spacecraft. Before this, tech marketing was cluttered — spec sheets, comparison tables, lifestyle photography fighting for attention. Apple stripped it all away and let the product float in void.

The cinematic scroll — that parallax-driven reveal where hardware rotates, text fades in at precise moments, and the page itself becomes a choreographed experience — redefined what a product page could be. It wasn't just marketing; it was interaction design applied to storytelling. SF Pro gave them typographic control no other brand had: a typeface designed for screens, optimized at every weight, readable at 200px headlines and 14px body alike.

Every premium SaaS landing page you've seen since 2018 owes something to this language. The dark hero, the oversized type, the scroll-driven reveals — it's Apple's aesthetic democratized. Some pull it off. Most don't, because they copy the surface without understanding the restraint underneath.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 8/10 — Cinematic

- **Style:** Minimalismo Premium, Cinematic, Product-Hero, Binary Light/Dark
- **Keywords:** apple, SF Pro, minimalismo premium, cinematic, product-hero, binary light/dark, pill CTA, translucent nav, whitespace, billboard headlines
- **Era:** 2024-2026 Apple Premium
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Preto Puro** (#000000) — Dark surface, primary background
- **Cinza Claro** (#f5f5f7) — Secondary text, borders, muted elements
- **Quase Preto** (#1d1d1f) — Dark surface, primary background
- **Azul Apple** (#0071e3) — Accent highlight, links and focus states
- **Azul Link** (#0066cc) — Primary text color
- **Azul Brilhante** (#2997ff) — Secondary accent
- **Branco** (#FFFFFF) — Secondary surface
- **** (rgba(0,0,0,0.8)) — Extended palette, decorative use


## Typography

- **Display / Hero:** SF Pro Display — Weight 700, tight tracking, used for headline impact
- **Accent:** SF Pro Text — Used for decorative or emphasis text
- **Body:** SF Pro Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** SF Pro Display — 0.875rem, weight 500, slight letter-spacing
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

Seções alternando entre fundo preto puro e cinza claro (#f5f5f7) criando ritmo cinematográfico. Navbar translúcida com backdrop-filter: saturate(180%) blur(20px) sobre rgba(0,0,0,0.8). CTAs pill-shaped com border-radius 980px. Headlines com line-height 1.07 ultra-comprimidas. Produto como herói em campos de cor sólida sem distrações.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 980px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Pill-shaped (9999px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Pill-shaped (9999px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Seções alternando preto/cinza claro
- Do Navbar translúcida com blur
- Do Headlines SF Pro 56px weight 600 line-height 1.07
- Do Único acento azul #0071e3
- Do CTAs pill 980px radius
- Do Produto como herói em fundo sólido
- Do Whitespace cinematográfico entre seções
- Do Responsivo


## Use Case

Products premium, Technology, Eletrônicos, Luxury brands

<!-- Source: https://designmd.app/library/apple-premium-cinematic · designmd.app -->
