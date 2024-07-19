import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  function logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/owner" className="brand-logo">
          OWNER
        </Link>
      </div>
      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          {console.log(location.pathname)}
          {location.pathname !== '/user' && location.pathname !== '/owner' && (
            <>
              <Link to="/owner" className="navbar-item">
                Home
              </Link>
              <Link to="/owner/add-shop" className="navbar-item">
                Add Shop
              </Link>
              <Link to="/owner/add-laptop" className="navbar-item">
                Add Laptop
              </Link>
              <Link to="/owner/show-laptops" className="navbar-item">
                show all laptops
              </Link>
              <Link to="/owner/shop-info" className="navbar-item">
                shop info
              </Link>
              
            </>
          )}
          <button className="logout" onClick={logout}>
                Logout
              </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;