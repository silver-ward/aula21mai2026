import PJ from "./pessoas/PJ.mjs";
import IEclss, { IEfunc, IEjson } from "./objetos/IE.mjs";

console.log('\n----------\n');

//#region Objetos PJ
const empresa1 = new PJ();

empresa1.setNome('Empresa1');
empresa1.setEmail('empresa1@email.com');
empresa1.setCNPJ('AA.AAA.AAA/AAAA-DV');
empresa1.setRazaoSocial('Empresa1');

for(let [key, value] of Object.entries(empresa1.getAll())){
    console.log(`${key}: ${value}`);
}

console.log('\n----------\n');

const empresa2 = new PJ();

empresa2.setNome('Empresa2');
empresa2.setEmail('empresa2@email.com');
empresa2.setCNPJ('AA.AAA.AAA/AAAA-DV');
empresa2.setRazaoSocial('Empresa2');

for(let [key, value] of Object.entries(empresa2.getAll())){
    console.log(`${key}: ${value}`);
}
//#endregion

console.log('\n----------\n');

const agora = new Date();

//#region Objetos Inscrição Estadual
const IEClass = new IEclss;
IEClass.setNumero('111');
IEClass.setEstado('DF');
IEClass.setDataRegistro(agora);
IEClass.setPJ(empresa1);
for(let [key, value] of Object.entries(IEClass.getAll())){
    console.log(`${key}: ${value}`);
}

console.log('\n----------\n');

const IEFunc = IEfunc();
IEFunc.setNumero('222');
IEFunc.setEstado('SP');
IEFunc.setDataRegistro(agora);
IEFunc.setPJ(empresa1);
for(let [key, value] of Object.entries(IEFunc.getAll())){
    console.log(`${key}: ${value}`);
}

console.log('\n----------\n');

IEjson.setNumero('333');
IEjson.setEstado('RJ');
IEjson.setDataRegistro(agora);
IEjson.setPJ(empresa1);
for(let [key, value] of Object.entries(IEjson.getAll())){
    console.log(`${key}: ${value}`);
}
//#endregion