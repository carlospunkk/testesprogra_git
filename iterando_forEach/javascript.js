



// outro modo de fazer  Em JavaScript, todo array possui a função (forEach). Passamos para ela uma função por parâmetro, e nessa função fazemos o que quisermos para cada item do array. O item do array é recebido por parâmetro na função interna.





/*Não, innerHTML é uma propriedade, não uma função, então ela recebe o novo conteúdo, ou seja, utilizamos um sinal de igual (=):*/

//document.querySelector(".texto").innerHTML = "carlos"

/*var nome = document.querySelector(".nomes")

nome.textContent = nomes*/








/*var nomes = [" Douglas ", " Flávio ", " Nico ", " Rômulo ", " Leonardo"];

for (var i = 0; i < nomes.length; i++) {
  console.log(nomes[i] + " metodo for ");
}*/







var nomes = [" Douglas ", " Flávio ", " Nico ", " Rômulo ", " Leonardo"];

nomes.forEach(function (itens) {
  console.log(itens + "é metodo forEach");
});
