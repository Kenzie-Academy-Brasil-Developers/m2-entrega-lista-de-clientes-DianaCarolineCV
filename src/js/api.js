class Api {
    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {
        "Content-Type": "application/json",
    }

    static async listarClientes() {
        const listar = await fetch(`${this.baseUrl}`)
            .then((res) => res.json())
            .then((res) => res)
            .catch((erro) => console.log(erro))

        return listar
    }

    static async cadastrarCliente(data) {
        const cadastrar = await fetch(`${this.baseUrl}`, {
                headers: this.headers,
                method: "POST",
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((res) => {
                window.location.assign('../../index.html')
                return res
            })
            .catch((erro) => console.log(erro))

        return cadastrar
    }

    static async buscarCliente(id) {
        const cliente = await fetch(`${this.baseUrl}/${id}`, {
                headers: this.headers,
                method: "GET",
            })
            .then((res) => res.json())
            .then((res) => res)
            .catch((erro) => console.log(erro))

        return cliente
    }

    static async editarCliente(data, id) {
        const editar = await fetch(`${this.baseUrl}/${id}`, {
                headers: this.headers,
                method: "PATCH",
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((res) => {
                window.location.assign('../../index.html')
                return res
            })
            .catch((erro) => console.log(erro))

        return editar
    }

    static async deletarCliente(id) {
        const deletar = await fetch(`${this.baseUrl}/${id}`, {
                headers: this.headers,
                method: "DELETE",
            })
            .then((res) => {
                window.location.assign('../../index.html')
                return res
            })
            .catch((erro) => console.log(erro))

        return deletar
    }

}

export {
    Api
}