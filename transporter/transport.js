const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.gmail_email,
    pass: process.env.gmail_secret,
    port: 465,
    secure: true,
  },
};
const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

module.exports = transporter;
