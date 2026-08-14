## 1 Qual é a diferença entre um relacionamento 1:1 e um relacionamento 1:N?

Um relacionamento 1:1 entre X e Y quer dizer que cada X é ligado a apenas um Y e vice versa.

Um relacionamento 1:N entre X e Y quer dizer que cada X pode ser ligado a vários Y, porém cada Y só é ligado a um X.

## 2 Em quais situações utilizamos um relacionamento N:N?

Quando não há limites de relacionamentos entre X e Y - um X pode ser ligado a vários Y e cada Y pode ser ligado a vários X.

## 3 Qual é a finalidade do operador `instanceof` neste exercício?

Checar se o valor passado se trata de uma instância do objeto que queremos.

## 4 O que são referências cruzadas entre objetos?

É quando uma mesma operação gera contabilizações em mais de um objeto. Por exemplo, ao se adicionar um Prontuario a um Animal, automaticamente se adiciona esse Animal ao próprio Prontuario.

## 5 Qual é a vantagem de organizar cada classe em um arquivo separado?

Organizar o código e expor e carregar as suas partes apenas quando essas forem necessárias.

## 6 Qual é a diferença entre herança e composição?

Quando uma superclasse é herdada, as próprias instâncias da subclasse ganham acesso às funcionalidades da superclasse.

Já na composição, uma primeira classe meramente instancia os objetos ou referencia a estrutura de uma segunda classe, mas sem herança de funcionalidades para as instâncias da primeira classe.

## 7 Em qual relacionamento do exercício foi utilizada a composição?

Animal usa Cliente, Prontuario e Veterinario internamente.

Cliente, Prontuario e Veterinario usam Animal internamente.

## 8 Explique como os relacionamentos implementados tornam o sistema mais próximo da realidade.

Na vida real, seria possível inferir os relacionamentos entre cada objeto a partir de qualquer um deles. Seria lógico checar um documento como um prontuário para descobrir quais pets pertencem a quais clientes e por quais veterinários foram atendidos, mas também seria natural perguntar ao veterinário qual pet foi atendido, ou perguntar ao cliente qual veterinário o atendeu. As referências cruzadas e composições no código aproximam o seu funcionamento da flexibilidade da realidade.