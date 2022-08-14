function copiar() {
  var copiado = document.getElementById('copiar').value
  navigator.clipboard.writeText(copiado)
  console.log(copiado)
}
function mudacores() {
  var element = document.getElementById('copiar')
  element.style.backgroundColor = '#900'
}
