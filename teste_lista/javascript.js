// Javascript 

//vinculos html com javascript

var botao = document.querySelector('#botao-adicionar');

//evento adicionar ao botão  (add.EventListneer) click prevenindo o carregamento vazio com a função (prevent.Default) 
botao.addEventListener("click", function (event) {
  event.preventDefault()


  //Código para adicionar na lista de tarefas

  //acessando o input pela id = (name) com o seu valor (value)
  // console.log(form.tarefa.value);

  var form = document.querySelector('.adicionar-tarefa');
  var tarefas = form.tarefa.value;


  //criando elementos html no javascript (<ul>)
  var afazeresUl = document.createElement("ul")

  //criando elemento (<li>)
  var novoItem = document.createElement("li")

  // a variavel novoItem(<li>) com o seu conteudo de texto vai receber o valor das tarefas do meu input form com seu valor 
  novoItem.textContent = tarefas;

  // colocando as tags <li> dentro da tag <ul> com a função(appendChild)
  afazeresUl.appendChild(novoItem);

  // colocando na minha html a lista com a estrutura <ul> e suas respectivas <li> ´s.
  /*<ul>
    <li>

    </li>
  </ul>*/

  var lista = document.querySelector("body")
  lista.appendChild(afazeresUl)

});
