const mongoose = require('mongoose')
const Schema = mongoose.Schema

const budgetSchema = new Schema({
    codigo_guia: { type: String, required: true, unique: true },
    fecha: { type: Date, default: Date.now },
    monto_total: { type: Number, required: true },
    detalle: { type: String, required: true },
    imagenes: {
        type: [String]
    }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('budgets', budgetSchema)