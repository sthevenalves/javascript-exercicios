/*
    Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa:
    Solicite ao usuário que insira seu peso e altura.
    Calcule o IMC usando a fórmula IMC = peso / (altura * altura).
    Exiba o resultado indicando se a pessoa está abaixo do peso, peso normal, sobrepeso ou obesidade.
*/

function statusImc(imc) {
    if (imc < 18.5)
        console.log('Abaixo do Peso');
    else if (imc <= 24.9)
        console.log('Peso Normal');
    else if (imc <= 29.9)
        console.log('Sobrepeso')
    else
        console.log('Obsidade');
}

function imc(peso, altura) {
    // var peso = parseFloat(prompt("Digite seu peso em kg:"));
    // var altura = parseFloat(prompt("Digite sua altura em metros:"));

    var res = (peso / (altura * altura)).toFixed(2);
    console.log(`IMC: ${res}`);
    statusImc(res);
}


var meuDados = imc(41, 1.92);