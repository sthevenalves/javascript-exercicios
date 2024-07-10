/*
Crie um programa que simule o processo de pedido de pizza:

Permita que o usuário escolha o tamanho da pizza e os ingredientes desejados.
Calcule o preço total do pedido com base nas escolhas do usuário.
Exiba um resumo do pedido com o preço final.
*/

//Tamanho e Precos P: 16, G: 29.9, G: 44.3

let pizzaCatalogo = [
    { tamanho: 'p', preco: 16, sabores: ['calabresa', 'marguerita', 'quatro queijos', 'portuguesa', 'mussarela'] },
    { tamanho: 'm', preco: 29.9, sabores: ['calabresa', 'marguerita', 'quatro queijos', 'portuguesa', 'mussarela'] },
    { tamanho: 'g', preco: 44.3, sabores: ['calabresa', 'marguerita', 'quatro queijos', 'portuguesa', 'mussarela'] }
];

function calcularPrecoPizza(tamanho, quantidade) {
    let pizzaEscolhida = pizzaCatalogo.find(pizza => pizza.tamanho === tamanho);
    if (pizzaEscolhida) {
        return pizzaEscolhida.preco * quantidade;
    }
}

function exibirPedido(tamanho, sabor, quantidade) {
    let pizzaEscolhida = pizzaCatalogo.find(pizza => pizza.tamanho === tamanho);
    if (pizzaEscolhida) {
        if (!pizzaEscolhida.sabores.includes(sabor)) {
            throw new Error('Sabor não existe no Catálogo');
        } else {
            let valorPizza = calcularPrecoPizza(tamanho, quantidade)
            console.log(`Pedido: ${quantidade} pizza(s) ${tamanho.toUpperCase()} de ${sabor}`);
            console.log(`Total do Pedido: R$ ${valorPizza.toFixed(2)}`);
        }
    }else {
        throw new Error(`Pizza no tamanho ${tamanho} não está disponível`);
    }
}

    try {
        exibirPedido('o', 'calabresa', 2);
    } catch (error) {
        console.error(error.message);
    }
    try {
        exibirPedido('p', 'calabresa', 2);
    } catch (error) {
        console.error(error.message);
    }