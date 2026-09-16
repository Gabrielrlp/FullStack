import pool from "../config/db.js"

async function buscarPedidos(req, res) {
    try {
        const [rows] = await pool.execute("SELECT * FROM pedidos")

        res.json(rows)
    } catch (e) {
        return res.status(501).json({ erro: "Erro ao encontrar pedidos no banco de dados" })
    }
}
async function cadastrarPedidos(req, res) {
    try {
        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const observ = (req.body.observ || "").trim()

        if (!nome, !email, !observ) {
            res.json("Todos os campos são obrigatórios!")
        }

        await pool.execute("INSERT INTO pedidos (nome, email, observ) VALUES (? , ?,  ?)", [nome, email, observ])

        res.json("O pedido foi cadastrado com sucesso!")
    } catch (e) {
        return res.status(501).json({ erro: "Erro ao cadastrar pedidos no banco de dados" })
    }
}
async function alterarPedidos(req, res) {
    try {
        const id = req.params.id

        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const observ = (req.body.observ || "").trim()

        if (!nome, !email, !observ) {
            res.json("Todos os campos são obrigatórios!")
        }

        await pool.execute("UPDATE pedidos SET nome =?, email = ?, observ = ? WHERE id = ?", [nome, email, observ, id])

        res.json("O pedido foi alterado com sucesso!")
    } catch (e) {
        return res.status(501).json({ erro: "Erro ao alterar pedidos no banco de dados" })
    }
}
async function deletarPedidos(req, res) {
    try {
        const id = req.params.id

        await pool.execute("DELETE FROM pedidos WHERE id = ?", [id])

        res.json("O pedido foi deletado com sucesso!")
    } catch (error) {
        return res.status(501).json({ erro: "Erro ao deletar pedidos no banco de dados" })
    }
}
export { buscarPedidos, cadastrarPedidos, alterarPedidos, deletarPedidos }