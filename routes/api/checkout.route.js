const express = require('express');
const router = express.Router();
require('dotenv').config();

const stripe = require('stripe')('pk_test_Ri5kcUtCNbLtjSjyj73MgW3S00PWMa4HgG');
const { v4: uuidv4 } = require('uuid');

router.post('/', (req, res) => {
  const { cart, token } = req.body;
  console.log('cart', cart);
  console.log('price', cart.price);

  //prevents user from being charged twice
  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: cart.price * 100,
          currency: 'usd',
          customer: customer.id,
          receipt_email: token.email,
          description: cart.name,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address,
            },
          },
        },

        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

module.exports = router;
