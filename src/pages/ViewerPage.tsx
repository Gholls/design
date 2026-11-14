import { useState } from 'react'
import type { IndexedDesign } from '../types'
import { designs, getDesign } from '../lib/registry'
import { navigate } from '../lib/router'
import { generatedUrl } from '../lib/generated'
import { styleFromVars } from '../lib/cssVars'
import { buttonClass } from '../components/ui/styles'
import SpecPanel from '../components/shared/SpecPanel'
import SourcePanel from '../components/shared/SourcePanel'

export default function ViewerPage({ theme }: { theme?: string }) {
  const design: IndexedDesign | null = getDesign(theme)
  const [sourceOpen, setSourceOpen] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  if (!design || designs.length === 0) {
    return <div className="grid min-h-screen place-items-center text-sm text-muted">规范索引未就绪</div>
  }

  const url = generatedUrl(design.slug)
  const isMobile = design.design.platform === 'mobile'

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* 预览器工具栏 */}
      <header className="flex h-13 shrink-0 flex-wrap items-center gap-2 border-b border-line bg-surface px-3 py-2">
        <a href="/" className={buttonClass('ghost', 'sm')}>← 画廊</a>
        <span className="hidden h-5 w-px bg-line sm:block" />
        <select
          aria-label="切换设计规范"
          value={design.slug}
          onChange={(e) => navigate(`/design/${e.target.value}`)}
          className="h-8 cursor-pointer rounded-control border border-line bg-surface-alt px-2 text-xs font-medium outline-none focus:border-primary"
        >
          {designs.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.design.name}
            </option>
          ))}
        </select>
        <span className="hidden items-center gap-1.5 text-xs text-muted lg:flex">
          {url ? (
            <span className="inline-flex items-center gap-1 rounded-badge border border-success/40 bg-success/10 px-2 py-0.5 font-mono text-[10px] text-success">
              ● agent 生成产物
            </span>
          ) : (
            <span className="rounded-badge border border-warning/40 bg-warning/10 px-2 py-0.5 font-mono text-[10px] text-warning">
              ○ 待生成
            </span>
          )}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          {url ? (
            <>
              <button onClick={() => setReloadKey((k) => k + 1)} className={buttonClass('ghost', 'sm')}>↻ 重载</button>
              <a href={url} target="_blank" rel="noreferrer" className={buttonClass('secondary', 'sm', 'stroke-control')}>
                新窗口打开 ↗
              </a>
            </>
          ) : null}
          <button
            onClick={() => setSourceOpen(true)}
            className={buttonClass(url ? 'secondary' : 'primary', 'sm', 'stroke-control')}
          >
            {url ? '规范与源码' : '获取任务去生成'}
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* 生成产物 iframe */}
        <main className={`relative min-w-0 flex-1 bg-surface-alt ${isMobile ? 'grid place-items-start justify-center overflow-auto p-6' : ''}`}>
          {url ? (
            isMobile ? (
              <div className="relative shrink-0 rounded-[52px] border-[10px] border-[#0b0b0c] bg-[#0b0b0c] shadow-2xl">
                <span className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0b0b0c]" />
                <iframe
                  key={`${design.slug}-${reloadKey}`}
                  title={`${design.design.name} 移动端样板间`}
                  src={url}
                  className="block h-[844px] w-[390px] rounded-[42px] border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-modals"
                />
              </div>
            ) : (
              <iframe
                key={`${design.slug}-${reloadKey}`}
                title={`${design.design.name} 样板间（agent 生成）`}
                src={url}
                className="h-full w-full border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-modals"
              />
            )
          ) : (
            <div className="grid h-full place-items-center p-6">
              <div className="max-w-md text-center">
                <p className="text-4xl" aria-hidden="true">⬡</p>
                <h2 className="mt-3 font-display text-lg font-bold">「{design.design.name}」尚无生成产物</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  本项目不提供样板间代码——它由任意 code agent 依{' '}
                  <a href="/prompt" className="text-primary underline decoration-line">黄金提示词</a>
                  {' '}加本规范生成。复制下面的任务交给 agent，产出物放入{' '}
                  <code className="rounded bg-surface px-1 py-0.5 font-mono text-xs">public/generated/{design.slug}/index.html</code>
                  ，即可在此路由到静态站点。
                </p>
                <div className="mx-auto mt-5 max-w-xs">
                  <SpecPanel design={design} compact />
                </div>
                <p className="mt-4 font-mono text-[11px] text-muted">
                  本地批量任务文件：npm run generate → prompts/tasks/
                </p>
              </div>
            </div>
          )}
        </main>

        {/* 设计思想侧栏：局部作用域套用该规范配色做信息展示，外壳主题不受影响 */}
        <aside style={styleFromVars(design.design.vars)} className="hidden w-72 shrink-0 overflow-y-auto border-l border-line bg-surface p-3.5 xl:block">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="font-display text-sm font-bold">{design.design.name}</h2>
            <a href="/prompt" className="text-[11px] text-primary hover:underline">提示词 ↗</a>
          </div>
          <p className="mt-1 text-[11px] leading-4 text-muted">{design.design.summary}</p>
          <div className="mt-4">
            <SpecPanel design={design} />
          </div>
          <div className="mt-4 rounded-control border border-line p-3">
            <p className="text-[11px] font-bold">Token 快照</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {Object.entries(design.design.roles).map(([role, hex]) => (
                <span
                  key={role}
                  title={`${role}: ${hex}`}
                  className="h-5 w-5 rounded-md border border-line"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
            <p className="mt-2 font-mono text-[10px] leading-4 text-muted">
              {design.design.fontSizeBase} · radius {design.design.radius.card}/{design.design.radius.control} · density ×{design.design.density}
            </p>
          </div>
        </aside>
      </div>

      <SourcePanel design={sourceOpen ? design : null} onClose={() => setSourceOpen(false)} />
    </div>
  )
}
