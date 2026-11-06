---
name: Mercado Livre
description: >
  Maior plataforma de e-commerce e marketplace da América Latina. Interface
  focada em alta densidade de informação, busca proeminente, cards de produto
  compactos com tags de benefício (frete grátis, desconto, Full), e um sistema
  de cores centrado no amarelo vibrante da marca com azul de ação. O design
  system interno é chamado Andes (AndesUI) — disponível como biblioteca iOS
  (CocoaPods) e Android, com componentes padronizados para todo o ecossistema
  Mercado Libre (Mercado Livre, Mercado Pago, Mercado Envios, Mercado Crédito).
colors:
  brand:
    yellow: "#FFE600"
    blue: "#3483FA"
    darkNavy: "#2D3277"
    white: "#FFFFFF"
  action:
    primaryAction: "#3483FA"
    primaryActionHover: "#2968C8"
    primaryActionActive: "#1F4E96"
    secondaryAction: "#FFFFFF"
    secondaryActionBorder: "#3483FA"
  surface:
    background: "#EEEEEE"
    surfaceWhite: "#FFFFFF"
    surfaceHighlight: "#FFF9CC"
    header: "#FFE600"
    navBar: "#FFFFFF"
  semantic:
    success: "#00A650"
    successLight: "#EAF8E6"
    warning: "#FFF3CD"
    warningText: "#A6600A"
    error: "#F23D4F"
    errorLight: "#FCE4E8"
    info: "#3483FA"
    infoLight: "#E3F0FF"
  text:
    primary: "#333333"
    secondary: "#666666"
    muted: "#999999"
    disabled: "#CCCCCC"
    inverse: "#FFFFFF"
    link: "#3483FA"
    price: "#333333"
    priceOld: "#999999"
    discount: "#00A650"
    freeShipping: "#00A650"
  neutral:
    gray100: "#F5F5F5"
    gray200: "#EEEEEE"
    gray300: "#E0E0E0"
    gray400: "#BDBDBD"
    gray500: "#999999"
    gray600: "#666666"
    gray700: "#333333"
    gray900: "#000000"
typography:
  families:
    - "Proxima Nova"
    - -apple-system
    - BlinkMacSystemFont
    - Roboto
    - Arial
    - sans-serif
  weights:
    light: 300
    regular: 400
    semibold: 600
    bold: 700
  sizes:
    caption: 12
    body2: 13
    body1: 14
    subtitle2: 16
    subtitle1: 18
    heading4: 20
    heading3: 24
    heading2: 28
    heading1: 32
    display: 40
  lineHeights:
    tight: 1.15
    normal: 1.35
    relaxed: 1.5
    loose: 1.75
rounded:
  none: "0px"
  circle: "9999px"
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  xxxl: 64

gallery:
  order: 1687
  author: "designmd.app"
  source: "https://designmd.app/brands/mercado-livre"
  tags: ["真实品牌"]
---

## Overview

**Mercado Livre** (Mercado Libre nos países hispânicos) é a maior plataforma de e-commerce da América Latina, operando como marketplace com ecossistema integrado de pagamentos (Mercado Pago), logística (Mercado Envios), crédito (Mercado Crédito) e streaming (Mercado Play).

A interface do site prioriza:

| Princípio | Implementação |
|-----------|--------------|
| Busca como hub central | Search bar proeminente no header amarelo, com autocomplete e suggestions |
| Alta densidade informacional | Grid de product cards compactos com preço, frete, tags e reviews |
| Confiança e urgência | Tags verdes de "Frete grátis", badges de "Full", selos de desconto |
| Navegação por facets | Sidebar de filtros com categorias, faixa de preço, condição, localização |
| Identidade amarela vibrante | Header amarelo (#FFE600) como assinatura visual absoluta da marca |

### Design System Interno: Andes (AndesUI)

O Mercado Libre mantém o design system **Andes** como pacote open-source para iOS (CocoaPods: `AndesUI` v3.169+) e Android. O sistema é usado internamente em todos os produtos do ecossistema e mantido pela equipe de "Mobile Arquitectura" do Mercado Libre.

### Identidade Visual

O logo do Mercado Livre é composto por um emblema de handshake (representando acordo/confiança) em oval amarelo com contorno azul-marinho, acompanhado pelo wordmark "mercado livre" em fonte geométrica arredondada, sans-serif, em azul-marinho (#2D3277). As cores de marca core são o amarelo (#FFE600) e o azul-marinho (#2D3277), com o azul de ação (#3483FA) sendo a cor dominante na interface digital.

---

## Colors

### Brand Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `brand.yellow` | `#FFE600` | Header principal, background de marca, logo, selo Meli+ |
| `brand.blue` | `#3483FA` | Links, botões primários, ações, ícones de interação |
| `brand.darkNavy` | `#2D3277` | Logo wordmark, textos sobre amarelo no header |
| `brand.white` | `#FFFFFF` | Superfícies, cards, backgrounds de conteúdo |

### Action Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `action.primary` | `#3483FA` | Botões CTA (Comprar, Adicionar ao carrinho), links |
| `action.primaryHover` | `#2968C8` | Hover sobre CTAs primários |
| `action.primaryActive` | `#1F4E96` | Estado pressed/active de CTAs |
| `action.secondary` | `#FFFFFF` | Botões secundários (outlined) |

### Semantic / Feedback Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `success` | `#00A650` | Frete grátis, descontos, estoque disponível, preço à vista |
| `successLight` | `#EAF8E6` | Background de badges de sucesso |
| `error` | `#F23D4F` | Erros de formulário, alertas críticos, badges negativos |
| `warning` | `#FFF3CD` | Background de alertas informativos |
| `info` | `#3483FA` | Informações neutras, links informativos |

### Surface Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `background` | `#EEEEEE` | Background geral da página (gray) |
| `surface` | `#FFFFFF` | Cards de produto, painéis, modais |
| `surfaceHighlight` | `#FFF9CC` | Background de promoções/banners em destaque |
| `header` | `#FFE600` | Header fixo com barra de busca |

### Text Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `text.primary` | `#333333` | Títulos de produto, preços, corpo principal |
| `text.secondary` | `#666666` | Descrições, informações complementares |
| `text.muted` | `#999999` | Preço anterior (riscado), meta-info, timestamps |
| `text.link` | `#3483FA` | Links clicáveis, breadcrumbs ativos |
| `text.discount` | `#00A650` | Porcentagem de desconto, "Frete grátis" |

---

## Typography

### Font Family

- **Proxima Nova** — Fonte principal do Mercado Livre. Sans-serif geométrica com boa legibilidade, projetada por Mark Simonson. Usada em todos os pesos para títulos, corpo e interface.
- **System font stack** — Fallback: `-apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif`

### Font Weights

| Weight | Valor | Uso |
|--------|:-----:|-----|
| Light | 300 | Textos decorativos, subtítulos leves em destaque |
| Regular | 400 | Corpo de texto, descrições de produto, labels |
| Semibold | 600 | Títulos de seção, nomes de produto, preços à vista |
| Bold | 700 | Preços principais, CTAs de texto, headings de página |

### Escala Tipográfica

| Token | Tamanho (px) | Uso |
|-------|:---:|---|
| `caption` | 12 | Meta info, timestamps, labels mínimos |
| `body2` | 13 | Textos secundários, atributos de produto |
| `body1` | 14 | Corpo padrão, descrições, reviews |
| `subtitle2` | 16 | Subtítulos, categorias, filtros ativos |
| `subtitle1` | 18 | Títulos de seção, nome do produto no detalhe |
| `heading4` | 20 | Subtítulos de seção na home |
| `heading3` | 24 | Títulos de categoria, headings de resultado |
| `heading2` | 28 | Títulos de página |
| `heading1` | 32 | Hero titles, promoções |
| `display` | 40 | Títulos de campanha, banners hero |

### Price Typography

Os preços seguem uma hierarquia tipográfica específica:

| Elemento | Tamanho | Weight | Cor |
|----------|:---:|:---:|-----|
| Preço principal | 24–36px | 400 (light visualmente) | `#333333` |
| Preço anterior | 14px | 400 | `#999999` + text-decoration: line-through |
| Desconto % | 14px | 600 | `#00A650` |
| Preço em parcelas | 14–16px | 400 | `#333333` |
| "sem juros" | 14px | 600 | `#00A650` |

---

## Layout

### Spacing Scale

Baseado em múltiplos de 4px:

| Token | Valor | Uso |
|-------|:---:|---|
| `xxs` | 4px | Gap mínimo entre ícone e texto, padding interno de badges |
| `xs` | 8px | Padding de tags, gap entre elementos inline |
| `sm` | 12px | Padding interno de cards compactos |
| `md` | 16px | Padding padrão de cards, margin entre elementos |
| `lg` | 24px | Separação entre blocos de conteúdo |
| `xl` | 32px | Margin entre seções |
| `xxl` | 48px | Separação entre grandes áreas |
| `xxxl` | 64px | Margin de seção hero |

### Grid System

| Contexto | Estrutura |
|----------|-----------|
| **Search results** | Grid de 4 colunas de product cards (desktop), sidebar de filtros à esquerda (230–260px) |
| **Home** | Full-width banners carousel + grid de ofertas em 5–6 colunas |
| **Product Detail** | Layout 2 colunas: galeria (esquerda 60%) + info de compra (direita 40%) |
| **Mobile** | Single column com cards horizontais (thumb esquerda + info direita) |

### Container Widths

| Breakpoint | Max-width |
|------------|:---------:|
| Mobile | 100% (sem container) |
| Tablet | 768px |
| Desktop | 1200px |
| Wide | 1400px |

---

## Elevation & Depth

O Mercado Livre utiliza um sistema de elevação sutil, preferindo separação por background color (cinza vs. branco) em vez de sombras pesadas:

| Nível | Box-shadow | Uso |
|-------|-----------|-----|
| `flat` | none | Elementos dentro de cards, inline |
| `low` | `0 1px 2px 0 rgba(0,0,0,0.1)` | Cards de produto na listagem |
| `medium` | `0 2px 6px 0 rgba(0,0,0,0.12)` | Cards em hover, dropdowns de filtro |
| `high` | `0 4px 16px 0 rgba(0,0,0,0.16)` | Modais, mega-menus |
| `highest` | `0 8px 24px 0 rgba(0,0,0,0.2)` | Overlays, lightbox de imagem |

### Bordas como Elevação

Em muitos componentes, o Mercado Livre usa bordas sutis em vez de sombras:

| Elemento | Estilo |
|----------|--------|
| Product card | `1px solid #E0E0E0` (repouso) → shadow em hover |
| Input fields | `1px solid #BDBDBD` (default) → `2px solid #3483FA` (focus) |
| Dividers | `1px solid #EEEEEE` |
| Selected filters | `1px solid #3483FA` |

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Imagens full-bleed, dividers |
| `small` | 4px | Inputs, selects, cards de produto, botões secondary |
| `medium` | 6px | Cards destacados, modais, containers |
| `large` | 8px | Banners, cards de promoção, containers de seção |
| `pill` | 999px | Tags de benefício, chips de filtro, badges |
| `circle` | 50% | Avatares de vendedor, ícones circulares |

### Observação sobre Formas

O Mercado Livre é conservador em border-radius — a maioria dos componentes usa `4px` (small), mantendo uma estética funcional e profissional de marketplace. Tags e badges usam `pill` para destaque visual. Não há uso significativo de cantos muito arredondados (16px+) na interface principal.

---

## Components

### Header & Navigation

- **Header** — Faixa amarela (#FFE600) com logo, search bar centralizada, ícones de cart/notificações/user
- **SearchBar** — Input branco com border-radius 999px (pill), placeholder "Buscar produtos, marcas e muito mais...", ícone de lupa à direita com background azul (#3483FA)
- **NavCategories** — Barra horizontal abaixo do header com links de categorias (Ofertas, Cupons, Supermercado, Moda, etc.)
- **Breadcrumb** — Links de navegação hierárquica em azul (#3483FA), separados por ">"
- **MegaMenu** — Dropdown de categorias com subcategorias em 3 níveis

### Product Card

- **ProductCardGrid** — Card vertical: imagem (aspect-ratio 1:1), título (2 linhas max, truncate), preço, tags de benefício, rating stars
- **ProductCardList** — Card horizontal: thumbnail (120×120), título, preço, shipping info, seller info
- **ProductImage** — Container de imagem com hover zoom, galeria no detalhe com thumbnails laterais
- **PriceBlock** — Preço original riscado + preço atual grande + % desconto verde + parcelas
- **FreeShippingBadge** — Tag verde (#00A650) com ícone de caminhão + "Frete grátis"
- **FullBadge** — Tag indicando envio por fulfillment Mercado Livre (Mercado Envios Full)
- **RatingStars** — 5 estrelas (preenchidas em azul #3483FA) + contagem de reviews

### Tags & Badges

- **DiscountTag** — Badge com "XX% OFF" em verde (#00A650) sobre background claro
- **ShippingTag** — "Frete grátis" ou "Chega amanhã" em verde
- **ConditionBadge** — "Novo" ou "Usado" em texto muted
- **SellerTag** — "Vendido por [nome]" com link
- **MeliPlusTag** — Badge de assinante Meli+ (Mercado Livre Plus)
- **CouponTag** — "Cupom disponível" em destaque

### Filters & Facets

- **FilterSidebar** — Painel lateral com categorias hierárquicas, checkboxes, range sliders
- **FilterChip** — Pill tag removível com "×" para filtros ativos
- **PriceRange** — Input duplo (min/max) ou range slider
- **CategoryTree** — Lista hierárquica com contagem de resultados entre parênteses

### Buttons

| Variante | Estilo |
|----------|--------|
| Primary (Comprar) | Background `#3483FA`, texto branco, border-radius 4px, font-weight 600 |
| Secondary (Adicionar ao carrinho) | Background `#FFFFFF`, borda `#3483FA`, texto `#3483FA` |
| Light (links de ação) | Texto `#3483FA`, sem background/borda |
| Disabled | Background `#CCCCCC`, texto `#FFFFFF` |

### Forms

- **TextField** — Border `1px solid #BDBDBD`, border-radius 4px, focus ring `#3483FA`
- **Select** — Estilo nativo estilizado com chevron
- **Checkbox** — Custom com check azul (#3483FA) quando ativo
- **QuantitySelector** — Botões -/+ com input numérico ao centro

### Carousel & Banners

- **HeroBanner** — Carousel full-width na home com dots de paginação e setas laterais
- **ProductCarousel** — Row horizontal de cards com scroll e setas de navegação
- **DealBanner** — Cards de promoção com countdown timer e CTA

### Feedback

- **Alert** — Box com borda lateral colorida (info azul, success verde, error vermelho)
- **Toast** — Notificação temporária no topo ou bottom
- **EmptyState** — Ilustração + mensagem quando não há resultados
- **LoadingSkeleton** — Placeholder pulsante em cinza (#EEEEEE → #F5F5F5) durante carregamento

---

## Do's and Don'ts

### ✅ Do's

- **Use o amarelo (#FFE600) apenas no header e elementos de marca** — Nunca como background de cards ou texto. É exclusivo da identidade e do header.
- **Use o azul (#3483FA) como cor de ação universal** — Links, botões primários, estados ativos de filtro, ícones interativos.
- **Use o verde (#00A650) para benefícios ao comprador** — Frete grátis, descontos, preço à vista, parcelas sem juros. O verde é a cor de "vantagem".
- **Mantenha o background da página em cinza (#EEEEEE)** — Cards brancos sobre fundo cinza cria a separação visual sem necessidade de sombras pesadas.
- **Priorize densidade informacional** — Mostre preço, frete, parcelas, desconto e rating no card. O comprador decide sem clicar.
- **Use Proxima Nova em todos os pesos** — Não misture com outras fontes. O sistema é single-family.
- **Mantenha border-radius conservador (4px)** — O Mercado Livre é funcional, não decorativo. Cantos levemente arredondados.
- **Use tags pill para benefícios** — Frete grátis, Full, desconto — sempre em pill shape com cor semântica.
- **Siga a hierarquia de preço** — Preço grande (24–36px, light) > preço antigo riscado (14px, muted) > desconto verde (14px, semibold).

### ❌ Don'ts

- **Não use amarelo (#FFE600) como cor de botão ou CTA** — O amarelo é brand identity, não ação. CTAs são sempre azul (#3483FA).
- **Não use sombras pesadas** — O sistema prefere bordas sutis e separação por cor de fundo. Sombras são reservadas para hover e overlays.
- **Não arredonde cards em mais de 8px** — Border-radius excessivo conflita com a estética funcional de marketplace.
- **Não use verde para ações/botões** — Verde é exclusivamente semântico (sucesso, benefício). Ações são azul.
- **Não esconda informação de preço** — O preço principal, desconto e condições de parcelamento devem ser sempre visíveis no card.
- **Não use ícones decorativos sem função** — Cada ícone deve ter utilidade clara (busca, carrinho, favorito, compartilhar).
- **Não sobrecarregue o header** — O header amarelo contém apenas: logo + search bar + nav icons. Nada mais.
- **Não misture tipografia** — Proxima Nova apenas. Sem serif, sem monospace decorativa.
- **Não use cores de marca do Mercado Pago (azul claro/cyan) na interface do Mercado Livre** — São produtos distintos com identidades separadas, apesar do ecossistema compartilhado.

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [mercadolivre.com.br](https://www.mercadolivre.com.br) |
| Design System | Andes (AndesUI) — [CocoaPods](https://cocoapods.org/pods/AndesUI) / [GitHub](https://github.com/mercadolibre/fury_andesui-ios) |
| Brand Colors Reference | [pickcoloronline.com/brands/mercadolibre](https://pickcoloronline.com/brands/mercadolibre/) / [htmlcolors.com/brand-color/mercadolibre-com](https://htmlcolors.com/brand-color/mercadolibre-com) |
| Method | Public site CSS extraction + brand reference analysis |
| License | Proprietary (Mercado Libre, Inc.) |
| Date | 2026-07-05 |

<!-- Source: https://designmd.app/brands/mercado-livre · designmd.app -->
