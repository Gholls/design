---
version: "alpha"
name: "National Design Studio (NDS Core)"
description: "Design system base do National Design Studio, iniciativa de design do governo federal dos EUA. Define os tokens fundamentais usados nos sites governamentais."
colors:
  light:
    background: "#F3F0D6"
    foreground: "#1a1a1a"
    muted: "#e8e5d0"
    surface: "#FFFFFF"
  dark:
    background: "#0a0a0a"
    foreground: "#ffffff"
    accent: "#f5f5dc"
    surface: "#141414"

typography:
  headline:
    fontFamily: "Instrument Serif"
    fontSize: "4rem"
    fontWeight: 400
  body:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: 400
  label:
    fontFamily: "monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    textTransform: "uppercase"
    letterSpacing: "0.1em"
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  section: "py-20 md:py-32"
  container: "max-w-7xl"
  padding: "px-6 md:px-12"

gallery:
  order: 1690
  author: "designmd.app"
  source: "https://designmd.app/brands/nds-core"
  tags: ["真实品牌"]
---

## Overview

**National Design Studio (NDS)** é uma iniciativa de design do governo federal dos Estados Unidos que desenvolve sistemas de design para portais governamentais. O NDS Core define os tokens fundamentais compartilhados entre os sites da iniciativa: RealFood.gov, TrumpRx.gov, AmericaByDesign.gov e NDStudio.gov.

### Características Fundamentais

| Característica | Descrição |
|----------------|----------|
| Tipografia Dual | Instrument Serif (headlines 4xl-8xl) + Inter (body lg-xl) |
| Temas | Light (warm beige #F3F0D6) e Dark (near-black #0a0a0a) |
| Heroes | Full-screen com overlay bg-black/30 |
| Stats Pattern | Números gigantes em serif + labels monospace uppercase |
| Layout | max-w-7xl, py-20 md:py-32 entre seções |
| Acessibilidade | WCAG 2.2 Level AA obrigatório |

### Princípios de Design

1. **Autoridade Acessível** — Serif headlines conferem credibilidade institucional sem frieza burocrática
2. **Clareza Informacional** — Hierarquia tipográfica clara: serif para impacto, sans para leitura
3. **Inclusividade** — Contraste mínimo 4.5:1, focus states visíveis, alt text obrigatório
4. **Espaçamento Generoso** — Seções bem separadas (py-20+) para leitura confortável
5. **Fotografia sobre Ilustração** — Imagens reais transmitem autenticidade governamental

---

## Colors

### Light Theme (RealFood.gov style)

| Token | Hex | Uso |
|-------|-----|-----|
| `background` | `#F3F0D6` | Warm beige — background principal |
| `foreground` | `#1a1a1a` | Ink black — texto, CTAs |
| `muted` | `#e8e5d0` | Beige muted — seções alternadas |
| `surface` | `#FFFFFF` | Branco — cards, contraste |

### Dark Theme (TrumpRx.gov style)

| Token | Hex | Uso |
|-------|-----|-----|
| `background` | `#0a0a0a` | Near-black — background principal |
| `foreground` | `#ffffff` | Branco — texto principal |
| `accent` | `#f5f5dc` | Cream — acentos, destaques |
| `surface` | `#141414` | Dark surface — cards elevados |

---

## Typography

### Font Stack

| Família | Fallback | Uso |
|---------|----------|-----|
| **Instrument Serif** | Georgia, serif | Headlines, estatísticas, hero text |
| **Inter** | system-ui, sans-serif | Corpo, navegação, UI |
| **Monospace** | Consolas, Monaco | Labels uppercase, metadados |

### Escala Tipográfica

| Token | Tamanho | Fonte | Uso |
|-------|---------|-------|-----|
| `display-hero` | 5rem–8rem | Instrument Serif | Hero headlines |
| `display-stat` | 4rem–6rem | Instrument Serif | Números estatísticos |
| `heading-1` | 3rem–4rem | Instrument Serif | Títulos de seção |
| `body-large` | 1.25rem | Inter | Lead paragraphs |
| `body` | 1rem–1.125rem | Inter | Corpo padrão |
| `label` | 0.75rem | Monospace uppercase | Categorias, tags |

---

## Layout

### Grid e Containers

```css
.container {
  max-width: 1280px; /* max-w-7xl */
  padding-left: 1.5rem; /* px-6 */
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 3rem; /* px-12 */
    padding-right: 3rem;
  }
}

.section {
  padding-top: 5rem; /* py-20 */
  padding-bottom: 5rem;
}

@media (min-width: 768px) {
  .section {
    padding-top: 8rem; /* py-32 */
    padding-bottom: 8rem;
  }
}
```

### Hero Pattern

```css
.hero {
  min-height: 100vh; /* ou 100dvh */
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.3); /* bg-black/30 */
}
```

---

## Components

### Stats Display

Números gigantes em Instrument Serif com labels monospace:

```html
<div class="stat">
  <span class="stat-number">75%</span>
  <span class="stat-label">DOS AMERICANOS</span>
</div>
```

### Primary Button

| Propriedade | Light Theme | Dark Theme |
|-------------|-------------|------------|
| Background | `#1a1a1a` | `#ffffff` |
| Text | `#F3F0D6` | `#0a0a0a` |
| Border-radius | 4px | 4px |
| Padding | 16px 32px | 16px 32px |

### Navigation

- Header transparente sobre hero
- Sticky no scroll (opcional)
- Links sem underline, hover com opacity/underline

---

## Do's and Don'ts

### ✅ Do's

- Use Instrument Serif para headlines e números de destaque
- Mantenha contraste mínimo 4.5:1 (WCAG 2.2 AA)
- Use espaçamento generoso entre seções (py-20+)
- Alterne backgrounds em seções longas (cream/white/dark)
- Use fotografia de alta qualidade sobre ilustrações
- Labels em monospace uppercase com tracking-widest

### ❌ Don'ts

- Não use Instrument Serif para corpo de texto
- Não introduza cores saturadas fora da paleta
- Não use sombras pesadas (a hierarquia vem da cor)
- Não reduza o espaçamento entre seções
- Não centralize parágrafos longos
- Não use border-radius acima de 16px

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [ndstudio.gov](https://ndstudio.gov) |
| Design System | National Design Studio |
| Accessibility | WCAG 2.2 Level AA |
| Method | Public site CSS extraction |
| Reference | [github.com/naga-k/nds-ui-skill](https://github.com/naga-k/nds-ui-skill) |
| Date | 2026-09-30 |

<!-- Source: https://designmd.app/brands/nds-core · designmd.app -->
