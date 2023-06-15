var nodemailer = require('nodemailer');
require("dotenv").config();
const otpGenerator = require('otp-generator');
const userModel = require('../db');
const { response } = require('express');
require('dotenv').config()


exports.send = async function (req, res) {
  var email = req.body.email;
  console.log(email)
  sendMail(req,res,{email})

}
 
function otp() {
  const otpgenerated = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
  console.log(otpgenerated);
  return otpgenerated;
  
}

 const sendMail =  function(req,res,{email}){

  var otpgenerated=otp();

 


  var emailuser = email;

  var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });


  var mailOptions = {
    from: '"Ayush" <ayush4002gupta@gmail.com>',
    to: emailuser,
    subject: 'Nice Nodemailer test',
    text: `Hey there, This is your otp for verification : ${otpgenerated}`,
    html: `<b>Hey there! </b>This is your otp for verification : ${otpgenerated}`,

  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // console.log(info);
    // console.log('Message sent: %s', info.messageId);



    const user = new userModel({
      email: emailuser,
      otpverified: "",
      otp: otpgenerated,
      key: ""

    });

    user.save().then(() => { 
      res.status(200).json({ message: 'email sent with otp' });

     });

  })



  setTimeout(() => {
    deleteotp(emailuser)

  }, 240000);


}

const deleteotp = (emailuser) => {


  // userModel.updateOne({ email: emailuser }, { $set: { otp: "" } })
  //   .then(() => console.log("otp field empty"))
  //   .catch((error) => console.log(error))

  console.log("this is delete entry console");
  userModel
    .findOne({ email: emailuser })
    .then((result) => {
      console.log(result)
      if (result.otpverified !== "1") {
        userModel
          .deleteOne({ email: emailuser })
          .then(() => console.log("deleted entry"))
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error))

}
