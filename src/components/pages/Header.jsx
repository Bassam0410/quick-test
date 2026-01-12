import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/public/logo.png'
export default function Header() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo-image" />
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="link">Home</li>
        </Link>
        <Link to="/start-quiz" style={{ textDecoration: "none" }}>
          <li className="link">Start a Quiz
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
        </Link>
        <Link to="/About" style={{ textDecoration: "none" }}>
          <li className="link">About</li>
        </Link>
        <Link to="/Contact" style={{ textDecoration: "none" }}>
          <li className="link">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
