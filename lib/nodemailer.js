"use strict";
const nodemailer = require("nodemailer");

const my_email = process.env.MY_MAIL;
const pass = process.env.NODEMAILER_PASS;
const key = process.env.RESEND_KEY;


console.log(my_email,pass,key,"hiii");


export const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: my_email,
    pass: process.env.NODEMAILER_PASS
  }
});

export const mailoptions =  {

    from: my_email,
    to:my_email
}

// async..await is not allowed in global scope, must use a wrapper


