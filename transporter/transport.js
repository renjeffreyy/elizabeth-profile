const nodemailer = require('nodemailer');
// const xoauth2 = require('xoauth2');
require('dotenv').config();

const transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.gmail_email,
    pass: process.env.gmail_secret,
    // xoauth2:xoauth2.createXOAuth2Generator({
    //     user:'',
    //     clientId:'',
    //     clientSecret:'',
    //     refreshToken:'',
    // })
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
