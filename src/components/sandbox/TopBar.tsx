import type { Design } from '../../types'
import { designs } from '../../lib/registry'
import { navigate } from '../../lib/router'
import { buttonClass } from '../ui/styles'

function currentPageFromHash(): string {
  const page = new URLSearchParams(window.location.hash.split('?')[1] ?? '').get('page')
  return page ? `&page=${page}` : ''
}

interface TopBarProps {
  design: Design
  sourceOpen: boolean
  onToggleSource: () => void
}

export default function TopBar({ design, sourceOpen, onToggleSource }: TopBarProps) {
  return (
    <div className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-3 px-4">
        <div className="flex min-w-0 items-center gap-3">
          <a href="#/" className={buttonClass('ghost', 'sm', 'shrink-0')}>
            ← 画廊
          </a>
          <span className="hidden h-5 w-px bg-line sm:block" />
          <h1 className="truncate font-display text-sm font-bold md:text-base">
            黄金样板间
            <span className="ml-2 font-mono text-xs font-normal text-muted">{design.design.name}</span>
          </h1>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <select
            aria-label="切换设计规范"
            value={design.slug}
            onChange={(e) => navigate(`/preview?theme=${e.target.value}${currentPageFromHash()}`)}
            className="h-8 cursor-pointer rounded-control border border-line bg-surface px-2 text-xs font-medium outline-none focus:border-primary"
          >
            {designs.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.design.name}
              </option>
            ))}
          </select>
          <button
            onClick={onToggleSource}
            className={buttonClass(sourceOpen ? 'primary' : 'secondary', 'sm', 'stroke-control')}
          >
            {sourceOpen ? '关闭源码对照' : '源码对照'}
          </button>
        </div>
      </div>
    </div>
  )
}
