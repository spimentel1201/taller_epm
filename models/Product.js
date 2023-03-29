const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*const productSchema = new Schema({
codigo: String,
    nombre: String,
    precioCompra: Number,
    precioVenta: Number,
}, { versionKey: false }) 
*/
const productSchema = new Schema({
    codigo: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio_compra: Number,
    precio_v1: Number,
    precio_v2: Number,
}, { versionKey: false })

/*module.exports = mongoose.model('productos', productSchema)*/
module.exports = mongoose.model('productosv2', productSchema)