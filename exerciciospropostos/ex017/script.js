function tabuada() {
    let n = document.getElementById('txtn')
    let tabuada = document.getElementById('seltab')
    if (n.value.length == 0) {
        window.alert('[ERRO] Digite os dados')
    } else {
        let num = Number(n.value)
        let c = 1
        tabuada.innerHTML = ''
        for (c; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `${c}`
            tabuada.appendChild(item)
        }
    }
    
}