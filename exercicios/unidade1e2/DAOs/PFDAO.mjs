import { localStorage } from './localStorage.mjs';
import PF from '../Entities/PF.js';

export default class PFDAO {
    #pf;

    constructor(pf){
        if (pf instanceof PF){
            this.#pf = pf;
        }
    }

    toJSON(){

    }

    saveJSON(){

    }

    recoveryJSON(){

    }
}