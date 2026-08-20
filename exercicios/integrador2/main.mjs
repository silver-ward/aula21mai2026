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

console.log('\n----------\n');

//#region Desafio Extra 2
console.log('===== Desafio Extra 2 =====\n');

const empresa3 = new PJ();

empresa3.setNome('Empresa3');
empresa3.setEmail('empresa3@email.com');
empresa3.setCNPJ('AA.AAA.AAA/AAAA-DV');
empresa3.setRazaoSocial('Empresa3');
listAll(empresa3)

console.log('\n----------\n');

const empresa4 = new PJ();

empresa4.setNome('Empresa4');
empresa4.setEmail('empresa4@email.com');
empresa4.setCNPJ('AA.AAA.AAA/AAAA-DV');
empresa4.setRazaoSocial('Empresa4');
listAll(empresa4)

console.log('\n----------\n');

const IEClass2 = new IEclss;
IEClass2.setNumero('444');
IEClass2.setEstado('MG');
IEClass2.setDataRegistro(agora);
IEClass2.setPJ(empresa3);
console.log(IEClass2.getPJ());

const IEFunc2 = IEfunc();
IEFunc2.setNumero('555');
IEFunc2.setEstado('AM');
IEFunc2.setDataRegistro(agora);
IEFunc2.setPJ(empresa4);
console.log(IEFunc2.getPJ());

//#endregion