const express = require('express')
const router = express.Router()
const invoiceController = require('../controllers/InvoiceController')

router.get('/guides/:page', invoiceController.mostrar)
router.get('/guides', invoiceController.mostrar)
router.post('/create', invoiceController.create)
router.post('/edit/:id', invoiceController.edit)
router.get('/editGuide/:id', invoiceController.editGuide)
router.post('/findGuide', invoiceController.findGuide)
router.post('/findGuideP', invoiceController.findGuideP)
module.exports = router