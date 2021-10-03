const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
    }
}, {
    timestamps: true
});

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart;