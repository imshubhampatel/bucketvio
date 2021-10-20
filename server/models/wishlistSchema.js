const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    wishlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema)
module.exports = Wishlist;