## 1 Qual é a vantagem de fazer `PJ` herdar da classe `Pessoa`?

Reaproveitamento de métodos já escritos e congruência lógica - cada PJ é associado a uma pessoa.

## 2 Por que não devemos copiar para PJ os métodos já implementados em `Pessoa`?

Porque `PJ` já herda esses métodos de `Pessoa` e portanto pode acessá-los em suas próprias instâncias.

## 3 Qual é a finalidade do operador `instanceof` no método `setPJ()`?

Checar se o argumento passado para o método setPJ() realmente é um objeto da classe PJ.

## 4 Qual é a diferença entre `if(pj)` e `if(pj instance of PJ)`?

`if(pj)` apenas avalia se o argumento que for passado contém conteúdo.

`if(pj instance of PJ)` avalia se o conteúdo do argumento se trata de um objeto da classe PJ.

## 5 Qual é a diferença entre a classe `IEclss` e a função fábrica `IEfunc()`?



## 6 Como a função fábrica protege seus dados internos?

Essa sintaxe protege os seus dados internos ao criar as suas propriedades como objetos internos sob escopo local, por meio do termo reservado `let` e definindo, ao final do bloco, quais informações serão publicadas, por meio do termo reservado `return`.

## 7 Qual é a diferença entre o objeto literal `IEjson` e um documento JSON?

O objeto literal usa praticamente a mesma sintaxe do JSON, mas também atua como objeto, portanto aceita métodos e pode executar blocos de código que alteram propriedades dinamicamente.

O JSON, por outro lado, é estático, por isso não pode executar métodos e alterar propriedades dinamicamente. O JSON carrega apenas texto puro e por isso é mais seguro e apropriado para transferir informação via rede.

## 8 Qual é a diferença entre exportação padrão e exportação nomeada?

A exportação padrão `export default` define a exportação padrão de um módulo (ou seja, de um arquivo JavaScript). Sendo assim, fica definido que, caso o arquivo seja exportado, aquele valor é o que será exportado, por padrão.

Tanto que, dessa forma, é possível inclusive definir um nome diferente para a classe sendo exportada no local que recebe a sua importação, porque o JavaScript já entende, por padrão, quais informações devem ser trazidas do outro arquivo.

Já a exportação nomeada, como em `export function IEfunc()`, não define quais partes devem ser exportadas. Em vez disso, como o nome sugere, o arquivo realizando a importação deve especificar exatamente o nome dos valores que quer importar.

## 9 Por que `IEclss` utiliza `new`, enquanto `IEfunc()` não utiliza?

A classe é um construtor, uma estrutura que só é concretizada ao ser instanciada por meio de `new`. Quando instanciamos um objeto, os dados desse objeto são alocados na memória separadamente da alocação dos métodos da classe. Ou seja, carregamos os métodos da classe uma vez e, para cada nova instância dessa classe, carregamos apenas os dados, que são diferentes, mas acessamos os mesmos métodos da classe que já foram carregados na memória.

Uma função-fábrica é como um bloco de código que age como uma classe. Dessa forma, não utilizamos `new` e cada vez que assinalamos a função-fábrica a uma variável, temos que carregar tudo novamente na memória: tanto dados quanto funções.

Se instanciamos uma classe 100 vezes, carregamos os dados 100 vezes, mas as funções apenas uma vez.

Se chamarmos uma função-fábrica 100 vezes, carregamos tanto os dados quanto as funções 100 vezes.

## 10 Qual é a vantagem de organizar as classes e estruturas em arquivos separados?

Facilitar a navegação no código ao organizá-lo em termos de escopos e funções, assim como proteger informações ao exportar apenas as partes que precisarem ser expostas.

## 11 Como o relacionamento entre `IE` e `PJ` é representado no código?

Por meio da importação de `PJ.mjs` dentro do arquivo-classe `IE.mjs`.

## 12 Por que `instanceof Date` pode ser utilizado mesmo sem termos criado a classe `Date`?

Porque `Date` é um objeto nativo do JavaScript, portanto é acessível globalmente, sem necessidade de o criarmos.