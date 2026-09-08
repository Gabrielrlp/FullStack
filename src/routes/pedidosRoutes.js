const express = require('express')
const router = express.Router()
const pedidosController = require('../controllers/pedidosController')

// parte de conexao sem logica
router.get('/pedidos', pedidosController.buscarPedidos)

router.post('/pedidos', pedidosController.cadastrarPedidos)

// esse /:id serve para mudar no link http para o id certo
router.put('/pedidos/:id', pedidosController.alterarPedidos)

// esse /:id serve para levar o link http para o id certo
router.delete('/pedidos/:id', pedidosController.deletarPedidos)

module.exports = router