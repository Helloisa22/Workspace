// const celular = {
//     marca: 'Apple',
//     modelo: 'Iphone 15 pro Max',
//     cor: 'Rosa',
//     memoria: '512gb',
//     memoriaRam: '16gb'
// }

//pipoca, modelo, cor, memoria, memoriaRam

class celular {
    constructor(marca, modelo, cor, memoria, memoriaRam, anoDoCelular, anoAtual) {
        this.marca = marca; // Atributo
        this.modelo = modelo;
        this.cor = cor;
        this.memoria = memoria;
        this.memoriaRam = memoriaRam;
        this.isDesligado = false;
        this.anoDoCelular = anoDoCelular;
        this.anoAtual = new Date().getFullYear(anoAtual)
    }

    retornaIdade(){
        return this.anoAtual - this.anoDoCelular
    }


    retornoMarcaModelo(){
        return `${this.marca} ${this.modelo}`
    }

    ligar(){ // Metodo
        console.log("Ligando o celular.......")
    }

    desligar(){
        if(this.isDesligado === true){
            return `Desligando.........`
        }else{
            return `Não vou desligar seu banana, catapimbas`
        }
        
    }

    pesquisa(){
        console.log("Pesquisando..........")
    }
}

console.log(new celular())

// Istanciar a classs
console.clear()
var positivo = new celular('Positivo', 'jubileu tisti4', 'Preto amarelado', 8, '252mb', 2000)
console.log(positivo)
console.log(positivo.retornoMarcaModelo())
// retornar a idade do celular
console.log(positivo.retornaIdade())

var data = new Date()
console.log(data.getFullYear())









//     pipoca: 'Apple',
//     modelo: 'Iphone 15 pro Max',
//     cor: 'Rosa',
//     memoria: '512gb',
//     memoriaRam: '16gb'

// var motorola = new celular('amarelo', 'nokia 1956', 56, '4', '2600G');
// console.log(motorola)
// console.log(motorola.desligar())