const express = require('express');
const passport = require("passport");
const router = express.Router();
const adminApi = require("../../../../controllers/api/v1/admin_api")
router.get("/",
    passport.authenticate("admin", { session: false }),
    adminApi.admin
);
router.post("/sign-up", adminApi.register);

router.post("/sign-in", adminApi.login);

router.get("/sign-out", adminApi.logout);

router.get("/refresh-token", adminApi.refreshToken);


module.exports = router;
