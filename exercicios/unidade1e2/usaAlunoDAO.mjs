import Aluno from './Entities/Aluno.js';
import AlunoDAO from './DAOs/AlunoDAO.mjs';
import Endereco from './Entities/Endereco.js';
import Telefone from './Entities/Telefone.js';

const aluno = new Aluno();

aluno.setNome('Eduardo');
aluno.setEmail('eduardo@ifb.edu.br');
aluno.setCPF('123.456.789-00');
aluno.setMatricula('20123456');
aluno.setCurso('ES');

const endereco = new Endereco();

endereco.setLogradouro('QNM 40');
endereco.setCep('12345-678');

aluno.setEndereco(endereco);

const fone1 = new Telefone();

fone1.setDdd('61');
fone1.setNumero('99999-8888');

aluno.addTelefone(fone1);

const fone2 = new Telefone();

fone2.setDdd('13');
fone2.setNumero('99999-7777');

aluno.addTelefone(fone2);

const alunoDAO = new AlunoDAO(aluno);

const dados = alunoDAO.toJSON();

alunoDAO.saveJSON();

console.log(dados);
console.log(JSON.stringify(dados));
console.log(alunoDAO.recoveryJSON());