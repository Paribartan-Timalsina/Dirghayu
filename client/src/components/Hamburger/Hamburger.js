import React, { useState } from "react";
import "./Hamburger.css"; // Import the CSS file for styling

function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <nav className={`menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Hamburger;
