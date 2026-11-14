import { useMemo, useState } from 'react'
import type { IndexedDesign } from '../types'
import { designs, defaultDesign, skippedSlugs } from '../lib/registry'
import { generatedUrl } from '../lib/generated'
import { navigate } from '../lib/router'
import { styleFromVars } from '../lib/cssVars'
import { buttonClass } from '../components/ui/styles'
import DesignCard from '../components/gallery/DesignCard'
import SourcePanel from '../components/shared/SourcePanel'

type Category = 'all' | 'builtin' | 'community' | 'generated'
type Platform = 'web' | 'mobile' | 'desktop'

const CATEGORY_LABEL: Record<Category, string> = {
  all: '全部',
  builtin: '内置基准',
  community: '社区收录',
  generated: '已生成站点',
}

const PAGE_STEP = 48

const PLATFORMS: Array<{ id: Platform; label: string; en: string; blurb: string }> = [
  { id: 'web', label: '网站', en: 'WEB', blurb: '官网、商城与产品站' },
  { id: 'mobile', label: '移动端', en: 'MOBILE', blurb: 'iOS / Android App' },
  { id: 'desktop', label: '桌面端', en: 'DESKTOP', blurb: '控制台与桌面工具' },
]

function PlatformIcon({ id }: { id: Platform }) {
  if (id === 'mobile') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10.5 18.5h3" strokeLinecap="round" />
      </svg>
    )
  }
  if (id === 'desktop') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
        <path d="M9 20h6M12 16.5V20" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="3.5" width="19" height="17" rx="2.5" />
      <path d="M2.5 8.5h19" />
      <circle cx="5.5" cy="6" r=".6" fill="currentColor" />
    </svg>
  )
}

export default function GalleryPage() {
  const [source, setSource] = useState<IndexedDesign | null>(null)
  const [platform, setPlatform] = useState<Platform>('web')
  const [category, setCategory] = useState<Category>('all')
  const [tag, setTag] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [shown, setShown] = useState(PAGE_STEP)

  const counts = useMemo(
    () => ({
      web: designs.filter((d) => d.design.platform === 'web').length,
      mobile: designs.filter((d) => d.design.platform === 'mobile').length,
      desktop: designs.filter((d) => d.design.platform === 'desktop').length,
    }),
    [],
  )

  const pool = useMemo(() => designs.filter((d) => d.design.platform === platform), [platform])

  const hotTags = useMemo(() => {
    const count = new Map<string, number>()
    for (const d of pool) for (const t of d.design.tags) count.set(t, (count.get(t) ?? 0) + 1)
    return [...count.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([t]) => t)
  }, [pool])

  const tagOptions = tag && !hotTags.includes(tag) ? [tag, ...hotTags] : hotTags

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    setShown(PAGE_STEP)
    return pool.filter((d) => {
      if (category === 'builtin' && d.design.source) return false
      if (category === 'community' && !d.design.source) return false
      if (category === 'generated' && generatedUrl(d.slug) === null) return false
      if (tag && !d.design.tags.includes(tag)) return false
      if (q && !(d.design.name + d.design.summary + d.design.tags.join(' ')).toLowerCase().includes(q)) return false
      return true
    })
  }, [category, tag, query, pool])

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
            <span className="hidden sm:inline-flex">
              <a href="/studio/" className={buttonClass('secondary', 'sm', 'stroke-control font-mono')}>
                跨端样板间
              </a>
            </span>
            <a href="/prompt" className={buttonClass('secondary', 'sm', 'stroke-control font-mono')}>
              GOLDEN PROMPT
            </a>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`搜索${PLATFORMS.find((p) => p.id === platform)?.label}规范或标签…`}
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
          {' '}与{' '}
          <a href="https://github.com/Meliwat/awesome-ios-design-md" target="_blank" rel="noreferrer" className="text-primary underline decoration-line">
            awesome-ios-design-md
          </a>
          {' '}的真实品牌设计系统分析；样板间由 code agent 依
          <a href="/prompt" className="mx-1 whitespace-nowrap text-primary underline decoration-line">黄金提示词</a>
          逐规范生成静态站点。<span className="whitespace-nowrap">网站 {counts.web} · 移动端 {counts.mobile} · 桌面端 {counts.desktop}</span>。
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-5">
        <div className="grid gap-3 md:grid-cols-3">
          {PLATFORMS.map((p) => {
            const active = platform === p.id
            return (
              <button
                key={p.id}
                onClick={() => {
                  setPlatform(p.id)
                  setCategory('all')
                  setTag(null)
                }}
                className={`group cursor-pointer rounded-xl border p-4 text-left transition-colors ${
                  active ? 'border-primary bg-primary/5' : 'border-line bg-surface hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-wide ${active ? 'text-primary' : 'text-muted'}`}>
                    <PlatformIcon id={p.id} />
                    {p.en}
                  </span>
                  <span className="font-mono text-[11px] tabular-nums text-muted">{counts[p.id]} 套</span>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-2">
                  <span className="font-display text-lg font-bold">{p.label}</span>
                  <span className={`text-[11px] ${active ? 'text-primary' : 'text-muted'}`}>{active ? '当前分类' : '进入 →'}</span>
                </div>
                <p className="mt-1 text-xs text-muted">{p.blurb}</p>
              </button>
            )
          })}
        </div>
      </section>

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
        {tagOptions.length > 0 ? (
          <>
            <span className="mx-1 hidden h-4 w-px bg-line sm:inline-block" />
            {tagOptions.map((t) => (
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
              onTag={(t) => {
                setTag(t)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">这个分类下没有匹配的规范，换个关键词试试。</p>
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
            {' · '}
            <a href="/studio/" className="underline decoration-line hover:text-ink">跨端样板间</a>
          </span>
          <span>npm run design:lint · npm run generate · MIT</span>
        </div>
      </footer>

      <SourcePanel design={source} onClose={() => setSource(null)} />
    </div>
  )
}
