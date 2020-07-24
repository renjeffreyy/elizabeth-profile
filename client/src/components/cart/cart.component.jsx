import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-bootstrap/Button';

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((cartData) => {
            return (
              <CartItem
                key={cart.indexOf(cartData)}
                title={cartData.title}
                url={cartData.url}
                price={cartData.price}
                quantity={cartData.quantity}
              />
            );
          })}

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
        </>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(Cart);
