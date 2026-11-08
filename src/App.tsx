import { useEffect } from 'react'
import GalleryPage from './pages/GalleryPage'
import ViewerPage from './pages/ViewerPage'
import PromptPage from './pages/PromptPage'
import { useRoute } from './lib/router'
import { applyRouteMeta } from './lib/seo'

export default function App() {
  const route = useRoute()
  useEffect(() => {
    applyRouteMeta(route)
  }, [route])
  if (route.path === '/design') {
    return <ViewerPage theme={route.params.theme} />
  }
  if (route.path === '/prompt') {
    return <PromptPage />
  }
  return <GalleryPage />
}
