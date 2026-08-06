const Cliente = require('./Cliente.js');
const Prontuario = require('./Prontuario.js');

class Animal{

    #nome;
    #especie;
    
    #cliente;
    #prontuario;

    setNome(nome){
        if(nome){
            this.#nome = nome;
        }
        return false;
    }
    getNome(){
        return this.#nome;
    }

    setEspecie(especie){
        if (especie){
            this.#especie = especie;
        }
        return false;
    }

    getEspecie(){
        return this.#especie;
    }

    setCliente(cliente){
        if(cliente instanceof Cliente){
            this.#cliente = cliente;
        }
        return false;
    }

    getCliente(){
        return this.#cliente;
    }

    setProntuario(prontuario){
        if(prontuario instanceof Prontuario){
            this.#prontuario = prontuario;
            prontuario.setAnimal(this);
            return true;
        }
        return false;
    }

    getProntuario(){
        return this.#prontuario;
    }
}

module.exports = Animal;