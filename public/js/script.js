// declarando variaveis ja setadas no html com o id
const formulario = document.getElementById('formulario')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const pedido = document.getElementById('pedido')
const botaoEnviar = document.getElementById('botaoEnviar')
const listarPedidos = document.getElementById('listarPedidos')
const url = "http://localhost:3000/pedidos"

async function carregarPedidosNaTelaDoHTML() {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Status do erro da resposta: ${response.status}`);
    }

    // console.log(response) para visualizar a resposta completa
    const result = await response.json()

    result.forEach(item => {
        const lista = document.createElement('li')

        // colocar o nome que foi colocado dentro da tabela do banco de dados
        lista.textContent = `Nome: ${item.nome_pedidos} - Email:${item.email_pedidos} - Pedidos:${item.sugestoes_pedidos}`

        listarPedidos.appendChild(lista)
    });

  } catch (error) {
    console.error(error.message)
  }
}

carregarPedidosNaTelaDoHTML()