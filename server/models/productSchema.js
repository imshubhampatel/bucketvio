const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    camera: {
        type: String,
        required: true,
    },
    battery: {
        type: String,
        required: true,
    },
    memory: {
        type: String,
        required: true,
    },
    cpu: {
        type: String,
        required: true,
    },
    display: {
        type: String,
        required: true,
    },
    instock: {
        type: Boolean,
        required: true,
        default: true,
    },
    delivery: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    createdByAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    },
    quantity: {
        type: Number,
        default: 1,
    }

})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;