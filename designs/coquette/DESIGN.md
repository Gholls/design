---
version: "alpha"
name: "Coquette"
description: "Coquette landing page with soft romantic pastels and delicate feminine aesthetics. Ideal for branding de boutiques, editoriais femininos, embalagens de beleza e moda, convites. AI-ready template."
colors:
  primary: "#FFD6E0"
  secondary: "#FFF8F0"
  tertiary: "#D4A0A0"
  neutral: "#F8F0F0"
  surface: "#D8C4E8"
  accent: "#D4C090"
typography:
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cormorant Garamond
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 12px
  md: 24px
  lg: 36px
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 276
  author: "designmd.app"
  source: "https://designmd.app/library/coquette"
  tags: ["风格模板", "editoriais femininos", "convites"]
---

## Overview

Coquette landing page with soft romantic pastels and delicate feminine aesthetics. Ideal for branding de boutiques, editoriais femininos, embalagens de beleza e moda, convites. AI-ready template. Coquette didn't emerge from nowhere — it's the logical endpoint of a decade-long pendulum swing away from minimalism. After years of flat design, neutral palettes, and "clean" everything, designers (and teenagers on TikTok) collectively decided that ornament isn't crime. The 2022-2024 coquette explosion on social media repackaged Rococo excess through a digital-native lens: satin bows as UI elements, lace textures as backgrounds, blush pink as a personality trait.

What makes coquette interesting as a design movement — beyond the obvious femininity — is the tension it holds between irony and sincerity. Early adopters used it with a wink. The bow was camp. But as the aesthetic matured, something shifted. Designers started using these elements earnestly, stripping away the quotation marks. A ribbon isn't referencing femininity anymore; it IS the femininity. That earnestness is what separates coquette from previous retro revivals.

The movement also forced a reckoning with gendered design. For years, "feminine" was treated as lesser in design discourse — decorative meant unserious. Coquette flipped that hierarchy deliberately, making softness a power move rather than an apology.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Soft Pastel, Romantic, Bows, Lace, Charming
- **Keywords:** Coquette, soft pastels, romantic, delicate florals, bows, lace, charming silhouettes, Valentine, feminine, dainty
- **Era:** Romantic Feminine Aesthetic
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Blush Pink** (#FFD6E0) — Primary text color
- **Soft Cream** (#FFF8F0) — Light surface, card backgrounds
- **Dusty Rose** (#D4A0A0) — Supporting palette color
- **Pearl White** (#F8F0F0) — Light surface, card backgrounds
- **Lavender** (#D8C4E8) — Extended palette, decorative use
- **Soft Gold** (#D4C090) — Premium accent, decorative highlights
- **Baby Blue** (#B8D8E8) — Secondary accent
- **Warm Ivory** (#FFF5E6) — Secondary surface


## Typography

- **Display / Hero:** Cormorant Garamond — Weight 700, tight tracking, used for headline impact
- **Accent:** Dancing Script — Used for decorative or emphasis text
- **Body:** Cormorant Garamond — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant Garamond — 0.875rem, weight 500, slight letter-spacing
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

Delicate lace pattern borders via CSS, bow/ribbon SVG decorations, soft floral overlay patterns, gentle pink gradient backgrounds, charming hover effects (slight scale + blush glow), thin elegant borders (0.5-1px), feathered shadow edges

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (12px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (12px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Soft romantic pastel palette
- Do Delicate lace pattern borders
- Do Bow/ribbon SVG decorations
- Do Soft floral overlay patterns
- Do Thin elegant serif + script typography
- Do Gentle pink gradient backgrounds
- Do Romantic dainty atmosphere
- Do Responsive with maintained delicacy


## Use Case

Boutique branding, Feminine editorial, Beauty and fashion packaging, Invitations

<!-- Source: https://designmd.app/library/coquette · designmd.app -->
