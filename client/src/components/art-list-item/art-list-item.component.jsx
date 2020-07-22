import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './art-list-item.style.scss';

const ArtListItem = ({
  imgUrl,
  description,
  title,
  price,
  imgClick,
  btnClick,
}) => {
  return (
    <Row className="artListItem-container">
      <Col md={3}>
        <div
          onClick={() => imgClick()}
          className="artListItem-img"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </Col>
      <Col md={7}>
        <Row>Title: {title}</Row>
        <Row>Description: {description}</Row>
        <Row>price:${price}</Row>
      </Col>
      <Col md={2}>
        <Button onClick={btnClick}>Remove</Button>
      </Col>
    </Row>
  );
};

export default ArtListItem;
