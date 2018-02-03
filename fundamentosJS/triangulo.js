let base = 5
let altura = 15

// Forma 1 de una funcion
function areaTriangulo(base, altura){
	return base * altura / 2.0
}

// la comilla inversa (`) permite ejecutar codigo
// js dentro de un string.
console.log(`El area es: ${areaTriangulo(base, altura)}`)

console.log("\n================\n")

// Forma 2 de una funcion
var area = (base, altura) => {
	return base * Altura / 2.0
}

// Si solo tiene 1 linea podemos escribir como:
var areaT = (base, altura) => base * altura / 2.0

console.log(`El area es: ${areaT(base, altura)}`)