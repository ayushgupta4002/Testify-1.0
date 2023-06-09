const userModel = require("../db");

exports.emailcheck = function (req, res, next) {
  try {
    console.log("this is mail check")
    var emailuser = req.body.email;
    userModel
      .findOne({ email: emailuser })
      .then((data) => {
        console.log(data);
        if (data !== null ) {
          return res.status(401).json({ message: "user exists!" });
        }else{
            next();
        }
      })
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
  }
};