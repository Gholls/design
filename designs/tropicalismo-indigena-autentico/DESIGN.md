---
version: "alpha"
name: "Tropicalismo Indígena Autêntico"
description: "Design an authentic and cultural landing page for a Brazilian indigenous culture platform, inspired by tropicalism and indigenous art. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#8B4513"
  secondary: "#228B22"
  tertiary: "#CC7722"
  neutral: "#FFFFFF"
  surface: "#4682B4"
  accent: "#FFD700"
typography:
  h1:
    fontFamily: Marcellus SC
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Marcellus SC
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 796
  author: "designmd.app"
  source: "https://designmd.app/library/tropicalismo-indigena-autentico"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an authentic and cultural landing page for a Brazilian indigenous culture platform, inspired by tropicalism and indigenous art. Ideal for landing pages, saas. AI-ready template. Indigenous Brazilian visual culture carries thousands of years of encoded meaning. The geometric patterns of the Kadiwéu, the body painting traditions of the Kayapó, the intricate basketry of the Baniwa — these aren't decorative. They're language. Kinship systems, cosmological maps, territorial markers. Every line has jurisdiction.

Digital design has a terrible track record here. Flattening sacred geometry into background textures. Stripping urucum reds and jenipapo blacks from their ceremonial context to sell wellness brands. The problem isn't reference — it's extraction without relationship. You cannot download a culture.

The path forward requires collaboration, not inspiration boards. Work with indigenous designers and communities directly. Credit specific peoples, not a monolithic 'indigenous aesthetic.' Pay for consultation. Understand that some patterns are not yours to use — period. The visual richness is undeniable, but access is not a right. It's a negotiation.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Authentic, Cultural, Organic, Respectful
- **Keywords:** indigenous culture, Brazilian, preservation, authentic, cultural, organic, traditional, storytelling, immersive, respectful
- **Era:** 2026+ Conexão Ancestral
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Marrom Terra** (#8B4513) — Primary surface or dominant color
- **Verde Floresta** (#228B22) — Secondary surface or text color
- **Vermelho Ocre** (#CC7722) — Error states, destructive actions
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Azul Rio** (#4682B4) — Secondary accent
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Preto** (#000000) — Deep contrast surface


## Typography

- **Display / Hero:** Marcellus SC — Weight 700, tight tracking, used for headline impact
- **Body:** Marcellus SC — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Marcellus SC — 0.875rem, weight 500, slight letter-spacing
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

Padrões e grafismos indígenas em elementos de UI, tipografia que remete a manuscritos antigos ou caligrafia, ilustrações de fauna e flora nativas, texturas de argila e madeira, micro-interações de hover com efeito de "revelação" de significado cultural, transições de seção suaves e com elementos gráficos que se entrelaçam.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (8px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (8px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Paleta de cores brasileira verificada
- Do Elementos orgânicos/naturais presentes
- Do Autenticidade cultural brasileira verificada
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/tropicalismo-indigena-autentico · designmd.app -->
