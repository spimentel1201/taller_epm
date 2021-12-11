const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    codigo: Number,
    nombresC: String,
    apellidosC: String,
    telefono: Number,
    dni: Number,
    direccion: String,
    artefacto: String,
    marca: String,
    modelo: String,
    serie: String,
    accesorios: String,
    descripcion: String,
    fecha_ing: String,
    estado: String,
    monto: Number,
    imgURL: String
}, { versionKey: false })

module.exports = mongoose.model('guias', invoiceSchema)