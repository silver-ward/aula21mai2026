// #region Parte 1 – Criando o Array 
livro = [
    'Algoritmos',
    'JavaScript',
    'Banco de Dados'];

livro.push();

console.log(livro);
//#endregion

// #region Parte 2 – Inserindo Novos Livros
livro.push('Redes de Computadores');
livro.unshift('Lógica de Programação');

console.log(livro);
//#endregion

// #region Parte 3 – Consultando Informações
console.log(livro[0]);
console.log(livro[livro.length - 1]);
console.log(livro.length)
//#endregion

// #region Parte 4 – Removendo Livros
livro.pop(livro.length - 1);
livro.shift(livro[0])
console.log(livro);
//#endregion