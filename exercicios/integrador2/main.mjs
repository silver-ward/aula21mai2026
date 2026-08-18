import PJ from "./pessoas/PJ.mjs";
import IEclss, { IEfunc, IEjson } from "./objetos/IE.mjs";

function listAll(object){
    for(let [key, value] of Object.entries(object.getAll())){
        if(value instanceof Date){
            console.log(`${key}: ${value.toLocaleString('pt-BR')}`);
        }
        else{
            console.log(`${key}: ${value}`);
        }
    }
}

console.log('\n----------\n');

//#region Objetos PJ
const empresa1 = new PJ();

empresa1.setNome('Empresa1');
empresa1.setEmail('empresa1@email.com');
empresa1.setCNPJ('AA.AAA.AAA/AAAA-DV');
empresa1.setRazaoSocial('Empresa1');
listAll(empresa1)

console.log('\n----------\n');

const empresa2 = new PJ();

empresa2.setNome('Empresa2');
empresa2.setEmail('empresa2@email.com');
empresa2.setCNPJ('AA.AAA.AAA/AAAA-DV');
empresa2.setRazaoSocial('Empresa2');
listAll(empresa2)

//#endregion

console.log('\n----------\n');

const agora = new Date();

//#region Objetos Inscrição Estadual
const objetoInvalido = {
    nome: 'Empresa Inválida'
};

const IEClass = new IEclss;
IEClass.setNumero('111');
IEClass.setEstado('DF');
IEClass.setDataRegistro(agora);
//IEClass.setPJ(objetoInvalido);
IEClass.setPJ(empresa1);
listAll(IEClass);

console.log('\n----------\n');

const IEFunc = IEfunc();
IEFunc.setNumero('222');
IEFunc.setEstado('SP');
IEFunc.setDataRegistro(agora);
//IEFunc.setPJ(objetoInvalido);
IEFunc.setPJ(empresa1);
listAll(IEFunc);

console.log('\n----------\n');

IEjson.setNumero('333');
IEjson.setEstado('RJ');
IEjson.setDataRegistro(agora);
//IEjson.setPJ(objetoInvalido);
IEjson.setPJ(empresa1);
listAll(IEjson);
//#endregion