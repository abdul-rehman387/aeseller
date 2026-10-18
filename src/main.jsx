import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Prerendered routes ship real HTML to hydrate; anything else renders client-side.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
