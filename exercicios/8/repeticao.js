//#region Parte 1 - Criando o Array
console.log('========== Parte 1 ==========');
const alunos = [
    'Ana',
    'Bruno',
    'Carlos',
    'Daniela',
    'Eduardo',
    'Fernanda',
    'Gabriel'
];

console.log(alunos);
//#endregion

//#region Parte 2 - Utilizando o Laço for
console.log('========== Parte 2 ==========\n');

for (let i = 0; i < alunos.length; i++){
    console.log(`Aluno ${i+1}: ${alunos[i]}\n`);
}
//#endregion

//#region Parte 3 – Utilizando o Laço while
console.log('========== Parte 3 ==========\n');

let i = 0;
while (i !== alunos.length){
    console.log(`Aluno ${i+1}: ${alunos[i]}\n`);
    i++;
}

//#endregion

//#region Parte 4 – Utilizando o Laço do...while
console.log('========== Parte 4 ==========\n');

i = 0;
do {
    console.log(`Aluno ${i+1}: ${alunos[i]}\n`);
    i++;
} while (i !== alunos.length)

//#endregion

//#region Parte 5 – Utilizando o Laço for...of
console.log('========== Parte 5 ==========\n');

for (aluno of alunos){
    if(aluno[aluno.length - 1] == 'a'){
        console.log(`Aluna: ${aluno}\n`);
    }
    else{
        console.log(`Aluno: ${aluno}\n`);
    }
}

//#endregion

//#region Parte 6 – Comparando os Laços
console.log('========== Parte 6 ==========');

console.log(`
• Qual laço apresentou o código mais simples?
    for of.
• Em qual deles foi necessário utilizar uma variável de controle?
    for, while e do while.
• Qual deles executa o bloco pelo menos uma vez?
    O do while executa o bloco uma vez antes de checar a condição.
• Em qual estrutura não foi necessário utilizar índices?
    for of.
    `);

//#endregion

//#region Desafio Extra 1
console.log('========== Desafio Extra 1 ==========');

for(i = 0; i < alunos.length; i++){
    if (i%2){
        console.log(`Aluno ${i + 1}: ${alunos[i]}\n`);
    }
}

//#endregion

//#region Desafio Extra 2
console.log('========== Desafio Extra 2 ==========');

i = alunos.length - 1;
while(i >= 0){
    console.log(`Aluno ${i + 1}: ${alunos[i]}\n`);
    i--;
}

//#endregion

//#region Desafio Avançado
console.log('========== Desafio Extra Avançado ==========');

let aprovados = [];
for (aluno of alunos){
    if (aluno.length > 5){
        aprovados.push(aluno)
    }
}
console.log(alunos);
console.log();
console.log(aprovados);
console.log();
//#endregion