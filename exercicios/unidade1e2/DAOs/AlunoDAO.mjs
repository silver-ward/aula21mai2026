import { localStorage } from './localStorage.mjs';
import Aluno from '../Entities/Aluno.js';

export default class AlunoDAO {
    #aluno;

    constructor(aluno){
        if (aluno instanceof Aluno){
            this.#aluno = aluno;
        }
    }

    toJSON(){

    }

    saveJSON(){

    }

    recoveryJSON(){

    }
}