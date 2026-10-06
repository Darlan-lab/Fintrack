import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InitialPage from './Pages/InitialPage.tsx'
import LoginPage from './Pages/LoginPage.tsx' 
import RegisterPage from './Pages/RegisterPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
