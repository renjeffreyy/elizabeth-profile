import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/auth.action';

import './sidebar-links.style.scss';

const SidebarLinks = ({ isAuthenticated, logOut, cart }) => {
  const totalCartQuantity = cart.reduce(
    (accum, current) => accum + current.quantity,
    0
  );
  return (
    <div className="sidebar-link-container">
      <NavLink
        activeClassName="sidebar-link-active"
        className="sidebar-link"
        to="/"
        exact
      >
        Porfolio
      </NavLink>
      <NavLink
        activeClassName="sidebar-link-active"
        className="sidebar-link"
        to="/about"
        exact
      >
        About
      </NavLink>
      <NavLink
        activeClassName="sidebar-link-active"
        className="sidebar-link"
        to="/contact"
        exact
      >
        Contact
      </NavLink>
      <NavLink
        activeClassName="sidebar-link-active"
        className="sidebar-link"
        to="/cart"
        exact
      >
        My Cart ({totalCartQuantity})
      </NavLink>
      {isAuthenticated && (
        <>
          <NavLink
            activeClassName="sidebar-link-active"
            className="sidebar-link"
            to="/Dashboard"
            exact
          >
            Dashboard
          </NavLink>

          <NavLink
            activeClassName="sidebar-link-active"
            className="sidebar-link"
            to="/login"
            exact
            onClick={logOut}
          >
            Logout
          </NavLink>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { logOut })(SidebarLinks);
