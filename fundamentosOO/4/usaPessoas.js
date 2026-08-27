//#region Seção Pessoa
console.log('\n========== Seção Pessoa ==========\n');

const Pessoa = require('./pessoas/Pessoa');

const x = new Pessoa();

// resposta = x.setNome('Leandro');
resposta = x.setNome('');

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

const PF = require('./pessoas/PF');

const y = new PF();

resposta = y.setNome('Pedro');
console.log(resposta);

if (resposta) {
    console.log(y.getNome());
} else {
    console.log("Nome vazio");
}

resposta = y.setEmail('');
console.log(resposta);

if (resposta) {
    console.log(y.getEmail());
} else {
    console.log("Email vazio");
}

resposta = y.setCPF('123456789-10');
console.log(resposta);

if (resposta) {
    console.log(y.getCPF());
} else {
    console.log("CPF vazio");
}
//#endregion

//#region Seção PJ
console.log('\n========== Seção PJ ==========\n');

const PJ = require('./pessoas/PJ');

const z = new PJ();

resposta = z.setNome('Empresa ABC');
console.log(resposta);

if (resposta) {
    console.log(z.getNome());
} else {
    console.log("Nome vazio");
}

resposta = z.setEmail('contato@empresa.com');
console.log(resposta);

if (resposta) {
    console.log(z.getEmail());
} else {
    console.log("E-mail inválido");
}

resposta = z.setCNPJ('12.345.678/0001-90');
console.log(resposta);

if (resposta) {
    console.log(z.getCNPJ());
} else {
    console.log("CNPJ inválido");
}
//#endregion