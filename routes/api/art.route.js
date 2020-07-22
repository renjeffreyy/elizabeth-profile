const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
require('dotenv').config();
const auth = require('../../middleware/auth.middleware');
const checkObjectId = require('../../middleware/check-object-id');
const Art = require('../../models/art.model');

//@route    get api/art
//@desc     get art
//access    public

router.get('/', async (req, res) => {
  try {
    const art = await Art.find().sort({ date: -1 });
    res.send(art);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route    post api/art
//@desc     upload art
//access    private

router.post(
  '/',
  [
    auth,
    check('name', 'please include a name').not().isEmpty(),
    check('description', 'please include a description').not().isEmpty(),
    check('url', 'please include a url').not().isEmpty(),
    check('price', 'please include a price', 'please input a number')
      .not()
      .isEmpty()
      .toFloat(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, url, price } = req.body;
    try {
      let art = await Art.findOne({ url });
      if (art) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'art already exists' }] });
      }

      art = new Art({
        artName: name,
        artDescription: description,
        url: url,
        price: price,
      });
      console.log(art);
      await art.save();
      res.status(200).send({ msg: 'art uploaded' });
    } catch (error) {
      console.error(error);
    }
  }
);

//@route    delete api/art/:id
//@desc     delete art
//access    private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const art = await Art.findById(req.params.id);

    await art.remove();
    res.status(200).send({ msg: 'Removed Successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: 'Server Error' });
  }
});

module.exports = router;
