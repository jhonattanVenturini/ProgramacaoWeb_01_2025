
// 1.1. Sistema de Atendimento de Hamburgueria
// 📌 Descrição:
// O sistema recebe o tamanho do lanche escolhido pelo cliente (pequeno, médio ou grande).
// Se for pequeno, informa que demora 5 minutos para ficar pronto.
// Se for médio, informa que demora 10 minutos.
// Se for grande, informa que demora 15 minutos.
// Se o tamanho for inválido, exibe uma mensagem de erro.


//exemplo 01 - hamburgueria

// 1.1. Sistema de Atendimento de Hamburgueria
console.log('--------------------------------------------------');
console.log('Bem-vindo à Hamburgueria! JHOWBURGUER 😎');
console.log('Escolha o tamanho do seu lanche:');

// colocar o tamanho do lanche aqui 
let tamanho = 'médio'; // Pode ser "pequeno", "médio" ou "grande"


if(tamanho === 'pequeno'){
    console.log(`Olá, seu pedido ${tamanho} estará pronto em 5 minutos! 🍔`);	
} 
else if(tamanho === 'médio'){
    console.log(`Olá, seu pedido ${tamanho} estará pronto em 10 minutos! 🍔`);	
} 
else if(tamanho === 'grande'){
    console.log(`Olá, seu pedido ${tamanho} estará pronto em 10 minutos! 🍔`);	
} 
else {
    console.log("Tamanho inválido! Escolha entre pequeno, médio ou grande.");
}
console.log('Obrigado por escolher a JHOWBURGUER! 🍔');
// FINAL DO SISTEMA DE ATENDIMENTO DE HAMBURGUERIA
console.log('--------------------------------------------------');



// 1.2. Sistema de Atendimento Telefônico
// 📌 Descrição:
// O cliente liga e o sistema verifica a prioridade do atendimento.
// Se for um caso urgente, direciona para um atendente imediatamente.
// Se for um caso comum, coloca o cliente na fila de espera.
// Se o cliente deseja informações gerais, redireciona para um menu automático.
// Se a opção for inválida, informa que não pode processar a solicitação.


//exemplo 02 - atendimento telefonico
// 1.2. Sistema de Atendimento Telefônico

console.log('--------------------------------------------------');
console.log('Bem-vindo ao Atendimento Telefônico! 📞')
console.log('Escolha a prioridade do seu atendimento:');
console.log('1. Urgente');  

let prioridade = 1; // Pode ser 1 (Urgente), 2 (Comum) ou 3 (Informações Gerais)
console.log('2. Comum');
console.log('3. Informações Gerais');
console.log('--------------------------------------------------');
console.log('Escolha uma opção: ');
// colocar a prioridade aqui
let opcao = 1; // Pode ser 1 (Urgente), 2 (Comum) ou 3 (Informações Gerais)
console.log('--------------------------------------------------');
console.log('--------------------------------------------------');
console.log('Você escolheu a opção: ' + opcao);

console.log('--------------------------------------------------');



if(opcao === 1){
    console.log('Atendimento Urgente! Você será atendido imediatamente. 🚨');	
}
else if(opcao === 2){
    console.log('Atendimento Comum! Você está na fila de espera. ⏳');	
}
else if(opcao === 3){
    console.log('Informações Gerais! Você será redirecionado para o menu automático. 📋');	
}
else {
    console.log('Opção inválida! Não conseguimos processar sua solicitação. ❌');
}
console.log('Obrigado por entrar em contato! 📞');
// FINAL DO SISTEMA DE ATENDIMENTO TELEFÔNICO
console.log('--------------------------------------------------');