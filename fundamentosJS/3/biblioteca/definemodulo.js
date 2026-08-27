function soma(x, y) {
  let soma = x + y; // variável local
  return soma;     // retorna o resultado
}

const subtrair = function(x, y) { 
  return x - y; 
}

// módulos são utilizados para
// disponibilizar bibliotecas, funções e classes
module.exports = { soma, subtrair }