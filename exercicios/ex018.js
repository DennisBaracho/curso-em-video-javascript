let valores = [3, 2, 5] // Declaração do array
valores[3] = 8 // Adiciona um elemento à 3º posição
valores.push(1) // Adiciona um elemento ao final do array
valores.sort() // Organiza os elementos em ordem crescente

/* 
    Mostrando os elementos:
    for(var pos = 0; pos < vagas.length; pos++){
    console.log(vagas[pos])
} 
*/

// Mostrando os elementos (versão simplificada)
for (let pos in valores) { // Para cada posição em vagas...
    console.log('A posição ' + pos + ' tem o valor ' + valores[pos])
}
console.log('O primeiro valor do vetor é ' + valores[0])
console.log('O vetor tem ' + valores.length + ' posições')
let posicao = valores.indexOf(8)
console.log('O vetor 8 está na posição ' + posicao)