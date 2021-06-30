const jogo = document.querySelector('#jogo')
const canvas = document.querySelector('#telaJogo')

let xBolinha = 300
let yBolinha = 200
let diamentro = 15
let velXBol = 6
let velYBol = 6

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
}, 10)
