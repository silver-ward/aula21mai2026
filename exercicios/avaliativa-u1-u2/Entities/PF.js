const Pessoa = require('./Pessoa');

class PF extends Pessoa {

    #cpf;

    setCPF(cpf) {
        if (cpf) {
            this.#cpf = cpf;
            return true;
        }
        return false;
    }

    getCPF() {
        return this.#cpf;
    }
    
}
module.exports = PF;