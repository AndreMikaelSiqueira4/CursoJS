
var a = document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'green'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'yellow'
}

function sair() {
    a.innerHTML = 'Saiu!'
    a.style.background = 'red'
}