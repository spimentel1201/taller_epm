const Budget = require('../models/Budget')
module.exports.mostrar2 = (req, res, next) => {
    var perPage = 9
    var page = req.params.page || 1
    Budget.find({}).skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, presupuestos) {
            Budget.count().exec(function(err, count) {
                if (err) return next(err)
                res.render('budgets', {
                    presupuestos: presupuestos,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        })
}
module.exports.mostrar = (req, res) => {
    Budget.find({}, (error, presupuestos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los presupuestos'
            })
        }
        return res.render('budgets', { presupuestos: presupuestos })
    })
}
module.exports.createBudget = async(req, res) => {

    try {
        const { codigo_guia, nombre, artefacto, monto_total, fecha, detalle } = req.body

        const budget = new Budget({ codigo_guia, nombre, artefacto, monto_total, fecha, detalle })

        //res.status(201).json(budget)
        //const budget = Budget(req.body)
        const budgetSaved = await budget.save()
        console.log(budget)
        return res.redirect('/budgets')
    } catch (error) {
        console.log(error)
    }
}
module.exports.edit = async(req, res) => {
    await Budget.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true
    }).exec()
    console.log(req.body)
    return res.redirect('/')
}
module.exports.editbudget = async(req, res) => {
    const { id } = req.params
    const presupuestos = await Budget.findById(id).lean()
    console.log(presupuestos)
    return res.render('editbudget2', { presupuestos: presupuestos })
}

module.exports.findBudget = async(req, res) => {
    const { find } = req.body
    console.log(find)
    Budget.findOne({ codigo_guia: find }, (error, budget) => {
        if (error) {
            return res.status(500).json({
                message: 'Error'
            })
        } else if (!budget) {
            return res.status(500).json({
                message: 'La guía no existe'
            })
        } else {
            let fullname = budget.nombre
            let fullgadget = budget.artefacto
            let total = budget.monto_total
            const budgetData = {
                code: budget.codigo_guia,
                client: fullname,
                gadget: fullgadget,
                total: total
            }
            console.log(budgetData.client)
            console.log(budgetData.total)
            console.log(budget.fecha)
            console.log(budget.fecha.getMonth())
            let dd = new Date()
            let mont = dd.getMonth()
            console.log(mont)
            res.render('recordPayment', {
                budgetData: budgetData
            })
        }
        /*return res.render('guides', { usuarios: user })*/
        /*return res.redirect('/guides')*/
    })
}