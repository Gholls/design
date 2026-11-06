---
version: "alpha"
name: "Android Holo"
description: "Android Holo visual system, translated from the Claude Artisan catalog for use in digital products. Near-black backgrounds, minimal flat chrome; Single glowing cyan/holo-blue accent for all interactive highlights"
colors:
  primary: "#33b5e5"
  background: "#000000"
  surface: "#0c0f10"
  text: "#e8f7fa"
  accent: "#33b5e5"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Roboto Condensed', 'Droid Sans', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "2px"
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
  order: 137
  author: "designmd.app"
  source: "https://designmd.app/library/android-holo"
  tags: ["风格模板"]
---
## Overview

Android Holo visual system, translated from the Claude Artisan catalog for use in digital products. Near-black backgrounds, minimal flat chrome; Single glowing cyan/holo-blue accent for all interactive highlights

- **Category:** flat-platform
- **Era:** 2011–2014
- **Origin:** Google's Android 3.0 Honeycomb (2011); carried through Ice Cream Sandwich and Jelly Bean until Material Design replaced it in 2014.
- **Reference:** Android 3.0-4.4 stock UI; Google Now on Jelly Bean; Holo Light/Dark system themes.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Near-black backgrounds, minimal flat chrome
- Single glowing cyan/holo-blue accent for all interactive highlights
- Thin geometric condensed sans type, often uppercase labels
- Glow (not shadow) substitutes for elevation

## Colors

- **bg** — #000000
- **surface** — #0c0f10
- **surface-2** — #171b1c
- **text** — #e8f7fa
- **text-muted** — #8a9a9d
- **primary** — #33b5e5
- **primary-bright** — #8fdce8
- **divider** — #2a2f30
- **danger** — #ff4444

## Typography

- Display: 'Roboto Condensed', 'Droid Sans', sans-serif
- Body: 'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif
- Mono: 'Droid Sans Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Near-black backgrounds, minimal flat chrome; Single glowing cyan/holo-blue accent for all interactive highlights; Thin geometric condensed sans type, often uppercase labels; Glow (not shadow) substitutes for elevation; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 2px, 2px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/android-holo · designmd.app -->
