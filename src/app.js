const express = require('express')
const path = require('path')
const app = express()

const pedidosRoutes = require('./routes/pedidosRoutes')

app.use(express.json())

app.use('/pedidos', pedidosRoutes)

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) =>{
    return res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

module.exports = app