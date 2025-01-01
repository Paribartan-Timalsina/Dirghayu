import React, { useState } from 'react';
import './Icon.css';
import { NavLink } from 'react-router-dom';

function PatientIcon() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
   
      {/* <div className="burger" onClick={handleMenuToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
      <ul className="nav-links">
        <li><NavLink to="/details" activeClassName="active">My details</NavLink></li>
        <li><NavLink to="/medications" activeClassName="active">Medications</NavLink></li>
        <li><NavLink to="/appointments" activeClassName="active">Appointments</NavLink></li>
        <li><NavLink to="/patientbooking" activeClassName="active">Booking</NavLink></li>
      </ul>
    </nav>
  );
}

export default PatientIcon;
