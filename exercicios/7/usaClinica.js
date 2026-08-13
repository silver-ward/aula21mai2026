const Cliente = require('./objetos/Cliente.js');
const Animal = require('./objetos/Animal.js');
const Prontuario = require('./objetos/Prontuario.js');
const Veterinario = require('./objetos/Veterinario.js');

//#region Cliente
const Mario = new Cliente();
Mario.setNome('Mario');
console.log('Cliente Nome: ' + Mario.getNome());
Mario.setTelefone('11987654321');
console.log('Cliente Telefone: ' + Mario.getTelefone());

console.log('\n===============\n');
//#endregion

//#region Animal1 + Prontuario1
const Pipo = new Animal();
Pipo.setNome('Pipo');
console.log('Animal Nome: ' + Pipo.getNome());
Pipo.setEspecie('Gato');
console.log('Animal Espécie: ' + Pipo.getEspecie());
Mario.addAnimal(Pipo);
console.log('Nome do Cliente Pipo: ' + Pipo.getCliente().getNome());

console.log('\n----------\n');

const prontuarioPipo = new Prontuario();
prontuarioPipo.setNumero('1');
console.log('Número Prontuário: ' + prontuarioPipo.getNumero());
prontuarioPipo.setObservacoes('Vacina antirrábica aplicada.');
console.log('Observações Prontuário: ' + prontuarioPipo.getObservacoes());

Pipo.setProntuario(prontuarioPipo);
console.log('Número de prontuário Pipo: ' + Pipo.getProntuario().getNumero());

console.log('\n===============\n');
//#endregion

//#region Animal2 + Prontuario2
const Mimi = new Animal();
Mimi.setNome('Mimi');
console.log('Animal Nome: ' + Mimi.getNome());
Mimi.setEspecie('Gato');
console.log('Animal Espécie: ' + Mimi.getEspecie());

Mario.addAnimal(Mimi);
console.log('Nome do Cliente Mimi: ' + Mimi.getCliente().getNome());

console.log('\n----------\n');

const prontuarioMimi = new Prontuario();
prontuarioMimi.setNumero('2');
console.log('Número Prontuário: ' + prontuarioMimi.getNumero());
prontuarioMimi.setObservacoes('Vacina antirrábica aplicada.');
console.log('Observações Prontuário: ' + prontuarioMimi.getObservacoes());

Mimi.setProntuario(prontuarioMimi);
console.log('Número de prontuário Mimi: ' + Mimi.getProntuario().getNumero());

console.log('\n===============\n');
//#endregion

//#region Veterinario
const Larissa = new Veterinario();
Larissa.setNome('Larissa');
console.log('Nome Veterinário: ' + Larissa.getNome());
Larissa.setCRMV('12345');
console.log('Número Veterinário: ' + Larissa.getCRMV());

console.log('\n----------\n');

const Rafela = new Veterinario();
Rafela.setNome('Rafela');
console.log('Nome Veterinário: ' + Rafela.getNome());
Rafela.setCRMV('67890');
console.log('Número Veterinário: ' + Rafela.getCRMV());

console.log('\n----------\n');

Pipo.addVeterinario(Larissa);
console.log('Veterinários Pipo: ' + Pipo.getVeterinarios());
Mimi.addVeterinario(Larissa);
console.log('Veterinários Mimi: ' + Mimi.getVeterinarios());

console.log('\n----------\n');

Pipo.addVeterinario(Rafela);
console.log('Veterinários Pipo: ' + Pipo.getVeterinarios());
Mimi.addVeterinario(Rafela);
console.log('Veterinários Mimi: ' + Mimi.getVeterinarios());

console.log('\n===============\n');
//#endregion


console.log('Testes de listagem: \n');

Mario.listarAnimais();
console.log();
Pipo.listarVeterinarios();
console.log();
Mimi.listarVeterinarios();