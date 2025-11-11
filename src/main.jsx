import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import '../src/styles/homepage.css'
import '../src/styles/about.css'
import '../src/styles/services.css'
import '../src/styles/careers.css'
import '../src/styles/news.css'
import '../src/styles/contact.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
