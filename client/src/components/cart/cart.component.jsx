import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const Cart = () => {
  return (
    <div>
      <h1>Your Cart</h1>

      <CartItem />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Cart);
