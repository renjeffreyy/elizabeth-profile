import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-bootstrap/Button';
import ArtModal from '../artModal/art-modal.component';
import { makePayment } from '../../actions/cart.action';

const Cart = ({ cart, total, makePayment }) => {
  const processPayment = (token) => {
    makePayment({ token, cart, total });
  };

  return (
    <div>
      <ArtModal />
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
                total={cartData.quantity * cartData.price}
              />
            );
          })}

          <div>
            <p>Cart Total: ${total}</p>
          </div>

          <StripeCheckout
            stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
            token={processPayment}
            shippingAddress
            billingAddress
            name="Checkout"
            description="Thank you for supporting my dream!"
            currency="USD"
            amount={total * 100}
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
  total: state.cart.total,
});

export default connect(mapStateToProps, { makePayment })(Cart);
