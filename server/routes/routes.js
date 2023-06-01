const express = require('express');
const { getdata } = require('../controllers/getdata');
const router = express.Router();

router.route("/get-data").get(getdata);




module.exports=router;