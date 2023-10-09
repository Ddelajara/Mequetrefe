import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { App } from './App.jsx'
import './index.css'
import { UserProvider } from './context/user/userProvider.jsx'
import { CarritoProvider } from './context/carrito/carritoContext.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

ReactDOM.createRoot(document.getElementById('root')).render(
<PayPalScriptProvider
    options={{
      "client-id": import.meta.env.VITE_PAYPPAL_CLIENT_ID
    }}>
  <UserProvider>
      <CarritoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CarritoProvider>
  </UserProvider>
</PayPalScriptProvider>
)
