// #region Parte 1 – Criando o Array 
console.log('--------------------');
console.log('Parte 1 – Criando o Array:');
livro = [
    'Algoritmos',
    'JavaScript',
    'Banco de Dados'];
console.log(livro);
console.log();
//#endregion

// #region Parte 2 – Inserindo Novos Livros
console.log('--------------------');
console.log('Parte 2 – Inserindo Novos Livros:');
livro.push('Redes de Computadores');
livro.unshift('Lógica de Programação');
console.log(livro);
console.log();
//#endregion

// #region Parte 3 – Consultando Informações
console.log('--------------------');
console.log('Parte 3 – Consultando Informações:');
console.log(livro[0]);
console.log(livro[livro.length - 1]);
console.log(livro.length);
console.log();
//#endregion

// #region Parte 4 – Removendo Livros
console.log('--------------------');
console.log('Parte 4 – Removendo Livros:');
livro.pop(livro.length - 1);
livro.shift(livro[0]);
console.log(livro);
console.log();
//#endregion

// #region Parte 5 – Atualizando Informações
console.log('--------------------');
console.log('Parte 5 – Atualizando Informações:');
livro[1] = 'Programação Web';
console.log(livro);
console.log();
//#endregion

// #region Desafio Extra 1
console.log('--------------------');
console.log('Desafio Extra 1');
livro.push(
    'Engenharia de Software',
    'Governança de TI',
    'Práticas de Programação'
    )
console.log(livro.length);
//#endregion

// #region Desafio Extra 2
console.log('--------------------');
console.log('Desafio Extra 2');

for(i in livro){
    console.log(`Livro ${String(Number(i) + 1)}: ${livro[i]}.`)
}
//#endregion

// #region Desafio Avançado
console.log('--------------------');
console.log('Desafio Avançado');
emprestados = [];

console.log('Emprestados: ');
console.log(emprestados);
console.log('Livro: ');
console.log(livro);

emprestados.push(livro.pop());

console.log('Emprestados: ');
console.log(emprestados);
console.log('Livro: ');
console.log(livro);
//#endregion