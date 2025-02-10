// frontend/src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <a href="/" style={linkStyle}>Home</a>
      <a href="/resume" style={linkStyle}>Resume</a>
    </nav>
  );
};

export default Navbar;
