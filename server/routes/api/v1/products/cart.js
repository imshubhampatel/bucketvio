const express = require('express');
const passport = require("passport");
const router = express.Router();
const userProduct = require('../../../../controllers/api/v1/user_product');

router.patch("/add-to-cart",
    passport.authenticate("jwt", { session: false }),
    userProduct.addToCart
);
router.patch("/delete-to-cart",
    passport.authenticate("jwt", { session: false }),
    userProduct.removeToCart
);
router.patch("/add-to-wishlist",
    passport.authenticate("jwt", { session: false }),
    userProduct.addToWishlist
);
router.patch("/remove-to-wishlist",
    passport.authenticate("jwt", { session: false }),
    userProduct.removeToWishlist
);

module.exports = router;
