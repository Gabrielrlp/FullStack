import express from "express"
import { buscarPedidos } from "../controllers/pedidosController.js"
import { cadastrarPedidos } from "../controllers/pedidosController.js"
import { alterarPedidos } from "../controllers/pedidosController.js"
import { deletarPedidos } from "../controllers/pedidosController.js"

const router = express.Router()

router.get("/", buscarPedidos)
router.post("/", cadastrarPedidos)
router.put("/:id", alterarPedidos)
router.delete("/:id", deletarPedidos)

export default router