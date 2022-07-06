const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const db = require('./db')

app.get('/', (req, res) => {
    res.render('login')
})
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));


const router = require('./routes/router')
app.use(router.routes)

const usuarios = require('./routes/user_router')
app.use(usuarios)

const usuarios2 = require('./routes/login_router')
app.use(usuarios2)

const guias = require('./routes/invoice_router')
app.use(guias)

const productos = require('./routes/product_router')
app.use(productos)

const host = '0.0.0.0';
const port = process.env.PORT || 5000;
app.listen(port, host, () => {
    console.log('Server running ok on: ', port)
})