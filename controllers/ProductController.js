const Product = require('../models/Product')
module.exports.mostrar = (req, res) => {
    Product.find({}, (error, productos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los productos'
            })
        }
        return res.render('products', { productos: productos })
    })
}