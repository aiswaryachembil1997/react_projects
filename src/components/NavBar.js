import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary-subtle py-3 fixed-top">
      <h3 className='fw-bold mx-5'>LOGO</h3>
      <button className="navbar-toggler" type="button" onClick={handleToggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} justify-content-end ml-5`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-4">
            <a className="nav-link text-dark fw-bold active" href="/">User Details</a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link text-secondary fw-bold disabled" href="#">About Us</a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link text-secondary fw-bold disabled" href="#">Services</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
