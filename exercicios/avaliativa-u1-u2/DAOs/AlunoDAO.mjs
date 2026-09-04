import { localStorage } from '../Repositories/localStorage.mjs';
import Aluno from '../Entities/Aluno.js';

export default class AlunoDAO {
    #aluno;

    constructor(aluno){
        if (aluno instanceof Aluno){
            this.#aluno = aluno;
        }
    }

    toJSON(){

        let fones = [];
        for (let fone of this.#aluno.getTelefones()){
            fones.push({
                ddd: fone.getDdd(),
                numero: fone.getNumero()
            });
        }

        return {
            nome: this.#aluno.getNome(),
            email: this.#aluno.getEmail(),
            telefones: fones,
            cpf: this.#aluno.getCPF(),
            endereco: {
                logradouro:this.#aluno.getEndereco().getLogradouro(),
                cep: this.#aluno.getEndereco().getCep()
            },
            matricula: this.#aluno.getMatricula(),
            curso: this.#aluno.getCurso()
        };
    }

    saveJSON(){
        localStorage.setItem('aluno', JSON.stringify(this.toJSON()));
    }

    recoveryJSON(){
        return JSON.parse(localStorage.getItem('aluno'));
    }
}