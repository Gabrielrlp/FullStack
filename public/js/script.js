

const formulario = document.getElementById("formulario")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const pedido = document.getElementById("pedido")
const liPedidos = document.getElementById("listarPedidos")
const button = document.getElementById("button")

const url = "/pedidos"

document.addEventListener('DOMContentLoaded', carregarPedidos)

async function carregarPedidos() {
    try {
        const resposta = await fetch(url);

        if(!resposta.ok){
            throw new Error(`Resposta do status: ${resposta.status}`)
        }
        
        const resultado = await resposta.json()

        console.log(resultado)

        resultado.forEach(item => {
            const lista = document.createElement("li")

            lista.textContent = `Nome = ${item.nome} - Email = ${item.email} - Pedido = ${item.observ} `


            liPedidos.appendChild(lista)

           
        });
    } catch (e) {
        console.error("Erro:", e)
    }
}

