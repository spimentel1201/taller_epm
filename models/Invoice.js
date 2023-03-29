const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    codigo: Number,
    nombresC: {
        type: String,
        required: true,
        trim: true
    },
    apellidosC: {
        type: String,
        trim: true
    },
    telefono: {
        type: Number,
    },
    dni: Number,
    direccion: String,
    artefacto: String,
    marca: String,
    modelo: String,
    serie: String,
    accesorios: String,
    descripcion: String,
    fecha_ing: String,
    estado: {
        type: String,
        enum: {
            values: ['Recibido', 'En Revisión', 'Listo', 'Entregado'],
            message: '{VALUE} no está permitido.'
        }
    },
    monto: Number,
    fecha_entrega: String,
    diagnostico: String,
    imgURL: String
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('guias', invoiceSchema)