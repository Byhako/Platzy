let año = 1989
let mes = 6
let dia = 2

const born = new Date(año, mes-1, dia)
console.log(born)

// Sin parametros se entiende que es la fecha de hoy
const hoy = new Date()

console.log(`He vivido ${(hoy-born)/1000} segundos.`)

let proximoCumple = new Date(hoy.getFullYear(),born.getMonth(),born.getDate())
console.log(proximoCumple)