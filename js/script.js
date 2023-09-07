const dia = document.querySelector('#dia')
const hora = document.querySelector('#hora')
const minuto = document.querySelector('#minuto')
const segundo = document.querySelector('#segundo')

const Lancamento = '01 dec 23'

function timer(){
    const hoje = new Date()
    const diaLanc = new Date(Lancamento)

    const segTotal = (diaLanc - hoje) / 1000

    finalDia = Math.floor(segTotal / 60 / 60 / 24)
    finalHora = Math.floor(segTotal / 60 / 60) % 24
    finalMinuto = Math.floor(segTotal / 60) % 60
    finalsegundo = Math.floor(segTotal) % 60

    dia.innerHTML = formato(finalDia)
    hora.innerHTML = formato(finalHora)
    minuto.innerHTML = formato(finalMinuto)
    segundo.innerHTML = formato(finalsegundo)

}

function formato(time) {
    return time < 10? `0${time}` : time ;
}

timer()
setInterval(timer,1000)

function botao(){
    return alert('Ingressos disponíveis apartir de amanhã')
}

const btn = document.querySelector('#botao')

btn.addEventListener('click',botao)