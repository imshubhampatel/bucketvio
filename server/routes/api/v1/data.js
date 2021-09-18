const express = require("express");
const router = express.Router();
const homeController = require("../../../controllers/homeController");
const userApi = require("../../../controllers/api/v1/user_api")

router.get("/phones", homeController.data);
router.get("/refresh-token", userApi.refreshToken);

module.exports = router;