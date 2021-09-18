const User = require('../../../models/userSchema');
const qs = require("qs")


const userProduct = {
    addToCart: async (req, res) => {
        return res.status(200).json({ data: "success" });

    },
    removeToCart: async () => {
        return res.json({ data: "product removed to wishlist" })

    },
    addToWishlist: async () => {
        return res.json({ data: "product Added to wishlist" })

    },
    removeToWishlist: async () => {
        return res.json({ data: "product remove to wishlist" })

    },
}



module.exports = userProduct;


