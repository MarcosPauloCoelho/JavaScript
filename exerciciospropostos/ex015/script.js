function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nas = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (nas.value.length == 0 || nas.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(nas.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancam.png')
            } else if ( idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancaf.png')
            } else if ( idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa;png')
            }
        }    
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}