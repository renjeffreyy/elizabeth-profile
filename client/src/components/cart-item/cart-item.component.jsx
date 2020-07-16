import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CartItem = ({ url, title, price, quantity, total }) => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <img src={url} alt="cart-item" />
        </Col>
        <Col md={9}>
          <h3>{title}</h3>
          <p>price: ${price}</p>
          <p>quantity:</p>
          <input type="number" value={quantity} />
          <p>Total: {total}</p>
          <p>Remove</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
