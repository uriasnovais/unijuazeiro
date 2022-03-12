const prompt = require('prompt-sync')();


function input(texto : string){
    return prompt(texto)
}

let nota_1 = input("Nota 1: ");
let nota_2 = input("Nota 2: ");
let nota_3 = input("Nota 3: ");
let media = (parseInt(nota_1) + parseInt(nota_2) + parseInt(nota_3))/3 

if (media < 3){
    console.log(`${media} é Reprovação`)
}
else if (media >= 3 && media < 7){
    let final = 12 - media
    console.log(`O aluno com média ${media} deve tirar ${final} para ser aprovado`)
}
else{
    console.log(`O aluno com média ${media} está aprovado por média`)
}
