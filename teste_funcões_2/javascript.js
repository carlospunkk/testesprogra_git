/*var itens = document.querySelectorAll('.convidado');

var totalDasIdades = 0;

for (var i = 0; i < itens.length; i++) {

  var idade = itens[i].querySelector('.idade').textContent;
  totalDasIdades += parseInt(idade);
}

document.querySelector('.total').textContent = totalDasIdades;

*/

function criarListaConvidados() {
  //-----pegando todas as classes do html 
  var itens = document.querySelectorAll('.convidado')
  //-----criando a lista vazia
  var convidados = [];

  //-----laço para percorrer a quantidade de itens
  for (i = 0; i < itens.length; i++) {
    //-----criando o objeto convidado com suas propriedades nome e idade 
    var convidado = {
      nome: itens[i].querySelector('.nome').textContent,//---pegando itens e adicionando os nomes em cada posição
      idade: parseInt(itens[i].querySelector('.idade').textContent),// pegando as idades 
    };
    //a lista de convidados recebe o convidado com suas propeiedades nome e idade 
    convidados.push(convidado);

    //retorno da lista
  } return convidados;

}

function calculaTotalIdades() {
  var total = 0;

  for (var i = 0; i < convidados.length; i++) {
    total += convidados[i].idade;
  }
  return total;
}
function exibe(total) {
  document.querySelector('.total').textContent = total;
}


var convidados = criarListaConvidados();
var totalDasIdades = calculaTotalIdades(convidados);
exibe(totalDasIdades);
