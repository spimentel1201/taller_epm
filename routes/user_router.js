const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')

router.get('/users', userController.mostrar)
module.exports = router