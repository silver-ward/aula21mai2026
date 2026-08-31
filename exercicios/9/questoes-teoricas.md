## 1 Qual é a vantagem de consultar diretamente a API antes de modificar a classe?

Se certificar de que a API está acessível e funcionando antes de gastar recursos computacionais sobre os dados esperados dessa API. Além disso, se torna possível mostrar mensagens de erro mais precisas. Nesse caso, se a consulta falhar, o erro deve estar na API e não no client ou no servidor da nossa aplicação.

## 2 Por que os novos dados devem ser armazenados em atributos privados?

Para manter o controle de como os dados desses atributios devem ser escritos.

## 3 Qual é a finalidade dos métodos `get` adicionados à classe?

Recuperar o valor de atributos específicos.

## 4 Por que não devemos acessar diretamente os atributos retornados pela API fora de `setCep()`?

Porque o método `setCep()` contém regras de normalização de dados, avaliação de disponibilidade da API e mensagens de erro apropriadas.

## 5 Qual é a diferença entre o nome de uma propriedade da API e o nome de um atributo da classe?

A API retorna um JSON. Utilizamos o nome de uma propriedade desse JSON para acessar o seu valor correspondente.

Ao recuperar esse valor, o escrevemos em um atributo da classe para que possamos manipulá-lo individualmente na classe Endereço.

Por questões organizacionais, a propriedade do JSON e o atributo da classe Endereço terão o mesmo nome ou um nome muito parecido, porque descrevem a mesma coisa em momentos diferentes da pipeline.

## 6 Por que a classe não precisa utilizar obrigatoriamente os mesmos nomes adotados pelo ViaCEP?

Porque definimos manualmente onde cada atributo recuperado por meio do ViaCEP será escrito.

Há situações em que podemos usar bibliotecas que fazem a conversão dos itens JSON para os atributos de uma classe de forma automática, baseado na equivalência dos nomes utilizados.

Entretanto, no nosso caso, podemos chamar os atributos do que quisermos: `x`, `y`, `z`, `regiao`, `cidade`. Isso não muda o funcionamento da sintaxe JavaScript. Usar nomes equivalentes é apenas uma conveniência lógica.

## 7 O que aconteceria se a API adicionasse novos campos no futuro?

Desde que o formato JSON permanecesse, o código continuaria funcionando como se nada houvesse mudado. Isso se deve ao fato de termos primeiro guardado a resposta inteira da API em uma variável para apenas depois acessar elementos de nosso interesse. Desde que esses elementos ainda estejam lá, a existência de novos elementos não irá alterar o funcionamento do programa.

## 8 Por que o tratamento com try/catch deve continuar funcionando mesmo após a inclusão de novos atributos?

Porque o bloco try depende apenas da resposta da API e a existência dos atributos que teoricamente não deixaram de existir. Se esses elementos ainda estiverem presentes, não há por que o tratamento falhar.
