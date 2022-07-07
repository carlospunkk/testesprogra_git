//-------ligação entre o mundo html e o javascript
var botao = buscarElementos('.botao');
var numero = buscarElementos('.numero');
var tabuada = buscarElementos('.tabuada');
var resultado = buscarElementos('.resultado');

//-------função com parametros que busca os elementos 
function buscarElementos(seletor) {
  var valores = document.querySelector(seletor)
  return valores;
}

//--------função com parametros que calcula a tabuada
function calculaTabuada(numero, tabuada) {

  return numero * tabuada;

}
//--------evento de click que recebe a função calcula tabuada e seus valores.
botao.addEventListener('click', function () {

  resultado.textContent = calculaTabuada(numero.value, tabuada.value);


});





