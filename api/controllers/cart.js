const Cart = require('../models/Cart');
const errorHandler = require('../utilits/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const products = await Cart.find()
        res.status(200).json(products)
    } catch(e) {
        res.status(400).json({
            message: 'error'
        })
    }
}

module.exports.create = async (req, res) => {
    const product = new Cart({
        id: req.body.id,
        counter: req.body.counter,
        price: req.body.price,
        info: req.body.info,
        user: req.body.user,
        tag: req.body.tag,
        currency: req.body.currency
    })

    try {
        await product.save()
        res.status(201).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.delete = async (req,res) => {
    try {
        await Cart.deleteMany({
            id: req.body.id,
            user: req.body.user
        })
        res.status(200).json({
            message: 'позиция удалена'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async (req, res) => {
    console.log(req.body)
    const updated = {
        counter: req.body.counter
    }

    try {
        const product = await Cart.findOneAndUpdate(
          {
              id: req.body.id,
              user: req.body.user
          },
            updated,
            {new: false}
        )
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}