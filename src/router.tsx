import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { Projects } from './pages/projects'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}
