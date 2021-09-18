const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    cart: {
        type: Array,
        default: [],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart;