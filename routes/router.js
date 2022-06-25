const express = require('express')
const { vistaPrincipal, vistaTables, vistaNotifications, vistaIcons, vistaProfile, vistaCreateGuide, vistaEditGuide } = require('../controllers/PageController')
const userController = require('../controllers/UserController')
const invoiceController = require('../controllers/InvoiceController')
const router = express.Router()

router.get('/', vistaPrincipal)
router.get('/tables', vistaTables)
router.get('/notifications', vistaNotifications)
router.get('/profile', vistaProfile)
router.get('/icons', vistaIcons)
router.get('/createGuide', vistaCreateGuide)
router.get('/editGuide', vistaEditGuide)
module.exports = { routes: router }