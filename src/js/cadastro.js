import {
    Api
} from "./api.js";


class Cadastrar {
    static novoUsuario() {

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
        let bntCadastrar = document.querySelector(".cadastro")

        bntCadastrar.addEventListener('click', async (event) => {
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
            await Api.cadastrarCliente(data).then(res => {
                if (res.error) {
                    bntCadastrar.parentElement.lastElementChild.innerText = "Todos os campos são de preenchimento obrigatório"
                }
            })

        })
    }
}

Cadastrar.novoUsuario()