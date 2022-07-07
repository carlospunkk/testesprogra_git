var inputFrase = document.querySelector('.frase');
var botao = document.querySelector('.botao');
var copia = document.querySelector('.copia');

// função nomeada

/*function mostrafrase() {
  copia.textContent = inputFrase.value
  inputFrase = ''

}

botao.addEventListener('click', mostrafrase);
*/

// função anonima
botao.addEventListener('click', function () {
  copia.textContent = inputFrase.value
  inputFrase = ''
});

