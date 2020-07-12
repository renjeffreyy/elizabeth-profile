import React from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar-links.style.scss';

const SidebarLinks = () => {
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
    </div>
  );
};

export default SidebarLinks;
