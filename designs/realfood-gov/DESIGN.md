---
version: "alpha"
name: "RealFood.gov"
description: "Design system do RealFood.gov, portal federal de nutrição e saúde alimentar do governo dos EUA. Paleta warm beige com tipografia editorial Instrument Serif."
colors:
  primary: "#F3F0D6"
  secondary: "#1a1a1a"
  tertiary: "#e8e5d0"
  surface: "#FFFFFF"
  surfaceDark: "#2D2D2D"

typography:
  h1:
    fontFamily: "Instrument Serif"
    fontSize: "4rem"
    fontWeight: 400
  body-md:
    fontFamily: "Inter"
    fontSize: "1.125rem"
    fontWeight: 400
  label-caps:
    fontFamily: "monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  sm: 1.5rem
  md: 2.5rem
  lg: 5rem
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 16px 32px

gallery:
  order: 1700
  author: "designmd.app"
  source: "https://designmd.app/brands/realfood-gov"
  tags: ["真实品牌"]
---

## Overview

**RealFood.gov** é o portal federal de nutrição e saúde alimentar do governo dos Estados Unidos, desenvolvido pelo **National Design Studio**. O site apresenta uma estética editorial e acolhedora com paleta warm beige, tipografia serif de autoridade e scroll-based storytelling que guia o cidadão através de informações nutricionais.

### Características Principais

| Característica | Descrição |
|----------------|----------|
| Food Pyramid | Visualização interativa da pirâmide alimentar com animações |
| Stats em Serif | Números grandes (50%, 75%, 90%) em Instrument Serif para impacto |
| Seções Alternadas | Backgrounds cream/white/dark para ritmo visual |
| Fotografia | Prioridade para food photography sobre ilustrações |
| Scroll Storytelling | Narrativa progressiva durante o scroll |
| WCAG 2.2 AA | Conformidade total de acessibilidade |

### Princípios de Design

1. **Autoridade Acessível** — Serif headlines conferem credibilidade governamental sem frieza
2. **Warm e Convidativo** — Paleta beige transmite nutrição e bem-estar
3. **Clareza Informacional** — Tipografia Inter para corpo garante legibilidade
4. **Impacto Visual** — Estatísticas em números gigantes capturam atenção
5. **Inclusividade** — Design acessível para todos os cidadãos americanos

---

## Colors

A paleta do RealFood.gov é deliberadamente warm e neutra, evocando alimentos naturais e confiança institucional.

### Brand Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `warm-beige` | `#F3F0D6` | Background primário, hero sections, headers |
| `ink-black` | `#1a1a1a` | Texto principal, headlines, CTAs |
| `muted-beige` | `#e8e5d0` | Backgrounds secundários, seções alternadas |
| `pure-white` | `#FFFFFF` | Cards, superfícies, seções de contraste |
| `charcoal` | `#2D2D2D` | Seções dark, footer, variação de texto |

---

## Typography

A tipografia do RealFood.gov segue uma hierarquia editorial clássica com combinação serif/sans-serif.

### Font Families

| Família | Uso |
|---------|-----|
| **Instrument Serif** | Headlines, estatísticas, hero text (4xl–8xl) |
| **Inter** | Corpo de texto, descrições, navegação (lg–xl) |
| **Monospace** | Labels uppercase, categorias, metadados |

### Escala Tipográfica

| Token | Tamanho | Fonte | Uso |
|-------|---------|-------|-----|
| `display-hero` | 5rem–8rem | Instrument Serif | Hero headlines principais |
| `display-stat` | 4rem–6rem | Instrument Serif | Números de estatísticas (50%, 75%) |
| `heading-1` | 3rem–4rem | Instrument Serif | Títulos de seção |
| `body-large` | 1.25rem | Inter | Lead paragraphs |
| `body` | 1rem–1.125rem | Inter | Corpo padrão |
| `label` | 0.75rem | Monospace uppercase | Categorias, tags, metadados |

---

## Layout

### Grid e Containers

| Token | Valor | Uso |
|-------|-------|-----|
| `max-width` | 1280px (max-w-7xl) | Container de conteúdo principal |
| `padding-mobile` | 24px (px-6) | Padding lateral em mobile |
| `padding-desktop` | 48px+ (px-12) | Padding lateral em desktop |
| `section-padding-y` | 80px–128px (py-20 md:py-32) | Espaçamento vertical entre seções |

---

## Components

### Hero Section
- Headline serif centralizada, subtítulo Inter, CTA
- Background warm-beige ou imagem com overlay

### Stats Section
- Números gigantes (50%, 75%, 90%) em Instrument Serif
- Labels monospace uppercase
- Descrição contextual em Inter

### Content Sections
- Alternando backgrounds cream/white/dark para ritmo
- Imagens de alta qualidade (food photography)

### FAQ Accordion
- Perguntas em Instrument Serif
- Respostas em Inter
- Animação 200ms ease

---

## Do's and Don'ts

### ✅ Do's

- Use Instrument Serif para impacto em headlines e estatísticas
- Mantenha a paleta warm (#F3F0D6 e #e8e5d0 como backgrounds)
- Alterne backgrounds por seção (Cream → White → Dark)
- Use fotografia de alta qualidade (food photography real)
- Priorize acessibilidade WCAG 2.2 AA (contraste 4.5:1+)
- Labels em monospace uppercase com tracking-widest
- Números grandes em serif para estatísticas

### ❌ Don'ts

- Não use Instrument Serif para corpo de texto
- Não introduza cores saturadas (paleta intencionalmente dessaturada)
- Não use sombras pesadas (hierarquia via cor de fundo)
- Não reduza o espaçamento (design editorial e respirado)
- Não use ilustrações cartoon (tom institucional e confiável)
- Não ignore contraste em seções dark
- Não centralize parágrafos longos

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [realfood.gov](https://realfood.gov) |
| Design System | National Design Studio |
| Accessibility | WCAG 2.2 Level AA |
| Method | Public site CSS extraction |
| Date | 2026-09-30 |

<!-- Source: https://designmd.app/brands/realfood-gov · designmd.app -->
