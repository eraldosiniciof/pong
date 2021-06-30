const jogo = document.querySelector('#jogo')
const canvas = document.querySelector('#telaJogo')

let xBolinha = 300
let yBolinha = 200
let diamentro = 15
let velXBol = 2
let velYBol = 2

function circle(x, y, diametro, cor) {
  const bola = canvas.getContext('2d')

  bola.beginPath()
  bola.arc(x, y, diametro, 0, 2 * Math.PI)
  bola.fillStyle = cor
  bola.fill()
  // bola.stroke()
}

function removeCircle() {
  circle(xBolinha, yBolinha, diamentro + 1500, 'black')
}

function background(color) {
  canvas.style.backgroundColor = color
}

setInterval(() => {
  removeCircle()
  circle(xBolinha, yBolinha, diamentro, 'white')
  xBolinha += velXBol
  yBolinha += velYBol

<<<<<<< HEAD
  if (xBolinha > 585 || xBolinha < 15) velXBol *= -1
  if (yBolinha > 385 || yBolinha < 15) velYBol *= -1
=======
  if (xBolinha > 590 || xBolinha < 10) velXBol *= -1
  if (yBolinha > 390 || yBolinha < 10) velYBol *= -1
>>>>>>> 34b4e44e2277edc95820547e3c32351c9b86097a
}, 1)
