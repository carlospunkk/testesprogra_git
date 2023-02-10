var preco = Number(prompt("digite o preço"))
var aVista = preco * 0.90

var parcelado = preco / 3

console.log(`preço a vista com desconto de 10 % ${aVista} reais`)

console.log(`preço total $${preco} reais , 30parcelado em 3 x vezes ${parcelado.toFixed(2)} reais cada parcela `)

