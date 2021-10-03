const Product = require("../models/productSchema")
const Cart = require("../models/cartSchema")

exports.getProductId = async (req, res, next, id) => {
    try {
        let product = await Product.findById({ _id: id });
        if (!product) throw new Error("product not found")
        req.product = product;
        next();
    } catch (err) {
        return res
            .status(400)
            .json({ error: true, message: "Failed to Get the Product!", err });
    }
};
exports.getCartId = async (req, res, next, id) => {
    try {
        let cart = await Cart.findById({ _id: id });
        if (!cart) throw new Error("Cart not found");
        req.cart = cart;
        next();
    } catch (err) {
        return res
            .status(400)
            .json({ error: true, message: "Failed to Get the Cart!", err });
    }
};
