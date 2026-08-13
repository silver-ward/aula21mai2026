const Cliente = require('./objetos/Cliente.js');
const Animal = require('./objetos/Animal.js');
const Prontuario = require('./objetos/Prontuario.js');
const Veterinario = require('./objetos/Veterinario.js');

//#region Cliente
const Mario = new Cliente();
Mario.setNome('Mario');
console.log(Mario.getNome());
Mario.setTelefone('11987654321');
console.log(Mario.getTelefone());

//#endregion

//#region Animal1 + Prontuario1
const Pipo = new Animal();
Pipo.setNome('Pipo');
console.log(Pipo.getNome());
Pipo.setEspecie('Gato');
console.log(Pipo.getEspecie());
Pipo.setCliente(Mario);
console.log(Pipo.getCliente().getNome());

const prontuarioPipo = new Prontuario();
prontuarioPipo.setNumero('1');
console.log(prontuarioPipo.getNumero());
prontuarioPipo.setObservacoes('Vacina antirrábica aplicada.');
console.log(prontuarioPipo.getObservacoes());

Pipo.setProntuario(prontuarioPipo);
console.log(Pipo.getProntuario().getNumero());
//#endregion

//#region Animal2 + Prontuario2
const Mimi = new Animal();
Mimi.setNome('Mimi');
console.log(Mimi.getNome());
Mimi.setEspecie('Gato');
console.log(Mimi.getEspecie());
Mimi.setCliente(Mario);
console.log(Mimi.getCliente().getNome());

const prontuarioMimi = new Prontuario();
prontuarioMimi.setNumero('2');
console.log(prontuarioMimi.getNumero());
prontuarioMimi.setObservacoes('Vacina antirrábica aplicada.');
console.log(prontuarioMimi.getObservacoes());

Mimi.setProntuario(prontuarioMimi);
console.log(Mimi.getProntuario().getNumero());
//#endregion

//#region Veterinario
const Larissa = new Veterinario();
Larissa.setNome('Larissa');
console.log(Larissa.getNome());
Larissa.setCRMV('12345');
console.log(Larissa.getCRMV());

const Rafela = new Veterinario();
Rafela.setNome('Rafela');
console.log(Rafela.getNome());
Rafela.setCRMV('67890');
console.log(Rafela.getCRMV());

Pipo.addVeterinario(Larissa);
console.log(Pipo.getVeterinarios());
Mimi.addVeterinario(Larissa);
console.log(Mimi.getVeterinarios());

Pipo.addVeterinario(Rafela);
console.log(Pipo.getVeterinarios());
Mimi.addVeterinario(Rafela);
console.log(Mimi.getVeterinarios());
//#endregion