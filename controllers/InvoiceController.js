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
module.exports.create = async(req, res) => {

    try {
        const { codigo, nombresC, apellidosC, dni, telefono, direccion, artefacto, marca, modelo, serie, accesorios, descripcion, fechaing, monto, estado } = req.body

        const guide = new Invoice({ codigo, nombresC, apellidosC, dni, telefono, direccion, artefacto, marca, modelo, serie, accesorios, descripcion, fechaing, monto, estado });

        //res.status(201).json(guide)
        //const guide = Invoice(req.body)
        const guideSaved = await guide.save()
        console.log(guide)
        return res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}
module.exports.edit = async(req, res) => {
    await Invoice.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true
    }).exec()
    console.log(req.body)
    return res.redirect('/')
}
module.exports.editGuide = async(req, res) => {
    const { id } = req.params
    const guias = await Invoice.findById(id).lean()
    console.log(guias)
    return res.render('editGuide', { guias: guias })
}