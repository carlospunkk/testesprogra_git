// contador.js

function atualizaCaracteres() {
  var postagem = document.querySelector("#corpo-postagem").value;
  var caracteres = postagem.length;

  var contador = document.querySelector("#numero-caracteres");
  contador.innerHTML = caracteres;
}
var campoPostagem = document.querySelector("#corpo-postagem");
campoPostagem.addEventListener("input", atualizaCaracteres);
//A função addEventListener() recebe dois parâmetros, o nome do evento a ser escutado e uma função com a ação que deve executar. A função já está feita, é a atualizaCaracteres e o evento é o input, para que o contador seja atualizado conforme o usuário escreve.