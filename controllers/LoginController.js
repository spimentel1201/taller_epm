const User = require('../models/User')

module.exports.mostrar = (req, res) => {
    User.find({}, (error, usuarios) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los usuarios'
            })
        }
        return res.render('/', { usuarios: usuarios })
    })
}

module.exports.signIn = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ correo: email }, (error, user) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al autenticar'
            })
        } else if (!user) {
            return res.status(500).json({
                message: 'El usuario no existe'
            })
        } else {
            /*console.log("contra guardada" + user.contraseña)*/
            user.isCorrectPassword(password, (err, result) => {
                if (err) {
                    console.log("contra enviada" + password)
                    return res.status(500).json({
                            message: 'Error'
                        })
                        //res.status(500).send('Error')
                } else if (result) {
                    //res.status(200).send('Autenticación exitosa.')
                    //return res.redirect('/guides')
                    return res.render('home')
                } else {
                    return res.status(500).json({
                        message: 'Error al mostrar los usuarios'
                    })
                }
            })
        }
        /*return res.render('guides', { usuarios: user })*/
        /*return res.redirect('/guides')*/
    })
}
module.exports.signUpc = async(req, res) => {
    try {
        const { nombres, apellidos, correo, contraseña, rol, estado } = req.body
        const user = new User({ nombres, apellidos, correo, contraseña, rol, estado });
        const userSaved = await user.save()
        console.log(userSaved)
        return res.redirect('/')
    } catch (error) {
        console.log(error)
    }

}

module.exports.mostrarS = (req, res) => {
    return res.redirect('/signUp')
}