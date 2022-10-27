const mongoose = require('mongoose')
const Schema = mongoose.Schema

const budgetSchema = new Schema({
    codigo_guia: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    artefacto: { type: String, required: true },
    fecha: { type: Date },
    monto_total: { type: Number, required: true },
    detalle: { type: String, required: true }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('budgets', budgetSchema)