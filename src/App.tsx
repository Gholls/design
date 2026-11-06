import GalleryPage from './pages/GalleryPage'
import SandboxPage from './pages/SandboxPage'
import { useRoute } from './lib/router'

export default function App() {
  const route = useRoute()
  if (route.path === '/preview') {
    return <SandboxPage theme={route.params.theme} page={route.params.page} />
  }
  return <GalleryPage />
}
