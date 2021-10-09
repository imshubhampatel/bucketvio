const User = require('../../../models/userSchema');
const Product = require('../../../models/productSchema');
const Cart = require('../../../models/cartSchema');
const Wishlist = require('../../../models/cartSchema');


const userProduct = {
    getProducts: async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 6;
        const skip = (page - 1) * pageSize;
        const totalDocs = await Product.countDocuments();
        const pages = parseInt(Math.ceil(totalDocs / pageSize));

        if (page > pages) {
            return res.status(200).json({
                error: true,
                message: "Page not found",
            })
        }
        try {
            let allProducts = await Product.find();
            let products = await Product.find().skip(skip).limit(pageSize);
            return res.status(200)
                .json({
                    error: false,
                    count: totalDocs,
                    page,
                    pages,
                    product: products.length,
                    data: {
                        message: "Product fetched successfully",
                        products,
                        allProducts
                    }
                });
        } catch (error) {
            return res.status(401).json({
                error: true,
                data: {
                    message: "failed to get products",
                    error: error
                }
            })
        }
    },

    addToCart: async (req, res) => {
        try {
            let user = await User.findOne(req.user._id).populate("cartItems");
            let cart = await Cart.findOne({ $and: [{ "user": req.user._id }, { "cart": req.product._id }] })
            if (cart) {
                return res.status(400).json({
                    error: true,
                    data: {
                        message: "already exists in cart",
                        cart
                    }
                })
            }
            if (!cart) {
                cart = new Cart({
                    user: req.user._id,
                    cart: req.product._id,
                })
                await cart.save();
                user.cartItems.push(cart);
                await user.save();
                return res.status(200).json({
                    error: false,
                    data: {
                        message: "Added in cart sucessfully",
                        cart
                    }
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: true,
                data: {
                    message: "Internal server Error",
                    error
                }
            })
        }
    },

    deleteFromCart: async (req, res) => {
        try {
            let user = await User.findOne(req.user._id).populate("cartItems");
            let cart = await Cart.findOne({ $and: [{ "user": req.user._id }, { "cart": req.product._id }] });
            await cart.remove()
            user.cartItems.pull(cart)
            await user.save();
            return res.status(200).json({
                error: false,
                data: {
                    message: "Deleted from cart sucessfully",
                    cart
                }
            })
        } catch (error) {
            return res.status(400).json({
                error: true,
                data: {
                    message: "Failed to Delete from cart",
                    error
                }
            })
        }

    },

    cartIncOrDec: async (req, res) => {
        const { actionType } = req.params;
        try {
            if (actionType === "inc") {
                let cart = await Cart.findOneAndUpdate(
                    { $and: [{ user: req.user._id }, { cart: req.params.productId }] },
                    { $inc: { quantity: 1 } },
                    { new: true }
                )
                if (!cart) {
                    return res.status(404).json({
                        error: true,
                        data: {
                            message: "Product not found in cart",
                        }
                    })
                }
                return res.status(200).json({
                    error: false,
                    data: {
                        message: "Increased quantity in cart",
                        cart
                    }
                })
            }
            if (actionType === "dec") {
                let cart = await Cart.findOneAndUpdate(
                    { $and: [{ user: req.user._id }, { cart: req.params.productId }] },
                    { $inc: { quantity: -1 } },
                    { new: true }
                )
                if (!cart) {
                    return res.status(404).json({
                        error: true,
                        data: {
                            message: "Product not found in cart",
                        }
                    })
                }
                return res.status(200).json({
                    error: false,
                    data: {
                        message: "Decreased quantity in cart",
                        cart
                    }
                })
            }
        }
        catch (error) {
            return res.status(500).json({
                error: true,
                data: {
                    message: "Internal server Error",
                    error
                }
            })

        }

    },
    
}

module.exports = userProduct;


