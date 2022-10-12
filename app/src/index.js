import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import GetMenu from './getmenu.js';
import Header from './header.js';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Header /> */}
      {/* <Home />; */}
      <App />
      <GetMenu />
  </React.StrictMode>
);
