const intitulo = document.getElementById('inTitulo')
const inDuracao = document.getElementById('inDuracao')


//saidas
const outTitulo = document.getElementById('outTitulo')
const outResposta = document.getElementById('outResposta')

//botao converter
const btconverter = document.getElementById('btConverter')
btconverter.addEventListener('click', converter)

//funcao converter
function converter() {

  // calculo conversao horas Math.floor arredonda para baixo
  let duracao = Number(inDuracao.value)
  const horas = Math.floor(duracao / 60)

  // calculo minutos o resto da divisão
  let minutos = duracao % 60

  // resposta 
  outTitulo.innerHTML = intitulo.value
  outResposta.innerHTML = `${horas} horas(s) e ${minutos} minutos(s)`


}
