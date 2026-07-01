import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Esto amarra tu código de App.jsx al <div id="root"> del index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)