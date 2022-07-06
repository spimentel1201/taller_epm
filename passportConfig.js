/*const LocalStrategy = require("passport-local").Strategy
const { pool } = require("./db")
const bcrypt = require("bcrypt")
const { authenticate } = require("passport")
const User = require('../models/User')

function initialize(passport) {
    const authenticateUser = (email, password, done) => {
        User.findOne({ email }, (error, results) = {
            if (error) {
                return res.status(500).json({
                    message: 'Error al mostrar las guias'
                })
            }
            if (results.rows.length() > 0)
                const user = results.rows[0]
            return res.render('guides', { guias: guias })
        });
    }
    passport.use(new LocalStrategy {
            usernameField: "email",
            passwordField: "password",
        },
        authenticateUser)
}*/