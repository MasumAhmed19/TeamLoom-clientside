import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>   
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
