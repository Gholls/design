---
version: "alpha"
name: "Grade School Color Palette"
description: "Landing page using grade school primary colors — the kind you remember from crayons and traffic signs. Ideal for startups consumer, apps educacionais, ecommerce jovem, plataformas de comunidade, marketing de produto, food delivery. AI-ready template."
colors:
  primary: "#FF6B00"
  secondary: "#E53935"
  tertiary: "#1E88E5"
  neutral: "#FDD835"
  surface: "#43A047"
  accent: "#E65100"
typography:
  h1:
    fontFamily: Nunito
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Nunito
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 16px
  md: 32px
  lg: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 444
  author: "designmd.app"
  source: "https://designmd.app/library/grade-school-color-palette"
  tags: ["风格模板", "startups consumer", "apps educacionais", "ecommerce jovem"]
---

## Overview

Landing page using grade school primary colors — the kind you remember from crayons and traffic signs. Ideal for startups consumer, apps educacionais, ecommerce jovem, plataformas de comunidade, marketing de produto, food delivery. AI-ready template. The grade school palette isn't arbitrary — it's the direct descendant of Bauhaus color theory filtered through mid-century American manufacturing constraints. When Binney & Smith reformulated Crayola's core box in 1958, they weren't just picking cheerful hues. They were codifying what decades of child psychology research suggested: saturated, unambiguous primaries reduce cognitive load for developing minds. Red is RED. Blue is BLUE. No subtlety, no apology.

What's fascinating is how this palette became cultural shorthand. The specific warmth of that yellow, the slightly orange-leaning red, the blue that sits between royal and cobalt — these aren't pure primaries in any color science sense. They're *remembered* primaries. The colors we collectively hallucinate when someone says "elementary school." They carry the waxy smell of a 64-count box and the specific friction of construction paper.

The retro revival of these tones in contemporary design isn't nostalgia for nostalgia's sake. It's designers recognizing that maximum saturation plus maximum simplicity creates instant emotional access. No onboarding required.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Nostalgic, Primary Colors, Crayola-Inspired, Orange-Dominant, Warm
- **Keywords:** grade school, primary colors, crayola, crayon, nostalgic, orange dominant, warm, traffic sign colors, red, blue, yellow, green, tints and shades, childlike sophistication, 2026 color trend
- **Era:** 2026 Nostalgic Modern
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Laranja Dominante** (#FF6B00) — Warm accent, call-to-action secondary
- **Vermelho Vivo** (#E53935) — Error states, destructive actions
- **Azul Puro** (#1E88E5) — Accent highlight, links and focus states
- **Amarelo Vibrante** (#FDD835) — Warning states, attention indicators
- **Verde Folha** (#43A047) — Success states, positive indicators
- **Laranja Escuro** (#E65100) — Deep contrast surface
- **Creme Quente** (#FFF8E1) — Extended palette, decorative use
- **Cinza Suave** (#F5F5F5) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Nunito — Weight 700, tight tracking, used for headline impact
- **Accent:** Poppins — Used for decorative or emphasis text
- **Body:** Nunito — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Nunito — 0.875rem, weight 500, slight letter-spacing
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

Cores primarias com sombreamento moderno (tints/shades sutis), bordas arredondadas generosas (12-20px), sombras suaves coloridas (box-shadow com cor do elemento), transicoes quentes 250ms, hover com saturacao aumentada, backgrounds com blocos de cor solida, tipografia bold e amigavel

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 16px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (16px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (16px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Laranja como cor primaria dominante
- Do Cores primarias puras (vermelho
- Do azul
- Do amarelo
- Do verde)
- Do Sombreamento moderno (tints/shades)
- Do Border-radius generoso 12-20px
- Do Sombras coloridas suaves
- Do Tipografia bold e amigavel
- Do Base creme quente
- Do Hover com saturacao aumentada
- Do Visual quente e energetico sem parecer infantil


## Use Case

Startups consumer, Apps educacionais, Ecommerce jovem, Platforms de comunidade, Marketing de produto, Food delivery

<!-- Source: https://designmd.app/library/grade-school-color-palette · designmd.app -->
