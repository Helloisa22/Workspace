// Funções        4      5
function somaNumeros(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}

let x = somaNumeros(4, 5); // Chamada da função addNums
console.log(x);

let soma = somaNumeros(10, 7, 3)
console.log(" Essa é a variavel soma " + soma)

console.clear()

let z = myFunc(4, 5); // Chamada da função myFunc
console.log(z);

function myFunc(num1, num2) {
    return num1 * num2;
}

console.clear()

const hello = () => {
    return 'Olá Arrow Function!';
};

console.log(hello())
console.log(somaNumeros(4, 8, 8))
console.clear()

// Função com IF
// num % 2 == 0 Par   num % 2 == 1 Impar    
function imparPar(num){
    if(num % 2 == 0){
        return `O número ${num} é Par`;
    }else if(num % 2 == 1){
        return `O número ${num} é Impar`;
    }else{
        return `Não consegui indentificar se é impar ou Par`;
    }
}

let recebePrimeiroNumero = imparPar(5)
console.log(recebePrimeiroNumero)

let recebeSegundoNumero = imparPar(5.75)
console.log(recebeSegundoNumero)

var contexto = 5.75 % 2;
console.log(contexto)
console.clear()


const celular = {
    marca: 'Apple',
    modelo: 'Iphone 15 pro Max',
    cor: 'Rosa',
    memoria: '512gb',
    memoriaRam: '16gb'
}

console.log(celular)

// const alexa = {
//     valor:
//     processamento:
//     tamanho:
//     cor:
//     modelo:
//     numeroDeSerie:
//     geracao:
//     temTV:
// }

// Eventos
console.clear();
const boasVindas = () => {
    alert('Bem vindo a nossa página');
    console.log('Bem vindo a nossa página');
};

const eventClique = () => {
    console.log('Você clicou no botão');
};

const mouseEmCima = () => {
    console.log('Mouse está em cima do título');
};