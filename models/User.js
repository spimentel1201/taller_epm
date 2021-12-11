const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nombres: String,
    apellidos: String,
    correo: String,
    contraseña: String,
    rol: String,
    estado: String
}, { versionKey: false })

module.exports = mongoose.model('usuarios', userSchema)