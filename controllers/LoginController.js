const User = require('../models/User')

module.exports.mostrar = (req, res) => {
    if (req.session.loggedin != true) {
        User.find({}, (error, usuarios) => {
            if (error) {
                return res.status(500).json({
                    message: 'Error al mostrar los usuarios'
                })
            }
            res.render('login', { usuarios: usuarios })
        })
    } else {
        res.redirect('/')
    }

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
                    req.session.loggedin = true
                    req.session.name = user.nombres
                    const userr = {

                            name: user.nombres

                        }
                        //res.status(200).send('Autenticación exitosa.')
                        //return res.redirect('/guides')
                        //console.log(userr.name)
                    console.log(req.session.name)
                    return res.render('home', { name: req.session.name })
                } else {
                    return res.status(500).json({
                        message: 'Ocurrió un error'
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
    if (req.session.loggedin != true) {
        res.render('signUp')
    } else {
        res.redirect('/')
    }
}

module.exports.logout = async(req, res) => {
    if (req.session.loggedin == true) {
        req.session.destroy()
    }
    res.redirect('/')

}