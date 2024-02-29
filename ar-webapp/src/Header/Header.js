// Header.js
import React from 'react';
import './Header.css';  // Import the associated CSS file
import Logo from '../images/logo.png';  // Import the logo image

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul className='nav-items'>
          <li><a className="nav-link" href="/home">Home</a></li>
          <li><a className="nav-link" href="/signup">Sign Up</a></li>
          <li><a className="nav-link" href="/login">Log In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
