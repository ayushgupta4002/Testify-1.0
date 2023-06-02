const express = require('express');
const { getdata } = require('../controllers/getdata');
const { keyverification } = require('../middleware/keyverification');
const router = express.Router();

router.route("/get-data/:key").get(keyverification,getdata);




module.exports=router;

