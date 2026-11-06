---
version: alpha
name: "Nubank Marketing"
website: "https://nubank.com.br"
description: >-
  Superfície de marketing do Nubank tratando um único violeta profundo (#820AD1,
  wired como --colors-brand-core-60) como a única declaração cromática da página,
  sobre tinta preta pura, superfícies brancas e fotografia de clientes. Hero
  fotográfico full-bleed com headline graphikMedium 56px branca flutuando sobre
  a imagem e CTA pill violeta no canto inferior esquerdo; abaixo da dobra a página
  desce para um piso offWhite #F4F4F4 com cards, faixas fotográficas e bandas de
  segurança em abas, sem chrome decorativo algum. Geometria pill de 999px repete
  em todo elemento clicável.
colors:
  primary: "#820AD1"
  primary-hover: "#490B75"
  primary-pressed: "#290B4D"
  primary-soft: "#AA68FF"
  primary-tint: "#D2A5FF"
  primary-surface: "#EADBF1"
  ink: "#000000"
  ink-muted: "#777777"
  ink-secondary: "#414140"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F4"
  hairline: "#E4E4E4"
  hairline-strong: "#A2A2A2"
  feedback-critical: "#D01D1C"
typography:
  display-xl:
    fontFamily: "graphikMedium, Inter, arial, helvetica, sans-serif"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: "61.6px"
    letterSpacing: "-1.68px"
  display-lg:
    fontFamily: "graphikMedium, Inter, arial, helvetica, sans-serif"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "52.8px"
    letterSpacing: "-1.44px"
  display-md:
    fontFamily: "graphikMedium, Inter, arial, helvetica, sans-serif"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: "43.2px"
    letterSpacing: "-0.72px"
  heading-md:
    fontFamily: "graphikMedium, Inter, arial, helvetica, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: "28.6px"
    letterSpacing: "-0.44px"
  heading-sm:
    fontFamily: "graphikMedium, Inter, arial, helvetica, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "39.96px"
    letterSpacing: "0em"
  body-lg:
    fontFamily: "graphikRegular, Inter, arial, helvetica, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "25.92px"
    letterSpacing: "0em"
  body-md:
    fontFamily: "graphikRegular, Inter, arial, helvetica, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0em"
  label-md:
    fontFamily: "graphikMedium, Inter, arial, helvetica, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "24px"
    letterSpacing: "-0.16px"
  button-md:
    fontFamily: "graphikMedium, Inter, arial, helvetica, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "21px"
    letterSpacing: "-0.14px"
  nav-link:
    fontFamily: "graphikMedium, Inter, arial, helvetica, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0em"
  caption:
    fontFamily: "graphikRegular, Inter, arial, helvetica, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "19.92px"
    letterSpacing: "0em"
rounded:
  none: "0px"
  sm: "12px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "80px"
  5xl: "120px"
components:
  hero-section:
    backgroundColor: "transparent"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "120px 24px"
  hero-heading:
    backgroundColor: "transparent"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
  section-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
  sub-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  body-paragraph:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
  body-paragraph-muted:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "0px 24px"
    height: "48px"
    border: "0"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "0px 24px"
    height: "48px"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "0px 24px"
    height: "48px"
    borderColor: "{colors.primary}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "64px"
    borderColor: "{colors.hairline}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "8px 12px"
  segmented-toggle:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "4px 8px"
    height: "32px"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "24px"
    borderColor: "{colors.hairline}"
  card-photo:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "0"
  testimonial-card-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "32px"
  link-text:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "48px"
    borderColor: "{colors.hairline-strong}"
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "80px 24px"

gallery:
  order: 1692
  author: "designmd.app"
  source: "https://designmd.app/brands/nubank-marketing"
  tags: ["真实品牌"]
---

## Overview

O site de marketing do Nubank inverte a convenção dos neobanks. **Voltagem em reserva.** Onde Monzo envolve o hero em Hot Coral e Revolut pinta preto de marca na dobra inteira, o Nubank entrega o canvas acima da dobra a uma fotografia de cliente — uma barista num balcão de café na captura — e reserva o violeta profundo (`{colors.primary}` — #820AD1) para o pequeno pill CTA no canto inferior esquerdo. A voltagem da marca aparece 67 vezes na página capturada, mas no hero aparece só duas vezes: o fill do CTA e o logo. A fotografia faz todo o trabalho que um canvas colorido normalmente faria.

Abaixo da dobra a página desce para um piso offWhite (`{colors.surface-1}` — #F4F4F4) e o ritmo se torna editorial. Headlines de seção a 48px graphikMedium weight 500 com -1.44px de tracking; corpo em 16–18px regular 400; todo o resto flui em cards de raio 24px (`{rounded.md}`) ou 32px (`{rounded.lg}`), sem sombra. A faixa de categorias usa pills `{rounded.full}` de 999px para o toggle Pessoa Física / Pessoa Jurídica / Para Empresas e novamente para cada botão de ação. A linguagem de forma é **pill ou card** — o sistema não tem nível intermediário arredondado-mas-não-pill para elementos clicáveis.

### Características-chave

- Voltagem única em violeta profundo (`{colors.primary}` — #820AD1) reservada a CTAs e links — 67 ocorrências na página capturada, 30 como texto, 30 como borda, 7 como fundo
- Hero fotográfico first com imagem lifestyle full-bleed e display branco de 56px flutuando por cima; a cor de marca não ganha área acima da dobra além do CTA e do logo
- Tinta preta pura (`{colors.ink}` — #000000) para corpo e headlines, não um quase-preto azulado
- Graphik apenas em pesos 400–500 — nenhum nível 700+; display satura em 56px medium com -1.68px de tracking
- Geometria pill de 999px em todo CTA, aba e chip — a pill é a forma universal de ação
- Dois raios não-pill: 24px (`{rounded.md}`) para cards padrão, 32px (`{rounded.lg}`) para tiles fotográficos maiores; existe nível de 48px (`{rounded.xl}`) para blocos de depoimento escuros
- Cards de depoimento escuros invertem para fundo preto com texto branco — a única inversão do sistema, usada uma vez por página

## Colors

### Marca

- **Violet Core** (`{colors.primary}` — #820AD1): frequência 67. Texto (30), borda (30), fundo (7). A única voltagem de marca — preenche CTAs primários, marca links, preenche o logo no top-nav. Wired como `--colors-brand-core-60`, `--colors-content-link`, `--colors-surfaces-states-enabled`, `--colors-surfaces-headerLogo`. A disciplina é segurar essa cor para ações apenas
- **Violet Hover** (`{colors.primary-hover}` — #490B75): plum mais profundo para hover de links e CTAs. Wired como `--colors-content-linkHover`, `--colors-brand-core-80`
- **Violet Pressed** (`{colors.primary-pressed}` — #290B4D): violeta mais escuro, reservado ao estado pressed de botões primários
- **Violet Soft** (`{colors.primary-soft}` — #AA68FF): tom brand-core-40 declarado, sem renderização no site de marketing
- **Violet Tint** (`{colors.primary-tint}` — #D2A5FF): brand-core-30, usado como focus ring (`--colors-bordersColors-accentFocus`) e tint sutil de hover
- **Violet Surface** (`{colors.primary-surface}` — #EADBF1): lavanda mais pálida, wired como `--colors-backgroundColors-high`. Tint de superfície de baixa ênfase

### Texto

- **Ink** (`{colors.ink}` — #000000): frequência 846 — o tom dominante da página. Texto (421), borda (406). Wired como `--colors-content-primary`, `--colors-content-base`, `--colors-neutrals-100`. Contraste sem concessões: preto puro sobre offWhite, nunca um carvão suavizado
- **Ink Muted** (`{colors.ink-muted}` — #777777): cópia secundária sob headlines e rodapés de nota. Wired como `--colors-content-secondary`
- **Ink Secondary** (`{colors.ink-secondary}` — #414140): neutro profundo nos tons de overlay de dark-card

### Superfície

- **Canvas** (`{colors.canvas}` — #FFFFFF): frequência 201 — superfície padrão dentro de cards, fundo do top-nav e maioria dos fills. Wired como `--colors-neutrals-0`, `--colors-backgroundColors-default`
- **Surface-1** (`{colors.surface-1}` — #F4F4F4): o piso da página abaixo da dobra, wired como `--colors-backgroundColors-subtle`, `--colors-neutrals-5`

### Hairline

- **Hairline** (`{colors.hairline}` — #E4E4E4): tom de borda padrão — outlines de inputs, bordas de cards, réguas de footer
- **Hairline Strong** (`{colors.hairline-strong}` — #A2A2A2): frequência 184 — borda secundária em inputs e superfície de estado disabled

### Feedback

- **Feedback Critical** (`{colors.feedback-critical}` — #D01D1C): tom de erro, wired como `--colors-feedback-red-50`. Declarado para validação de formulários nas superfícies de produto; não renderizado na página de marketing capturada

## Typography

### Família

O sistema roda **Graphik** em toda superfície falada — declarado em CSS como `--font-nusans-display` (`graphikMedium`) para headings, botões e labels de ênfase, e `--font-nusans-text` (`graphikRegular`) para corpo e caption. Apenas dois pesos: 400 e 500. Fallbacks caminham por `arial, helvetica`. Não há serifa de display separada, nem nível itálico, nem variante condensada. Uma família, dois pesos, todos os trabalhos. Uma terceira família (`nubankIcons`) carrega os glifos de ícone.

> **Nota de migração:** o design system interno (NuDS) anunciou o **Nu Sans** (Blackletra, 2026) substituindo Graphik no app e Gellix na marca. As variáveis CSS já usam nomes `nusans`, mas a captura ainda renderiza Graphik — métricas compatíveis garantem transição suave. Ao reproduzir hoje, use Inter como substituto open-source com `letter-spacing: -0.03em` nos displays para aproximar a densidade ótica do Graphik.

### Hierarquia

| Token | Tamanho | Weight | Line Height | Tracking | Uso |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 500 | 61.6px | -1.68px | Hero h1 |
| `{typography.display-lg}` | 48px | 500 | 52.8px | -1.44px | Section h2 |
| `{typography.display-md}` | 36px | 500 | 43.2px | -0.72px | Sub-seção h3, títulos de product-card |
| `{typography.heading-md}` | 22px | 500 | 28.6px | -0.44px | Títulos de card |
| `{typography.heading-sm}` | 18px | 500 | 39.96px | 0 | h3 com leading estendido |
| `{typography.body-lg}` | 18px | 400 | 25.92px | 0 | Parágrafo padrão |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Corpo secundário e captions |
| `{typography.label-md}` | 16px | 500 | 24px | -0.16px | Links inline, ênfase |
| `{typography.button-md}` | 14px | 500 | 21px | -0.14px | Labels de CTA |
| `{typography.nav-link}` | 16px | 500 | 16px | 0 | Links do top-nav |
| `{typography.caption}` | 12px | 400 | 19.92px | 0 | Notas de rodapé, legal |

### Princípios

Display satura em weight 500, nunca 700. O h1 de 56px com -1.68px de tracking é o momento tipográfico mais alto do sistema — confiança por letter-spacing negativo, não por peso. Onde neobanks LATAM concorrentes rodam display em 700+, a contenção em 500 é o único movimento tipográfico que separa o Nubank dos pares de categoria. A escada 56 → 48 → 36 → 22px é íngreme e justa — hierarquia por saltos de tamanho, não de peso.

## Layout

### Sistema de Espaçamento

- **Unidade base:** 8px (com 4px como módulo fino)
- **Tokens:** `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 48px · `{spacing.3xl}` 64px · `{spacing.4xl}` 80px · `{spacing.5xl}` 120px
- **Padding vertical de seção:** `{spacing.4xl}` (80px) entre bandas principais; `{spacing.5xl}` (120px) no bloco hero (`--space-heroDesktop`)
- **Padding interno de card:** `{spacing.lg}` (24px); tiles fotográficos vão a `{spacing.xl}` (32px)
- **Margem desktop de card:** 64px (`--space-cardMarginDesktop`)

### Grid e Container

- **Largura máxima de conteúdo:** ~1200px na maioria das seções; ~1080px nos headlines de display
- **Hero:** fotografia lifestyle full-bleed com headline e CTA empilhados na zona segura inferior-esquerda
- **Grid de tiles fotográficos:** 3 colunas de cards com raio de 32px, fotografia do cliente no topo e legenda editorial abaixo
- **Fileira de product-cards:** carrossel segmentado dos quatro cartões (Nubank, Ultravioleta, Mais, PJ) em tiles de raio 24px
- **Banda de segurança em abas:** controle segmentado de quatro abas próximo ao rodapé trocando o painel de conteúdo no lugar

### Ritmo

A página alterna **bandas fotográficas e bandas editoriais**. O hero é fotográfico; a primeira fileira de cards é editorial (tiles brancos com links violeta); a banda seguinte retorna à fotografia (grid 3-up de histórias de clientes); o bloco de depoimento escuro inverte o contraste; o painel de segurança em abas volta ao branco. Sem gradiente atmosférico entre bandas — toda seção termina flush no canvas ou no surface-1.

## Elevation & Depth

O sistema tem essencialmente **nenhum nível de sombra**. A página capturada renderiza zero sombras em todos os 1.256 elementos escaneados. Hierarquia vem de cards `{colors.canvas}` sobre o piso `{colors.surface-1}`, ou de cards offWhite sobre fotografia.

- **Flat (sem sombra):** 100% das superfícies — hero, fileiras de cards, depoimento escuro, footer
- **Contraste de superfície:** cards brancos sobre piso offWhite; cards offWhite sobre fundo branco dentro de painéis segmentados
- **Elevação fotográfica:** o card de depoimento escuro é o único elemento estruturalmente elevado — elevado por inversão de cor, não por sombra

## Shapes

A escala de raio é **pill ou card** — sem nível intermediário para elementos clicáveis:

- `{rounded.none}` 0px — só na fotografia do hero e divisores de seção
- `{rounded.sm}` 12px — inputs e superfícies sutis pequenas (`--radii-small`)
- `{rounded.md}` 24px — raio padrão de card na maioria das fileiras de produto
- `{rounded.lg}` 32px — tiles fotográficos maiores
- `{rounded.xl}` 48px — cards de depoimento escuros
- `{rounded.full}` 999px — a forma universal de ação clicável: todo CTA, aba e chip

Não existe nível de 8px ou 16px. A menor superfície de card significativa começa em 12px (só inputs); todo elemento interativo salta direto para a pill de 999px. Uma CTA com raio de 16px parece emprestada de outro sistema (Stripe, Linear) e enfraquece o sinal de pill-como-ação.

## Components

**`hero-section`** — Canvas fotográfico full-bleed, padding 120×24. A fotografia lifestyle carrega a banda; headline e CTA flutuam na zona segura inferior-esquerda.

**`hero-heading`** — Texto branco sobre o hero fotográfico, graphikMedium 56px/500 com -1.68px de tracking.

**`section-heading`** — Texto preto a `{typography.display-lg}` (48px/500).

**`sub-heading`** — Texto preto a `{typography.display-md}` (36px/500) para subtítulos de fileiras de cards.

**`body-paragraph`** — Texto preto padrão em `{typography.body-lg}` (18px/400). **`body-paragraph-muted`** — variante `{colors.ink-muted}` para legendas secundárias.

**`button-primary`** — A CTA assinatura. Fill violeta, texto branco, pill 999px, 0×24 de padding, altura 48px, graphikMedium 14px/500. "Quero ser Nubank" é a instância canônica (~167px de largura). Hover vai a `{colors.primary-hover}` (#490B75); pressed a `{colors.primary-pressed}` (#290B4D).

**`button-secondary`** — Fill transparente com texto violeta e borda de 1px violeta. Pill de 48px. Para ações secundárias "Saiba mais".

**`top-nav`** — Superfície branca, 64px de altura, padding 12×24, régua inferior de 1px `{colors.hairline}`. Wordmark violeta à esquerda, links de produto ao centro, toggle segmentado PF/PJ à direita.

**`segmented-toggle`** — Trilho offWhite, pill totalmente arredondada, 32px de altura, padding 4×8.

**`card`** — Superfície branca, raio 24px, padding interno 24px, borda de 1px `{colors.hairline}`. **`card-photo`** — Superfície offWhite, raio 32px, padding zero (a fotografia preenche edge-to-edge).

**`testimonial-card-dark`** — Fundo preto, texto branco, raio 48px, padding 32px. A única inversão do sistema.

**`link-text`** — Texto inline violeta em `{typography.label-md}`. Hover muda para `{colors.primary-hover}`.

**`text-input`** — Fundo branco, texto preto, borda 1px `{colors.hairline-strong}`, raio 12px, altura 48px. Focus ring usa `{colors.primary-tint}` (#D2A5FF).

**`footer`** — Fundo offWhite, texto preto, padding 80×24. Sem contraste de superfície contra o piso — o footer continua o canvas offWhite.

## Do's and Don'ts

**Do** tratar o violeta `{colors.primary}` como cor de ação apenas. O sistema o guarda para pills de CTA, texto de link, o logo e um tint de focus — e nada mais. Preencher superfícies de card com #820AD1 dilui o único sinal cromático da marca.

**Do** usar fotografia de cliente como canvas do hero. A página foi desenhada assumindo que acima da dobra há um momento humano, não um bloco colorido. Sem fotografia quente, o hero colapsa numa parede branca com uma pill violeta solitária.

**Do** manter o peso de display em 500 no máximo. Subir para 700 faz o Nubank ler como Inter ou Banco Pan e apaga a contenção editorial.

**Do** usar pills `{rounded.full}` de 999px em toda ação clicável.

**Don't** usar `{colors.ink}` (#000000) como superfície. Só o card de depoimento inverte para fundo preto. Fundos pretos em outro lugar leem como falha do sistema.

**Don't** introduzir um quase-preto levemente azulado (grafite, slate suave). A tinta é preta pura de propósito.

**Don't** adicionar nível de raio intermediário entre 12px e a pill de 999px.

**Don't** renderizar o wordmark inline no meio de parágrafos. O wordmark só aparece em violeta, em tamanho cheio, no top-nav e footer.

## Known Gaps

- **Estados hover/focus:** documentados para `button-primary` e variante de link apenas. Matriz completa (focus rings, disabled) parcialmente capturada
- **Estados de formulário:** validação/erro vive no editor de produto (app), fora do site de marketing
- **Dark mode:** a superfície capturada é light-only. Existe dark variant no app Nubank, não representada aqui
- **Paletas de sub-marca:** o CSS expõe rampas `--colors-brand-pj-*` e `--colors-brand-ultravioleta-*` separadas, não usadas no chrome de marketing capturado
- **Motion:** os carrosséis animam no toque, mas a spec captura valores de estado final apenas
- **Superfícies de produto:** este arquivo documenta o site de marketing apenas. O app Nubank e o dashboard PJ têm sistemas de tokens mais ricos — ver a entrada NuDS deste catálogo
- **Iconografia:** fonte customizada `nubankIcons` presente, mas glifos não expostos como SVG na superfície capturada

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [nubank.com.br](https://nubank.com.br) |
| Extração CSS | [shadcn.io/design/nubank](https://www.shadcn.io/design/nubank) — captura por Dov Azencot ([@dovazencot](https://x.com/dovazencot)), 2026-05-18 |
| Especificação | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) |
| Method | Public site CSS extraction |
| Date | 2026-08-21 |

<!-- Source: https://designmd.app/brands/nubank-marketing · designmd.app -->
