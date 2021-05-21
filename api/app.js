const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const product = require('./routes/products')
const authRoutes = require('./routes/auth')
const cart = require('./routes/cart')

mongoose.connect('mongodb+srv://user:user@cluster0.svigr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

const app = express()

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./midleware/passport')(passport)

app.use('/api/cart', cart)
app.use('/api/product', product)
app.use('/api/auth', authRoutes)

module.exports = app