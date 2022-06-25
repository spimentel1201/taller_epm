const mongoose = require('mongoose')
    //const url = 'mongodb://localhost/db_tallerElectro'
const url = 'mongodb+srv://epimentel2:q1w2e3r4t5@cluster0.3u70z.mongodb.net/db_tallerElectro?retryWrites=true&w=majority'
const url2 = 'mongodb+srv://epimentel2:lQeSdjomuxyCyTlb@epimentelcluster.iwjci.mongodb.net/epimentel_database?retryWrites=true&w=majority'
mongoose.connect(url2, {
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error en la conexión con MongoDB'))
db.once('open', function callback() {
    console.log("Conectado Correctamente a Mongo!")
})

module.exports = db