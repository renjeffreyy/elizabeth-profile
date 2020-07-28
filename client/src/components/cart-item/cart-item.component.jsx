import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './cart-item.style.scss';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cart.action';

const CartItem = ({ url, title, price, quantity, total, removeFromCart }) => {
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

            <p>Total: ${total}</p>
          </Row>
          <Row>
            <Button onClick={() => removeFromCart(url)}>Remove</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, { removeFromCart })(CartItem);
