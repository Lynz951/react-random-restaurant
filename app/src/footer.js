import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

    const Footer = () => (
      <div className="footer">
        <div className="address">
        <b><h2>Wise Norah's is located at:</h2> </b>
            <p>348 E. Main St.
            Lexington, KY 40508</p>
            <img src={map} alt="map" className="map"/>
            </div>
        <div className="hours">
            <h2>Hours of Operation</h2>
            <h6>M-F: 9am to 10pm
                Saturday: 8am to 11pm
                Sunday: 11am to 10pm
            </h6>
        </div>
      </div>
    );
    
    // export default Footer;

