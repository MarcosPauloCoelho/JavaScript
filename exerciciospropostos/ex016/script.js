function contar() {
    var i = document.getElementById('txti')
    var f = document.getElementById('txtf')
    var p = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('[ERRO] Faltam dados!') 
    } else {
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
        res.innerHTML = 'Contando: <br>'
        if (passo <= 0) {
            window.alert('Passo invalido, considerando PASSO 1!')
            passo = 1 
        } 
        if (inicio > fim) {
            for (inicio; inicio >= fim; inicio -= passo) {
                res.innerHTML += `${inicio} \u{1F449} `
            } 
        } else {
            for (inicio; inicio <= fim; inicio += passo) {
                res.innerHTML += `${inicio} \u{1F449} `
            } 
        }
        res.innerHTML += ` \u{1F3C1}`
    }

}
