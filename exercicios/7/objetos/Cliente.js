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
        const Animal = require('./Animal.js');
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
        console.log(`Animais cadastrados sob cliente ${this.getNome()}: `);
        for(let animal of this.#animais){
            console.log('• ' + animal.getNome());
        }
    }
}

module.exports = Cliente;