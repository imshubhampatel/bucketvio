const express = require('express');
const passport = require("passport");
const router = express.Router();
const adminProduct = require("../../../../controllers/api/v1/admin_product")

router.post("/create", passport.authenticate("admin", { session: false }),
    adminProduct.createProduct
)
router.post("/delete", passport.authenticate("admin", { session: false }),
    adminProduct.deleteProduct
)


router.patch("/update", passport.authenticate("admin", { session: false }),
    adminProduct.updateProduct
)



module.exports = router;
