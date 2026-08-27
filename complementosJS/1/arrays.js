// Forma 1: Atribuição direta na declaração
let dadosAluno = ['João', 12345, true];
console.log('dadosAluno:', dadosAluno);
console.log('dadosAluno:', dadosAluno[0]);

// Forma 2: Criação de um array vazio e atribuição por índice
let curso = [];
curso[0] = 'Análise de Sistemas';
curso[1] = 2025;
curso[2] = false;
console.log('curso:', curso);
console.log('curso:', curso[1]);

// Forma 3: Utilização do construtor Array()
let notas = new Array(7.5, 8.0, 6.9);
console.log('notas:', notas);

// Forma 4: Array com diferentes tipos de dados
let infoSistema = ['Ativo', 3.2, false, 'Finalizado'];
console.log('infoSistema:', infoSistema);

// Forma 5: Atualização dos valores de um array
infoSistema[0] = 'Inativo';
infoSistema[2] = true;
console.log('infoSistema atualizado:', infoSistema);

// Forma 6: Array com valores booleanos
let status = [true, false, true, true];
console.log('status:', status);
console.log('Status:', status[3]);

// Forma 7: Array com valores do tipo string
let cursos = ['ADS', 'SI', 'Engenharia', 'Jogos'];
console.log('cursos:', cursos);