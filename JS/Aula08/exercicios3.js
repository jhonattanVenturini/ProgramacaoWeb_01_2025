// 3.1. Sistema de Atendimento de Consultoria
// 📌 Descrição:
// O sistema contém um array de serviços disponíveis (consultoria financeira, empresarial e de marketing).
// O cliente escolhe um serviço, e o sistema executa a função correspondente.
// Se escolher consultoria financeira, exibe um plano de orçamento personalizado.
// Se escolher consultoria empresarial, oferece dicas de gestão.
// Se escolher consultoria de marketing, recomenda estratégias para divulgação.
// Se o serviço não for encontrado, informa que não há disponibilidade.


// 3.3. Sistema de Atendimento de Escola de Idiomas
// 📌 Descrição:
console.log('--------------------------------------------------');
console.log('Bem-vindo à WORDSCHOOL! 🌍');
console.log('Escolha o idioma que deseja aprender:');

let idiomas = ['Inglês', 'Espanhol', 'Francês'];
let idiomaEscolhido = 'Italiano'; 
let resposta = 'Sim'; 
let historicoMatriculas = []; 

// Exibe os idiomas disponíveis
console.log("Idiomas disponíveis:", idiomas.join(", "));

// Verifica se o idioma escolhido está na lista
if (idiomas.includes(idiomaEscolhido)) {
    console.log(`Você escolheu ${idiomaEscolhido}.`);

    // Pergunta se deseja confirmar a matrícula
    if (resposta.toLowerCase() === "sim") {
        historicoMatriculas.push(`Matrícula confirmada em ${idiomaEscolhido}.`);
        console.log(`Parabéns! Você foi matriculado no curso de ${idiomaEscolhido}. 🎉`);
    } else {
        historicoMatriculas.push(`Matrícula recusada para ${idiomaEscolhido}.`);
        console.log("Matrícula não realizada. Caso mude de ideia, estamos à disposição!");
    }
} else {
    console.log("Desculpe, esse idioma não está disponível no momento.");
}

// Exibe o histórico de matrículas
console.log("📜 Histórico de Matrículas:");
console.log(historicoMatriculas);
console.log('--------------------------------------------------');


// 3.4. Sistema de Atendimento de Escola de Música
// 📌 Descrição:
// O sistema contém um array de instrumentos musicais (violão, piano, bateria).
// O cliente escolhe um instrumento, e o sistema verifica a disponibilidade.
// Se o cliente escolher violão, informa que há aulas disponíveis.
// Se escolher piano, informa que há aulas disponíveis.
// Se escolher bateria, informa que há aulas disponíveis.
// Se o instrumento não estiver disponível, informa que não há aulas disponíveis.

console.log('--------------------------------------------------');
console.log('🎵 Bem-vindo à de MusicFy! 🎶');
console.log('Escolha um instrumento para verificar a disponibilidade de aulas:');

let instrumentos = ['Violão', 'Piano', 'Bateria']; 
let instrumentoEscolhido = 'Piano'; 
let historicoAulas = []; 

// Exibe os instrumentos disponíveis
console.log("🎼 Instrumentos disponíveis:", instrumentos.join(", "));

// Verifica se o instrumento está disponível e armazena no array
if (instrumentos.includes(instrumentoEscolhido)) {
    let mensagem = `✅ Há aulas disponíveis para ${instrumentoEscolhido}.`;
    historicoAulas.push(mensagem);
} else {
    let mensagem = `❌ Infelizmente, não temos aulas disponíveis para ${instrumentoEscolhido}.`;
    historicoAulas.push(mensagem);
}

// Exibe o histórico de consultas
console.log("📜 Histórico de Consultas:");
console.log(historicoAulas);
console.log('--------------------------------------------------');
