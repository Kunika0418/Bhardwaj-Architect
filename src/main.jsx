import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/globals.css'

// Initialize locomotive scroll when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // We'll initialize locomotive scroll in specific components rather than globally
  // This allows for better component-specific scroll behaviors
});

// Create root element and render app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)