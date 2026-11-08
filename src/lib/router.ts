import { useEffect, useState } from 'react'

export interface Route {
  path: string
  params: Record<string, string>
}

/** 旧 hash 链接（#/preview?theme=x）与 /preview 查询式统一迁移到 /design/<slug> */
function normalize(): Route {
  const hash = window.location.hash
  if (hash.startsWith('#/')) {
    const [p, qs] = hash.slice(1).split('?')
    const params = Object.fromEntries(new URLSearchParams(qs ?? ''))
    const path = p === '/preview' && params.theme ? `/design/${params.theme}` : p || '/'
    window.history.replaceState(null, '', path)
  }
  let path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/'
  const params = Object.fromEntries(new URLSearchParams(window.location.search))
  if (path === '/preview' && params.theme) {
    path = `/design/${params.theme}`
    window.history.replaceState(null, '', path)
  }
  const m = path.match(/^\/design\/([^/]+)$/)
  if (m) return { path: '/design', params: { theme: decodeURIComponent(m[1]) } }
  return { path, params }
}

export function navigate(to: string): void {
  window.history.pushState(null, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(normalize)
  useEffect(() => {
    const onChange = () => setRoute(normalize())
    window.addEventListener('popstate', onChange)
    return () => window.removeEventListener('popstate', onChange)
  }, [])
  return route
}
