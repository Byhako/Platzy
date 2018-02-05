// cantidad arbitraria de parametros
function suma1(...numeros){
  let add = 0
  for(let i=0 ; i<numeros.length ; i++){
    add += numeros[i]
  }
  return add
}

// usemos el metodo reduce
// ya no hay ciclo for :)
const suma2 = (...numeros) => numeros.reduce( (acum, numero)=>{
    acum += numero
    return acum
  },0 )
// el cero final es el valor inicial de acum

// funcion que retorna el doble de cada valor en el array
const doble = (...numeros) => numeros.map( numero => numero*2  )

// Filtrado
const pares = (...numeros) => numeros.filter( numero => numero%2==0 )

console.log('suma1: ',suma1(4, 8, 12, 56, 7))
console.log('suma1: ',suma2(4, 8, 12, 56, 7))
console.log('doble: ',doble(4, 8, 12, 56, 7))
console.log('pares: ',pares(4, 8, 12, 56, 7))