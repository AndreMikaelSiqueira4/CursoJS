function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Os Dados estao Incorretos [ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        res.innerHTML = `Idade calculada: ${idade}`
        if (idade == 0 && idade < 5) {
            res.innerHTML = `Você é um bebe com ${idade} Anos`
        } else if (idade > 5 && idade < 12) {
            res.innerHTML = `Você é uma criança com ${idade} Anos`
        } else if (idade > 13 && idade < 17) {
            res.innerHTML = `Você é um adolecente com ${idade} Anos`
        } else if (idade > 18 && idade <= 30 ) {
            res.innerHTML = `Você é um Adulto com ${idade} Anos`
        } else {
            res.innerHTML = `Você é um idoso com ${idade} Anos`
        }
    }
}