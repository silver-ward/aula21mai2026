// Arquivo Pessoa.js

const Telefone = require('./Telefone');
const Endereco = require('./Endereco');

class Pessoa {

    #nome;
    #email;

    // Classes relacionadas com Pessoa
    #endereco;
    #telefones = [];

    setEndereco(endereco) {
        if (endereco instanceof Endereco) {
            this.#endereco = endereco;
            endereco.addPessoa(this); // referência cruzada
            return true;
        } else {
            return false;
        }
    }

    getEndereco() {
        return this.#endereco;
    }

    addTelefone(telefone) {
        if (telefone instanceof Telefone) {
            this.#telefones.push(telefone);
            telefone.addPessoa(this); // referência cruzada
            return true;
        } else {
            return false;
        }
    }

    getTelefones() {
        return this.#telefones;
    }

    setNome(nome) {
        if (nome) {
            this.#nome = nome;
            return true;
        } else {
            return false;
        }
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (email) {
            this.#email = email;
            return true;
        } else {
            return false;
        }
    }

    getEmail() {
        return this.#email;
    }

}

module.exports = Pessoa;