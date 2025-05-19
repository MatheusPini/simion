import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.scss"
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Login } from './pages/login.tsx'
import { Dashboad } from './pages/dashboard/dashboard.tsx'
import { NotFound } from './pages/exceptions/notFound/notFound.tsx'
import { Settings } from './pages/settings/settings.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboad />,
  },
  {
    path: "settings",
    element: <Settings />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
