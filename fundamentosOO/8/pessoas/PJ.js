const Pessoa = require('./Pessoa.js');
const IE = require('./IEclss.js');

class PJ extends Pessoa {

    #cnpj;
    #ie;

    setCNPJ(cnpj) {
        if (cnpj) {
            if (cnpj.length < 18) {
                return false;
            }

            this.#cnpj = cnpj;
            return true;
        } else {
            return false;
        }
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setEmail(email) {
        if (email !== '') {
            if (email.includes('@')) {
                super.setEmail(email);
                return true;
            }
        } else {
            return false;
        }
    }

    setIE(ie) {
        if (ie instanceof IE) {
            this.#ie = ie;
            ie.setPJ(this);
            return true;
        } else {
            return false;
        }
    }

    getIE() {
        return this.#ie;
    }
}

module.exports = PJ;