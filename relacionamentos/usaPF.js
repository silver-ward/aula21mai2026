const Telefone = require('./pessoas/Telefone');
const Endereco = require('./pessoas/Endereco');
//const Titulo = require('./pessoas/Titulo');

const PF = require('./pessoas/PF');

const end = new Endereco();
const fone1 = new Telefone();
const fone2 = new Telefone();

end.setLogradouro('QNM 40');

fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');

//const titulo = new Titulo();
//titulo.setNumero('1234156');
//titulo.setSecao('DF');

const obj = new PF();

obj.setNome('José');

obj.setEndereco(end);       // vincula Endereco à PF

obj.addTelefone(fone1);     // vincula Telefone à PF
obj.addTelefone(fone2);     // vincula outro Telefone à PF

//obj.setTitulo(titulo);      // vincula Título à PF

console.log(obj.getNome());

console.log(obj.getEndereco().getLogradouro());

console.log(obj.getTelefones());

//console.log(obj.getTitulo().getNumero());

// Verificando as referências cruzadas

console.log(end.getPessoas());

console.log(fone1.getPessoas());

//console.log(titulo.getPF().getNome());