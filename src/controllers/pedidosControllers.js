const pool = require('../config/db')

async function buscarPedidos(req, res) {
    try {
        const [rows] = await pool.execute('SELECT * FROM pedidos')

        return res.json(rows)
    } catch (erro) {
        return res.status(500).json('Erro ao acessar banco de dados')
    }
}

async function inserirPedidos(req, res) {
    try {
        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const pedidos = (req.body.pedidos || "").trim()

        if (!nome || !email || !pedidos) {
            return res.send('Todos os campos sao obrigatorios')
        }

        await pool.execute('INSERT INTO pedidos (nome_pedidos, email_pedidos, sugestoes_pedidos) VALUES (?,?,?)', [nome, email, pedidos])

        return res.send('Dados inseridos com sucesso')

    } catch (erro) {
        return res.status(500).json({erro: 'Erro ao inserir banco de dados'})
    }
}

async function alterarPedidos(req, res) {
    try {
        const id = req.params.id

        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const pedidos = (req.body.pedidos || "").trim()

        if (!nome || !email || !pedidos) {
            return res.send('Todos os campos sao obrigatorios')
        }

        await pool.execute('UPDATE pedidos SET nome_pedidos=?, email_pedidos=?,sugestoes_pedidos=? WHERE id_pedidos=?', [nome, email, pedidos, id])

        return res.send('Dados alterados com sucesso')

    } catch (erro) {
        return res.status(500).json('Erro ao aletrar banco de dados')
    }
}

async function deletarPedidos(req, res) {
    try {

        const id = req.params.id

        await pool.execute('DELETE FROM pedidos WHERE id_pedidos=?', [id])

        return res.send('Dados deletados com sucesso')
    } catch (erro) {
        return res.status(500).json('Erro ao deletar banco de dados')
    }
}

module.exports = {
    buscarPedidos,
    inserirPedidos,
    alterarPedidos,
    deletarPedidos
}