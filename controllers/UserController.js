const User = require('../models/User')
module.exports.mostrar = (req, res) => {
    User.find({}, (error, usuarios) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los usuarios'
            })
        }
        return res.render('users', { usuarios: usuarios })
    })
}