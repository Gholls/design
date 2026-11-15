import { useEffect, useMemo, useRef, useState } from 'react'
import type { IndexedDesign } from '../types'
import { designs, defaultDesign, skippedSlugs } from '../lib/registry'
import { generatedUrl } from '../lib/generated'
import { navigate } from '../lib/router'
import { styleFromVars } from '../lib/cssVars'
import DesignCard from '../components/gallery/DesignCard'
import SourcePanel from '../components/shared/SourcePanel'
import '../styles/gallery.css'

type Category = 'all' | 'builtin' | 'community' | 'generated'
type Platform = 'web' | 'mobile' | 'desktop'

const CATEGORY_LABEL: Record<Category, string> = {
  all: '全部',
  builtin: '内置基准',
  community: '社区收录',
  generated: '已生成站点',
}

const PAGE_STEP = 48

// 进入样板间时本页会被路由卸载，筛选与滚动位置需要存在组件之外才能复原
const galleryMemory = {
  category: 'all' as Category,
  tag: null as string | null,
  query: '',
  shown: PAGE_STEP,
  scrollY: 0,
}

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

function readPlatform(): Platform {
  const q = new URLSearchParams(window.location.search).get('platform')
  if (q === 'mobile' || q === 'desktop' || q === 'web') return q
  const stored = sessionStorage.getItem('gallery-platform')
  if (stored === 'mobile' || stored === 'desktop' || stored === 'web') return stored
  return 'web'
}

export default function GalleryPage() {
  const [source, setSource] = useState<IndexedDesign | null>(null)
  const [platform, setPlatform] = useState<Platform>(readPlatform)
  const [category, setCategory] = useState<Category>(galleryMemory.category)
  const [tag, setTag] = useState<string | null>(galleryMemory.tag)
  const [query, setQuery] = useState(galleryMemory.query)
  const [shown, setShown] = useState(galleryMemory.shown)

  const generatedTotal = useMemo(() => designs.filter((d) => generatedUrl(d.slug) !== null).length, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        document.getElementById('g-search-input')?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)
    if (platform === 'web') url.searchParams.delete('platform')
    else url.searchParams.set('platform', platform)
    window.history.replaceState(null, '', url)
    sessionStorage.setItem('gallery-platform', platform)
  }, [platform])

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
    return pool.filter((d) => {
      if (category === 'builtin' && d.design.source) return false
      if (category === 'community' && !d.design.source) return false
      if (category === 'generated' && generatedUrl(d.slug) === null) return false
      if (tag && !d.design.tags.includes(tag)) return false
      if (q && !(d.design.name + d.design.summary + d.design.tags.join(' ')).toLowerCase().includes(q)) return false
      return true
    })
  }, [category, tag, query, pool])

  useEffect(() => {
    galleryMemory.category = category
    galleryMemory.tag = tag
    galleryMemory.query = query
    galleryMemory.shown = shown
  }, [category, tag, query, shown])

  const filterKey = `${platform}|${category}|${tag ?? ''}|${query}`
  const appliedFilterKey = useRef(filterKey)
  useEffect(() => {
    if (appliedFilterKey.current === filterKey) return
    appliedFilterKey.current = filterKey
    setShown(PAGE_STEP)
  }, [filterKey])

  useEffect(() => {
    let frame = 0
    const save = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        galleryMemory.scrollY = window.scrollY
      })
    }
    window.addEventListener('scroll', save, { passive: true })
    return () => {
      window.removeEventListener('scroll', save)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const top = galleryMemory.scrollY
    if (!top) return
    const frame = requestAnimationFrame(() => window.scrollTo(0, top))
    return () => cancelAnimationFrame(frame)
  }, [])

  const platformMeta = PLATFORMS.find((p) => p.id === platform) ?? PLATFORMS[0]

  return (
    <div className="gallery-shell">
      <nav className="g-nav">
        <div className="g-nav-in">
          <a className="g-brand" href="/" aria-label="Design.md Gallery 首页">
            <span
              style={defaultDesign ? styleFromVars(defaultDesign.design.vars) : undefined}
              className="g-mark"
              aria-hidden="true"
            >
              <i /><i /><i /><i />
            </span>
            <span className="g-wordmark">
              Design.md <em>Gallery</em>
              <small>design.gholl.com</small>
            </span>
          </a>
          <div className="g-links">
            <a href="#library">规范库</a>
            <a href="/prompt">黄金提示词</a>
            <a href="/studio/">跨端样板间</a>
          </div>
          <div className="g-nav-meta">
            <span>{designs.length} SPECIMENS</span>
            <span>MIT</span>
          </div>
        </div>
      </nav>

      <header className="g-hero">
        <div className="g-hero-in">
          <div className="g-hero-copy">
            <span className="g-eyebrow"><i /> SPECIMEN ARCHIVE · 2026</span>
            <h1>同一份提示词，<br /><em>{designs.length}</em> 种产品人格。</h1>
            <p>
              一组来自真实产品的 DESIGN.md 规范，加上同一份 GOLDEN PROMPT：
              同一间虚构工作室 GhollStudio，被反复重写成完全不同的产品。
              网站、移动端与桌面端共用一套数据，只换设计语言。
            </p>
            <div className="g-hero-actions">
              <a className="g-btn g-btn-primary" href="#library">浏览规范 <span>↓</span></a>
              <a className="g-btn" href="/prompt">阅读黄金提示词 <span>↗</span></a>
            </div>
            <div className="g-hero-stats">
              <div><b>{designs.length}</b><span>规范总数</span></div>
              <div><b>{counts.web}</b><span>网站</span></div>
              <div><b>{counts.mobile}</b><span>移动端</span></div>
              <div><b>{counts.desktop}</b><span>桌面端</span></div>
              <div><b>{generatedTotal}</b><span>已生成</span></div>
            </div>
          </div>
          <div className="g-hero-art" aria-hidden="true">
            <div className="g-art-head">
              <span>SPECIMEN / SURFACES</span>
              <span>GHOLL / 2026</span>
            </div>
            <div className="g-art-board">
              <div className="g-art-card g-art-web">
                <span>WEB / 01</span>
                <b>{counts.web}</b>
                <small>官网 · 商城 · 产品站</small>
                <i className="g-art-rule" />
              </div>
              <div className="g-art-card g-art-mobile">
                <span>MOBILE / 02</span>
                <b>{counts.mobile}</b>
                <small>iOS · Android</small>
                <span className="g-art-mini"><i /><i /><i /></span>
                <i className="g-art-rule" />
              </div>
              <div className="g-art-card g-art-desktop">
                <span>DESKTOP / 03</span>
                <b>{counts.desktop}</b>
                <small>控制台 · 工具</small>
                <i className="g-art-rule" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="g-surfaces" aria-label="平台分类">
        {PLATFORMS.map((p, i) => {
          const active = platform === p.id
          return (
            <button
              key={p.id}
              onClick={() => {
                setPlatform(p.id)
                setCategory('all')
                setTag(null)
              }}
              className={`g-surface ${active ? 'is-active' : ''}`}
              aria-pressed={active}
            >
              <div className="g-surface-top">
                <span>0{i + 1} / {p.en}</span>
                <PlatformIcon id={p.id} />
              </div>
              <div className="g-surface-main">
                <b>{p.label}</b>
                <em>{counts[p.id]}</em>
              </div>
              <p>{p.blurb}</p>
              <div className="g-surface-foot">
                <span>{active ? '正在浏览' : '进入分类'}</span>
                <span>→</span>
              </div>
            </button>
          )
        })}
      </section>

      <section className="g-library" id="library">
        <div className="g-library-head">
          <div>
            <span className="g-eyebrow">LIBRARY / {platformMeta.en}</span>
            <h2>{visible.length} 个{platformMeta.label}规范</h2>
          </div>
          <label className="g-search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
            <input
              id="g-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`搜索${platformMeta.label}规范或标签…`}
            />
            <kbd>⌘K</kbd>
          </label>
        </div>

        <div className="g-filters">
          {(['all', 'generated', 'builtin', 'community'] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`g-filter ${category === c ? 'is-active' : ''}`}
            >
              {CATEGORY_LABEL[c]}
            </button>
          ))}
          {tagOptions.length > 0 ? (
            <>
              <span className="g-filter-rule" />
              {tagOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(tag === t ? null : t)}
                  className={`g-tag ${tag === t ? 'is-active' : ''}`}
                >
                  {t}
                </button>
              ))}
            </>
          ) : null}
          <span className="g-count">{Math.min(shown, visible.length)} / {visible.length}</span>
        </div>

        <div className="g-grid">
          {visible.slice(0, shown).map((design) => (
            <DesignCard
              key={design.slug}
              design={design}
              onViewSource={setSource}
              onPreview={(d) => {
                galleryMemory.scrollY = window.scrollY
                navigate(`/design/${d.slug}`)
              }}
              onTag={(t) => {
                setTag(t)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="g-empty">
            <span>0 RESULTS</span>
            <b>这个分类下没有匹配的规范。</b>
            <p>换个关键词，或切换平台再看。</p>
          </div>
        ) : null}

        {shown < visible.length ? (
          <div className="g-load">
            <button onClick={() => setShown((s) => s + PAGE_STEP)}>
              加载更多 <span>（剩余 {visible.length - shown} 套）</span>
            </button>
          </div>
        ) : null}

        {skippedSlugs.length > 0 ? (
          <p className="g-warning">{skippedSlugs.length} 份 DESIGN.md 解析失败被跳过（运行 npm run design:lint 排查）</p>
        ) : null}
      </section>

      <footer className="g-footer">
        <div className="g-footer-in">
          <div>
            <b>Design.md Gallery</b>
            <p>同一份黄金提示词 × 不同 DESIGN.md = 不同产品页面。<br />开源 MIT · 纯静态托管。</p>
          </div>
          <div className="g-footer-links">
            <a href="/prompt">GOLDEN PROMPT</a>
            <a href="/studio/">跨端样板间</a>
            <a href="https://github.com/google-labs-code/design.md" target="_blank" rel="noreferrer">Google DESIGN.md ↗</a>
            <a href="https://github.com/VoltAgent/awesome-design-md" target="_blank" rel="noreferrer">awesome-design-md ↗</a>
            <a href="https://github.com/Meliwat/awesome-ios-design-md" target="_blank" rel="noreferrer">awesome-ios-design-md ↗</a>
          </div>
          <div className="g-footer-meta">
            <span>npm run design:lint</span>
            <span>design.gholl.com</span>
            <span>© 2026 GhollStudio</span>
          </div>
        </div>
      </footer>

      <SourcePanel design={source} onClose={() => setSource(null)} />
    </div>
  )
}
