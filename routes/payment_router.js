const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/PaymentController')

router.get('/payments', paymentController.mostrar)
router.post('/createPayment', paymentController.createPayment)
router.post('/edit/:id', paymentController.edit)
router.get('/editPayment/:id', paymentController.editpayment)
module.exports = router