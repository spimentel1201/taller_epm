const Invoice = require('../models/Invoice')
module.exports.mostrar = (req, res) => {
    Invoice.find({}, (error, guias) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar las guias'
            })
        }
        return res.render('guides', { guias: guias })
    }).limit(10)
}