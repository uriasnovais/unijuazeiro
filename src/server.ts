const prompt = require("prompt-sync")();

let lista = [];


function range(end): number[] {
    return [ ...Array(end).keys() ];
}

function pos_neg(numeros : number[]){
    for(const numero of numeros){
        if (numero > 0){
            console.log(`${numero} é Maior que Zero`)
        }
        else if (numero == 0){
            console.log("Zero é neutro")
        }
        else{
            console.log(`${numero} é Menor que Zero`)
        }
    }
    
}

for(let x of range(5)){
    lista.push (prompt("Digite um número: "));
}

pos_neg(lista)
