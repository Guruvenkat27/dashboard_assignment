import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Store from './store/Store.js'
import './index.css'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={Store}>
    <App />
  </Provider>
  </StrictMode>,
)
