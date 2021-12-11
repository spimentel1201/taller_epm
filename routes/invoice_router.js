const express = require('express')
const router = express.Router()
const invoiceController = require('../controllers/InvoiceController')

router.get('/guides', invoiceController.mostrar)
module.exports = router