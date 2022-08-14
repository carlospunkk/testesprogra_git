var listaLis = document.querySelectorAll("li")


// OPÇÃO 1
/*for (var i = 0; i < listaLis.length; i++) {
  listaLis[i].addEventListener('click', function () {
    alert("voce clicou na letra " + this.textContent);//this se refenecia ao conteudo da tag.
  })
}*/


// OPÇÃO 2 percorrendo o array das tags
listaLis.forEach(function (itens) {
  itens.addEventListener("click", function () {
    alert(this.textContent)
  })
});

var botao = document.querySelector("#botao")
var input = document.querySelector("#campo")
var lista = document.querySelector(".lista")

//botao
botao.addEventListener('click', function () {
  var li = document.createElement('li') // crio tags (li)
  li.textContent = input.value; //dentro das tags (li) adiciono o valor do input
  lista.appendChild(li); // dentro da minha lista adiciono novas tags (li)
})
