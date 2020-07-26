import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './cart-item.style.scss';

const CartItem = ({ url, title, price, quantity, total }) => {
  return (
    <Container className="cartItem-container">
      <Row>
        <Col md={3}>
          <div
            className="cartItem-img"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        </Col>
        <Col md={9} className="cartItem-column-container">
          <Row>
            <p>Art:{title}</p>
            <p>price: ${price}</p>
            <span className="CartItem-quantity-span">
              <p>quantity:</p>
              <input type="number" value={quantity} />
            </span>

            <p>Total: {total}</p>
          </Row>
          <Row>
            <Button>Remove</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
