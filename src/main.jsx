import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Esse arquivo tem a responsabilidade de renderizar o que tem dentro de app.jsx, o arquivo app mostra o que terá em tela e o arquivo main fica com a responsabilidade de importar a div principal do index html e colocar na pagina web.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
