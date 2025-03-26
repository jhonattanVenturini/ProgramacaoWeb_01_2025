
// Aula de programação - Desenvolvimento Web 04
// CONSTANTES E TAREFAS PARA FIXAÇÃO

let peso = 40
let altura = 1.53
let imc = peso / (altura * altura);

// Definição de mensagens baseadas na faixa de IMC
const magreza = "Coma mais, você está abaixo do peso.";
const normal = "Continue assim! Seu peso está normal.";
const sobrepeso = "Você está acima do peso, cuidado.";
const obesidade = "Você está obeso, cuide da sua saúde!";
const obesidadeGrave = "Você precisa ir ao médico urgentemente!";

// Mensagem inicial
console.log("Olá amigos,");
console.log("Vamos calcular o seu IMC?");

console.log('O seu IMC é:', imc);

if (imc <= 18.4) {
    console.log(magreza);
} else if (imc <= 24.9) {
    console.log(normal);
} else if (imc <= 29.9) {
    console.log(sobrepeso);
} else if (imc <= 39.9) {
    console.log(obesidade);
} else {
    console.log(obesidadeGrave);
}
