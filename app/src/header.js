import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import logo from './logo.png'

function Header() {

  return (
    <div className="Header">
      <img src={logo} alt="Logo" className="logo"/>
      <div className='Name'>Wise Norah's</div>
      <div className="Header-Subtitle">"Lexington's Favorite Vegetarian Bistro"</div>
     </div>
  )
}

export default Header