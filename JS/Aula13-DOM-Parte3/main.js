// var pipoca = document.querySelectorAll('p');
// console.log(pipoca)

// // Acesse todos os paragrafos e mude a cor deles
// let c = 0;
// while(c < pipoca.length){
//     pipoca[c].style.color = 'purple'
//     c++
// }


// let j = document.querySelector('p.exemplo')
// j.innerHTML = 'Foi alterado aqui o texto com as lagrimas dos alunos'
// j.style.color = 'blue'


// let y = document.querySelector('#exemplo2').style.color = 'yellow'




// function Nome(){
//     var entradaNome = prompt('Insira o seu nome')
//     let mostraNome = document.querySelector('#mostraNome')
//     console.log(entradaNome)

//     mostraNome.innerHTML = `Olá ${entradaNome} Bem-vindo a nossa academia`
// }

// const Nome = () => {
//     let recebeNome = document.querySelector('#recebeNome')
//     let mostraNome = document.querySelector('#mostraNome')

//     console.log(recebeNome)

//     mostraNome.innerHTML = `Olá ${recebeNome.value} Bem-vindo a nossa academia`
// }
let evento = document.querySelector('#chamaFuncao')

const Nome = () =>{
    let recebeNome = document.querySelector('#recebeNome')
    let mostraNome = document.querySelector('#mostraNome')

    mostraNome.innerHTML = `Olá ${recebeNome.value} Bem-vindo a nossa academia, seu bocoooo`
    
}

evento.addEventListener('click', Nome)
// O nome do evento, callback(funcao), opcional true/false

