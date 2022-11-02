const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saleSchema = new Schema({
    cliente: { type: String, required: true },
    dni: { type: String },
    fecha: { type: Date, default: Date.now },
    monto_total: { type: Number, required: true },
    productos: [{
        producto: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        cantidad: Number
    }]
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('sales', saleSchema)