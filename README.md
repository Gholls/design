# design.gholl.com — Design.md Gallery

**一个实验：同一份需求提示词 × 不同 DESIGN.md，agent 会产出怎样不同的产品？**

本项目不内置样板间代码。它只拥有三样东西：

1. **规范数据** —— `designs/<slug>/DESIGN.md` 共 **803 套**：5 套内置基准 +
   798 套收录自 [designmd.app](https://designmd.app/)（library 全目录 + brands，
   抓取脚本可续传、自动注入出处署名并清洗上游脏数据）；
2. **黄金提示词** —— `prompts/GOLDEN.md`，样板间的全部需求与约束都在这一份文字里；
3. **轻量站点** —— 画廊（分页/搜索/筛选）、设计思想面板、生成状态，以及路由到
   agent 生成产物（`public/generated/<slug>/index.html`）的预览器。

样板间的每一次「长得不一样」，都是规范思想（Token、components 指引、
Density/Variance/Motion 指标、Do's & Don'ts）的胜利，而非代码分支。

- 技术栈：**Vite 7 + React 19 + Tailwind CSS v4 + js-yaml + Cloudflare Pages**
- 官方工具链：**@google/design.md** lint 门禁（`npm run design:lint`）
- URL：`/#/` 画廊 · `/#/preview?theme=<slug>` 预览产物 · `/#/prompt` 提示词全文
- 协议：**MIT**（[LICENSE](LICENSE)）

## 快速开始

```bash
npm install
npm run dev             # http://localhost:5173
npm run design:lint     # 官方 linter 校验全部规范（0 error 门禁）
npm run generate        # 为全部规范合成 agent 任务文件 prompts/tasks/<slug>.md
npm run build && npm run preview
```

## 生成流水线（样板间 = agent 的活）

```
prompts/GOLDEN.md ─┐
                   ├─ npm run generate ─→ prompts/tasks/<slug>.md
designs/<slug>/    │                          │  交给任意 code agent
DESIGN.md ─────────┘                          ▼
                        public/generated/<slug>/index.html（自包含静态站点）
                                    │ vite 自动登记（import.meta.glob）
                                    ▼
                        画廊显示「● 已生成」→ 预览器 iframe 路由产物
```

- 把 `prompts/tasks/<slug>.md` 粘贴给 Claude Code / Codex / Cursor / Qoder 等
  任何 agent，按产物契约生成 `index.html` 并提交，即完成一个规范的落地；
- 可选全自动：`AGENT_CMD="claude -p" npm run generate -- --run`
  （显式授权后由脚本派发本地 agent CLI）；
- 已附带两份本次生成的基准产物：`enterprise`（秩序网格基准）与
  `brutal-neo`（Variance 9/10 杂志编排 · Motion 0 零动效）——用于对照阅读差异。

## 规模化架构（800+ 规范）

浏览器运行时不解析 YAML——解析发生在构建期：

```
designs/*/DESIGN.md ── npm run index（tsx 复用 src/lib/designMd.ts 解析器） ─┬─→ public/design-index.json（803 条 UI 索引，~2.1MB）
                                                                            └─→ public/designs/<slug>.md（原文，抽屉/复制时懒加载 fetch）
```

- 应用 bundle 不含解析器与规范数据（js-yaml 移入 devDependencies）；
- 画廊按 48 张/批渲染，搜索与筛选覆盖全量索引；
- `npm run fetch` 可随时增量续传 designmd.app 新收录（自动清洗上游 YAML 污染）。

应用本体轻量，但为画廊与思想面板保留一个构建期规范解析器：

- [src/lib/designMd.ts](src/lib/designMd.ts)：frontmatter/yaml 块合并、`{token.ref}`
  解引用、官方 schema 校验；**角色解析**（任意色卡命名 → 13 样板间角色，
  亮度分布 + WCAG 对比度兜底）用于卡片色卡与 Token 试装条；
- **散文消费**：Density/Variance/Motion 指标、Overview 摘录、Do's/Don'ts 条目
  呈现于预览器的「设计思想」面板——提示词 + 思想可见，生成动作本身交给 agent；
- [src/lib/generated.ts](src/lib/generated.ts)：glob 登记产物，自动切分已生成/待生成。

## 目录结构

```
design/
├── prompts/
│   ├── GOLDEN.md           # ★ 唯一需求事实源（含产物契约）
│   └── tasks/              # npm run generate 合成（gitignore）
├── designs/                # ★ 规范库：官方 DESIGN.md 单文件（内置 5 + 收录 7）
│   └── README.md           #   贡献指南 + 收录政策 + 角色契约
├── public/generated/       # ★ agent 生成产物：<slug>/index.html 自包含静态站
├── src/
│   ├── lib/                # designMd · registry · tokenEngine · generated · router · agent · prompt
│   ├── pages/              # GalleryPage · ViewerPage · PromptPage
│   ├── components/         # gallery/DesignCard · shared/SpecPanel · shared/SourcePanel · ui
│   └── styles/globals.css  # 外壳换肤映射（@theme inline → --d-*）
└── scripts/                # lint-designs.mjs · generate.mjs
```

## 部署（Cloudflare Pages）

Build command `npm run build`，输出目录 `dist`，Node 22；
或 `npx wrangler pages deploy dist --project-name design-gholl-com`。
`public/_headers` 随产物生效；hash 路由无需 SPA 重写。

## 贡献

- **贡献规范**：放一份官方格式 `designs/<slug>/DESIGN.md`，`npm run design:lint`
  零 error 提 PR（详见 [designs/README.md](designs/README.md)）；
- **贡献生成产物**：跑 `npm run generate`，把你的 agent 产出的
  `public/generated/<slug>/index.html` 提 PR——页面底部的生成信息条与
  代码顶部的「决策溯源注释」是验收项（规范要求 agent 写明每个界面决策
  来自规范的哪一行）；
- **改进提示词**：GOLDEN.md 的每次修改都会改变所有规范的产出——请克制而珍重。

## License

MIT © 2026 gholl
