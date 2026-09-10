const pool = require('../config/db')

// funçao assincrona, pois a promise(promessa) do banco tem o tempo relativo

// parte logica
async function buscarPedidos(req, res) {
    try {
        const [rows] = await pool.execute('SELECT * FROM pedidos')

        // resposta pelo json, usada para devolver uma resposta para o front, sendo erro ou nao
        return res.json(rows)

    } catch (erro) { // mudar o nome desse error p erro
        console.error('Erro interno:', erro)

        return res.status(500).json({erro: 'Erro ao realizar consulta no banco'})
    }
}

async function cadastrarPedidos(req, res) {
    try {
        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const pedido = (req.body.pedido || "").trim()

        // tratamento de erro para caso nao tenha algum desses cadastros
        if (!nome || !email || !pedido) {
            return res.send('Todos os campos são obrigatórios')
        }

        // (?, ?, ?)',[nome, email, pedido] um tipo de protecao contra sql inject, por isso nao e colocado direto no insert
        await pool.execute('INSERT INTO pedidos(nome_pedidos, email_pedidos, sugestoes_pedidos) VALUES (?, ?, ?)',[nome, email, pedido])

        return res.send('Pedido cadastrado com sucesso')

    } catch (erro) {
        console.error('Erro interno:', erro)

        return res.status(500).json({erro: 'Erro ao inserir dados no banco'})
    }
}

async function alterarPedidos(req, res) {
    try {
        const id = req.params.id

        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const pedido = (req.body.pedido || "").trim()

        // tratamento de erro para caso nao tenha algum desses cadastros
        if (!nome || !email || !pedido) {
            return res.send('Todos os campos são obrigatórios')
        }

        // (?, ?, ?)',[nome, email, pedido] um tipo de protecao contra sql inject, por isso nao e colocado direto no insert
        await pool.execute('UPDATE pedidos SET nome_pedidos=?, email_pedidos=?, sugestoes_pedidos=? WHERE id_pedidos =?',[nome, email, pedido, id])

        return res.send('Pedido alterado com sucesso')

    } catch (erro) {
        console.error('Erro interno:', erro)

        return res.status(500).json({erro: 'Erro ao alteradas dados no banco'})
    }
}

async function deletarPedidos(req, res) {
    try {
        const id = req.params.id

        await pool.execute('DELETE FROM pedidos WHERE id_pedidos = ?', [id])

        res.send('Pedido excluido com sucesso')

    } catch (erro) {
        console.error('Erro interno:', erro)

        return res.status(500).json({erro: 'Erro ao deletar pedido'})
    }
}

module.exports = {
    buscarPedidos,
    cadastrarPedidos,
    alterarPedidos,
    deletarPedidos
}