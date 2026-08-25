// Arquivo Telefone.js

class Telefone {

    #numero;
    #ddd;
    #pessoas = [];

    addPessoa(pessoa) {
        if (pessoa) {
            this.#pessoas.push(pessoa);
            return true;
        } else {
            return false;
        }
    }

    getPessoas() {
        return this.#pessoas;
    }

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

    setDdd(ddd){
        if (ddd){
            this.#ddd = ddd;
        }
    }

    getDdd(){
        return this.#ddd;
    }

}

module.exports = Telefone;