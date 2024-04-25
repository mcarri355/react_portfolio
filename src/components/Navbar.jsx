import React, { useState, useRef, useEffect } from 'react';
import '../Styles/css/navbar.css'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = (index) => {
    setDropdownActive(dropdownActive === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownActive(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        MC.
      </div>
      <div className="push-left">
        <button id="menu-toggler" className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line hamburger-line-top ${menuActive ? 'menu-active' : ''}`}></span>
          <span className={`hamburger-line hamburger-line-middle ${menuActive ? 'menu-active' : ''}`}></span>
          <span className={`hamburger-line hamburger-line-bottom ${menuActive ? 'menu-active' : ''}`}></span>
        </button>

        <ul id="primary-menu" className={`menu nav-menu ${menuActive ? 'menu-active' : ''}`}>
          <li className="menu-item current-menu-item"><a className="nav__link" href="/">Home</a></li>
          <li className="menu-item dropdown">
            <a className="nav__link" href="/about" onClick={() => toggleDropdown(1)}>About</a>
          </li>
          <li className="menu-item dropdown">
            <a className="nav__link" href="/" onClick={() => toggleDropdown(2)}>Projects</a>
            
          </li>
          <li className="menu-item"><a className="nav__link" href="/Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
