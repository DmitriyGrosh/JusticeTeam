const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    info: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: '$',
        required: false
    },
    tag: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: false,
        default: 'lamp'
    },
    count: {
        type: Number,
        required: false,
        default: 10
    }
})

module.exports = mongoose.model('products', productSchema)