const express = require('express')
const router = express.Router()

const pedidosControllers = require('../controllers/pedidosControllers')

router.get('/', pedidosControllers.buscarPedidos)

router.post('/', pedidosControllers.inserirPedidos)

router.put('/:id', pedidosControllers.alterarPedidos)

router.delete('/:id', pedidosControllers.deletarPedidos)

module.exports = router