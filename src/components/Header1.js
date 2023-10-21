import React, { useState } from 'react';
import './Header1.css';

const Header1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">MirkoD</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        Menu
      </div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header1;
