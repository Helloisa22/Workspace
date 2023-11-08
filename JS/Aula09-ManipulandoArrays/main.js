// Método forEach()
const frutas = ['apple', 'orange', 'cherry'];
//                0          1       2
frutas.forEach(minhaFuncao);
// Não aplica a logica em campos vazios

function minhaFuncao(item, indice) {
    /// (valores = frutas, posicao)
    console.log(`Índice: ${indice}`);
    console.log(`Fruta: ${item}`);
}
console.clear()
// Método map()
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);

console.log('Números:');
console.log(numeros);
console.log('Array atualizado');
console.log(newArray);

console.clear()

// Método filter
const idades = [32, 33, 16, 40];

let filtroIdade = idades.filter((idade) => {
    return idade <= 18;
});

console.log(filtroIdade);
console.clear()

// Método find() dentro de um array de objeto
const meuArray = [
    { nome: 'apples', quantidade: 2 },
    { nome: 'bananas', quantidade: 0 },
    { nome: 'cerejas', quantidade: 5 },
    { nome: 'bananas', quantidade: 89 },
];

console.log(
    meuArray.filter((fruta) => {
        return fruta.nome === 'bananas';
    })
);

console.clear()

// forEach() com array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
    },
];
tarefas.forEach((teste) => console.log(teste.texto));


// Outro exemplo do map

const mapText = tarefas.map((valor) => {
    return valor.texto;
});
//Imprime o novo array
console.log(mapText);

// Outro exemplo do filter
console.clear();
const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});
console.log(filtoCompletas);

