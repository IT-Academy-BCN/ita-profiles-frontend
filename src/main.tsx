import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/normalize.css';
import './styles/index.css';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n.ts';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
);
