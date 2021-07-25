const express = require('express');
const passport = require("passport");
const auth = require("../../../middleware/auth");
const router = express.Router();
const userApi = require("../../../controllers/api/v1/user_api");

router.get("/",
    passport.authenticate("jwt", {session: false}),
    userApi.user
);

router.post("/sign-up",userApi.signUp);

router.post("/sign-in",userApi.signIn);

router.get("/sign-out",auth,userApi.destroySession);


module.exports = router;
