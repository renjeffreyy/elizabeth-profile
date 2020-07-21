import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  return (
    <div>
      <h1>Your Cart</h1>
      <CartItem />

      <StripeCheckout
        stripeKey=""
        token=""
        shippingAddress
        name="Checkout"
        description="Thank you for supporting my dream!"
        currency="USD"
      >
        <Button>Checkout</Button>
      </StripeCheckout>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Cart);
