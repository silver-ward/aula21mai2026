let frutas = ["maçã", "banana"];

frutas.push("laranja");      // adiciona ao final

frutas.unshift("uva");       // adiciona ao início

console.log(frutas);

console.log("Tamanho:", frutas.length);

console.log("Primeira fruta:", frutas[0]);

console.log("Última fruta:", frutas[frutas.length - 1]);

frutas.pop();                // remove o último elemento

frutas.shift();              // remove o primeiro elemento

console.log(frutas);