const express = require('express');
const router = express.Router();

//setting up routes for users folder 
router.use("/users", require("./users"));
router.use("/data", require("./data/data"));
router.use("/admin", require("./admin"));

module.exports = router;
