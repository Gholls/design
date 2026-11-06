---
version: "alpha"
name: "Kawaii"
description: "Kawaii landing page with soft pastel colors and adorable rounded aesthetics. Ideal for embalagens de brinquedos, vestuário, branding de personagens, gráficos de redes sociais. AI-ready template."
colors:
  primary: "#FFB6C1"
  secondary: "#ADD8E6"
  tertiary: "#FFFACD"
  neutral: "#FFF5F5"
  surface: "#B2F2BB"
  accent: "#D8B4FE"
typography:
  h1:
    fontFamily: Quicksand
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Quicksand
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 28px
  md: 56px
  lg: 84px
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 495
  author: "designmd.app"
  source: "https://designmd.app/library/kawaii"
  tags: ["风格模板", "vestuário"]
---

## Overview

Kawaii landing page with soft pastel colors and adorable rounded aesthetics. Ideal for embalagens de brinquedos, vestuário, branding de personagens, gráficos de redes sociais. AI-ready template. Kawaii didn't emerge from a corporate branding exercise — it bubbled up from Japanese teenage girls in the 1970s who started writing in a deliberately childish, rounded script that drove their teachers insane. That rebellion against formality became a cultural force. Sanrio capitalized on it with Hello Kitty in 1974, proving that simplicity and emotional warmth could move product at industrial scale.

By the 1980s, kawaii had infected everything from bank advertisements to government signage in Japan. The aesthetic crossed over globally through anime, Tamagotchi, and the Harajuku street fashion explosion of the late '90s. What makes kawaii fascinating from a design systems perspective is its disciplined restraint — the proportions are precise, the color relationships are intentional, and the apparent simplicity masks rigorous craft.

Today kawaii lives comfortably in digital product design. Apps like LINE proved that kawaii interaction patterns drive engagement metrics that "serious" design can't touch. The style has matured beyond novelty into a legitimate design language with its own grammar — one built on emotional accessibility rather than information hierarchy.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Pastel, Rounded, Adorable, Cartoon-Like
- **Keywords:** Kawaii, cute, pastel colors, rounded shapes, adorable characters, cartoon, Japanese cute culture, soft, bubbly, friendly
- **Era:** 1970s-Present Japanese Cute Culture
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Pastel Pink** (#FFB6C1) — Primary text color
- **Pastel Blue** (#ADD8E6) — Accent highlight, links and focus states
- **Pastel Yellow** (#FFFACD) — Warning states, attention indicators
- **Soft White** (#FFF5F5) — Light surface, card backgrounds
- **Pastel Mint** (#B2F2BB) — Extended palette, decorative use
- **Pastel Lavender** (#D8B4FE) — Extended palette, decorative use
- **Pastel Peach** (#FFDAB9) — Extended palette, decorative use
- **Soft Grey** (#E8E8E8) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Quicksand — Weight 700, tight tracking, used for headline impact
- **Body:** Quicksand — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Quicksand — 0.875rem, weight 500, slight letter-spacing
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

Very rounded shapes (24-32px radius), bouncy hover animations (cubic-bezier overshoot), soft pastel gradients, kawaii face SVG decorations (dots for eyes, small mouth), sparkle/star decorations, gentle wobble animations, cloud-shaped section dividers

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 28px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Soft pastel color palette
- Do Very rounded shapes (24-32px)
- Do Bouncy overshoot animations
- Do Kawaii face decorations
- Do Sparkle/star elements
- Do Cloud-shaped dividers
- Do Rounded friendly typography
- Do Adorable bubbly atmosphere
- Do Responsive with maintained cuteness


## Use Case

Toy packaging, Apparel, Character branding, Social media graphics

<!-- Source: https://designmd.app/library/kawaii · designmd.app -->
