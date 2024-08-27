function contar() {
    // Obtendo os valores inseridos
    var fInicio = document.getElementById('txtinicio')
    var fFim = document.getElementById('txtfim')
    var fPasso = document.getElementById('txtpasso')
    var contagem = document.getElementById('contagem')

    if (fInicio.value.length == 0 || fFim.value.length == 0 || fPasso.value.length == 0) {
        contagem.innerHTML = ('É impossível contar!')
        alert('Erro! Faltam dados!')
    } else {
        contagem.innerHTML = ('Contando: <br>')
        
        // Convertendo os valores para número
        var inicio = Number(fInicio.value)
        var fim = Number(fFim.value)
        var passo = Number(fPasso.value)

        // Checando se a contagem é possível
        if (passo == 0) {
            alert('É impossível contar se o passo for 0, alterando para 1.')
            passo = 1
        }

        // Inicializar contador
        var contador = inicio

        // Contagem
        if (inicio < fim) {
            while (contador <= fim) {
                contagem.innerHTML += (contador + '\u{1F449}')
                contador += passo
            }
        // Contagem regressiva
        } else {
            for (contador = inicio; contador >= fim; contador -= passo) {
                contagem.innerHTML += (contador + '\u{1F449}')
            }

        }
        contagem.innerHTML += ('\u{1F3C1}')
    }
}