/*function punto(x, y){
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
*/
const punto = {
  init: function init(x, y){  //constructor
    this.x = x
    this.y = y
  },
  moverX: function moverX(dx){this.x += dx},
  moverY: function moverY(dy){this.y += dy},
  distancia: function distancia(p){
    const dx = this.x - p.x
    const dy = this.y - p.y
    return Math.sqrt(dx*dx + dy*dy)
  }
}

var p1 = Object.create(punto)
p1.init(1, 3)

var p2 = Object.create(punto)
p2.init(2, -7)

console.log(p1.distancia(p2))

p1.moverX(-4)
p2.moverY(2)

console.log(p1.distancia(p2).toFixed(2))
