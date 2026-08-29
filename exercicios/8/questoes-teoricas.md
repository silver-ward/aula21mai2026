## 1 Qual é a principal diferença entre os laços `for` e `while`?

O laço for tipicamente é atrelado a uma variável de contagem que é incrementada ou decrementada, controlando numericamente quantas vezes o laço será repetido.

O laço while tipicamente é atrelado a uma condição que possa ser lida como true ou false e interrompe a repetição do laço quando essa condição troca de valor.

## 2 Em qual situação o laço `do...while` é mais indicado?

Quando é preciso que o bloco de código rode pelo menos uma vez antes de checar alguma condição. Pode ser o caso, por exemplo, de um menu de navegação de terminal.

## 3 Qual é a vantagem do laço `for...of` quando trabalhamos com arrays?

A vantagem é que essa sintaxe esgota todos os valores de um array automaticamente, sem a necessidade de variáveis de controle.

## 4 Para que serve a propriedade `length`?

Para recuperar a quantidade de itens em uma variável.

## 5 O que acontece se esquecermos de atualizar a variável de controle em um laço `while`?

O estado da variável nunca mudará e portanto o laço será repetido indefinidamente.

## 6 Qual estrutura você considera mais adequada para percorrer um array? Justifique sua resposta.

`for` e `for of` porque são próprias para percorrer listas.

Enquanto isso, `while` e `do while` são mais propícios para situações nas quais um código precisa repetir incessantemente até que ocorra uma mudança de estado.

## 7 Em quais situações é necessário utilizar o índice dos elementos de um array?

Sempre que se quiser acessar os itens desse array. A indexação só é dispensável quando aquilo que importa não são cada um dos itens do array, mas sim o conjunto, o objeto array como um todo.