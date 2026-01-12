import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "/public/logo.png";

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className="footer">
      <img  className='logo' src={Logo} alt="logo-image" />
      <div className="date">
        <p>&copy; {year} Bassam. All Rights Reserved.</p>
      </div>
      <div className="links">
        <ul>
          <Link to="/start-quiz" style={{ textDecoration: "none" }}>
            <li className="link">Quick Test</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className="link">About</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="link">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
