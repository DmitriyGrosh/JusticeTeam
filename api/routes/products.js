const express = require('express')
const upload = require('../midleware/uplaod')
const controller = require('../controllers/products')
const passport = require('passport')
const router = express.Router()

router.get('/', controller.getAll)
router.post('/',upload.single('image'), controller.create)
router.patch('/',passport.authenticate('jwt', {session: false}),  controller.update)

module.exports = router