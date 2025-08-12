import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assests/images/logo1.jpeg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className={`tml-navbar ${open ? 'open' : ''}`}>
      <div className="container">
        <a className="brand" href="/">
          <img src={logo} alt="TechMintLab" className="brand-logo" />
        </a>
        <button
          aria-label="Toggle navigation"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav data-open={open}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Portfolio</NavLink>
        
        </nav>
        <div className="cta-group">
          <a className="btn btn-primary" href="#contact">Contact Us</a>
        </div>
      </div>
    </header>
  );
}
