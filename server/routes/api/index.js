const express = require('express');
const router = express.Router();

// Setting up routes v1 folder 
router.use("/v1", require("./v1"));

module.exports = router;
