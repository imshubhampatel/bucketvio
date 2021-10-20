const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userInfo: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ["male", "female", "transgender"],
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        profileImage: {
            type: String,
            required: true,
        }
    },

    userContact: {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobileOne: {
            type: Number,
            required: true,
            unique: true,
        },
        mobileTwo: {
            type: Number,
            required: true,
            unique: true,
        }
    },
    userAddress: {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
    },
    password: {
        type: String,
        required: true,
    },

    otp: {
        type: Number,
    },

    cartItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart"
        }
    ],
    wishlistItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wishlist"
        }
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;