const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    counter: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('carts', cartSchema)