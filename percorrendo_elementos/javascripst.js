var listaLis = document.querySelectorAll("li")


// OPÇÃO 1
/*for (var i = 0; i < listaLis.length; i++) {
  listaLis[i].addEventListener('click', function () {
    alert("voce clicou na letra " + this.textContent);//this se refenecia ao conteudo da tag.
  })
}*/


// OPÇÃO 2
listaLis.forEach(function (itens) {
  itens.addEventListener("click", function () {
    alert(this.textContent)
  })
});
