const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

const pedidosRoutes = require('./routes/pedidosRoutes')

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.use('/pedidos', pedidosRoutes)

module.exports = app