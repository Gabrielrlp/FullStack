const express = require('express')
const path = require('path')
const app = express()

const pedidosRoutes = require('./routes/pedidosRoutes')

// midware que precisa ser declarada para ser enviar um corpo em uma requisicao
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// parte nova

app.use('/', pedidosRoutes)

module.exports = app