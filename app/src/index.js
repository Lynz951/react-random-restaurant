import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.css';
import GetMenu from './getmenu.js'
import Footer from './footer.js';
import SimpleMap from './map.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
     <GetMenu />
     <Footer />
     {/* <SimpleMap /> */}
  </React.StrictMode>
);
