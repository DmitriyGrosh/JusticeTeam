const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const authRoutes = require('./routes/auth')

mongoose.connect('mongodb+srv://user:user@cluster0.svigr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

const app = express()

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./midleware/passport')

app.use('/api/auth', authRoutes)

module.exports = app