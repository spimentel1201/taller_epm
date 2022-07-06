const express = require('express')
const router = express.Router()
const loginController = require('../controllers/LoginController')

router.get('/login', loginController.mostrar)
router.post('/login', loginController.signIn)
router.get('/signUp', loginController.mostrarS)
router.post('/signUpc', loginController.signUpc)
module.exports = router