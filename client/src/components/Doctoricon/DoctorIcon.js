import React, { useState } from 'react';
import '../Navbar/Navbar.js';

function DoctorIcon() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      <ul className="nav-links" >
        <li><a href="/details">My details</a></li>
        <li><a href="/booking">My Booking</a></li>
        <li><a href="/patientappointments">Patient Appointments</a></li>
        <li><a href="/display">Patients data</a></li>
        
      </ul>
    </nav>
  );
}

export default DoctorIcon;
