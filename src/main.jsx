import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { AllRoute } from './route/AllRoute'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {AllRoute}/>
  </StrictMode>,
)
