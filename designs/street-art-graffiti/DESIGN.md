---
version: "alpha"
name: "Street Art / Graffiti"
description: "Street Art / Graffiti visual system, translated from the Claude Artisan catalog for use in digital products. Bold interlocking outlined 'bubble' or 'wildstyle' letterforms; Drip and spray-can grain texture"
colors:
  primary: "#ff3b3b"
  background: "#2b2b2b"
  surface: "#383838"
  text: "#f5f5f0"
  accent: "#ffd400"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Titan One', 'Archivo Black', 'Impact', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Archivo Black', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Archivo Black', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "8px"
  lg: "18px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "16px"

gallery:
  order: 744
  author: "designmd.app"
  source: "https://designmd.app/library/street-art-graffiti"
  tags: ["风格模板"]
---
## Overview

Street Art / Graffiti visual system, translated from the Claude Artisan catalog for use in digital products. Bold interlocking outlined 'bubble' or 'wildstyle' letterforms; Drip and spray-can grain texture

- **Category:** niche
- **Era:** 1970s–present
- **Origin:** Spray-can wall art and wildstyle lettering culture, born on New York City subway cars and handball courts in the 1970s, spreading into a global writer culture of tags, throw-ups, and burners.
- **Reference:** NYC subway car pieces of the 1970s–80s; contemporary legal wall 'burners' and yard productions.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Bold interlocking outlined 'bubble' or 'wildstyle' letterforms
- Drip and spray-can grain texture
- High-contrast fill colors with hard black keyline outlines
- Energetic, tagging-inspired composition on a concrete-grey ground

## Colors

- **bg** — #2b2b2b
- **surface** — #383838
- **surface-2** — #454545
- **text** — #f5f5f0
- **text-muted** — #b8b8b0
- **primary** — #ff3b3b
- **accent** — #ffd400
- **cyan** — #26c6da
- **keyline** — #0a0a0a

## Typography

- Display: 'Titan One', 'Archivo Black', 'Impact', sans-serif
- Body: 'Archivo Black', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold interlocking outlined 'bubble' or 'wildstyle' letterforms; Drip and spray-can grain texture; High-contrast fill colors with hard black keyline outlines; Energetic, tagging-inspired composition on a concrete-grey ground; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 8px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/street-art-graffiti · designmd.app -->
