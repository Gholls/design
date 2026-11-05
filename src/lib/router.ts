import { useEffect, useState } from 'react'

export interface Route {
  path: string
  params: Record<string, string>
}

export function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '') || '/'
  const [path, qs] = raw.split('?')
  return {
    path: path.startsWith('/') ? path : `/${path}`,
    params: Object.fromEntries(new URLSearchParams(qs ?? '')),
  }
}

export function navigate(to: string): void {
  window.location.hash = to
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
