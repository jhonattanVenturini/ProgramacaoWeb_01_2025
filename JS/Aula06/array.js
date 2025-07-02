
// exemplos pratico de Arrays em JavaScript

// Array simples aonde armazenamos dados de trufas e exibimos no console 
const frutas = ["Maçã", "Banana", "Laranja", "Manga"];
console.log(frutas);



// array com valores diferentes
const numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros);



// array que adiciona valores a um array vazio
const cores = [];
cores.push("Azul");
cores.push("Vermelho");
cores.push("Verde");
console.log(cores);


//array bidimensional (matriz) aonde armazenamos dados de trufas e exibimos no console
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[1][2]); // Saída: 6 (segunda linha, terceira coluna) 


// array de objetos aonde armazenamos dados de trufas e exibimos no console
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Carlos", idade: 28 }
];

console.log(pessoas[1].nome); // Saída: Maria



// array de funções aonde armazenamos dados de trufas e exibimos no console
const operacoes = [
    function (a, b) { return a + b; },
    function (a, b) { return a - b; },
    function (a, b) { return a * b; }
];

console.log(operacoes[0](5, 3)); // Saída: 8 (chama a função de soma)
