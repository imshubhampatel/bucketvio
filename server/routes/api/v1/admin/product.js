const express = require('express');
const passport = require("passport");
const router = express.Router();
const adminProduct = require("../../../../controllers/api/v1/admin_product")
const { getProductId } = require("../../../../middleware/checkProduct")


router.param("productId", getProductId)


// get products with pagination
router.get("/", passport.authenticate("admin", { session: false })
    , adminProduct.getProduct
)

// create product
router.post("/create", passport.authenticate("admin", { session: false })
    , adminProduct.createProduct
)

// delete product
router.post("/:productId/delete", passport.authenticate("admin", { session: false })
    , adminProduct.deleteProduct
)

// update product

router.put("/:productId/update", passport.authenticate("admin", { session: false })
    , adminProduct.updateProduct
)




module.exports = router;
