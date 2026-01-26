function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-menino.png')  
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto-homem.png')
            } else {
                img.setAttribute('src', 'img/velho-homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-menina.png')   
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulta-mulher.png')
            } else {
                img.setAttribute('src', 'img/valha-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.display = 'block'
        img.style.margin = '20px auto'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}