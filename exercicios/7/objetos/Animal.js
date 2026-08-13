class Animal{

    #nome;
    #especie;
    
    #cliente;
    #prontuario;
    #veterinarios = [];

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
        const Cliente = require('./Cliente.js');
        if(cliente instanceof Cliente){
            this.#cliente = cliente;
            return true;
        }
        return false;
    }

    getCliente(){
        return this.#cliente;
    }

    setProntuario(prontuario){
        const Prontuario = require('./Prontuario.js');
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

    addVeterinario(veterinario){
        const Veterinario = require('./Veterinario.js');
        if(veterinario instanceof Veterinario){
            this.#veterinarios.push(veterinario);
            veterinario.addAnimal(this);
            return true;
        }
        return false;
    }

    getVeterinarios(){
        return this.#veterinarios;
    }

    listarVeterinarios(){
        console.log(this.#veterinarios);
    }
}

module.exports = Animal;