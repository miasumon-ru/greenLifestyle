import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import router from './routes/Routes.jsx';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

// Create a client
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>

      <QueryClientProvider client={queryClient}>

        <AuthProvider>

          <RouterProvider router={router} />

        </AuthProvider>

      </QueryClientProvider>


    </HelmetProvider>

  </React.StrictMode>,
)
