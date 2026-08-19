import Pessoa from "./Pessoa.mjs";

export default class PJ extends Pessoa{

    #cnpj;
    #razaoSocial;

    setCNPJ(cnpj){
        if (14 <= cnpj.length <= 18){
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ(){
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial){
        if(razaoSocial){
            this.#razaoSocial = razaoSocial;
            return true;
        }
        return false;
    }

    getRazaoSocial(){
        return this.#razaoSocial;
    }

    getAll(){
        let all = {};
        
        //inherited methods:
        all.nome = this.getNome();
        all.email = this.getEmail();

        //native methods:
        all.cnpj = this.getCNPJ();
        all.razaoSocial = this.getRazaoSocial();

        return all;
    }

}