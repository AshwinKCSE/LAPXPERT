import React from 'react';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import { useState } from 'react';
import './UserNavBar.css';

const UserNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };
  const isLoggedIn = localStorage.getItem('userType') === 'user';
  // setLogged( localStorage.getItem('id'))

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-logo">User</div>
      </div>
      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          {console.log(location.pathname)}
          {isLoggedIn && (location.pathname !== '/user' && location.pathname !== '/owner' ) && (
            <>
              <Link to="/user/laptops" className="navbar-item">
                Home
              </Link>
              <Link to="/user/search" className="navbar-item">
                search laptops
              </Link>
              <Link to="/user/search-shop" className="navbar-item">
                search shops
              </Link>
              <Link to="/user/filter-laptop" className="navbar-item">
                filter laptops
              </Link>
            </>
          )}
                        {isLoggedIn ? <button className="logout" onClick={handleLogout}>logout</button> : null}
                      </div>
                    </div>
                  </nav>
                );
            };

export default UserNavBar; 