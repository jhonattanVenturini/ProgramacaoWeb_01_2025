// Looping com for tradicional e for...of
// 1. Looping com for tradicional

const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "manga"];
let frutasComidas = [];

console.log("🍽️  **Lista de Frutas a partir da posição 4:**");
console.log("==========================================");

for (let i = 3; i < frutas.length; i++) {
    console.log(`✅ Comi a fruta: ${frutas[i].toUpperCase()}`);
    frutasComidas.push(frutas[i]);
}

console.log("\n==========================================");
console.log("🍉 Frutas que ainda estavam na fruteira:");
console.log("🥄", frutas.slice(0, 3).join(", ")); // mostra as frutas que ficaram (0 a 2)
console.log("==========================================");

console.log("\n📦 Frutas comidas:");
console.log("👉", frutasComidas.join(" | "));
console.log("==========================================");
