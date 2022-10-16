import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.css';
import GetMenu from './getmenu.js'
import Footer from './footer.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
     <GetMenu />
     <Footer />
  </React.StrictMode>
);
