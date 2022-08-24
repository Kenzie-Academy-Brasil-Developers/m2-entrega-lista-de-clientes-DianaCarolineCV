import { Api } from "./api.js";

let inputProcurar = document.getElementById("procurarCliente")
let btnProcurar = document.getElementById("btnProcurar")
let ul = document.querySelector(".container")
const lista = await Api.listarClientes() 

async function card (lista) {
    lista.forEach(element => {
       criarCard(element) 
    });
}

card(lista)

function criarCard (element) {
    const {nome, idade, cpf, sexo, email, endereco} = element

    let li = document.createElement("li")
    li.classList.add("card")

    let h2 = document.createElement("h2")
    h2.innerText = nome

    let primeiraDiv = document.createElement("div")
    let dadosPessoais = document.createElement("h3")
    dadosPessoais.innerText = "Dados Pessoais"

    let emailInf = document.createElement("p")
    emailInf.innerText = `Email: ${email}` 

    let idadeInf = document.createElement("p")
    idadeInf.innerText = `Idade: ${idade}` 

    let cpfInf = document.createElement("p")
    cpfInf.innerText = `CPF: ${ cpf}`

    let sexoInf = document.createElement("p")
    sexoInf.innerText = `Gênero ${sexo}` 


    let segundaDiv = document.createElement("div")
    let enderecoInf = document.createElement("h3")
    enderecoInf.innerText = "Endereço"

    let cep = document.createElement("p")
    cep.innerText = `CEP: ${endereco.cep}` 

    let estado = document.createElement("p")
    estado.innerText = `Estado: ${endereco.estado}` 

    let cidade = document.createElement("p")
    cidade.innerText = `Cidade: ${endereco.cidade}` 

    let bairro = document.createElement("p")
    bairro.innerText = `Bairro: ${endereco.bairro}` 

    let rua = document.createElement("p")
    rua.innerText = `Rua: ${endereco.rua}` 

    let numero = document.createElement("p")
    numero.innerText = `Número: ${endereco.numero}` 

    primeiraDiv.append(dadosPessoais, emailInf, idadeInf, cpfInf, sexoInf)
    segundaDiv.append(enderecoInf, cep, estado, cidade, bairro, rua, numero)
    li.append(h2, primeiraDiv, segundaDiv)

    ul.appendChild(li)

}

btnProcurar.addEventListener("click", (evt) => {
    evt.preventDefault()
    ul.innerHTML = ""

    card(lista.filter(element => element.nome.toLowerCase().includes(inputProcurar.value.toLowerCase())))
})