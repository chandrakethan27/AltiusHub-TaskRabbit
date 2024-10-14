import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { Provider } from 'react-redux'
import './index.css'
import store from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
 <StrictMode >
  <BrowserRouter >
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
  </StrictMode>,
)