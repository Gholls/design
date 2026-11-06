---
version: "alpha"
name: "TrumpRx.gov"
description: "Design system governamental federal dos EUA com tema dark autoritativo, tipografia serifada, comparativos de preços e acessibilidade WCAG 2.2 AA."
colors:
  primary: "#0a0a0a"
  secondary: "#ffffff"
  tertiary: "#f5f5dc"
  accent: "#d4af37"
  surface: "#141414"

typography:
  h1:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
  label-caps:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    textTransform: "uppercase"
    letterSpacing: "0.1em"
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  sm: 1.5rem
  md: 3rem
  lg: 6rem
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#0a0a0a"
    rounded: "{rounded.md}"
    padding: 16px 32px

gallery:
  order: 1703
  author: "designmd.app"
  source: "https://designmd.app/brands/trumprx-gov"
  tags: ["真实品牌", "tipografia serifada"]
---

## Overview

**TrumpRx.gov** é o portal oficial de transparência em preços de medicamentos do governo dos Estados Unidos, desenvolvido pelo **National Design Studio**. O site utiliza um tema dark autoritativo com acentos dourados patrióticos, tipografia serifada e visualizações de dados comparativos.

### Características Principais

| Característica | Descrição |
|----------------|----------|
| Dark Theme | Background near-black (#0a0a0a) para autoridade e foco |
| Gold Accents | Dourado patriótico (#d4af37) para CTAs e destaques |
| Price Charts | Gráficos comparativos USA vs outros países |
| Medication Cards | Cards com imagens, títulos e comparação de preços |
| Search | Busca funcional de medicamentos |
| WCAG 2.2 AA | Conformidade total de acessibilidade |

---

## Colors

### Dark Palette

| Token | Hex | Uso |
|-------|-----|-----|
| `near-black` | `#0a0a0a` | Background principal |
| `pure-white` | `#ffffff` | Texto principal, elementos de alto contraste |
| `warm-cream` | `#f5f5dc` | Acentos decorativos, highlights |
| `patriotic-gold` | `#d4af37` | CTAs, acentos premium |
| `dark-surface` | `#141414` | Cards, superfícies elevadas |
| `muted-gold` | `#b8973a` | Hover states, gold secundário |

---

## Typography

### Font Families

| Família | Uso |
|---------|-----|
| **Instrument Serif** | Headlines, estatísticas, hero text |
| **Inter** | Corpo de texto, descrições, navegação |
| **JetBrains Mono** | Labels uppercase, dados de preço, metadados |

---

## Components

### Primary Button
- Background: Gold (#d4af37)
- Text: Near-black (#0a0a0a)
- Hover: Darken + subtle glow
- Border-radius: 8px

### Medication Cards
- Background: Dark surface (#141414)
- Border: rgba(255,255,255,0.1)
- Image + title + price comparison

### Price Comparison Charts
- Bar charts USA vs international prices
- Animated on scroll
- Gold accent for US prices

### Stats Display
- Large numbers ($700M+ saved) in Instrument Serif
- Uppercase monospace labels

---

## Do's and Don'ts

### ✅ Do's

- Use dark background (#0a0a0a) consistentemente
- Gold accents apenas para CTAs e dados críticos
- Serif headlines (Instrument Serif) para autoridade
- Inter body text para legibilidade
- WCAG 2.2 AA contraste 4.5:1+
- Touch targets 44x44px mínimo
- Uppercase monospace labels para dados

### ❌ Don'ts

- Não use backgrounds claros (dark mode only)
- Não use cores oversaturadas
- Não use tipografia playful ou casual
- Não use animações distrativas
- Não ignore contraste em texto secundário

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [trumprx.gov](https://trumprx.gov) |
| Design System | National Design Studio |
| Accessibility | WCAG 2.2 Level AA |
| Method | Public site CSS extraction |
| Date | 2026-09-30 |

<!-- Source: https://designmd.app/brands/trumprx-gov · designmd.app -->
