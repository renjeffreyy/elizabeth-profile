import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './cart-item.style.scss';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal.action';
import {
  removeFromCart,
  addToCart,
  removeOneFromCart,
} from '../../actions/cart.action';

const CartItem = ({
  url,
  title,
  price,
  quantity,
  total,
  removeFromCart,
  addToCart,
  removeOneFromCart,
  showModal,
  description,
}) => {
  const addQty = () => {
    addToCart({
      url: url,
      title: title,
      price: price,
      quantity: 1,
    });
  };

  const reduceQty = () => {
    if (quantity === 1) {
      removeFromCart(url);
    }

    removeOneFromCart({
      url: url,
      title: title,
      price: price,
      quantity: 1,
    });
  };

  return (
    <Container className="cartItem-container">
      <Row>
        <Col md={3}>
          <div
            className="cartItem-img"
            style={{ backgroundImage: `url(${url})` }}
            onClick={() =>
              showModal({
                url: url,
                artName: title,
                price: price,
              })
            }
          ></div>
        </Col>
        <Col md={9} className="cartItem-column-container">
          <Row>
            <p>Art:{title}</p>
          </Row>
          <Row>
            <p>price: ${price}</p>
            <span className="CartItem-quantity-span">
              <p>quantity:</p>
              <p onClick={() => reduceQty()} className="cartItem-arrows">
                &#10094;
              </p>
              <p>{quantity}</p>
              <p onClick={() => addQty()} className="cartItem-arrows">
                &#10095;
              </p>
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

export default connect(null, {
  removeFromCart,
  addToCart,
  removeOneFromCart,
  showModal,
})(CartItem);
