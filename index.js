const dia = document.querySelector('span#dias')
const hora = document.querySelector('span#horas')
const minuto = document.querySelector('span#minutos')
const segundo = document.querySelector('span#segundos')


const lancamento = "17 oct 2024"

const countDown = () => {
  const dataDeLancamento = new Date(lancamento)
  const hoje = new Date()

  const segundosTotal = (dataDeLancamento - hoje)/1000

  const finalDias = Math.floor(segundosTotal/60/60/24)
  const finalHoras = Math.floor(segundosTotal/60/60)%24
  const finalMinutos = Math.floor(segundosTotal/60) % 60
  const finalSegundos = Math.floor(segundosTotal) % 60

  dia.innerHTML = formatoTempo(finalDias)
  hora.innerHTML = formatoTempo(finalHoras)
  minuto.innerHTML = formatoTempo(finalMinutos)
  segundo.innerHTML = formatoTempo(finalSegundos)
}

const formatoTempo = (tempo) => {
  return tempo < 10?`0${tempo}`:tempo
}

countDown()
setInterval(countDown, 1000)
