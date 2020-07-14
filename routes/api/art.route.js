const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
require('dotenv').config();

const Art = require('../../models/art.model');

//@route    get api/art
//@desc     get art
//access    public

router.get('/art', async (req, res) => {
  try {
    const art = await Art.find().sort({ date: -1 });
    res.send(art);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
