const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator');
const transporter = require('../../transporter/transport');
require('dotenv').config();

//@route    POST api/contact
//@desc     send email to admin
//@access   public

router.post('/', (req, res) => {
  try {
    const { name, email, message } = req.body;
    var content = `name: ${name} \n email: ${email} \n message: ${message}`;

    const mail = {
      from: name,
      to: process.env.gmail_email,
      subject: `new message from Contact form from ${name}`,
      text: content,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          variant: 'danger',
          msg: 'fail',
        });
      } else {
        res.json({
          variant: 'success',
          msg: 'success',
        });
      }
    });
  } catch (error) {
    console.error('this is the error', error);
  }
});

module.exports = router;
