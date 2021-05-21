const express = require('express')
const controller = require('../controllers/cart')
const passport = require('passport')
const router = express.Router()

router.get('/',passport.authenticate('jwt', {session: false}), controller.getAll)
router.post('/',passport.authenticate('jwt', {session: false}), controller.create)
router.delete('/', passport.authenticate('jwt', {session: false}), controller.delete)
router.patch('/',passport.authenticate('jwt', {session: false}),  controller.update)

module.exports = router