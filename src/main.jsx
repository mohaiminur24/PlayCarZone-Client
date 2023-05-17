import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './MainLayout'
import AuthConfigration from './Components/AuthConfigrationLayout/AuthConfigration'
import { RouterProvider } from 'react-router-dom'
import router from './Components/RouterLayout/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthConfigration>
      <RouterProvider router={router}/>
    </AuthConfigration>
  </React.StrictMode>,
)
