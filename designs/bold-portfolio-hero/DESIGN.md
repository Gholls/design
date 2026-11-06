---
version: "alpha"
name: "Bold Portfolio Hero"
description: "Bold portfolio hero with vertical gradient from red-orange #fd2601 to orange #f37e1c. Ideal for creative portfolios, designers freelancer, agências de branding, sites pessoais de artistas. AI-ready template."
colors:
  primary: "#fd2601"
  secondary: "#f37e1c"
  tertiary: "#FFFFFF"
  neutral: "#F4791B"
  surface: "#FFFFFF"
  accent: "#fd2601"
typography:
  h1:
    fontFamily: Anton
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Anton
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 208
  author: "designmd.app"
  source: "https://designmd.app/library/bold-portfolio-hero"
  tags: ["风格模板", "creative portfolios", "designers freelancer", "agências de branding"]
---

## Overview

Bold portfolio hero with vertical gradient from red-orange #fd2601 to orange #f37e1c. Ideal for creative portfolios, designers freelancer, agências de branding, sites pessoais de artistas. AI-ready template. The bold portfolio hero traces its lineage to the poster art movements of the 1960s and 70s — Polish film posters, psychedelic concert bills, Italian Futurist typography. These weren't polite compositions. They grabbed you by the collar. The red-orange gradient specifically echoes the heat of letterpress overprinting, where overlapping inks created accidental warmth that designers eventually learned to weaponize.

When the web matured past its fear of color in the mid-2010s, portfolio sites started reclaiming this energy. Designers like Mike Dempsey and studios like Sagmeister & Walsh proved that a hero section could function as a manifesto — not just a header. The gradient became shorthand for creative confidence, a deliberate rejection of the safe navy-to-teal palettes that enterprise SaaS had colonized.

Today this pattern persists because it solves a real problem: creative professionals need their site to do the selling before a single project thumbnail loads. The hero IS the portfolio piece.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Portfolio, Bold Gradient, CSS Mask, Oversized Typography
- **Keywords:** portfolio, bold, gradiente vermelho-laranja, tipografia oversized, CSS mask, brush stroke, Anton font, imagem recortada, blobs luminosos, brand strip
- **Era:** 2024-2026 Creative Portfolio
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Vermelho-Laranja** (#fd2601) — Error states, destructive actions
- **Laranja** (#f37e1c) — Warm accent, call-to-action secondary
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Blob** (#F4791B) — Warm accent, call-to-action secondary
- **Branco Seleção** (#FFFFFF) — Secondary surface
- **Laranja Seleção** (#fd2601) — Warm accent, call-to-action secondary
- **Branco Opaco** (rgba(255,255,255,0.08)) — Secondary surface
- **Branco Borda** (rgba(255,255,255,0.9)) — Secondary surface


## Typography

- **Display / Hero:** Anton — Weight 700, tight tracking, used for headline impact
- **Accent:** Inter — Used for decorative or emphasis text
- **Body:** Anton — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Anton — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Este estilo não utiliza vídeo de fundo. O impacto visual vem do gradiente vibrante vermelho-laranja (#fd2601 para #f37e1c), tipografia massiva Anton, imagem com CSS mask brush stroke, e blobs luminosos com mix-blend-screen. O fundo é puramente CSS com gradiente e efeitos de luz. | EFEITOS CSS: Gradiente vertical de vermelho-laranja para laranja como fundo, tipografia massiva (12vw, max 180px) com font Anton uppercase, imagem central com CSS mask (brush stroke shape) sobrepondo o texto criando profundidade, blobs luminosos (300-600px, blur 80px, mix-blend-screen, opacity-60), texto SVG gigante no fundo (opacity 0.08, blur 4px), botão HIRE ME circular com borda branca e hover fill branco, brand strip de logos na parte inferior

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

- Do Gradiente vertical vermelho-laranja
- Do Tipografia massiva Anton uppercase
- Do Imagem com CSS mask brush stroke
- Do Blobs luminosos mix-blend-screen
- Do Texto SVG fundo opacity 0.08
- Do Botão circular HIRE ME
- Do Brand strip logos
- Do Responsivo stack mobile


## Use Case

Creative portfolios, Designers freelancer, Agencies de branding, Sites personal de artistas

<!-- Source: https://designmd.app/library/bold-portfolio-hero · designmd.app -->
