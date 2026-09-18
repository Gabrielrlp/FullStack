const express = require('express')
const pedidosController = require('../controllers/pedidosController')

const router = express.Router()

router.get('/', pedidosController.buscarPedidos)

router.post('/', pedidosController.inserirPedidos)

router.put('/:id', pedidosController.alterarPedidos)

router.delete('/:id', pedidosController.deletarPedidos)

module.exports = router