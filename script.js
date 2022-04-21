/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/

let caixa = {
    receitas: [100, 200, 300],
    despesas: [150, 300, 200]
}

function sum(array) {
    let total = 0;
    for (let indice of array) {
        total += indice;
    }
    return total;
}

function saldo() {
    let receita = sum(caixa.receitas);
    let despesas = sum(caixa.despesas);

    let saldo = receita - despesas;

    let message;
    if (saldo > 0) {
        message = (`A renda familiar está com saldo positivo de ${saldo}`);
    } else {
        message = (`A renda familiar está com saldo negativo de ${saldo}`);
    }
    return message;
}

console.log(saldo());