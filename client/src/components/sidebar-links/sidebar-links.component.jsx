import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/auth.action';

import './sidebar-links.style.scss';

const SidebarLinks = ({ isAuthenticated, logOut }) => {
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
      {isAuthenticated && (
        <NavLink
          activeClassName="sidebar-link-active"
          className="sidebar-link"
          to="/login"
          exact
          onClick={logOut}
        >
          Logout
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logOut })(SidebarLinks);
