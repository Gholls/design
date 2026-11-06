---
name: "Embraer"
description: "Brazilian aerospace manufacturer — institutional premium design system with technical/engineering DNA"
colors:
  primary: "#0E1C59"
  primary-light: "#0067B1"
  secondary: "#003366"
  accent: "#0067B1"
  surface: "#FFFFFF"
  surface-dark: "#0A0F2E"
  surface-soft: "#F5F7FA"
  on-surface: "#1A1A2E"
  on-surface-soft: "#5C6370"
  on-primary: "#FFFFFF"
  success: "#00875A"
  warning: "#E6A817"
  critical: "#D32F2F"
  informational: "#0067B1"
typography:
  headline:
    fontFamily: "EMB Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.02em"
  subheadline:
    fontFamily: "EMB Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: "1.3"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "EMB Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0em"
  caption:
    fontFamily: "EMB Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.02em"
  action:
    fontFamily: "EMB Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.25"
    letterSpacing: "0.04em"
    textTransform: "uppercase"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "8px"
  xl: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  "2xl": "64px"
  "3xl": "96px"
  "4xl": "128px"

gallery:
  order: 1672
  author: "designmd.app"
  source: "https://designmd.app/brands/embraer"
  tags: ["真实品牌"]
---

## Overview

Embraer é a terceira maior fabricante de aeronaves comerciais do mundo, fundada em 1969 em São José dos Campos, Brasil. Opera nos segmentos de Aviação Comercial, Jatos Executivos, Defesa & Segurança e Serviços & Suporte, com mais de 55 anos de expertise aeronáutica.

O Design System interno da Embraer é **closed-source** (listado como "closed" no [designsystemsbrasileiros.com](https://designsystemsbrasileiros.com/embraer/)). Esta especificação foi extraída da interface pública do site institucional embraer.com.

### Filosofia de Design

A identidade visual da Embraer reflete:
- **Precisão engenharia** — Linhas limpas, geometria rigorosa, espaçamentos meticulosos
- **Autoridade institucional** — Tons de azul profundo (navy/corporate blue) transmitem confiança e segurança aeroespacial
- **Modernidade técnica** — Tipografia geométrica sans-serif com tracking controlado
- **Respiração premium** — Uso generoso de espaço negativo, density baixa em interfaces institucionais
- **Cinemático** — Imagens full-bleed de aeronaves em ângulos dramáticos como hero content

### Atmosfera

O design da Embraer evoca o interior de uma cabine de comando: preciso, confiável, high-tech mas não frio — com a sofisticação de quem projeta máquinas que voam. Cada elemento comunica "engenharia de classe mundial".

## Colors

A paleta da Embraer é construída sobre um espectro de azuis — do navy profundo ao corporate blue — com fundos brancos/neutros e acentos mínimos.

### Primárias (Core)
| Token | Hex | Role |
|---|---|---|
| `navy` | `#0E1C59` | Azul primário do logo — backgrounds hero, headers, CTAs primários |
| `corporate-blue` | `#0067B1` | Azul institucional — links, ícones interativos, bordas ativas |
| `deep-navy` | `#003366` | Variante profunda — texto em superfícies claras, navegação |

### Neutras
| Token | Hex | Role |
|---|---|---|
| `white` | `#FFFFFF` | Background primário, texto em superfícies escuras |
| `surface-light` | `#F5F7FA` | Background alternado, seções de conteúdo |
| `gray-100` | `#E8ECF0` | Bordas, divisores, backgrounds subtle |
| `gray-300` | `#B0B8C4` | Texto terciário, placeholders |
| `gray-500` | `#5C6370` | Texto secundário, labels |
| `gray-800` | `#1A1A2E` | Texto primário em fundo claro |
| `dark-surface` | `#0A0F2E` | Backgrounds escuros premium, hero sections |

### Acentos Funcionais
| Token | Hex | Role |
|---|---|---|
| `sky-blue` | `#4DA8E8` | Links hover, elementos interativos leves |
| `success` | `#00875A` | Confirmações, status positivo |
| `warning` | `#E6A817` | Alertas, atenção |
| `critical` | `#D32F2F` | Erros, ações destrutivas |

### Gradientes
| Token | Valor | Uso |
|---|---|---|
| `hero-gradient` | `linear-gradient(135deg, #0E1C59 0%, #003366 60%, #0067B1 100%)` | Hero sections, backgrounds premium |
| `overlay-dark` | `linear-gradient(180deg, rgba(10,15,46,0.7) 0%, rgba(10,15,46,0.3) 100%)` | Overlay sobre imagens/vídeos |

## Typography

A Embraer utiliza uma fonte sans-serif proprietária (internamente referida como "EMB Sans") com fallback para Helvetica Neue/Arial. O logotipo usa uma typeface customizada similar a MicroSquare Bold Extended.

### Font Stack
```
"EMB Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
```

### Hierarquia
| Preset | Weight | Size | Line Height | Tracking | Uso |
|---|---|---|---|---|---|
| `display` | 700 | 3.5rem (56px) | 1.1 | -0.03em | Headlines de hero section |
| `headline-1` | 700 | 2.5rem (40px) | 1.15 | -0.02em | Títulos de página |
| `headline-2` | 600 | 1.75rem (28px) | 1.25 | -0.01em | Títulos de seção |
| `headline-3` | 600 | 1.25rem (20px) | 1.35 | 0 | Subtítulos, cards |
| `body-large` | 400 | 1.125rem (18px) | 1.65 | 0 | Lead paragraphs |
| `body` | 400 | 1rem (16px) | 1.6 | 0 | Texto corrido |
| `body-small` | 400 | 0.875rem (14px) | 1.5 | 0.01em | Texto secundário |
| `caption` | 500 | 0.75rem (12px) | 1.4 | 0.02em | Labels, metadados |
| `action` | 600 | 0.875rem (14px) | 1.25 | 0.04em | Botões, CTAs (uppercase) |
| `nav` | 500 | 0.9375rem (15px) | 1 | 0.02em | Itens de navegação |

### Características Tipográficas
- **Headlines**: Tracking negativo (-0.02em a -0.03em) para densidade visual premium
- **Body text**: Tracking neutro com line-height generoso (1.6) para legibilidade
- **CTAs/Actions**: Uppercase com tracking expandido (0.04em) — estilo engineering/técnico
- **Nenhum serif** em interfaces digitais — reservado para relatórios impressos

## Layout

### Grid System
| Breakpoint | Colunas | Gutter | Margem | Largura Máx. |
|---|---|---|---|---|
| Mobile (< 768px) | 4 | 16px | 16px | 100% |
| Tablet (768–1024px) | 8 | 24px | 32px | 100% |
| Desktop (1024–1440px) | 12 | 24px | 64px | 1280px |
| Wide (> 1440px) | 12 | 32px | auto | 1440px |

### Container
```css
max-width: 1440px;
margin: 0 auto;
padding: 0 64px; /* desktop */
padding: 0 16px; /* mobile */
```

### Spacing Scale
O site da Embraer usa espaçamentos generosos, típicos de design institucional premium — priorizando "respiração" sobre density.

| Token | Valor | Uso |
|---|---|---|
| `xs` | 4px | Gaps entre ícone e texto |
| `sm` | 8px | Padding interno mínimo |
| `md` | 16px | Espaço entre elementos internos |
| `lg` | 24px | Padding de cards, separação de blocos |
| `xl` | 40px | Separação entre seções internas |
| `2xl` | 64px | Gap entre seções de página |
| `3xl` | 96px | Spacing vertical hero → conteúdo |
| `4xl` | 128px | Mega-spacing em hero sections |

### Density
- **Institucional/Marketing**: Baixa density, muito whitespace, imagens full-bleed
- **Aplicações internas**: Média density (estimado), otimizada para produtividade

## Elevation & Depth

A Embraer utiliza um sistema de elevação conservador — coerente com design aeroespacial que prioriza planaridade e precisão sobre profundidade.

### Shadows
| Token | Valor | Uso |
|---|---|---|
| `elevation-1` | `0 2px 8px rgba(10, 15, 46, 0.08)` | Cards, elementos hoverable |
| `elevation-2` | `0 4px 16px rgba(10, 15, 46, 0.12)` | Dropdowns, menus, popovers |
| `elevation-3` | `0 8px 32px rgba(10, 15, 46, 0.16)` | Modais, drawers |
| `elevation-4` | `0 16px 48px rgba(10, 15, 46, 0.20)` | Overlays hero, lightboxes |

### Superfícies e Layers
| Layer | Z-Index | Descrição |
|---|---|---|
| Base | 0 | Conteúdo principal |
| Sticky | 100 | Navegação fixa, headers |
| Dropdown | 200 | Menus, subnavegação |
| Overlay | 300 | Backgrounds escurecidos |
| Modal | 400 | Modais, painéis laterais |
| Toast | 500 | Notificações |
| Tooltip | 600 | Tooltips |

### Técnicas de Profundidade
- **Vídeo background**: Hero sections com vídeos full-bleed de aeronaves
- **Overlay gradients**: Camadas semi-transparentes navy sobre imagens
- **Parallax sutil**: Movimento leve em scroll para seções institucionais
- **Glassmorphism ausente**: Design não utiliza blur/glass — mantém precisão técnica

## Shapes

### Border Radius
| Token | Valor | Uso |
|---|---|---|
| `none` | 0 | Imagens hero, containers full-bleed, dividers |
| `sm` | 2px | Inputs, elementos mínimos |
| `md` | 4px | Botões, cards padrão |
| `lg` | 8px | Cards grandes, containers |
| `xl` | 16px | Cards de destaque, media containers |
| `full` | 9999px | Pills, badges, indicadores circulares |

### Filosofia de Formas
- **Predominantemente retilíneo** — Reflete engenharia e precisão aeronáutica
- **Raios mínimos** — Border-radius nunca excede 16px em elementos retangulares
- **Linhas fortes** — Uso de bordas 1px sólidas em gray-100 para delimitação
- **Ângulos cortados** — Ocasional uso de clip-path em elementos hero (referência a fuselagem)

### Elementos Gráficos Característicos
- **Silhueta de aeronave** estilizada como marca d'água ou accent
- **Linhas diagonais** em backgrounds (referência a design aerodinâmico)
- **Grid técnico** como pattern decorativo em seções sobre engenharia

## Components

### Navegação
| Componente | Descrição | Estados |
|---|---|---|
| **Header** | Sticky, fundo transparente → navy no scroll, logo + nav + language switcher | transparent, solid, mobile-open |
| **MegaMenu** | Dropdown full-width com categorias (Commercial, Defense, Executive, Services) | open, closed |
| **Footer** | Background navy escuro, 4 colunas de links + social icons | — |
| **Breadcrumb** | Path navigation com separadores `>` | — |
| **Language Switcher** | Toggle En/Pt no header | — |

### Hero & Media
| Componente | Descrição | Estados |
|---|---|---|
| **Hero Video** | Background video full-bleed com overlay gradient + headline + CTA | playing, paused |
| **Hero Image** | Imagem full-bleed com overlay + texto sobreposto | — |
| **Carousel** | Slideshow com controles mínimos (dots/arrows) | autoplay, manual |
| **Card Image** | Card com imagem top + título + descrição + link | default, hover |

### Interativos
| Componente | Descrição | Estados |
|---|---|---|
| **Button Primary** | Background navy/blue, texto branco uppercase, tracking wide | default, hover, active, disabled |
| **Button Secondary** | Borda 1px navy, texto navy, fundo transparente | default, hover, active, disabled |
| **Button Ghost** | Sem borda/fundo, texto blue + underline on hover | default, hover |
| **Link** | Texto blue corporativo com underline hover | default, hover, visited |
| **Contact Form** | Campos com borda gray, labels acima, submit button navy | default, focus, error, success |
| **Search** | Input com ícone de busca, mínimo 4 caracteres para ativar | empty, active, results |

### Conteúdo
| Componente | Descrição | Estados |
|---|---|---|
| **Section Block** | Container de seção com padding vertical generoso (96px+) | light-bg, dark-bg |
| **Card Business** | Card de divisão/segmento com imagem, título e CTA | default, hover |
| **News Card** | Card de notícia com data, título, snippet | default, hover |
| **Stat Counter** | Número grande (bold) + label descritivo | static, animated-on-scroll |
| **Timeline** | Marcos históricos com ano + descrição | — |
| **Accordion** | FAQ/disclosure com ícone chevron | open, closed |

### Layout Patterns
| Pattern | Descrição |
|---|---|
| **Full-bleed hero** | Imagem/vídeo edge-to-edge com content overlay |
| **Alternating sections** | Fundo branco ↔ fundo light-gray para ritmo visual |
| **Card grid** | Grid 3-col (desktop) de cards para Business Units |
| **Split content** | 50/50 imagem + texto lado a lado |
| **CTA band** | Faixa full-width com background azul + texto + botão |

## Do's and Don'ts

### Do's
- ✅ Usar navy profundo (`#0E1C59`) como cor dominante em backgrounds de destaque e headers
- ✅ Manter espaçamentos generosos entre seções (mínimo 64px vertical em desktop)
- ✅ Usar imagens de alta qualidade de aeronaves como hero content — nunca stock genérico
- ✅ Aplicar overlay gradient sobre imagens para garantir legibilidade de texto
- ✅ Manter CTAs em uppercase com letter-spacing expandido (estilo técnico/engineering)
- ✅ Usar o azul corporativo (`#0067B1`) para elementos interativos e links
- ✅ Priorizar vídeo sobre imagem estática em hero sections quando possível
- ✅ Manter navegação limpa com no máximo 6 itens top-level
- ✅ Usar transições suaves (300ms ease) para hover states e interações
- ✅ Garantir contraste mínimo AA (4.5:1) em toda combinação texto/fundo

### Don'ts
- ❌ Não usar cores saturadas ou vibrantes fora da paleta azul — evitar verdes, roxos, laranja como accent
- ❌ Não usar border-radius acima de 16px — a marca é precisão, não amigável/arredondada
- ❌ Não aplicar sombras exageradas — manter elevação sutil e flat
- ❌ Não usar fontes decorativas, handwritten ou serif em interfaces digitais
- ❌ Não comprimir espaçamentos — whitespace é fundamental para a atmosfera premium
- ❌ Não usar backgrounds completamente pretos — preferir `#0A0F2E` (navy-black)
- ❌ Não usar animações excessivas ou playful — manter tom sóbrio e institucional
- ❌ Não misturar azul navy com cinza quente — paleta é 100% cool/neutral
- ❌ Não usar imagens de baixa resolução — aerospace demanda qualidade fotográfica impecável
- ❌ Não usar mais que 2 pesos tipográficos na mesma seção (400 + 600 ou 400 + 700)

---

## Attribution
- Source: https://embraer.com
- Extracted: 2026-07-05
- Method: public site CSS extraction
- Design System Status: Closed-source (listado em designsystemsbrasileiros.com como "Embraer Design System")
- Brand Colors Reference: brandcolorcode.com (#0E1C59), logotyp.us (#0067B1)
- License: Design tokens extracted from publicly visible CSS and brand references. No affiliation with Embraer S.A.

<!-- Source: https://designmd.app/brands/embraer · designmd.app -->
