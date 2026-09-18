const pool = require('../config/db')

async function buscarPedidos(req, res) {
    try {
        const [rows] = await pool.execute("SELECT * FROM pedidos")

        res.json(rows)
    } catch (erro) {
        return res.status(500).json({erro: "erro ao encontrar dados no banco"})
    }
}

async function inserirPedidos(req, res) {
    try {
        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const pedidos = (req.body.pedidos || "").trim()

        if (!nome || !email || !pedidos) {
            res.json({mensagem: "Todos os campos são obrigatorios"})
        }

        await pool.execute("INSERT INTO pedidos(nome_pedidos, email_pedidos, sugestoes_pedidos) VALUES (?,?,?)", [nome, email, pedidos])

        return res.json({
            mensagem: "Sucesso ao inserir os dados no banco"
        })
        
    } catch (erro) {
        return res.status(500).json({erro: "erro ao inserir dados no banco"})
    }
}

async function alterarPedidos(req, res) {
    try {
        const id = req.params.id

        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const pedidos = (req.body.pedidos || "").trim()

        if (!nome || !email || !pedidos) {
            res.json({mensagem: "Todos os campos são obrigatorios"})
        }

        await pool.execute("UPDATE pedidos SET nome_pedidos=?, email_pedidos=?, sugestoes_pedidos=? WHERE id_pedidos=?", [nome, email, pedidos, id])

        return res.json({
            mensagem: "Sucesso ao alterar os dados no banco"
        })
    } catch (erro) {
        return res.status(500).json({erro: "erro ao alterar dados no banco"})
    }
}

async function deletarPedidos(req, res) {
    try {
        const id = req.params.id

        await pool.execute("DELETE FROM pedidos WHERE id_pedidos=?", [id])

        return res.json({
            mensagem: "Sucesso ao deletar os dados no banco"
        })
    } catch (erro) {
        return res.status(500).json({erro: "erro ao deletar dados no banco"})
    }
}

module.exports = {
    buscarPedidos,
    inserirPedidos,
    alterarPedidos,
    deletarPedidos
}