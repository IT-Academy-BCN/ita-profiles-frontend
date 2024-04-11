import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import App from './App'
import i18n from './locales/i18n'
import { store } from './store/store'
import './styles/normalize.css'
import './styles/index.css'
import { ContextProvider } from './context/Context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </ContextProvider>
  </React.StrictMode>,
)
