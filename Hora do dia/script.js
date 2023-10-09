function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var img = document.getElementById('imagem')
    var res = document.getElementById('msg')
    var txth1 = document.getElementById('texto')
    res.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora <= 8) {
        img.src = 'Manha.png'
        document.body.style.background = 'pink'
        txth1.innerHTML = 'Boa Manha'
    } else if (hora >= 9 && hora <= 15) {
        img.src = 'Dia.png'
        document.body.style.background = '#e49537'
        txth1.innerHTML = 'Bom Dia'
    } else if (hora > 15 && hora <= 18){
        img.src = 'Tarde.png'
        document.body.style.background = '#554435'
        txth1.innerHTML = 'Boa Tarde'
    } else {
        img.src = 'Noite.png'
        document.body.style.background = '#412d65'
        txth1.innerHTML = 'Boa Noite'
    }
}

