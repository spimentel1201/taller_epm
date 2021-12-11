const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    codigo: String,
    nombre: String,
    precioCompra: Number,
    precioVenta: Number,
}, { versionKey: false })

module.exports = mongoose.model('productos', productSchema)