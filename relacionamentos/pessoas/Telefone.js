// Arquivo Telefone.js

class Telefone {

    #numero;
    #pessoas = [];

    setPessoa(pessoa) {
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

}

module.exports = Telefone;