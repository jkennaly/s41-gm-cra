import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { store, persistor } from './store';
import AuthProvider from './auth/auth';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </PersistGate>
  </Provider>
</React.StrictMode>);