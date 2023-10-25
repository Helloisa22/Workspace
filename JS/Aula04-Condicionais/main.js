// Fessora bateu no aluno?
let professoraBateAluno = true
let professoraXingaAluno = false

//              true           &&        true    = true
if(professoraBateAluno == true && professoraXingaAluno == true){
    console.log("Professora demitida com sucesso!!")
}
console.clear()

//             true            ||         false    =  true
if(professoraBateAluno == true || professoraXingaAluno == true){
    console.log("Professora demitida com sucesso!!")
}

console.clear()


let numero1 = 10
let numero2 = 4

//             false   ||        true       =  true
if(numero1 === numero2 || professoraBateAluno == true){
    
    console.log("variavel num1 é maior que num2")
}

/// outro bloco de codigo
console.clear()

// validar boatos
let teraComidaTOTVS = false
// teraComidaTOTVS == true

if(!teraComidaTOTVS == true){ // se  // implicita
    console.log("Não vou nem almoçar, alexsandro o brabo")
}else{ //senão
    console.log("Você terá que almoçar")
}

console.clear()


let numero = 11

if(numero % 2 == 0){
    console.log("O número " + numero + " é par")
}else{
    console.log(`O número  ${numero}  é impar`)
}
console.clear()


let morangoMaduro = null // vazio

if(morangoMaduro == true){
    console.log("Pode comer")
}else if(morangoMaduro == false){
    console.log("Não come")
}else{
    console.log("Seu morango está mofado")
}

console.clear()

var raizQuadrada = Math.sqrt(34)
console.log(raizQuadrada)



console.clear()

let fase2 = 70
let fase3 = false
let inscricao = true

if(inscricao == true){
    console.log("Parabéns você está na fase 2");
    if(fase2 >= 70){
        console.log("QUESTIONÁRIO DE LÓGICA E LEITURA")
    }else if(fase2 >= 65 || fase2 <= 69){
        console.log("Você terá uma segunda chance")
    }else{
        console.log("Você não passou na fase 2")
    }


}else{

}