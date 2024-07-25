import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <div>
      <header>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className='navbar'>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/meet-the-team">Meet The Team</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;