var nodemailer = require("nodemailer");
require("dotenv").config();
const otpGenerator = require("otp-generator");
const userModel = require("../db");
const { response } = require("express");
require("dotenv").config();

exports.send = async function (req, res) {
  var email = req.body.email;
  console.log(email);
  sendMail(req, res, { email });
};

function otp() {
  const otpgenerated = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
  console.log(otpgenerated);
  return otpgenerated;
}

const sendMail = function (req, res, { email }) {
  var otpgenerated = otp();

  var emailuser = email;

  var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: '"Ayush" <ayush4002gupta@gmail.com>',
    to: emailuser,
    subject: "OTP for verification",
    text: `Hey there, <p> This is your otp for verification : <b> ${otpgenerated} </b>`,
    html: `Hey there, <p> This is your otp for verification : <b> ${otpgenerated} </b>`,
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // console.log(info);
    // console.log('Message sent: %s', info.messageId);

    userModel
      .findOne({ email: emailuser })
      .then((result) => {
        if (result === null) {
          const user = new userModel({
            email: emailuser,
            otpverified: "",
            otp: otpgenerated,
            key: "",
          });
          user.save().then(() => {
            res.status(200).json({ message: "email sent with otp" });
          });
        }
        else if (result.otpverified !== "1") {
          userModel
          .updateOne({ email: emailuser }, { $set: { otp : otpgenerated } })
          .then(() => res.send({"message":"new otp is sent"}))
          .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  });


};

