import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {AppProvider} from './Context.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </AppProvider>
)
