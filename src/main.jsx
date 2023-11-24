import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Routes'
import AuthProvider from './Providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
   <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
 </AuthProvider>,
)
