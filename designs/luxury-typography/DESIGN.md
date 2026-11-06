---
version: "alpha"
name: "Luxury Typography"
description: "Luxury typography-focused landing page where type IS the design. Ideal for moda haute couture, embalagens premium, streetwear de luxo, capas de revistas. AI-ready template."
colors:
  primary: "#0A0A0A"
  secondary: "#FFFFFF"
  tertiary: "#D4AF37"
  neutral: "#333333"
  surface: "#E5E4E2"
  accent: "#F5E6E0"
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
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 534
  author: "designmd.app"
  source: "https://designmd.app/library/luxury-typography"
  tags: ["风格模板", "moda haute couture", "embalagens premium", "streetwear de luxo"]
---

## Overview

Luxury typography-focused landing page where type IS the design. Ideal for moda haute couture, embalagens premium, streetwear de luxo, capas de revistas. AI-ready template. Luxury typography didn't emerge from design schools — it came from engravers, punchcutters, and the private presses of aristocratic patrons. The Didones of Bodoni and Firmin Didot weren't exercises in geometry; they were status symbols cast in metal, their hairline strokes impossible to reproduce on anything less than the finest paper with the most precise presses. That extreme contrast — thick verticals dissolving into impossibly thin horizontals — was a deliberate flex of craft and capital.

Calligraphic scripts followed a parallel aristocratic lineage. Copperplate hands like Snell Roundhand descended from the writing masters of 17th-century merchant courts, where the quality of your penmanship literally determined your social standing. The pointed nib created swells and tapers that no broad-edge tool could achieve — organic, gestural, unmistakably human.

Today's luxury typographic landscape sits at a tension point. The heritage houses still lean on Didot and Garamond, but a new wave treats restraint itself as the luxury signal — think Céline's shift to a clean sans, or Bottega Veneta's typographic minimalism. The real skill is knowing which register to pull: historical opulence or contemporary austerity. Both whisper money. They just speak different dialects.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Refined, Calligraphic, Premium, Script-Based
- **Keywords:** Luxury typography, refined fonts, calligraphic scripts, elaborate ligatures, premium, haute couture, custom typefaces, elegant, fashion
- **Era:** Haute Couture & Fashion Editorial
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Jet Black** (#0A0A0A) — Dark surface, primary background
- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Champagne Gold** (#D4AF37) — Premium accent, decorative highlights
- **Charcoal** (#333333) — Dark surface, primary background
- **Platinum** (#E5E4E2) — Extended palette, decorative use
- **Blush** (#F5E6E0) — Extended palette, decorative use
- **Deep Burgundy** (#4A0020) — Extended palette, decorative use
- **Soft Ivory** (#FAF0E6) — Secondary surface


## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Accent:** Cormorant — Used for decorative or emphasis text
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

Dramatic font-size contrasts (display: 8-12vw), ultra-thin to ultra-bold weight range (100-900), letter-spacing variations (-0.05em to 0.3em), text-stroke for outline typography, subtle gold shimmer on hover, smooth scroll-triggered text reveals

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

- Do Typography dominates the design
- Do Dramatic size contrasts (display vs body)
- Do Weight range utilized (thin to bold)
- Do Gold accent color applied
- Do Text-stroke outlines on key elements
- Do Minimal imagery — type-first approach
- Do Responsive typography with clamp()


## Use Case

Haute couture fashion, Premium packaging, Luxury streetwear, Magazine covers

<!-- Source: https://designmd.app/library/luxury-typography · designmd.app -->
