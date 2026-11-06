---
version: "alpha"
name: "NDStudio.gov - Grayscale Minimal"
description: "Design minimalista governamental em grayscale com texturas grain, alto contraste preto/branco e hierarquia tipográfica clara."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#1A1A1A"
  neutral: "#808080"
  surface: "#F5F5F5"

typography:
  h1:
    fontFamily: "system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
  body-md:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
rounded:
  sm: 0px
  md: 0px
  lg: 0px
spacing:
  sm: 1.5rem
  md: 3rem
  lg: 6rem

gallery:
  order: 1686
  author: "designmd.app"
  source: "https://designmd.app/brands/ndstudio-gov"
  tags: ["真实品牌"]
---

## Overview

**NDStudio.gov** é o site institucional do **National Design Studio**, uma iniciativa do governo federal americano que une design e engenharia para serviços públicos digitais. O design é deliberadamente minimalista — grayscale puro, texturas grain nas ilustrações, e hierarquia criada por tipografia e espaço, não por cor ou decoração.

### Características

| Característica | Descrição |
|----------------|----------|
| Grayscale Only | Paleta 100% preto, branco e cinzas |
| Grain Textures | Ilustrações com textura noise/grain |
| High Contrast | Preto (#000000) sobre branco (#FFFFFF) |
| Sharp Edges | Border-radius 0px em todo o design |
| Generous Whitespace | Espaçamento amplo entre seções |
| System Fonts | Stack system-ui para velocidade |

---

## Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `black` | `#000000` | Texto principal, headlines, nav |
| `white` | `#FFFFFF` | Background principal, cards |
| `dark-gray` | `#1A1A1A` | Body text, headlines secundários |
| `medium-gray` | `#808080` | Texto muted, metadados, bordas |
| `light-gray` | `#F5F5F5` | Surface backgrounds, seções alternadas |

---

## Typography

### Font Stack

- **Display/Body:** System UI stack (system-ui, sans-serif)
- **Code:** JetBrains Mono — para Dev Index blog

### Scale

| Token | Tamanho |
|-------|:---:|
| Hero | clamp(2.5rem, 5vw, 4rem) |
| H1 | 2.5rem |
| H2 | 1.75rem |
| Body | 1rem / 1.6 |
| Small | 0.875rem |

---

## Layout

- Grid: CSS Grid, max-width 1200px centrado
- Padding lateral: 1.5rem
- Section gaps: clamp(4rem, 10vw, 8rem)
- Post cards: Grid 2-3 colunas
- Mobile collapse: Stack vertical abaixo de 768px

---

## Components

### Navigation
- Minimal horizontal (About, News, Dev Index, Join)
- Sem dropdowns
- Hover underline

### Post Cards
- Ilustração grayscale grain
- Título + data
- Border sutil 1px #E5E5E5

### Buttons
- Solid black, text white
- Sem border-radius
- Hover darken 10%

---

## Do's and Don'ts

### ✅ Do's

- Use APENAS grayscale — zero cores saturadas
- Aplique grain/noise texture em ilustrações
- Mantenha contraste mínimo 4.5:1 (WCAG 2.2 AA)
- Use whitespace generoso entre seções
- Priorize legibilidade sobre estética

### ❌ Don'ts

- Não use gradientes coloridos
- Não adicione sombras drop-shadow
- Não use border-radius arredondados
- Não sobrecarregue a navegação
- Não use animações complexas ou distrativas

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [ndstudio.gov](https://ndstudio.gov) |
| Design System | National Design Studio |
| Style | Grayscale Minimal |
| Accessibility | WCAG 2.2 Level AA |
| Method | Public site visual analysis |
| Date | 2026-09-30 |

<!-- Source: https://designmd.app/brands/ndstudio-gov · designmd.app -->
