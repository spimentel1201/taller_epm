const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = new Schema({
    codigo_guia: Number,
    total: Number,
    a_cuenta: Number,
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('payments', paymentSchema)