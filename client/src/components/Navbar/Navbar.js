import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';

function Navbar() {
  return (
    <nav className="navbarmain">
      <div className='logo-img'>
            <img src={logo} className="Web-Logo" alt="logo" />
      </div>
        <ul className="nav-linksmain">
          <li><a href="/">Home</a></li>
          
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
    </nav>
  );
}

export default Navbar;
