import {
    Api
} from "./api.js";

let select = document.getElementById("selectPesquisar")
let btnPesquisar = document.getElementById("btnPesquisar")
let btnAtualizar = document.getElementById("atualizar")
let nomeInput = document.getElementById('nome')
let emailInput = document.getElementById('email')
let numeroInput = document.getElementById('numero')
let cpfInput = document.getElementById('cpf')
let sexoInput = document.getElementById('sexo')
let cepInput = document.getElementById('cep')
let ruaInput = document.getElementById('rua')
let numeroEnderecoInput = document.getElementById('numeroEndereco')
let bairroInput = document.getElementById('bairro')
let cidadeInput = document.getElementById('cidade')
let estadoInput = document.getElementById('estado')

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

btnPesquisar.addEventListener('click', async (event) => {
    event.preventDefault()
    if (select.value) {
        select.parentElement.lastElementChild.innerText = ""

        let {
            cpf,
            email,
            nome,
            endereco,
            idade,
            sexo
        } = await Api.buscarCliente(select.value)

        nomeInput.value = nome
        emailInput.value = email
        numeroInput.value = idade
        cpfInput.value = cpf
        sexoInput.value = sexo
        cepInput.value = endereco.cep
        ruaInput.value = endereco.rua
        numeroEnderecoInput.value = endereco.numero
        bairroInput.value = endereco.bairro
        cidadeInput.value = endereco.cidade
        estadoInput.value = endereco.estado

    } else {
        select.parentElement.lastElementChild.innerText = "Selecione um cliente primeiro"
    }

})


btnAtualizar.addEventListener("click", async (event) => {
    event.preventDefault()

    const data = {
        "nome": nomeInput.value,
        "email": emailInput.value,
        "sexo": sexoInput.value,
        "idade": parseInt(numeroInput.value),
        "cpf": cpfInput.value,
        "endereco": {
            "estado": estadoInput.value,
            "cidade": cidadeInput.value,
            "bairro": bairroInput.value,
            "numero": numeroEnderecoInput.value,
            "rua": ruaInput.value,
            "cep": cepInput.value
        }

    }

    await Api.editarCliente(data, select.value)
})