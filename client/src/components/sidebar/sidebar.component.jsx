import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';

import './sidebar.style.scss';

const Sidebar = () => {
  return (
    <Container className="sidebar-container">
      <Image
        className="sidebar-img"
        src="https://i.imgur.com/AWPOTsm.jpg"
        roundedCircle
      />
      <h2>Elizabeth Ren</h2>
    </Container>
  );
};
export default Sidebar;
