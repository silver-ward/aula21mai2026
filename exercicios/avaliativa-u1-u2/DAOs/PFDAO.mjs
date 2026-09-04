import { localStorage } from '../Repositories/localStorage.mjs';
import PF from '../Entities/PF.js';

export default class PFDAO {
    #pf;

    constructor(pf){
        if (pf instanceof PF){
            this.#pf = pf;
        }
    }

    toJSON(){

        let fones = [];
        for (let fone of this.#pf.getTelefones()){
            fones.push({
                ddd: fone.getDdd(),
                numero: fone.getNumero()
            });
        }

        return {
            nome: this.#pf.getNome(),
            email: this.#pf.getEmail(),
            telefones: fones,
            cpf: this.#pf.getCPF(),
            endereco: {
                logradouro:this.#pf.getEndereco().getLogradouro(),
                cep: this.#pf.getEndereco().getCep()
            }
        };
    }

    saveJSON(){
        localStorage.setItem('pf', JSON.stringify(this.toJSON()));
    }

    recoveryJSON(){
        return JSON.parse(localStorage.getItem('pf'));
    }
}