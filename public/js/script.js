const formulario = document.getElementById("formulario")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputPedido = document.getElementById("pedidos")
const listarPedidos = document.getElementById("listarPedidos")
const button = document.getElementById("button")
const url = "http://localhost:3000/pedidos"
const mensagem = document.getElementById('exibirMensagem')

document.addEventListener('DOMContentLoaded', carregarPedidos)

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()

    const nome = inputNome.value.trim()
    const email = inputEmail.value.trim()
    const sugestoes_pedidos = inputPedido.value.trim()

    if (!nome || !email || !sugestoes_pedidos) {
        exibirMensagem('Todos os campos são obrigatórios', 'erro')
        return
    }

    try {
        const resposta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({nome, email, sugestoes_pedidos})
        })

        const dados = await resposta.json()

        if (!resposta.ok) {
            exibirMensagem(dados.mensagem || 'Erro na resposta do back-end', 'erro')
            return
        }

        exibirMensagem(dados.mensagem, 'Sucesso')
        formulario.reset()

        carregarPedidos()

    } catch (erro) {
        console.error('Erro ao cadastrar pedido', erro)
        exibirMensagem('Erro ao cadastrar pedido', 'erro')
    }

})

async function carregarPedidos() {
    try {
        const resposta = await fetch(url)

        if (!resposta.ok) {
            throw new Error(`Resposta do status: ${resposta.status}`)
        }

        const resultado = await resposta.json()

        listarPedidos.innerHTML = ''

        console.log(resultado)

        resultado.forEach(item => {
            const lista = document.createElement("li")

            lista.textContent = `Nome = ${item.nome_pedidos} - Email = ${item.email_pedidos} - Pedido = ${item.sugestoes_pedidos}`

            listarPedidos.appendChild(lista)
        });

        console.log()
    } catch (e) {
        console.error("Erro:", e)
    }
}

function exibirMensagem(texto, tipo) {
    mensagem.textContent = texto
    mensagem.dataset.tipo = tipo

    setTimeout(() => {
        mensagem.textContent = ''
        mensagem.removeAttribute('data-tipo')
    }, 4000);
}