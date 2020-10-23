/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capital, txJuros, tempo){
    let i = txJuros/100;
    let juros = capital * tempo * i;
    let montante = capital + juros
    return montante;
}


function jurosCompostos(capital, txJuros, tempo){
    let i = txJuros/100;
    let montante = capital * ((1+i)**tempo);
    return montante;
}

console.log('O montante é: '+jurosSimples(1000,10,12).toFixed(2));
console.log('O montante é: '+jurosCompostos(1000,10,12).toFixed(2));