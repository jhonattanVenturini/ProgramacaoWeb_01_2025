// 2.1. Sistema de Pedidos de Pizza
// 📌 Descrição:
// O sistema recebe o sabor da pizza escolhido pelo cliente.
// Se o cliente escolher Calabresa, o sistema informa que custa R$ 30,00.
// Se for Mussarela, informa que custa R$ 28,00.
// Se for Frango com Catupiry, informa que custa R$ 35,00.
// Se o sabor não estiver no menu, exibe uma mensagem de erro.


// 2.3. Sistema de pedidos de Pizzas    


console.log('--------------------------------------------------');
console.log('Bem-vindo à Pizzaria do JHONVEN ! 🍕') ;
console.log('Escolha o sabor da sua pizza:');   

let pizzas = 'Calabresa'; // Pode ser "Calabresa", "Mussarela" ou "Frango com Catupiry"

switch (pizzas) {
    case value = 'Calabresa':
        console.log('A sua escolha foi: ' + pizzas);
        console.log('--------------------------------------------------');  
        break;
    case value = 'Mussarela':
        console.log('A sua escolha foi: ' + pizzas);
        console.log('--------------------------------------------------');  
        break;
    case value = 'Frango com Catupiry':
        console.log('A sua escolha foi: ' + pizzas);
        console.log('--------------------------------------------------');  
        break;
    default:
        console.log('Sabor não disponível! Escolha entre Calabresa, Mussarela ou Frango com Catupiry.');
        console.log('--------------------------------------------------');
        break;
}
console.log('Obrigado por escolher a Pizzaria do JHONVEN! 🍕');
console.log('--------------------------------------------------');


// 2.2. Sistema de Suporte Técnico
// 📌 Descrição:
// O sistema recebe um código de erro relatado pelo cliente.
// Se o código for E101, informa que há um problema na conexão de internet.
// Se for E202, indica que há uma falha no servidor.
// Se for E303, informa que há um erro no login do sistema.
// Se o código não for reconhecido, exibe a mensagem "Erro desconhecido, entre em contato com o suporte".



console.log('--------------------------------------------------');
console.log('Bem-vindo à SuportWordJhon! 🛠️') ;
console.log('Informe o código de erro:');   

let erros = 'E101'; // Pode ser "E101", "E202" ou "E303"

switch (erros) {
    case value = 'E101':
        console.log('O código de erro informado foi: ' + erros);
        console.log('Problema na conexão de internet!');
        console.log('--------------------------------------------------');
        break;
    case value = 'E102':
        console.log('O código de erro informado foi: ' + erros);
        console.log('Problema na conexão de internet!');
        console.log('--------------------------------------------------');
        break;
    case value = 'E103':
        console.log('O código de erro informado foi: ' + erros);
        console.log('Problema na conexão de internet!');
        console.log('--------------------------------------------------');
        break;
    case value = 'E104':
        console.log('O código de erro informado foi: ' + erros);
        console.log('Problema na conexão de internet!');
        console.log('--------------------------------------------------');
        break;

    default:
        console.log('Erro desconhecido, entre em contato com o suporte!');
        console.log('--------------------------------------------------');
        break;
} 
console.log('Obrigado por escolher a SuportWordJhon! 🛠️');
console.log('--------------------------------------------------');
