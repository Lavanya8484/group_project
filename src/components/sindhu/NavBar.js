import React from 'react';
import './NavBar.css'; // optional


function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MyApp</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
