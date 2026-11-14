---
version: alpha
name: Enterprise Admin
description: 面向 B 端 SaaS 管理后台的标准规范：克制的云蓝主色、清晰的层级阴影与适中的圆角，信息密度优先。
gallery:
  order: 1
  author: gholl
  tags: ["企业服务", "B端后台", "高密度", "小圆角"]
colors:
  bg: "#eef2f7"
  surface: "#ffffff"
  surface-alt: "#f8fafc"
  primary: "#2563eb"
  primary-strong: "#1e40af"
  on-primary: "#ffffff"
  accent: "#7c3aed"
  text: "#0f172a"
  muted: "#64748b"
  border: "#e2e8f0"
  success: "#16a34a"
  warning: "#d97706"
  danger: "#dc2626"
typography:
  body-md:
    fontFamily: "'Inter', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  h1:
    fontFamily: "'Inter', 'PingFang SC', ui-sans-serif, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.011em
  label-mono:
    fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: 12px
    fontWeight: 500
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  base: 16px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  table-row: 44px
shadows:
  card: "0 1px 3px rgb(15 23 42 / 0.08), 0 1px 2px rgb(15 23 42 / 0.04)"
  control: "0 1px 2px rgb(15 23 42 / 0.10)"
strokes:
  card: 1px
  control: 1px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 8px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  input-field:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  page-shell:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
  table-header:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
  divider:
    backgroundColor: "{colors.border}"
  meta-dot:
    backgroundColor: "{colors.muted}"
  accent-dot:
    backgroundColor: "{colors.accent}"
  status-dot-success:
    backgroundColor: "{colors.success}"
  status-dot-warning:
    backgroundColor: "{colors.warning}"
  status-dot-danger:
    backgroundColor: "{colors.danger}"
---

# Enterprise Admin

> 黄金样板间基准规范。所有社区贡献都应与之对比，验证自家 Token 是否真的可用。

## Overview

为高密度数据后台设计：冷静、可预期、不抢内容。主色只用于可操作元素与焦点态，
层级依靠 1px 边框线与两级阴影完成。

- Density: 6/10 — Dense
- Variance: 2/10 — Structured
- Motion: 3/10 — Subtle

## Colors

配色根植于冷灰蓝基底与单一动作蓝。

- **Primary (#2563eb)：** 云蓝，唯一的主操作色。
- **Accent (#7c3aed)：** 紫罗兰，次级强调与图表第二色。
- **Surface 三层：** `bg` 页面底 / `surface` 卡片 / `surface-alt` 表头与输入底。
- **状态色：** success/warning/danger 仅出现在徽章与通知，不做大面积铺色。

## Typography

Inter + 苹方回退。正文 15px 保证扫读效率，标题 600 字重不加全大写；
技术元数据（单号、时间戳）走等宽 `label-mono`。

## Layout

标准密度（base 16px）。表格行高 44px——后台数据表的舒适下限；
卡片内边距 20-24px，分区依靠 containment 而非大留白。

## Elevation & Depth

层级以「边框为主、阴影为辅」：1px 冷灰描边负责分隔，两级极轻阴影（card/control）
只暗示卡片浮起。阴影永远是冷黑低透明，绝不彩色。

## Shapes

卡片 12px、控件 8px 的适中圆角；状态徽章全圆角 pill。圆角梯度 6/8/12 是唯一允许的三个值。

## Components

主按钮实底云蓝白字，hover 加深至 `primary-strong`；输入底色 `surface-alt`、
focus 转主色描边；徽章为半透明底 + 同色系文字与描边。

## Do's and Don'ts

- Do 把 primary 留给每屏最重要的一个动作
- Do 保持数值列右对齐并使用等宽数字（tabular-nums）
- Don't 在正文使用超过两种字重
- Don't 给表格行加阴影，分隔只用 border
