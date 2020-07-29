const express = require('express');
const router = express.Router();
require('dotenv').config();

const stripe = require('stripe')(process.env.stripe_secret_key);
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res) => {
  try {
    const { cart, token, total } = req.body;

    //prevents user from being charged twice
    const idempotencyKey = uuidv4();

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create(
      {
        amount: total * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: `purchase for ${customer.id} total: ${total}`,
        shipping: {
          name: token.card.name,
          address: {
            city: token.card.address_city,
            country: token.card.address_country,
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            postal_code: token.card.address_zip,
            state: token.card.address_state,
          },
        },
      },

      { idempotencyKey }
    );
    res.status(200).send('purchase made');
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
