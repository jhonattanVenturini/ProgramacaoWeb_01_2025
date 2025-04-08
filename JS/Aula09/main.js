// Estruturas de repetição (loops) em JavaScript For(loop)

// 1. For tradicional (com índice)
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}

// 2. For percorrendo um array
const frutas = ["maçã", "banana", "laranja"];

for (let i = 2; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 3. For...of (usado com arrays e iteráveis)
const nomes = ["Ana", "Bruno", "Carlos"];

for (let nome of nomes) {
  console.log(nome);
}

// 4. For...in (usado com objetos)
const pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };

for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}

// 5. Loop ao contrário
for (let i = 5; i >= 0; i--) {
  console.log("Contagem regressiva:", i);
}

// 6. Loop de for para pegar os numeros pares

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// for com array 

let megaSena = ["eu", "thiago", "vanessa", "Karoline"];
megaSena.push('Ryan')

for (i = 0;  i < megaSena.length ; i++) {
  console.log(`Parabens vc foi premiado!!!! ${megaSena[i]}`);
}
