export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;
    #estado;
    #regiao;
    #ddd;

    async setCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado na base do ViaCEP.");
        }

        this.#cep = dados.cep;
        this.#logradouro = dados.logradouro;
        this.#bairro = dados.bairro;
        this.#cidade = dados.localidade;
        this.#uf = dados.uf;
        this.#estado = dados.estado;
        this.#regiao = dados.regiao;
        this.#ddd = dados.ddd;
    }

    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getCidade() {
        return this.#cidade;
    }

    getUf() {
        return this.#uf;
    }

    getEstado(){
        return this.#estado;
    }
    getRegiao(){
        return this.#regiao;
    }
    getDdd(){
        return this.#ddd;
    }
}