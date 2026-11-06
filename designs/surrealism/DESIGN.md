---
version: "alpha"
name: "Surrealism"
description: "Surrealist landing page that defies logic and reality. Ideal for capas de álbuns, ilustrações editoriais conceituais, digital art, campanhas criativas. AI-ready template."
colors:
  primary: "#4A6FA5"
  secondary: "#C9A84C"
  tertiary: "#5B3A6B"
  neutral: "#FFF8E7"
  surface: "#E8B4A0"
  accent: "#87CEEB"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Playfair Display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Playfair Display
    fontSize: 0.75rem
    fontWeight: 500
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 756
  author: "designmd.app"
  source: "https://designmd.app/library/surrealism"
  tags: ["风格模板", "capas de álbuns", "digital art", "campanhas criativas"]
---

## Overview

Surrealist landing page that defies logic and reality. Ideal for capas de álbuns, ilustrações editoriais conceituais, digital art, campanhas criativas. AI-ready template. Surrealism didn't emerge from nowhere — it crawled out of Dada's wreckage in 1924 Paris, when André Breton published his manifesto demanding art bypass rational thought entirely. The movement weaponized the unconscious mind. Dalí's melting clocks, Magritte's pipe that isn't a pipe, Remedios Varo's impossible architectures — these weren't random weirdness. They were systematic attacks on logic itself, built on Freudian dream theory and automatic writing techniques.

What makes Surrealism endure in visual design is its refusal to respect spatial rules. Objects exist at impossible scales. Gravity is optional. Materials behave wrong — stone floats, water holds shape, flesh becomes landscape. This isn't chaos; it's meticulously rendered impossibility. Dalí painted with photographic precision specifically so the impossible would feel undeniable.

The movement's influence on contemporary design is massive and often unacknowledged. Every floating product shot, every dreamscape hero image, every interface that plays with spatial logic owes a debt to Magritte's deadpan presentation of the absurd. Surrealism taught designers that credibility comes from craft, not from depicting reality.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Dreamlike, Logic-Defying, Subconscious, Unexpected
- **Keywords:** Surrealism, dreamlike, logic-defying, subconscious, unexpected juxtaposition, Dali, Magritte, melting, floating, impossible, thought-provoking
- **Era:** 1920s Surrealist Movement
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Dream Blue** (#4A6FA5) — Accent highlight, links and focus states
- **Desert Gold** (#C9A84C) — Premium accent, decorative highlights
- **Twilight Purple** (#5B3A6B) — Accent color, emphasis elements
- **Soft Cream** (#FFF8E7) — Light surface, card backgrounds
- **Flesh Pink** (#E8B4A0) — Primary text color
- **Sky Cyan** (#87CEEB) — Secondary accent
- **Deep Olive** (#4A5A2A) — Extended palette, decorative use
- **Midnight** (#1A1A2E) — Deep contrast surface


## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Body:** Playfair Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Playfair Display — 0.875rem, weight 500, slight letter-spacing
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

Unexpected element positioning (absolute/fixed with unusual coordinates), melting/distortion effects via CSS transforms (skew, perspective), floating animation (translateY oscillation), impossible shadow directions, dreamlike blur transitions between sections, surreal scale contrasts (oversized + tiny elements)

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Unexpected element positioning
- Do Melting/distortion CSS effects
- Do Floating animations
- Do Impossible shadow directions
- Do Dreamlike blur transitions
- Do Surreal scale contrasts
- Do Logic-defying layout
- Do Thought-provoking atmosphere
- Do Responsive with maintained surrealism


## Use Case

Album covers, Conceptual editorial illustrations, Digital art, Creative campaigns

<!-- Source: https://designmd.app/library/surrealism · designmd.app -->
