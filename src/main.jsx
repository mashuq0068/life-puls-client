import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Routes'
import AuthProvider from './Providers/AuthProvider'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <React.StrictMode>
   <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
  </QueryClientProvider>
 </AuthProvider>,
)