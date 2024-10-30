import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<h1>Link Start</h1>} />
      </Route>
    </Routes>
  )
}
