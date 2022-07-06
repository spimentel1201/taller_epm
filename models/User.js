const mongoose = require('mongoose')
    //const bcrypt = require('bcrypt')
const bcrypt = require('../app.js').bcrypt

const saltRounds = 10
const Schema = mongoose.Schema

const userSchema = new Schema({
    nombres: String,
    apellidos: String,
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    rol: String,
    estado: String
}, { versionKey: false })

userSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('contraseña')) {
        const document = this
        bcrypt.hash(document.contraseña, saltRounds, (err, hashedPassword) => {
            if (err) {
                next(err)
            } else {
                document.contraseña = hashedPassword
                next()
            }
        })
    } else {
        next()
    }
})

userSchema.methods.isCorrectPassword = function(passCandidate, callback) {
    bcrypt.compare(passCandidate, this.contraseña, function(err, same) {
        if (err) {
            callback(err)
        } else {
            callback(err, same)
        }
    })
}

module.exports = mongoose.model('usuarios', userSchema)