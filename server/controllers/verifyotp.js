const userModel = require("../db");
var nodemailer = require('nodemailer');

exports.verify = async function (req, res) {
  try {
    var otpmain = req.body.otp;

    console.log(otpmain);

    userModel.findOne({ otp: otpmain }).then((result) => {
      console.log(result);
      var key = result._id;
      var email = result.email;
      console.log(key);
      sendkey(req, res, { email }, { key });
    });
  } catch (error) {}
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
    console.log(info);
    console.log("Message sent: %s", info.messageId);

    userModel
      .updateOne({ email: emailuser }, { $set: {  key: key } })
      .then(() => res.json({
        message:"Key sent to your email"
      }))
      .catch((error) => console.log(error));

 

})};
