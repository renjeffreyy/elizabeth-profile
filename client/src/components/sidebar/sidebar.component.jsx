import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

import instagramIcon from '../../assets/instagram.png';
import SidebarLinks from '../sidebar-links/sidebar-links.component';
import './sidebar.style.scss';

const igLink = 'https://www.instagram.com/lil_happypanda/';

const Sidebar = () => {
  return (
    <Container className="sidebar-container">
      <Image
        className="sidebar-img"
        src="https://i.imgur.com/AWPOTsm.jpg"
        roundedCircle
      />
      <p className="sidebar-header-name">Elizabeth Ren</p>
      <p className="sidebar-paragraph-description">
        I love anime, video games, drawing and eating boogers
      </p>
      <a
        href={igLink}
        rel="noopener noreferrer"
        target="_blank"
        className="sidebar-anchor-link"
      >
        <img src={instagramIcon} alt="instagram icon" />
        <p className="sidebar-paragraph-ig">lil_happypanda</p>
      </a>
      <SidebarLinks />
    </Container>
  );
};
export default Sidebar;
