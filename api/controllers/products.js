const Product = require('../models/Product')
const errorHandler = require('../utilits/errorHandler')

module.exports.getAll = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch(e) {
        res.status(400).json({
            message: 'error'
        })
    }
}

module.exports.create = async (req, res) => {
    const product = new Product({
        info: req.body.info,
        image: req.file.path,
        price: req.body.price,
        id: req.body.id,
        tag: req.body.tag,
        count: req.body.count
    })

    try {
        await product.save()
        res.status(201).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async (req, res) => {
    const updated = {
        count: req.body.count
    }
    try {
        const product = await Product.findOneAndUpdate(
            {id: req.body.id},
            updated,
            {new: true}
        )
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}