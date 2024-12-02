import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const root = createRoot(document.getElementById('root'))
// const reactElement = createElement("h1", null, "Hello from createElement!")
// console.log(reactElement)
// root.render(
//   reactElement
// )