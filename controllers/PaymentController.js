const Payment = require('../models/Payment')
module.exports.mostrar2 = (req, res, next) => {
    var perPage = 9
    var page = req.params.page || 1
    Payment.find({}).skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, pagos) {
            Payment.count().exec(function(err, count) {
                if (err) return next(err)
                res.render('payments', {
                    pagos: pagos,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        })
}
module.exports.mostrar = (req, res) => {
    Payment.find({}, (error, pagos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los pagos'
            })
        }
        return res.render('payments', { pagos: pagos })
    })
}
module.exports.createPayment = async(req, res) => {

    try {
        const { codigo_guia, monto_total, a_cuenta } = req.body

        const payment = new Payment({ codigo_guia, monto_total, a_cuenta });

        //res.status(201).json(payment)
        //const payment = Payment(req.body)
        const paymentsaved = await payment.save()
        console.log(payment)
        return res.redirect('/payments')
    } catch (error) {
        console.log(error)
    }
}
module.exports.edit = async(req, res) => {
    await Payment.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true
    }).exec()
    console.log(req.body)
    return res.redirect('/')
}
module.exports.editpayment = async(req, res) => {
    const { id } = req.params
    const pagos = await Payment.findById(id).lean()
    console.log(pagos)
    return res.render('editpayment2', { pagos: pagos })
}