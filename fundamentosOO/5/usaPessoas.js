const Pessoa = require('./pessoas/Pessoa.js');
const PF = require('./pessoas/PF.js');
const PJ = require('./pessoas/PJ.js');
const Aluno = require('./pessoas/Aluno.js');

//#region Seção Pessoa
console.log('\n========== Seção Pessoa ==========\n');

const x = new Pessoa();

let resposta = x.setNome('');
console.log(resposta);

if (resposta) {
  console.log(x.getNome());
} else {
  console.log("Nome vazio");
}

resposta = x.setEmail('vaguetti@gmail.com');

console.log(resposta);

if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("E-mail vazio");
}
//#endregion

//#region Seção PF
console.log('\n========== Seção PF ==========\n');

const y = new PF();

resposta = y.setNome('Pedro');
console.log(resposta);

if(resposta){
  console.log(`Nome: ${y.getNome()}`);
} else {
  console.log('Nome inválido.');
}

resposta = y.setEmail('');
console.log(resposta);

if (resposta){
  console.log(`Email: ${y.getEmail()}`);
} else {
  console.log('Email inválido.');
}

resposta = y.setCPF('123456789-10');
console.log(resposta);

if (resposta){
  console.log(`CPF: ${y.getCPF()}`);
}else{
  console.log('CPF inválido.');
}
//#endregion

//#region Seção PJ
console.log('\n========== Seção PJ ==========\n');

const z = new PJ();

resposta = z.setNome("Frios LTDA");
console.log(resposta);
if (resposta){
  console.log(`Nome: ${z.getNome()}`);
}
else{
  console.log('Nome inválido.');
}

resposta = z.setEmail("frios@email.com");
console.log(resposta);
if(resposta){
  console.log(`E-mail: ${z.getEmail()}`);
}
else{
  console.log('E-mail inválido.');
}

resposta = z.setCNPJ('');
console.log(resposta);
if(resposta){
  console.log(`CNPJ: ${z.getCNPJ()}`);
}
else{
  console.log('CNPJ inválido.');
}
//#endregion

//#region Seção Aluno
console.log('\n========== Seção Aluno ==========\n');

const w = new Aluno();

resposta = w.setNome('Pedro');
console.log(resposta);

if(resposta){
  console.log(w.getNome());
}
else{
  console.log("Nome vazio.");
}

resposta = w.setMatricula('20123456');
console.log(resposta);

if (resposta){
  console.log(w.getMatricula());
}
else{
  console.log("Matrícula inválida");
}

resposta = w.setCurso('SIS');
console.log(resposta);

if (resposta){
  console.log(w.getCurso());
}
else{
  console.log("Curso inválido")
}
//#endregion