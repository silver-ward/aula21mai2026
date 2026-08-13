class Prontuario{
    #numero;
    #observacoes = [];
    #animal;

    setNumero(numero){
        if (numero){
            this.#numero = numero;
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

    setAnimal(animal){
        const Animal = require('./Animal.js');
        if (animal instanceof Animal){
            this.#animal = animal;
            return true;
        }
        return false;
    }

    getAnimal(){
        return this.#animal;
    }
}

module.exports = Prontuario;