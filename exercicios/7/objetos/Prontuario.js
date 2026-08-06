class Prontuario{
    #numero;
    #observacoes = [];

    setNumero(numero){
        if (numero){
            #numero = numero;
            return true;
        }
        return false;
    }

    getNumero(){
        return this.#numero;
    }

    setObservacoes(observacoes){
        if(observacoes){
            this.#observacoes.push(observacoes);
            return true;
        }
        return false;
    }

    getObservacoes(){
        return this.#observacoes;
    }

    setAnimal(){
        return false;
    }

    getAnimal(){
        return false;
    }
}

module.exports = Prontuario;