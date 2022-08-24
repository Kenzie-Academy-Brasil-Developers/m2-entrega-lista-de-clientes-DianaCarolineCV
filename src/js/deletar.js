import {
    Api
} from "./api.js";

let select = document.getElementById("selectPesquisar")
let btnDeletar = document.getElementById("deletar")

async function buscar() {
    const card = await Api.listarClientes()
    card.forEach(element => {
        pesquisar(element)
    });
}
buscar()

function pesquisar(element) {
    const {
        id,
        nome,
    } = element

    let option = document.createElement("option")
    option.label = nome
    option.value = id

    select.appendChild(option)

}

btnDeletar.addEventListener("click", async (event) => {
    event.preventDefault()

    await Api.deletarCliente(select.value)
})