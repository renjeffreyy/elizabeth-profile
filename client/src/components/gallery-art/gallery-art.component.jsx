import React from 'react';

import { Col } from 'react-bootstrap';

import './gallery-art.style.scss';

const GalleryArt = ({ onClick, url }) => {
  return (
    <Col onClick={onClick} className="galleryArt-col" s={12} md={4}>
      <img className="gallery-img" src={url} alt="Elizabeth art" />
    </Col>
  );
};

export default GalleryArt;
