import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About';
import Work from './pages/Work';
import Error from './pages/Error'

export default function App() {
  const [theme, setTheme] = useState(true)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout theme={theme} setTheme={setTheme} />}>
          <Route index element={<Home theme={theme} />} />
          <Route path='about' element={<About theme={theme} />} />
          <Route path='work' element={<Work theme={theme} />} />
          <Route path='*' element={<Error theme={theme} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}