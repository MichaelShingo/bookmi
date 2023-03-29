import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GigsContextProvider } from './context/GigContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GigsContextProvider>
      <App />
    </GigsContextProvider>
  </React.StrictMode>
);

