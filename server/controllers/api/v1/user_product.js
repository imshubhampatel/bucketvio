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
    createCart: async (req, res) => {

    },

    addToCart: async (req, res) => {
        const { user: { _id: userId }, product: { _id: productId } } = req;
        let newCart = { cart: productId, user: userId }
        try {
            await User.findById(userId, async (err, user) => {
                if (err) console.log(err);
                if (user) {
                    await Cart.findOne({ user: userId }, (err, cartItem) => {
                        if (err) return res.status(400).json({ error: true, data: { message: "Failed to add in cart", errors: err.errors } })
                        if (!cartItem) {
                            console.log("notcart")
                            Cart.create(newCart)
                            return res.status(200).json({ error: false, data: { message: "Added in cart sucessfully", cartItem, user } })
                        }
                        if (cartItem) {
                            cartItem.products.push = productId;
                            cartItem.save();
                            return res.status(200).json({ error: false, data: { message: "Added in cart sucessfully", cartItem, user } })
                        }
                    })
                }
            });
        } catch (error) {
            return res.status(400).json({ error: true, data: { message: "Failed to add in cart", error } })
        }
    },

    deleteFromCart: async (req, res) => {
        console.log(req)
        const { product: { _id: productId }, user: { _id: userId } } = req;
        try {
            await User.findById({ _id: userId }, async (err, user) => {
                if (err) console.log("err", err)
                if (user) {
                    //checked
                    await Cart.findOneAndUpdate()
                    return res.status(200).json({ error: false, data: { message: "product removed to cart sucessfully", user } })
                }
            })
        } catch (error) {
            return res.json({ data: "product didtn't removed", error })

        }

    },
    addToWishlist: async () => {
        return res.json({ data: "product Added to wishlist" })

    },
    removeToWishlist: async () => {
        return res.json({ data: "product remove to wishlist" })

    },
}



module.exports = userProduct;


