const array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i=0; i<array.length; i++) {
    const palavra = array[i];
    const tamanho = palavra.length;
    if (tamanho > maiorPalavra.length)
        maiorPalavra = palavra;
    if (tamanho < menorPalavra.length)
        menorPalavra = palavra;
}

console.log('maior', maiorPalavra);
console.log('menor', menorPalavra);

