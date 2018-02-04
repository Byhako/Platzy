function punto(x, y){
  this.x = x
  this.y = y
}

// asignamos metodos
punto.prototype.moverX = function moverX(dx){this.x += dx}
punto.prototype.moverY = function moverY(dy){this.y += dy}
punto.prototype.distancia = function distancia(p){
  const dx = this.x - p.x
  const dy = this.y - p.y
  return Math.sqrt(dx*dx + dy*dy)
}

var p1 = new punto(0, 4)
var p2 = new punto(7, 2)

console.log(p1.distancia(p2))

p1.moverX(-4)
p2.moverY(2)

console.log(p1.distancia(p2).toFixed(2))
