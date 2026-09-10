const express = require('express')
const router = express.Router()
const pedidosController = require('../controllers/pedidosController')

// parte de conexao sem logica
router.get('/', pedidosController.buscarPedidos)

router.post('/', pedidosController.cadastrarPedidos)

// esse /:id serve para mudar no link http para o id certo
router.put('/:id', pedidosController.alterarPedidos)

// esse /:id serve para levar o link http para o id certo
router.delete('/:id', pedidosController.deletarPedidos)

module.exports = router