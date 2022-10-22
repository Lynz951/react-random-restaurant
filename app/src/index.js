import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <App />
  </React.StrictMode>
);
