const userModel = require("../db");
var nodemailer = require("nodemailer");

const deletentry = (emailuser) => {
  console.log("this is delete entry console");
  userModel
    .findOne({ email: emailuser })
    .then((result) => {
      if (result.otpverified !== "1") {
        userModel
          .deleteOne({ email: emailuser })
          .then(() => console.log("deleted entry"))
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};

exports.verifyotp = async function (req, res) {
  try {
    var otpmain = req.body.otp;
    var emailuser = req.body.email;

    console.log(otpmain);

    userModel.findOne({ email: emailuser }).then((result) => {

      if(result==null){
        res.send({
          message: "otp expired",
        });
      }


      else if (result.otp == otpmain) {
        userModel
          .updateOne({ email: emailuser }, { $set: { otpverified: "1" } })
          .then(() => console.log("otp field empty"))
          .catch((error) => console.log(error));

        var key = result._id;
        var email = result.email;
        console.log(key);
        sendkey(req, res, { email }, { key });
      }
      else if (result == null) {
        res.send({
          message: "otp expired please try again",
        });
        deletentry(emailuser);
      }
      else if (result.otp !== otpmain) {
        res.send({
          message: "wrong otp",
        });
        setTimeout(() => {
          deletentry(emailuser);
        }, 300000);
      }
    });
  } catch (error) {}
};

exports.verify = async function (req, res) {
 
};

const sendkey = function (req, res, { email }, { key }) {
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
    subject: "Your verification key",
    text: `Hey there, This is your otp for verification : ${key}`,
    html: `<b>Hey there! </b>This is your verification key for the api: ${key}`,
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // console.log(info);
    // console.log("Message sent: %s", info.messageId);

    userModel
      .updateOne({ email: emailuser }, { $set: { key: key } })
      .then(() =>
        res.send({
          message: "Key sent to your email",
        })
      )
      .catch((error) => console.log(error));
  });
};
