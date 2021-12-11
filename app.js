const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const db = require('./db')

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))

//enrutador
const router = require('./routes/router')
app.use(router.routes)

const usuarios = require('./routes/user_router')
app.use(usuarios)

const guias = require('./routes/invoice_router')
app.use(guias)

const productos = require('./routes/product_router')
app.use(productos)

/*
app.get('/', (req, res) => {
    res.send('Dashboard is running')
})*/
app.listen(3000, () => {
    console.log('Server running ok http://localhost:3000')
})