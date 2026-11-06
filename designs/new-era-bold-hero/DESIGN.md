---
version: "alpha"
name: "New Era Bold Hero"
description: "Bold cinematic hero with full-screen background video and dark blue fallback. Ideal for creative agencies, portfólios impactantes, landing pages editoriais, marcas de moda. AI-ready template."
colors:
  primary: "#21346e"
  secondary: "#FFFFFF"
  tertiary: "#161a20"
  neutral: "#1A1A1A"
  surface: "#2A4080"
  accent: "#CCCCCC"
typography:
  h1:
    fontFamily: Rubik
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Rubik
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 599
  author: "designmd.app"
  source: "https://designmd.app/library/new-era-bold-hero"
  tags: ["风格模板", "creative agencies", "marcas de moda"]
---

## Overview

Bold cinematic hero with full-screen background video and dark blue fallback. Ideal for creative agencies, portfólios impactantes, landing pages editoriais, marcas de moda. AI-ready template. The full-screen typographic hero didn't emerge from digital design — it came from protest posters, punk zines, and the raw energy of letterpress accidents. When Neville Brody blew type to the edges of The Face in the 1980s, he wasn't decorating; he was weaponizing letterforms. The idea that a single word, set massive and unapologetic, could carry more emotional weight than any photograph was radical then and remains potent now.

This pattern crystallized in the early 2010s when agencies like Huge and Collins started stripping hero sections down to nothing but oversized uppercase type on solid backgrounds. No imagery, no gradients, no safety nets. The confidence required to let typography alone carry a brand's first impression separated serious studios from template-dependent shops. It was a direct rejection of the stock-photo-plus-overlay formula that had calcified web design into visual wallpaper.

Today the bold hero persists because it works on a neurological level — large-scale type triggers immediate pattern recognition, demands a pause, and creates the kind of visceral gut reaction that no carousel or auto-playing video can replicate.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Bold, Uppercase, Cinematic, Video Background
- **Keywords:** bold, uppercase, cinematic, vídeo de fundo, tipografia massiva, Rubik, SVG button, dark blue, impactante, editorial
- **Era:** 2024-2026 Editorial Cinematic
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Azul Escuro** (#21346e) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto Escuro** (#161a20) — Dark surface, primary background
- **Cinza Escuro** (#1A1A1A) — Dark surface, primary background
- **Azul Médio** (#2A4080) — Secondary accent
- **Cinza Claro** (#CCCCCC) — Secondary text, borders, muted elements
- **Branco Suave** (#F5F5F5) — Secondary surface
- **Preto** (#000000) — Deep contrast surface


## Typography

- **Display / Hero:** Rubik — Weight 700, tight tracking, used for headline impact
- **Body:** Rubik — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Rubik — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Vídeo abstrato com movimento fluido e dinâmico em tons escuros azulados. Formas geométricas ou partículas em movimento criando sensação de energia e modernidade. Estilo cinematográfico com transições suaves, servindo como backdrop para tipografia bold oversized. Fallback azul escuro (#21346e) quando o vídeo não carrega. | EFEITOS CSS: Vídeo de fundo tela cheia (autoplay, loop, muted) com fallback azul escuro, tipografia massiva uppercase (text-6xl a text-[100px]) com line-height 0.98 e letter-spacing negativo (-2px a -4px), botão CTA com shape SVG customizado (184x65px, path branco, texto escuro), hover scale-105, active scale-95

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Vídeo de fundo tela cheia com fallback azul escuro
- Do Tipografia massiva uppercase 3 linhas
- Do Font Rubik bold line-height 0.98
- Do Letter-spacing negativo
- Do Botão CTA com SVG path customizado
- Do Hover scale-105 active scale-95
- Do Conteúdo alinhado ao topo
- Do Responsivo com font-size adaptativo


## Use Case

Creative agencies, Portfolios impactantes, Landing pages editoriais, Brands de moda

<!-- Source: https://designmd.app/library/new-era-bold-hero · designmd.app -->
