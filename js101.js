document.getElementById("paragraph").textContent = "Foo Bar Lorem Ipsom"

var element = document.createElement("p")
element.textContent = "Foo Bar Lorem Ipsum 2"
document.body.appendChild(element)

var canvas = document.createElement("canvas")
canvas.width = 500
canvas.height = 250
var ctx = canvas.getContext("2d")
ctx.font = "30px Cursive"
ctx.fillText("Hola Mundo Canvas HTML and JS", 50, 50)
document.body.appendChild(canvas)
