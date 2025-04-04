

// Estruturas de controle - Switch Case
// 1. Sistema de Seleção de Dias da Semana (Switch Case)
// 📌 Descrição
// O sistema recebe um número de 1 a 7 como entrada, representando os dias da semana.
// Se o número for 1, exibe: "Hoje é segunda-feira."
// Se o número for 2, exibe: "Hoje é terça-feira."
// Se o número for 3, exibe: "Hoje é quarta-feira."
// Se o número for 4, exibe: "Hoje é quinta-feira."
// e assim por diante até 7.
// Útil para sistemas de agendamento, lembretes, etc.

let diasSemana = 8

switch (diasSemana) {
    case 1:
        console.log('hoje é segunda-feira! 😒');
        break;
    case 2:
        console.log('hoje é terça-feira! 🤦‍♂️');
        break;
    case 3:
        console.log('hoje é quarta-feira!😎');
        break;
    case 4:
        console.log('hoje é quinta-feira!🤩');
        break;
    case 5:
        console.log('hoje é sexta-feira!😍');
        break;
    case 6:
        console.log('hoje é sabado, UFA FOLAGAAAA! 🏖️');
        break;
    case 7:
        console.log('hoje é domingo! 😴');
        break;
    default:
        console.log('não é um dia da semana!😬😬😬');
        break;
}

