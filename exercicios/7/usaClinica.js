const Cliente = require('./objetos/Cliente.js');
const Animal = require('./objetos/Animal.js');
const Prontuario = require('./objetos/Prontuario.js');
const Veterinario = require('./objetos/Veterinario.js');

const Mario = new Cliente();
Mario.setNome('Mario');
Mario.setTelefone('11987654321');



const Pipo = new Animal();
Pipo.setNome('Pipo');
Pipo.setEspecie('Gato');
Pipo.setCliente(Mario);

const prontuarioPipo = new Prontuario();
prontuarioPipo.setNumero('1');
prontuarioPipo.setObservacoes('Vacina antirrábica aplicada.');

Pipo.setProntuario(prontuarioPipo);



const Mimi = new Animal();
Mimi.setNome('Mimi');
Mimi.setEspecie('Gato');
Mimi.setCliente(Mario);

const prontuarioMimi = new Prontuario();
prontuarioMimi.setNumero('2');
prontuarioMimi.setObservacoes('Vacina antirrábica aplicada.');

Mimi.setProntuario(prontuarioMimi);



const Larissa = new Veterinario();
Larissa.setNome('Larissa');
Larissa.setCRMV('12345');

const Rafela = new Veterinario();
Rafela.setNome('Rafela');
Rafela.setCRMV('67890');

Pipo.addVeterinario(Larissa);
Mimi.addVeterinario(Larissa);

Pipo.addVeterinario(Rafela);
Mimi.addVeterinario(Rafela);