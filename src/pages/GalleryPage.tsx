import { useMemo, useState } from 'react'
import type { Design } from '../types'
import { designs, defaultDesign } from '../lib/registry'
import { applyDesign } from '../lib/tokenEngine'
import { navigate } from '../lib/router'
import { styleFromVars } from '../lib/cssVars'
import { buttonClass } from '../components/ui/styles'
import DesignCard from '../components/gallery/DesignCard'
import SourcePanel from '../components/shared/SourcePanel'

type Category = 'all' | 'builtin' | 'community'

const CATEGORY_LABEL: Record<Category, string> = { all: '全部', builtin: '内置基准', community: '社区收录' }

export default function GalleryPage() {
  const [source, setSource] = useState<Design | null>(null)
  const [category, setCategory] = useState<Category>('all')
  const [tag, setTag] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const openPreview = (design: Design) => {
    applyDesign(design)
    navigate(`/preview?theme=${design.slug}`)
  }

  const communityCount = useMemo(() => designs.filter((d) => d.design.source).length, [])
  const hotTags = useMemo(() => {
    const count = new Map<string, number>()
    for (const d of designs) for (const t of d.design.tags) count.set(t, (count.get(t) ?? 0) + 1)
    return [...count.entries()].sort((a, b) => b[1] - a[1]).slice(0, 7).map(([t]) => t)
  }, [])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return designs.filter((d) => {
      if (category === 'builtin' && d.design.source) return false
      if (category === 'community' && !d.design.source) return false
      if (tag && !d.design.tags.includes(tag)) return false
      if (q && !(d.design.name + d.design.summary + d.design.tags.join('')).toLowerCase().includes(q)) return false
      return true
    })
  }, [category, tag, query])

  return (
    <div className="min-h-screen">
      {/* 顶栏 */}
      <nav className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-2.5">
            <span
              style={defaultDesign ? styleFromVars(defaultDesign.design.vars) : undefined}
              className="grid h-7 w-7 shrink-0 grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-md bg-ink p-0.5"
              aria-hidden="true"
            >
              <span className="rounded-[2px] bg-primary" />
              <span className="rounded-[2px] bg-accent" />
              <span className="rounded-[2px] bg-success" />
              <span className="rounded-[2px] bg-warning" />
            </span>
            <span className="font-display text-sm font-bold">
              Design.md Gallery
              <span className="ml-2 hidden font-mono text-[11px] font-normal text-muted sm:inline">design.gholl.com</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索规范…"
              className="h-8 w-32 rounded-control border border-line bg-surface px-2.5 text-xs outline-none placeholder:text-muted focus:w-44 focus:border-primary sm:w-44 sm:focus:w-56"
            />
            {defaultDesign ? (
              <button onClick={() => openPreview(defaultDesign)} className={buttonClass('primary', 'sm')}>
                进入样板间
              </button>
            ) : null}
          </div>
        </div>
      </nav>

      {/* 一行式 hero */}
      <header className="mx-auto max-w-7xl px-4 pb-5 pt-9">
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          一套样板间，<span className="text-primary">{designs.length} 份 DESIGN.md</span> 实时换肤
        </h1>
        <p className="mt-1.5 text-sm text-muted">
          Google DESIGN.md 格式 · 浏览器解析注入 :root · 收录 {communityCount} 份来自
          <a href="https://designmd.app/" target="_blank" rel="noreferrer" className="mx-1 underline decoration-line hover:text-ink">designmd.app</a>
          的真实规范
        </p>
      </header>

      {/* 筛选 */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 pb-6">
        {(['all', 'builtin', 'community'] as const).map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`cursor-pointer rounded-badge border px-3 py-1 text-xs font-medium ${
              category === c
                ? 'border-transparent bg-ink text-bg'
                : 'border-line bg-surface text-muted hover:text-ink'
            }`}
          >
            {CATEGORY_LABEL[c]}
          </button>
        ))}
        <span className="mx-1 h-4 w-px bg-line" />
        {hotTags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(tag === t ? null : t)}
            className={`cursor-pointer rounded-badge border px-2.5 py-1 text-[11px] ${
              tag === t ? 'border-primary text-primary bg-primary/10' : 'border-line text-muted hover:text-ink'
            }`}
          >
            {t}
          </button>
        ))}
        <span className="ml-auto font-mono text-[11px] text-muted tabular-nums">{visible.length}/{designs.length}</span>
      </div>

      <main className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {visible.map((design) => (
            <DesignCard
              key={design.slug}
              design={design}
              onViewSource={setSource}
              onPreview={openPreview}
            />
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">没有匹配的规范，换个关键词试试。</p>
        ) : null}
      </main>

      {/* 窄页脚 */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 font-mono text-[11px] text-muted">
          <span>
            格式:{' '}
            <a href="https://github.com/google-labs-code/design.md" target="_blank" rel="noreferrer" className="underline decoration-line hover:text-ink">
              google-labs-code/design.md
            </a>
            {' '}· 数据源:{' '}
            <a href="https://designmd.app/" target="_blank" rel="noreferrer" className="underline decoration-line hover:text-ink">
              designmd.app
            </a>
          </span>
          <span>npm run design:lint · 官方校验 0 error · MIT</span>
        </div>
      </footer>

      <SourcePanel design={source} onClose={() => setSource(null)} />
    </div>
  )
}
