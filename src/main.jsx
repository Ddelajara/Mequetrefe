import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { App } from './App.jsx'
import './index.css'
import { UserProvider } from './context/user/userProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </UserProvider>
)
