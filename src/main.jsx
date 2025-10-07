import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AllRoute } from './route/AllRoute'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {AllRoute}/>
  </StrictMode>
)
