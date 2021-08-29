const mongoose = require("mongoose");

const userSchama = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array
    },
    wishlist: {
        type: Array
    }

}, {
    timestamps: true
});

const User = mongoose.model("User", userSchama);
module.exports = User;