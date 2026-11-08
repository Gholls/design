import { useMemo, useState } from 'react'
import type { IndexedDesign } from '../types'
import { designs, defaultDesign, skippedSlugs } from '../lib/registry'
import { generatedCount, generatedUrl } from '../lib/generated'
import { navigate } from '../lib/router'
import { styleFromVars } from '../lib/cssVars'
import { buttonClass } from '../components/ui/styles'
import DesignCard from '../components/gallery/DesignCard'
import SourcePanel from '../components/shared/SourcePanel'

type Category = 'all' | 'builtin' | 'community' | 'generated'

const CATEGORY_LABEL: Record<Category, string> = {
  all: '全部',
  builtin: '内置基准',
  community: '社区收录',
  generated: '已生成站点',
}

const PAGE_STEP = 48

export default function GalleryPage() {
  const [source, setSource] = useState<IndexedDesign | null>(null)
  const [category, setCategory] = useState<Category>('all')
  const [tag, setTag] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [shown, setShown] = useState(PAGE_STEP)

  const hotTags = useMemo(() => {
    const count = new Map<string, number>()
    for (const d of designs) for (const t of d.design.tags.slice(0, 3)) count.set(t, (count.get(t) ?? 0) + 1)
    return [...count.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([t]) => t)
  }, [])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    setShown(PAGE_STEP)
    return designs.filter((d) => {
      if (category === 'builtin' && d.design.source) return false
      if (category === 'community' && !d.design.source) return false
      if (category === 'generated' && generatedUrl(d.slug) === null) return false
      if (tag && !d.design.tags.includes(tag)) return false
      if (q && !(d.design.name + d.design.summary + d.design.tags.join(' ')).toLowerCase().includes(q)) return false
      return true
    })
  }, [category, tag, query])

  return (
    <div className="min-h-screen">
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
            <a href="/prompt" className={buttonClass('secondary', 'sm', 'stroke-control font-mono')}>
              GOLDEN PROMPT
            </a>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`搜索 ${designs.length} 套规范…`}
              className="hidden h-8 w-36 rounded-control border border-line bg-surface px-2.5 text-xs outline-none placeholder:text-muted focus:border-primary sm:block"
            />
          </div>
        </div>
      </nav>

      <header className="mx-auto max-w-7xl px-4 pb-5 pt-9">
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          同一份提示词 × <span className="text-primary">{designs.length} 份 DESIGN.md</span> = 同一个产品的不同人格
        </h1>
        <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted">
          {designs.length} 套规范：内置基准 + 收录自{' '}
          <a href="https://github.com/VoltAgent/awesome-design-md" target="_blank" rel="noreferrer" className="text-primary underline decoration-line">
            awesome-design-md
          </a>
          {' '}的 74 个真实品牌设计系统分析；样板间由 code agent 依
          <a href="/prompt" className="mx-1 text-primary underline decoration-line">黄金提示词</a>
          逐规范生成静态站点。已生成 {generatedCount} / {designs.length}。
        </p>
      </header>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 pb-6">
        {(['all', 'generated', 'builtin', 'community'] as const).map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`cursor-pointer rounded-badge border px-3 py-1 text-xs font-medium ${
              category === c ? 'border-transparent bg-ink text-bg' : 'border-line bg-surface text-muted hover:text-ink'
            }`}
          >
            {CATEGORY_LABEL[c]}
          </button>
        ))}
        {hotTags.length > 0 ? (
          <>
            <span className="mx-1 h-4 w-px bg-line" />
            {hotTags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(tag === t ? null : t)}
                className={`cursor-pointer rounded-badge border px-2.5 py-1 text-[11px] ${
                  tag === t ? 'border-primary bg-primary/10 text-primary' : 'border-line text-muted hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </>
        ) : null}
        <span className="ml-auto font-mono text-[11px] text-muted tabular-nums">
          {Math.min(shown, visible.length)}/{visible.length}
        </span>
      </div>

      <main className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {visible.slice(0, shown).map((design) => (
            <DesignCard
              key={design.slug}
              design={design}
              onViewSource={setSource}
              onPreview={(d) => navigate(`/design/${d.slug}`)}
            />
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">没有匹配的规范，换个关键词试试。</p>
        ) : null}
        {shown < visible.length ? (
          <div className="mt-8 flex justify-center">
            <button onClick={() => setShown((s) => s + PAGE_STEP)} className={buttonClass('secondary', 'md', 'stroke-control px-10')}>
              加载更多（剩余 {visible.length - shown} 套）
            </button>
          </div>
        ) : null}
        {skippedSlugs.length > 0 ? (
          <p className="mt-6 rounded-control border border-warning/40 bg-warning/10 px-3 py-2 text-xs text-warning">
            {skippedSlugs.length} 份 DESIGN.md 解析失败被跳过（运行 npm run design:lint 排查）
          </p>
        ) : null}
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 font-mono text-[11px] text-muted">
          <span>
            格式:{' '}
            <a href="https://github.com/google-labs-code/design.md" target="_blank" rel="noreferrer" className="underline decoration-line hover:text-ink">
              Google DESIGN.md
            </a>
            {' · '}数据源:{' '}
            <a href="https://github.com/VoltAgent/awesome-design-md" target="_blank" rel="noreferrer" className="underline decoration-line hover:text-ink">
              VoltAgent/awesome-design-md
            </a>
            {' · '}生成: code agent +{' '}
            <a href="/prompt" className="underline decoration-line hover:text-ink">GOLDEN PROMPT</a>
          </span>
          <span>npm run design:lint · npm run generate · MIT</span>
        </div>
      </footer>

      <SourcePanel design={source} onClose={() => setSource(null)} />
    </div>
  )
}
