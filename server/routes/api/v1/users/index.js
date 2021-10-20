const express = require('express');
const router = express.Router();

//setting up routes for users folder 
router.use("/", require("./user"));
router.use("/product", require("./product"));

module.exports = router;
