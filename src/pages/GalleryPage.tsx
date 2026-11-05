import { useState } from 'react'
import type { Design } from '../types'
import { designs, defaultDesign } from '../lib/registry'
import { applyDesign } from '../lib/tokenEngine'
import { navigate } from '../lib/router'
import { tokenVarsForStyle } from '../lib/cssVars'
import { buttonClass, cardClass } from '../components/ui/styles'
import DesignCard from '../components/gallery/DesignCard'
import SourcePanel from '../components/shared/SourcePanel'

export default function GalleryPage() {
  const [source, setSource] = useState<Design | null>(null)

  const openPreview = (design: Design) => {
    applyDesign(design)
    navigate(`/preview?theme=${design.slug}`)
  }

  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-7xl px-4 pb-8 pt-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted">
          <span
            style={tokenVarsForStyle(defaultDesign.tokens)}
            className="inline-flex items-center gap-1 rounded-badge bg-primary px-2.5 py-1 text-on-primary"
          >
            design.gholl.com
          </span>
          <span className="font-mono">Design.md Gallery · Sandbox Preview</span>
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl">
          一套标准样板间，
          <span className="text-primary">{designs.length} 种设计规范</span>
          ，零后端实时换肤。
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          每张卡片是一份社区共建的 DESIGN.md 规范。点击「实时预览样板间」后，
          Token 注入引擎会把它扁平化为 CSS 自定义属性写入
          <code className="mx-1 rounded bg-surface-alt px-1.5 py-0.5 font-mono text-xs">:root</code>
          ，同一套 React 界面即刻改变颜色、字体、圆角、阴影与密度——无需刷新。
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            onClick={() => openPreview(defaultDesign)}
            className={buttonClass('primary')}
          >
            ⚡ 进入黄金样板间（{defaultDesign.tokens.meta.name}）
          </button>
          <button
            onClick={() => setSource(defaultDesign)}
            className={buttonClass('secondary', 'md', 'stroke-control')}
          >
            阅读基准规范
          </button>
          <span className="ml-1 text-xs text-muted">纯静态 · Vite + Tailwind v4 + Cloudflare Pages</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {designs.map((design) => (
            <DesignCard
              key={design.slug}
              design={design}
              onViewSource={setSource}
              onPreview={openPreview}
            />
          ))}
        </div>

        <section className={`${cardClass} mt-10 flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center`}>
          <div>
            <h2 className="font-display text-base font-bold">贡献你的规范</h2>
            <p className="mt-1 max-w-xl text-sm text-muted">
              在
              <code className="mx-1 rounded bg-surface-alt px-1.5 py-0.5 font-mono text-xs">designs/&lt;slug&gt;/</code>
              放入 <span className="font-mono text-xs">tokens.json</span> 与{' '}
              <span className="font-mono text-xs">DESIGN.md</span> 并提 PR，构建时自动出现在画廊。
              校验规则见 designs/README.md。
            </p>
          </div>
          <span className="shrink-0 rounded-badge border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            MIT · 开源共建
          </span>
        </section>
      </main>

      <SourcePanel design={source} onClose={() => setSource(null)} />
    </div>
  )
}
