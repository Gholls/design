---
version: "alpha"
name: "Glassmorphism Agency Hero"
description: "Dark agency hero with HLS video using mix-blend-screen. Ideal for digital agencies, estúdios criativos, consultorias de design, portfólios de agência. AI-ready template."
colors:
  primary: "#010101"
  secondary: "#FA93FA"
  tertiary: "#C967E8"
  neutral: "#983AD6"
  surface: "#010101"
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
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 431
  author: "designmd.app"
  source: "https://designmd.app/library/glassmorphism-agency-hero"
  tags: ["风格模板", "digital agencies", "estúdios criativos"]
---

## Overview

Dark agency hero with HLS video using mix-blend-screen. Ideal for digital agencies, estúdios criativos, consultorias de design, portfólios de agência. AI-ready template. Glassmorphism didn't appear out of nowhere — it's the logical conclusion of decades of UI experimentation with depth and translucency. Apple flirted with frosted glass in iOS 7 (2013), but the aesthetic truly crystallized around 2020 when designers got tired of flat design's sterility and started layering blur effects over vibrant gradients. The purple-pink spectrum became the default palette for tech-forward agencies because it signals both creativity and sophistication without the corporate coldness of blues.

What makes this hero pattern specifically interesting for agencies is the tension it creates. You're simultaneously saying 'we understand craft' (the precise blur values, the subtle border luminosity) and 'we push boundaries' (the gradient saturation, the floating card depth). It's a flex disguised as restraint. The best implementations treat the glass layer as architecture, not decoration — each translucent panel exists because it creates hierarchy, not because it looks cool on Dribbble.

The pattern matured significantly since its hype peak. Early glassmorphism was often illegible — contrast ratios sacrificed for aesthetics. The current generation respects readability while maintaining that ethereal depth that makes visitors pause and actually look at your headline.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Agency, Glassmorphism, Purple-Pink Gradient, Video Mix-Blend, Infinite Slider
- **Keywords:** agency, glassmorphism, gradiente roxo-rosa, mix-blend-screen, vídeo HLS, infinite slider, logo cloud, Zap icon, glow effect, dark premium
- **Era:** 2024-2026 Agency Premium Dark
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Preto Base** (#010101) — Primary background surface
- **Rosa** (#FA93FA) — Decorative accent, highlight elements
- **Roxo Médio** (#C967E8) — Accent color, emphasis elements
- **Roxo Escuro** (#983AD6) — Dark surface, primary background
- **Preto Overlay** (#010101) — Deep contrast surface
- **Vidro Escuro** (rgba(28,27,36,0.15)) — Deep contrast surface
- **** (rgba(255,255,255,0.8)) — Extended palette, decorative use
- **Borda Sutil** (rgba(255,255,255,0.05)) — Extended palette, decorative use


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

VÍDEO: Stream HLS via Cloudflare com visual abstrato de luz e movimento em tons escuros. Efeitos de luz, partículas ou formas fluidas que se fundem com o fundo preto da página via mix-blend-screen (o preto do vídeo se torna transparente). Posicionado na parte inferior do hero com margin-top negativo (-150px), criando sobreposição atrás do texto. Gradient overlay (from #010101 via transparent to #010101) nas bordas. | EFEITOS CSS: Vídeo HLS com mix-blend-screen (fundo preto do vídeo se funde com a página), vídeo na parte inferior do hero com margin-top negativo (-150px) sobrepondo atrás do texto, gradient overlay, pill badge com ícone Zap em caixa gradiente com glow, headline com gradient fill (branco para roxo/rosa), botão CTA com círculo gradiente e seta, logo cloud animado com InfiniteSlider horizontal infinito, logos em brightness-0 invert

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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Vídeo HLS com mix-blend-screen
- Do Vídeo inferior com margin negativo
- Do Gradient overlay
- Do Badge com Zap icon e glow
- Do Headline gradient text fill
- Do CTA com círculo gradiente
- Do Logo cloud infinite slider
- Do Logos brancos invertidos
- Do Responsivo


## Use Case

Digital agencies, Creative studios, Design consultancies, Agency portfolios

<!-- Source: https://designmd.app/library/glassmorphism-agency-hero · designmd.app -->
