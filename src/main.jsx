import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './context/AuthContext.jsx'
import { Context } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <Context>
    <App />
      </Context>
    </AuthContextProvider>
   
  </StrictMode>,
)
