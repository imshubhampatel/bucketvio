const express = require('express');
const passport = require("passport");
const auth = require("../../../middleware/auth");
const router = express.Router();
const userApi = require("../../../controllers/api/v1/user_api");

router.get("/",
    passport.authenticate("jwt", { session: false }),
    userApi.user
);

// router.post("/add-to-cart",
//     passport.authenticate("jwt", { session: false }),
//     userApi.user
// )
router.post("/sign-up", userApi.register);

router.post("/sign-in", userApi.login);

router.get("/sign-out", auth, userApi.logout);

router.get("/refresh-token", userApi.refreshToken);


module.exports = router;
