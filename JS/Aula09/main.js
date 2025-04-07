
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





