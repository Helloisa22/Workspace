var numeros = [54, 111, 58, "853", "17", 75, 30] 
//Array unidimensional
// hora do lanche

// console.log(numeros)
console.log("Antes: " + numeros)
numeros[3] = 'hora do lanche'
console.log("Depois: " + numeros)


console.clear()

// Array Bidimensional
// Cria um array com tres dimensionais
var matrix = [
    ["ICarly", 2011, 10], // 0
    //  0        1    2
    ["Os Fet de EverlyPlace", 2009, 10], // 1
    //   0                     1     2
    ["Doug", 1999, 8.7] // 2
]
// console.log(matrix)
console.log("Antes " + matrix)
matrix[2][1] = 1800
console.log("Depois " + matrix)

console.clear()


var numArray = [2, 3, 6, 7, 45, 86]

console.log(numArray)
delete numArray[3]
console.log(numArray)

// Metodo para add no inicio
let insereInicio = numArray.unshift("pipoca")
console.log(numArray)
console.log(insereInicio)


// Remover no inicio do array
// let retiraInicio = numArray.shift()
// console.log(numArray)
// console.log(retiraInicio)

// Metodo ADD nova informação no final do Array
// let novaInformacao = numArray.push("Kiwi")
// console.log(numArray)
// console.log(novaInformacao)


// Metodo para retirar o ultimo elemento
// let retiraUltimoElemento = numArray.pop() // 86
// console.log(retiraUltimoElemento)
// console.log(numArray)

// Retornar o tamanho do Array
// console.log(numArray.length)

// Metodo Join
// let testeJoin = numArray.join(" . ")
// console.log(testeJoin)

// Metodo toString
// let receba = numArray.toString()
// console.log(receba)



// let teste = [
//     ["ICarly", 2011, 10], // 0
//     //  0        1    2
//     ["Os Fet de EverlyPlace", 2009, 10]
// ]

// let recebe2 = teste[0].push("mano")
// console.log(teste)