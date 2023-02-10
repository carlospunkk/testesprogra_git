function Mostra() {
  var nome = document.getElementById('nome').value
  document.getElementById('resposta').textContent = "ola " + nome

}
var mostrar = document.getElementById('mostrar')

//mostrar.onclick = Mostra
mostrar.addEventListener('click', Mostra)



function Apaga() {
  document.getElementById('resposta').textContent = " "
}

var Apagaresposta = document.getElementById('resposta')
//Apagaresposta.onclick = Apaga // chama a função 
Apagaresposta.addEventListener('click', Apaga)

