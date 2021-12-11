const userController = require('../controllers/UserController')

const vistaPrincipal = (req, res) => {
    res.render('home')
}

const vistaTables = (req, res) => {
    res.render('tables')
}

/*const vistaGuides = (req, res) => {
    res.render('guides')
}*/

const vistaNotifications = (req, res) => {
    res.render('notifications')
}

const vistaProfile = (req, res) => {
    res.render('profile')
}

/*const vistaUsers = (req, res) => {
    res.render('users', userController.mostrar)
}*/

const vistaIcons = (req, res) => {
    res.render('icons')
}

const vistaCreateGuide = (req, res) => {
    res.render('createGuide')
}

module.exports = {
    vistaPrincipal,
    vistaTables,
    /*vistaGuides,*/
    vistaNotifications,
    vistaProfile,
    vistaIcons,
    /*vistaUsers,*/
    vistaCreateGuide
}