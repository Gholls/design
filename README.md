# design.gholl.com — Design.md 画廊与黄金样板间

基于 [Google Labs **design.md**](https://github.com/google-labs-code/design.md) 格式规范（alpha）构建的
互动式设计规范画廊：一套标准「黄金样板间」UI × 多份社区共建的 DESIGN.md。
纯静态托管、零后端——浏览器内解析 YAML 设计 Token 并动态注入 `<html>` 的 CSS
自定义属性，在同一套 React 界面上实时换肤（颜色 / 字体 / 圆角 / 阴影 / 密度），无需刷新。

参考数据源：[designmd.app](https://designmd.app/) 收录的 700+ 份社区 DESIGN.md
可直接放入 `designs/<slug>/`（解析器带角色推导兜底）。

- 技术栈：**Vite 7 + React 19 + Tailwind CSS v4 + js-yaml + Cloudflare Pages**
- 官方工具链：**@google/design.md**（linter，PR 门禁 `npm run design:lint`）
- 路由：轻量 hash 路由，URL 直达 —— `/#/preview?theme=enterprise`
- 协议：**MIT**（见 [LICENSE](LICENSE)）

## 快速开始

```bash
npm install
npm run dev            # 本地开发 http://localhost:5173
npm run design:lint    # 用官方 linter 校验全部 designs/（0 error 才可提 PR）
npm run build          # tsc 检查 + 产物输出到 dist/
npm run preview        # 预览构建产物
```

## 数据源：官方 DESIGN.md 格式

每套规范就是一个自包含文件（无 tokens.json）：

```md
---
version: alpha
name: Enterprise Admin
description: 一句话简介
gallery: { order, author, tags }   # 样板间扩展组（官方规范允许保留未知顶层键）
colors:    { primary: "#2563eb", … }
typography: { body-md: {fontFamily, fontSize…}, h1: {…} }
rounded:   { sm, md, lg, full }
spacing:   { base: 16px, table-row: 44px, … }
shadows:   { card, control }        # 样板间扩展组
strokes:   { card, control }        # 样板间扩展组
components: { button-primary: { backgroundColor: "{colors.primary}", … } }
---

## Overview / Colors / Typography / Layout / Elevation & Depth /
## Shapes / Components / Do's and Don'ts   ← 官方章节顺序
```

`{colors.primary}` 这类 token 引用在解析期递归解引用。

## 工作原理：解析 + 动态 Token 注入引擎

```
designs/<slug>/DESIGN.md ── registry.ts（import.meta.glob 自动发现）
        │
        ▼
designMd.ts  解析器：frontmatter + 文内 yaml 块合并 → {a.b} 引用解析
        │     → 官方 schema 校验（章节顺序/重复键）
        ▼     → 角色解析：任意色卡名 → 样板间 13 角色（别名表 + 亮度推导兜底）
tokenEngine.applyDesign()
        │     扁平化 --d-<group>-<key> 变量写入 :root（含派生契约）
        ▼
globals.css  @theme inline { --color-primary: var(--d-colors-primary, …) }
        │
        ▼
Tailwind 工具类（bg-primary / rounded-card / p-4 / shadow-card）实时穿透生效
```

关键文件：
- [src/lib/designMd.ts](src/lib/designMd.ts) —— 官方格式解析器 + 归一化层（角色兜底）
- [src/lib/tokenEngine.ts](src/lib/tokenEngine.ts) —— CSS 变量注入与事件广播
- [src/styles/globals.css](src/styles/globals.css) —— Tailwind v4 `@theme inline` 映射层
- [scripts/lint-designs.mjs](scripts/lint-designs.mjs) —— 官方 linter 批量校验

## 目录结构

```
design/
├── designs/                  # ★ 社区共建区（提 PR 只动这里）
│   ├── README.md             #   贡献指南 + 角色契约 + 验收清单
│   ├── enterprise/DESIGN.md          # 内置基准 5 套：enterprise / apple-minimal
│   ├── apple-minimal/ · cyberpunk/   # /candy-glass / brutal-neo
│   ├── candy-glass/ · brutal-neo/
│   ├── minimalism-swiss-style/       # ┐ 收录自 designmd.app 的 7 份真实公开规范
│   ├── acrylic-fluent/ · de-stijl-abstrato/       # │ 原文 verbatim，仅注入 gallery:
│   ├── 8-bit-retro-terminal/ · cyber-tribal/      # │ 出处署名块（+1 处单位兼容修正）
│   └── dsgov/ · stone/                             # ┘ gov.br 为 CC0/MIT 开源设计系统
├── scripts/lint-designs.mjs  # 官方 linter 门禁
├── src/
│   ├── lib/                  # designMd 解析器 · registry · tokenEngine · router · cssVars
│   ├── pages/                # GalleryPage · SandboxPage
│   ├── components/           # gallery / sandbox / shared / ui
│   ├── data/mock.ts          # 样板间静态数据
│   └── styles/globals.css    # Tailwind v4 @theme inline 映射层
└── public/                   # favicon · _headers（Cloudflare 缓存/安全头）
```

## 样板间：7 个页面视图

侧边栏导航（URL `page` 参数直达，主题切换保持当前页）：

| 页面 | 覆盖场景 |
| --- | --- |
| 概览 | KPI 卡群、团队动态、收入构成、通知日志、部署状态 |
| 数据表格 | 搜索、状态筛选、多列排序、复选批量操作（可删除）、分页 |
| 组件库 | 按钮矩阵、徽章、头像堆叠、Tabs、开关/复选/单选/半选、进度、Alert、Tooltip、骨架屏、面包屑、模态框 |
| 表单流程 | 分组长表单、订阅方案选择、滑块席位、实时密码校验、计数器 textarea、拖拽上传、危险区 |
| 分析图表 | 柱状趋势、conic-gradient 环图、转化漏斗、color-mix 热力图（纯 Token 渲染，换肤即时重着色） |
| 内容页面 | 排版样张（标题阶/引用/行内码/双语混排）、定价三档、博客卡片 |
| 登录注册 | 双 Tab 认证流、社交登录、表单焦点态 |

另有全局能力：源码对照抽屉（DESIGN.md 原文 + 解析后 Tokens）、密度实时覆写、空状态演示、换肤 Toast。

## 部署（Cloudflare Pages）

**方式 A · Dashboard 连接 Git**

| 设置项 | 值 |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` |

**方式 B · Wrangler CLI**

```bash
npm run build
npx wrangler pages deploy dist --project-name design-gholl-com
```

hash 路由无需 SPA fallback 重写规则；`public/_headers` 会随产物自动生效。
生产域名建议绑定 `design.gholl.com`（Pages → Custom domains）。

## 贡献新规范

见 [designs/README.md](designs/README.md)：放一份官方格式的 `DESIGN.md`，
`npm run design:lint` 零 error 后提 PR——构建时自动出现在画廊。

## License

MIT © 2026 gholl
