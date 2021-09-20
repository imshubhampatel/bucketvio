const Admin = require('../../../models/adminSchema');
const Product = require("../../../models/productSchema")
const qs = require("qs")


const adminProduct = {
    createProduct: async (req, res) => {
        console.log(req.body)
        const adminId = req.user._id;
        try {

            await Admin.findById({ _id: adminId }, async (err, admin) => {
                if (err) console.log(err)
                if (admin) {
                    await Product.create(req.body, (err, product) => {
                        if (err) console.log(err)
                        if (product) {
                            console.log(product)
                            admin.products.push(product)
                            admin.save()
                        }
                    })
                }

            })

            return res.status(200).json({ data: "created success" });
        } catch (error) {
            return res.status(400).json({ data: "created eroor" });
        }

    },
    deleteProduct: async (req, res) => {
        let { itemId } = req.body;
        const adminId = req.user._id;
        console.log(adminId, itemId)

        try {
            await Admin.findById({ _id: adminId }, async (err, admin) => {
                if (err) console.log("err")
                if (admin) {
                    let deleteProduct = await Product.findByIdAndDelete({ _id: itemId })
                    let newProductArray = admin.products.filter((item) => {
                        return item.toString() !== itemId
                    })
                    admin.products = newProductArray
                    await admin.save();
                    return res.json({ data: "product removed", id: adminId })
                }
            })
        } catch (error) {
            return res.json({ data: "product didtn't removed", error })

        }


    },
    updateProduct: async (req, res) => {
        let { itemId } = req.body;
        const adminId = req.user._id;
        console.log(adminId, itemId)

        return res.json({ data: "product updated " })

    },
    removeToWishlist: async () => {
        return res.json({ data: "product remove to wishlist" })

    },
}



module.exports = adminProduct;


