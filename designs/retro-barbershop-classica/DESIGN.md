---
version: "alpha"
name: "Retro Barbershop Clássica"
description: "Classic and masculine retro landing page for a barbershop. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#4A2C2A"
  secondary: "#F5F5DC"
  tertiary: "#800020"
  neutral: "#B8860B"
  surface: "#006400"
  accent: "#000080"
typography:
  h1:
    fontFamily: Bebas Neue
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Bebas Neue
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 668
  author: "designmd.app"
  source: "https://designmd.app/library/retro-barbershop-classica"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Classic and masculine retro landing page for a barbershop. Ideal for landing pages, modern websites. AI-ready template. The barbershop aesthetic never truly disappeared — it just went underground. While the mid-century saw men's grooming reduced to fluorescent-lit chain salons, the cultural memory of the neighborhood barber persisted. Stripe poles spinning red-white-blue. Leather strops hanging from porcelain chairs. The ritual of hot towels and straight razors.

What we're seeing now isn't nostalgia — it's reclamation. The modern barbershop revival that started in the early 2010s rejected disposable grooming culture entirely. It pulled from pre-war typography, apothecary labeling, and the visual language of trades that took pride in craft. Brands like Baxter of California and Blind Barber didn't just sell pomade — they sold belonging to a lineage.

The design vocabulary is unmistakable: hand-lettered scripts, medallion crests, crosshatched illustrations, muted golds against deep blacks. These aren't decorative choices. They're signals of permanence in a world obsessed with the ephemeral.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Classic, Masculine, Authentic
- **Keywords:** barbershop, classic, vintage, masculine, authentic, traditional, refined, stylish, professional, welcoming
- **Era:** 1920s-1940s Classic
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Marrom Escuro** (#4A2C2A) — Dark surface, primary background
- **Creme** (#F5F5DC) — Secondary surface or text color
- **Vermelho Borgonha** (#800020) — Error states, destructive actions
- **Dourado Envelhecido** (#B8860B) — Premium accent, decorative highlights
- **Verde Garrafa** (#006400) — Success states, positive indicators
- **Azul Marinho** (#000080) — Secondary accent
- **Cinza Chumbo** (#36454F) — Secondary text, borders, muted elements
- **Branco** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Bebas Neue — Weight 700, tight tracking, used for headline impact
- **Body:** Bebas Neue — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bebas Neue — 0.875rem, weight 500, slight letter-spacing
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

Texturas de couro e madeira escura, tipografia serifada robusta e script elegante, ilustrações vintage de barbearia, bordas decorativas, micro-interações de hover com efeito de "brilho" sutil, transições de seção com efeito de "cortina" ou "rolo de filme".

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

- Do Texturas de couro/madeira
- Do Tipografia serifada/script
- Do Ilustrações vintage
- Do Bordas decorativas
- Do Micro-interações de brilho
- Do Transições de cortina/rolo de filme.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/retro-barbershop-classica · designmd.app -->
