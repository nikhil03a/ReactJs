import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { GlobalProvider } from './GlobalContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </GlobalProvider>
  
);