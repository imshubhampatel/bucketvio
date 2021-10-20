const _ = require("lodash")
const Admin = require('../../../models/adminSchema');
const Product = require("../../../models/productSchema");


const adminProduct = {
    createProduct: async (req, res) => {
        console.log(req.user)
        const adminId = req.user._id;
        try {

            await Admin.findById({ _id: adminId }, async (err, admin) => {
                if (err) console.log(err)
                if (admin) {
                    await Product.create({ ...req.body, createdByAdmin: admin._id }, (err, product) => {
                        if (err) return res.status(400).json({ error: true, data: { message: "Failed to create product", errors: err.errors } })
                        if (product) {
                            console.log(product.title)
                            admin.products.push(product)
                            admin.save()
                            return res.status(200).json({ error: false, data: { message: "Product created sucessfully", createdProduct: product } })
                        }
                    })
                }
            })

        } catch (error) {
            return res.status(400).json({ data: "created eroor" });
        }

    },
    deleteProduct: async (req, res) => {
        const { product: { _id: itemId }, user: { _id: adminId } } = req;

        try {
            await Admin.findById({ _id: adminId }, async (err, admin) => {
                if (err) console.log("err", err)
                if (admin) {
                    let deleteProduct = await Product.findByIdAndDelete({ _id: itemId })
                    let newProductArray = admin.products.filter((item) => {
                        return item.toString() !== itemId.toString();
                    })
                    admin.products = newProductArray
                    await admin.save();
                    return res.status(200).json({ error: false, data: { message: "product removed sucessfully", deletedProduct: deleteProduct } })
                }
            })
        } catch (error) {
            return res.json({ data: "product didtn't removed", error })

        }


    },
    updateProduct: async (req, res) => {
        let { user: { _id: adminId }, product, body: newProduct } = req;

        console.log(`admin id ${adminId} update product`)
        product = _.extend(product, newProduct)


        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                { _id: product._id },
                { $set: product },
                { new: true },
            )
            return res.status(200).json({ error: false, data: { message: "product updated Sucessfully", product: updatedProduct } })
        } catch (error) {
            return res.status(401).json({ error: true, data: { message: "product not updated", error: error } })
        }
    },
    getProduct: async (req, res) => {
        const { user: { _id: adminId } } = req;

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

            console.log(products)
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
}



module.exports = adminProduct;


