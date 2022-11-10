const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = new Schema({
    codigo_guia: { type: Number, required: true, unique: true },
    monto_total: { type: Number, required: true },
    a_cuenta: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('payments', paymentSchema)