const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: false,
    unique: true,
    default: ''
  },
  password: {
    type: String,
    required: false,
    default: '',
  }
})

module.exports = mongoose.model('users', userSchema)