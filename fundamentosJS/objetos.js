var p1 = {
  x: 0,
  y: 4,
  moverX(dx){this.x += dx}, // metodo de un objeto
  moverY(dy){this.y += dy}
}
var p2 = {
  x: 2,
  y: -5,
  moverX(dx){this.x += dx},
  moverY(dy){this.y += dy}
}

function distancia(p1, p2){
  const x = p1.x - p2.x
  const y = p1.y - p2.y
  
  return Math.sqrt(x*x + y*y)
}

console.log(distancia(p1, p2))

p1.moverX(-4)
p2.moverY(0)

console.log(distancia(p1, p2).toFixed(2))
