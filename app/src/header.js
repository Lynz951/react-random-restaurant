import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import logo from './logo.png'


function Header() {


// const logo = {name: 'owl', imageUrl: logo, imageSize: 40};

  return (
    <div className="Header">
      <img src={logo} alt="Logo" className="logo"/>
      <h1>Wise Norah's</h1>
      <div className="Header-Subtitle">Lexington's Favorite Vegetarian Bistro</div>
  
    </div>
  )
}

export default Header