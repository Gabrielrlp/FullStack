const pool = require('../config/db')

async function buscarPedidos(req, res) {
    try {
        const [rows] = await pool.execute("SELECT * FROM pedidos")

        res.json(rows)
    } catch (e) {
        return res.status(501).json({ erro: "Erro ao encontrar pedidos no banco de dados" })
    }
}
async function inserirPedidos(req, res) {
    try {
        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const sugestoes_pedidos = (req.body.sugestoes_pedidos || "").trim()

        if (!nome || !email || !sugestoes_pedidos) {
            res.json("Todos os campos são obrigatórios!")
        }

        await pool.execute("INSERT INTO pedidos (nome_pedidos, email_pedidos, sugestoes_pedidos) VALUES (?,?,?)", [nome, email, sugestoes_pedidos])

        return res.json({
            mensagem: "Pedido foi cadastrado com sucesso!"
        })

    } catch (e) {
        return res.status(501).json({ erro: "Erro ao cadastrar pedidos no banco de dados" })
    }
}
async function alterarPedidos(req, res) {
    try {   
        const id = req.params.id

        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const sugestoes_pedidos = (req.body.sugestoes_pedidos || "").trim()

        if (!nome, !email, !sugestoes_pedidos) {
            res.json("Todos os campos são obrigatórios!")
        }

        await pool.execute("UPDATE pedidos SET nome_pedidos=?, email_pedidos=?,  sugestoes_pedidos=? WHERE id_pedidos = ?", [nome, email, sugestoes_pedidos, id])

        return res.json({
            mensagem: "Pedido foi alterado com sucesso!"
        })
    } catch (e) {
        return res.status(501).json({ erro: "Erro ao alterar pedidos no banco de dados" })
    }
}
async function deletarPedidos(req, res) {
    try {
        const id = req.params.id

        await pool.execute("DELETE FROM pedidos WHERE id_pedidos = ?", [id])

        return res.json({
            mensagem: "Pedido foi deletado com sucesso!"
        })
    } catch (error) {
        return res.status(501).json({ erro: "Erro ao deletar pedidos no banco de dados" })
    }
}

module.exports = {
    buscarPedidos,
    inserirPedidos,
    alterarPedidos,
    deletarPedidos
}