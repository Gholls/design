---
version: "alpha"
name: "Stripe Fintech Elegance"
description: "Stripe-inspired fintech landing page. Ideal for fintechs, plataformas de pagamento, infraestrutura financeira, saas enterprise. AI-ready template."
colors:
  primary: "#533afd"
  secondary: "#061b31"
  tertiary: "#ffffff"
  neutral: "#ea2261"
  surface: "#f96bee"
  accent: "#e5edf5"
typography:
  h1:
    fontFamily: system-ui
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: system-ui
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: system-ui
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 4px
  md: 8px
  lg: 12px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 752
  author: "designmd.app"
  source: "https://designmd.app/library/stripe-fintech-elegance"
  tags: ["风格模板", "fintechs", "saas enterprise"]
---

## Overview

Stripe-inspired fintech landing page. Ideal for fintechs, plataformas de pagamento, infraestrutura financeira, saas enterprise. AI-ready template. Before Stripe, fintech looked like banking software — dense tables, blue gradients that screamed 2008, and interfaces designed by committee. Stripe walked in around 2011 and said: what if developer tools looked like they belonged in a design portfolio? They paired weight-300 typography with deep purple-to-blue gradients, gave everything room to breathe, and treated API documentation like editorial content. That was radical.

The ripple effect was immediate. Every payment startup, every API company, every dev tool that launched after 2014 borrowed from this playbook. The thin fonts, the dark hero sections with luminous gradient orbs, the obsessive whitespace — it became the visual shorthand for 'we take craft seriously.' Plaid, Mercury, Ramp, Linear — they all speak dialects of the language Stripe invented.

What makes it endure is restraint. Stripe never chased trends. They refined one aesthetic vocabulary — light type weights, precise color gradients, generous spacing — and let consistency compound into brand equity. It's not flashy. It's inevitable.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Fintech Premium, Weight-300 Headlines, Blue-Tinted Shadows, Purple Accent
- **Keywords:** stripe, fintech, weight 300, blue shadows, purple accent, sohne, ss01, tabular numerals, conservative radius, premium
- **Era:** 2024-2026 Fintech Premium
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Roxo Stripe** (#533afd) — Accent color, emphasis elements
- **Navy Profundo** (#061b31) — Primary background surface
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Ruby** (#ea2261) — Supporting palette color
- **Magenta** (#f96bee) — Decorative accent, highlight elements
- **Borda** (#e5edf5) — Extended palette, decorative use
- **Body** (#64748d) — Primary text color
- **Navy Escuro** (#0d253d) — Deep contrast surface


## Typography

- **Display / Hero:** system-ui — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui — 0.875rem, weight 500, slight letter-spacing
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

Headlines weight 300 (light) — autoridade através da leveza tipográfica. Sombras blue-tinted com rgba(50,50,93,0.25) criando profundidade com atmosfera de marca. Acento roxo (#533afd) para CTAs e links. Navy profundo (#061b31) para headings em vez de preto. Border-radius conservador (4-8px). OpenType ss01 em todo texto. Seções alternando branco e navy escuro (#1c1e54).

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (4px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (4px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Headlines weight 300
- Do Navy headings #061b31
- Do Acento roxo #533afd
- Do Sombras blue-tinted
- Do Border-radius 4-8px
- Do Seções alternando branco/navy
- Do Letter-spacing negativo
- Do Responsivo


## Use Case

Fintechs, Platforms de pagamento, Infraestrutura financeira, SaaS enterprise

<!-- Source: https://designmd.app/library/stripe-fintech-elegance · designmd.app -->
