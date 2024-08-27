// Função com parâmetros obrigatórios, não funciona se não receber
function soma(n1, n2){
    return n1 + n2 
}
console.log(soma(1,2))

// Função com parâmetros opcionais (caso não escreva, todos serão 0)
function soma(n3 = 0, n4 = 0){
    return n3 + n4 
}
console.log(soma(1))

// Função que chama ela mesma, cria um loop que possibilita calcular fatorial
function fatorial(n){
    if (n == 1){
        return 1
    }
    else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))