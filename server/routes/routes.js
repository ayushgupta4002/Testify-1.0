const express = require("express");
const { getdata } = require("../controllers/getdata");
const { keyverification } = require("../middleware/keyverification");
const { send } = require("../controllers/sendotp");
const { verify, verifyotp } = require("../controllers/verifyotp");
const { emailcheck } = require("../middleware/emailcheck");

const router = express.Router();

router.route("/sendotp").post(emailcheck,send);
router.route("/verify").post(verifyotp);
router.route("/get-data/:key").get(keyverification, getdata);

module.exports = router;
