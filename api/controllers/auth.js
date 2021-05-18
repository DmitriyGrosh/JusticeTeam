const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const errorHandler = require('../utilits/errorHandler')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({
    email: req.body.email
  })

  if (candidate) {
    const password = bcrypt.compareSync(req.body.password, candidate.password)

    if (password) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, 'secret', {expiresIn: 3600})
      res.status(200).json({
        token: `Bearer ${token}`
      })
    }
  } else {
    res.status(404).json({
      message: 'такой пользователь отсутсвует'
    })
  }
}

module.exports.register = async (req, res) => {

  const candidate = await User.findOne({
    email: req.body.email
  })

  if (candidate) {
    res.status(409).json({
      message: 'такой пользователь уже существует'
    })
  } else {
    const salt = await bcrypt.genSaltSync(10)
    const password = await req.body.password
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    })

    try {
      await user.save()
      res.status(201).json(user)
    } catch(e) {
      errorHandler(res, e)
    }
  }
}