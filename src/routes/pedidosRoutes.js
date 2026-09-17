const express = require('express')
const pedidosControllers = require('../controllers/pedidosController')

const router = express.Router()

router.get("/", pedidosControllers.buscarPedidos)

router.post("/", pedidosControllers.inserirPedidos)

router.put("/:id", pedidosControllers.alterarPedidos)

router.delete("/:id", pedidosControllers.deletarPedidos)

module.exports = router