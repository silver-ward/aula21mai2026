const Animal = require('./Animal.js');

class Veterinario{

    #nome;
    #crmv;

    #animais = [];

    setNome(nome){
        if(nome){
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getNome(){
        return this.#nome;
    }

    setCRMV(crmv){
        if(crmv){
            this.#crmv = crmv;
            return true;
        }
        return false;
    }

    getCRMV(){
        return this.#crmv;
    }

    addAnimal(animal){
        if(animal instanceof Animal){
            this.#animais.push(animal);
            return true;
        }
        return false;
    }

    getAnimais(){
        return this.#animais;
    }

}

module.exports = Veterinario;