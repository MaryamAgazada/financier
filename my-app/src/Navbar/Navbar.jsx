import React from 'react'
import "./Navbar.css"
// import  library  from '@fortawesome/fontawesome-svg-core'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">Financier.</div>
      <ul className="lists">
        <li className="list">Home </li>
        <li className="list">Solutions</li>
        <li className="list">Services</li>
        <li className="list">About </li>
        <li className="list">Contact Us</li>
      </ul>
      <div className="menu"><i class="fa-solid fa-bars"></i></div>
      <div className="telephone"><i class="fa-solid fa-phone"></i>123-489-9381</div>
    </div>
  )
}

export default Navbar
