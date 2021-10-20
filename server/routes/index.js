const express = require('express');
const router = express.Router();

// setting up routes api folder 
router.use("/api", require("./api"));

module.exports = router;
