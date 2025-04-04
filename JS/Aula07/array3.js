// 2. Sistema de Lista de Compras (Array)
// 📌 Descrição:
// O sistema contém um array que armazena uma lista de compras.
// Um novo item pode ser adicionado à lista usando .push().
// Depois da alteração, o sistema exibe a lista atualizada.
// Simples e útil para aplicações como listas de supermercado, tarefas e organização de itens.

//
let listaCompras = ['arroz', 'feijão', 'batata', 'carne', 'fruta'];

console.log('Lista de Compras: ', listaCompras);
console.log('Adicionando itens à lista...');    
console.log('Adicionando arroz...');
listaCompras.push('arroz');


function adicionarItem(item) {
    if (!listaCompras.includes(item)) {
        listaCompras.push(item);
        console.log(`Adicionando ${item}...`);
    } else {
        console.log(`${item} já está na lista!`);
    }
}

adicionarItem('salada'); // Adiciona "salada"
console.log('Lista atualizada:', listaCompras);

