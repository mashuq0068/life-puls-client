import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Routes'
import AuthProvider from './Providers/AuthProvider'
import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/700.css';



import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export const testContext = createContext(null)

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  
 <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <React.StrictMode>
   <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
  </QueryClientProvider>
 </AuthProvider>
 
 ,
)