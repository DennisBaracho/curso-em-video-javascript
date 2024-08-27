function gerarTabuada() {
    var fNum = document.getElementById('txtnumero')
    if (fNum.value.length == 0) {
        alert('Digite um número!')
    }
    else {
        var num = Number(fNum.value)
        tabuada = document.getElementById("seltabuada");
        tabuada.innerHTML = ''
        for (var contador = 1; contador <= 10; contador++) {
            var opt = document.createElement('option')
            opt.text = (num + ' x ' + contador + ' = ' + num * contador)
            tabuada.appendChild(opt)
        }
    }
}