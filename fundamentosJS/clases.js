class Punto{
  constructor(x, y){
    this.x = x
    this.y = y
  }

  moverX(dx){
    return this.x += dx
  }

  moverY(dy){
    return this.y += dy
  }

  static distancia(a, b){
    var dx = a.x - b.x
    var dy = a.y - b.y
  
    return Math.sqrt(dx*dx + dy*dy)
  }

}

var p1 = new Punto(0,4)
var p2 = new Punto(1,-5)

console.log(Punto.distancia(p1,p2))