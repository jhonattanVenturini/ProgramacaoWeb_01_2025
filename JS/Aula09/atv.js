
//  Exemplo 01: Controle de Consumo de Frutas com Lógica de Decisão
// 🎯 Objetivo: Criar um sistema que simula o consumo de frutas com base em condições específicas e exibe os resultados de forma organizada no terminal.
// 📋 Descrição: Desenvolva um algoritmo que percorra uma lista de frutas, tomando decisões diferentes para cada item da lista de acordo com regras estabelecidas:
//  [ Percorra a lista de frutas e tome decisões com base no nome de cada uma ]
//  [ Ignore uma fruta específica e registre essa ação ]
//  [ Interrompa o processo completamente ao encontrar uma fruta proibida ]
//  [ Registre separadamente as frutas que foram consumidas ]
//  [ Registre também as frutas que foram ignoradas ]
//  [ Apresente mensagens claras, bem formatadas e criativas durante a execução ]
//  [ Ao final, mostre um resumo com os resultados: frutas consumidas, frutas ignoradas e o motivo do encerramento ]
//  🧠 Conceitos aplicados: lógica condicional, repetição, organização de dados e exibição estruturada de informações no console.



//  Exemplo 02 - Atividade: Listagem de Itens com Repetição
// 🎯 Objetivo: Criar um sistema que percorre uma lista de elementos e exibe cada item de forma organizada no terminal.
// 📋 Descrição: Desenvolva um algoritmo que percorra uma lista contendo qualquer tipo de conteúdo (ex: nomes, objetos, cidades, etc.) e exiba cada elemento individualmente:
//  [ Utilize uma estrutura de repetição para percorrer a lista ]
//  [ Mostre cada item no terminal com uma numeração ou identificação visual ]
//  [ Exiba uma mensagem inicial de apresentação dos dados ]
//  [ Ao final, exiba uma mensagem de encerramento indicando que todos os itens foram listados ]
//  🧠 Conceitos aplicados: repetição com índice, percorrer listas, exibição de dados no console.

















const nomes = ["Lucas", "Ana", "Carlos", "Maria", "João", "Fernanda"];
let nomesListados = [];

console.log("====================================");
console.log("📋 Listando os nomes...");
console.log("====================================");
console.log("Nomes disponíveis:");
console.log("====================================");

for (let i = 5; i < nomes.length; i++) {
    let nome = nomes[i];
    console.log(`🔤 Nome ${i + 1}: ${nome}`);
    nomesListados.push(nome);
}
console.log("====================================");

console.log("📦 Resultado Final")

console.log("====================================");
console.log(`📝 Nomes listados: ${nomesListados.join(" | ")}`)  ;
console.log("====================================") ; 



// Atividade: Controle de Consumo de Frutas com Lógica de Decisão
const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "manga"] ;
let frutasComidas = [];
let frutasIgnoradas = [];
let frutaProibida = "manga";
let frutaPulada = "abacaxi";

console.log("🍇 Iniciando o consumo de frutas...");
console.log("====================================");

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    // Pular fruta específica
    if (fruta === frutaPulada) {
        console.log(`⚠️  Pulei a fruta: ${fruta}`);
        frutasIgnoradas.push(fruta);
        continue; // Pula para o próximo item
    }

    // Parar o loop se encontrar a fruta proibida
    if (fruta === frutaProibida) {
        console.log(`⛔ Encontrada fruta proibida: ${fruta}! Parando o consumo.`);
        break; // Encerra o loop
    }

    console.log(`✅ Comi a fruta: ${fruta.toUpperCase()}`);
    frutasComidas.push(fruta);
}

console.log("\n📦 Resultado Final");
console.log("====================================");
console.log(`🥄 Frutas comidas: ${frutasComidas.join(" | ")}`);
console.log(`🚫 Frutas ignoradas: ${frutasIgnoradas.join(" | ")}`);
console.log(`❌ Fruta que parou o processo: ${frutaProibida}`);
console.log("====================================");
