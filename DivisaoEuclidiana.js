//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultadoe o resto da divisão destes dois valores.

function divisao(gets){
    let a = 0;
    let b = 0;
    let q = 0;
    let r = 0;
    let array = gets.split(' ');

    a = parseInt(array[0]);
    b = parseInt(array[1]);

    q = parseInt(a / b);
    r = parseInt(a % b);

    if (r < 0){
        r = r - - (Math.abs(b));
        q = (a - r) / b;
    }    

    console.log(q + " " + r);
}

divisao('7 3');
divisao('7 -3');
divisao('-7 -3');
