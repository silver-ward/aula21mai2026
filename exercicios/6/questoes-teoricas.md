## 1 O que é um array?

É um objeto que permite armazenar uma coleção de itens sob uma mesma variável;

## 2 Como os elementos de um array são organizados?

Os elementos são indexados por números naturais a partir do 0.
Dessa forma, para referenciar o primeiro elemento de um array "conjunto", utiliza-se `conjunto[0]`.

## 3 Qual é a diferença entre `push()` e `unshift()`?

`push()` adiciona um elemento na posição do último elemento + 1, ou seja, ao final da lista.

`unshift()` adiciona um elemento na primeira posição, ou seja, no começo da lista.

## 4 Qual é a diferença entre `pop()` e `shift()`?

`pop()` remove o último elemento do array.

`shift()` remove o primeiro elemento do array.

## 5 Para que serve a propriedade `length`?

Essa propriedade retorna a quantidade de elementos armazenados em um array.

## 6 Como acessar o último elemento de um array sem informar um indice fixo?

Em um array 'conjunto', o último elemento pode ser acessado dinamicamente usando a propriedade `length` - 1.

se `conjunto = ['a', 'b', 'c']`

então `conjunto.length` será igual a 3.

podemos então usar conjunto.length para acessar o elemento equivalente ao próprio tamanho do array:

`conjunto[conjunto.length]`

Entretanto, a indexação do array começa a partir do zero, então o elemento `'c'` está na posição `[2]`.

Enquanto isso, a contagem do array começa a partir do um, então o elemento `'c'` é considerado o 3o item.

Para compensar essa diferença, podemos simplesmente buscar a quantidade de elementos do array, subtrair 1, e usar esse resultado para acessar o valor equivalente ao último elemento indexado no array:

`conjunto[conjunto.length - 1]`

## 7 Por que utilizar arrays em vez de criar uma variável para cada informaçao?

Pelo mesmo motivo que utilizamos uma variável em vez da informação pura: para facilitar a referência dessa informação em outras partes do código. Se um fluxo processa 10 elementos, fica bem mais fácil referenciar um único array que aponta para os 10 elementos do que referenciar cada elemento em si pelo nome da sua variável individual.

Além disso, utilizamos arrays quando a união das informações em si tem relevância. Por exemplo, consideremos uma variável que diz se o usuário está logado, outra que diz se o usuário é premium e uma última que diz se o usuário é aluno, professor ou administrador. Se o programa precisa avaliar a informação dessas três variáveis em conjunto para todas as requisições de acesso, talvez seja oportuno refatorar o código para que as três informações sejam referenciáveis por um único array.