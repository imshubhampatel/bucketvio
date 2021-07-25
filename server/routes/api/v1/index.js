const express = require('express');
const router = express.Router();

//setting up routes for users folder 
router.use("/users", require("./user"));
router.use("/data", require("./data"));

module.exports = router;
