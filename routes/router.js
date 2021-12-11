const express = require('express')
const { vistaPrincipal, vistaTables, vistaNotifications, vistaIcons, vistaProfile, vistaCreateGuide } = require('../controllers/PageController')
const userController = require('../controllers/UserController')

const router = express.Router()

router.get('/', vistaPrincipal)
router.get('/tables', vistaTables)
router.get('/notifications', vistaNotifications)
router.get('/profile', vistaProfile)
router.get('/icons', vistaIcons)
router.get('/createGuide', vistaCreateGuide)
module.exports = { routes: router }