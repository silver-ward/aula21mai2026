import PF from './Entities/PF.js';
import PFDAO from './DAOs/PFDAO.mjs';
import Endereco from './Entities/Endereco.js';
import Telefone from './Entities/Telefone.js';

const pf = new PF();

pf.setNome('Eduardo');
pf.setEmail('eduardo@email.com');
pf.setCPF('123.456.789-00');

const endereco = new Endereco();

endereco.setLogradouro('QNM 40');
endereco.setCep('12345-678');

pf.setEndereco(endereco);

const fone1 = new Telefone();

fone1.setDdd('61');
fone1.setNumero('99999-8888');

pf.addTelefone(fone1);

const fone2 = new Telefone();

fone2.setDdd('13');
fone2.setNumero('99999-7777');

pf.addTelefone(fone2);

const pfDAO = new PFDAO(pf);

const dados = pfDAO.toJSON();

pfDAO.saveJSON();

console.log(dados);
console.log(JSON.stringify(dados));
console.log(pfDAO.recoveryJSON());