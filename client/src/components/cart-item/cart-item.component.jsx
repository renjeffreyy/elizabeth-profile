import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './cart-item.style.scss';

const CartItem = ({ url, title, price, quantity, total }) => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <img src={url} alt="cart-item" />
        </Col>
        <Col md={9}>
          <h3>Art:{title}</h3>
          <p>price: ${price}</p>
          <span className="CartItem-quantity-span">
            <p>quantity:</p>
            <input type="number" value={quantity} />
          </span>

          <p>Total: {total}</p>
          <Button>Remove</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
