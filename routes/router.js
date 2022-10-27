const express = require('express')
const { vistaPrincipal, vistaTables, vistaNotifications, vistaIcons, vistaProfile, vistaCreateGuide, vistaEditGuide, vistaLogin, vistaSignUp, vistaCreateBudget, vistaRecordPayment } = require('../controllers/PageController')
const userController = require('../controllers/UserController')
const invoiceController = require('../controllers/InvoiceController')
const router = express.Router()
router.get('/login', vistaLogin)
router.get('/signUp', vistaSignUp)
router.get('/home', vistaPrincipal)
router.get('/tables', vistaTables)
router.get('/notifications', vistaNotifications)
router.get('/profile', vistaProfile)
router.get('/icons', vistaIcons)
router.get('/createGuide', vistaCreateGuide)
router.get('/editGuide', vistaEditGuide)
    //router.get('/budgets', vistaBudget)
router.get('/createBudget', vistaCreateBudget)
router.get('/recordPayment', vistaRecordPayment)
module.exports = { routes: router }