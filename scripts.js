
let numero = 13;
numero = 15;

const outroNumero = 14;

const maisUmNumero = 16;


// if (condicao) {
//     // executa este trecho de codigo
// } else if(condicao2){
//     // executa trecho de codigo se condicao 2 for verdadeira
// } else {
//     // executa caso nao tenha entrado atendido nenhuma condicao anterior
// }

// array
const nota1 = 10;
const nota2 = 20;
const nota3 = 10;
// ...

const notas = [10, 8, 10, 5];  // tamnho = length = 4


for (let i=0; i < notas.length; i++) {
    console.log( notas[i] );
}

notas.forEach(nota => console.log(nota));

for (let nota of notas) {
    console.log(nota);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

