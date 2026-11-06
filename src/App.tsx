import GalleryPage from './pages/GalleryPage'
import ViewerPage from './pages/ViewerPage'
import PromptPage from './pages/PromptPage'
import { useRoute } from './lib/router'

export default function App() {
  const route = useRoute()
  if (route.path === '/preview') {
    return <ViewerPage theme={route.params.theme} />
  }
  if (route.path === '/prompt') {
    return <PromptPage />
  }
  return <GalleryPage />
}
