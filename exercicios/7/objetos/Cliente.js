const Animal = require('./Animal.js');

class Cliente {
    #nome;
    #telefone;
    #animais = [];

    setNome(nome){
        if (nome){
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getNome(){
        return this.#nome;
    }

    setTelefone(telefone){
        if(telefone){
            this.#telefone = telefone;
            return true;
        }
        return false;
    }

    getTelefone(){
        return this.#telefone;
    }

    addAnimal(animal){
        if(animal instanceof Animal){
            this.#animais.push(animal);
            animal.setCliente(this);
            return true;
        }
        return false;
    }

    getAnimais(){
        return this.#animais;
    }

    listarAnimais(){
        console.log(this.#animais);
    }
}

module.exports = Cliente;