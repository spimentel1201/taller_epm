const express = require('express')
const router = express.Router()
const budgetController = require('../controllers/BudgetController')

router.get('/budgets', budgetController.mostrar)
router.post('/create', budgetController.create)
router.post('/edit/:id', budgetController.edit)
router.get('/editBudget/:id', budgetController.editbudget)
module.exports = router