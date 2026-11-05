import { useEffect, useMemo, useState } from 'react'
import { getDesign } from '../lib/registry'
import { APPLIED_EVENT, applyDesign, type AppliedDetail } from '../lib/tokenEngine'
import type { Design } from '../types'
import { kpis } from '../data/mock'
import TopBar from '../components/sandbox/TopBar'
import KpiCard from '../components/sandbox/KpiCard'
import OrdersTable from '../components/sandbox/OrdersTable'
import FormLab from '../components/sandbox/FormLab'
import NotificationsPanel from '../components/sandbox/NotificationsPanel'
import SourcePanel from '../components/shared/SourcePanel'

export default function SandboxPage({ theme }: { theme?: string }) {
  const design: Design = getDesign(theme)
  const [sourceOpen, setSourceOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const varCount = useMemo(() => Object.keys(design.design.vars).length, [design])

  useEffect(() => {
    applyDesign(design)
  }, [design])

  useEffect(() => {
    const onApplied = (event: Event) => {
      const detail = (event as CustomEvent<AppliedDetail>).detail
      setToast(`已实时切换至「${detail.name}」· CSS 变量注入 :root，无需刷新`)
    }
    window.addEventListener(APPLIED_EVENT, onApplied)
    return () => window.removeEventListener(APPLIED_EVENT, onApplied)
  }, [])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(timer)
  }, [toast])

  return (
    <div className="min-h-screen">
      <TopBar
        design={design}
        varCount={varCount}
        sourceOpen={sourceOpen}
        onToggleSource={() => setSourceOpen((v) => !v)}
      />

      <main className="mx-auto max-w-7xl space-y-5 px-4 py-6">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} kpi={kpi} />
          ))}
        </section>

        <section className="grid items-start gap-5 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <OrdersTable />
          </div>
          <div className="space-y-5">
            <FormLab design={design} />
            <NotificationsPanel />
          </div>
        </section>
      </main>

      <SourcePanel design={sourceOpen ? design : null} onClose={() => setSourceOpen(false)} />

      {toast ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
          <div className="rise-in flex items-center gap-2 rounded-card border border-line bg-surface px-4 py-2.5 text-sm shadow-card">
            <span className="h-2 w-2 rounded-full bg-success" />
            {toast}
          </div>
        </div>
      ) : null}
    </div>
  )
}
