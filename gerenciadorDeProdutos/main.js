//Array de Objeto 
let produtos =
    [
        { nome: 'arroz', estoque: 50 },
        { nome: 'feijao', estoque: 30 },
        { nome: 'oleo', estoque: 20 },
        { nome: 'sal', estoque: 10 }
    ];

//função para verificar o estoque de um produto
function verificaEstoque(nomeProduto) {
    let produtoEncontrado = null;
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === nomeProduto) {
            produtoEncontrado = produtos[i];
            break;
        }
    }
    if (produtoEncontrado) {
        let message = `${produtoEncontrado.nome}: ${produtoEncontrado.estoque} unidades`;

        console.log(message);
    } else {
        let mensage = `Produto "${nomeProduto}" nao encontrado.`;
        console.log(mensage);
    }
}
//função para realizar vendas
function realizarVenda(nomeProduto, quantidade) {
    let produto = produtos.find(p => p.nome === nomeProduto);
    if (produto) {
        if (produto.estoque >= quantidade) {
            produto.estoque -= quantidade;
            console.log(`Venda realizada: ${quantidade} unidades de ${nomeProduto}`);
        } else {
            console.log(`Estoque insuficiente para ${quantidade} unidades de ${nomeProduto}`);
        }
    } else {
        console.log(`Produto "${nomeProduto}" nao encontrado`);
    }
}

verificaEstoque('arroz');
realizarVenda('arroz', 20);
realizarVenda('feijao', 20);

verificaEstoque('arroz');
verificaEstoque('feijao');

//reposição de estoque
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].estoque < 15) {
        produtos[i].estoque += 30
    }
}

console.log('Estoque atualizado apos a reposicao');
produtos.forEach(produto => {
    console.log(`${produto.nome}: ${produto.estoque} unidades`);
});

// Utilização do operador ternário para verificar se um produto específico tem estoque crítico
let nomeProduto = 'sal';
let estoqueCritico = produtos.find(p => p.nome === nomeProduto && p.estoque < 5);

let mensagem = estoqueCritico ? `O produto "${nomeProduto}" esta com estoque critico.` : `O Produto "${nomeProduto}" nao esta com estoque critico.`;
console.log(mensagem);

let diaSemana = new Date().getDay();
switch (diaSemana) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terca');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Dia da semana invalido');
}
