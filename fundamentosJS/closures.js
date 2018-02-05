/*
Los closure son funciones que recuerdan el entorno en el cual
fuerón creadas, esto quiere decir que al llamar la función van
a recordar las variables que tenian en ese momento
*/
function saludarFamilia(apellido){
  return (nombre) => {
    console.log(`Hola ${nombre} ${apellido}. `)
  }
}

// CLOSURE
const saludarTomson = saludarFamilia('Tomson')
const saludarBord = saludarFamilia('Bord')

/*
function saludarTomson(nombre){
  console.log(`Hola ${nombre} Tomsom. `)
}

function saludarBord(nombre){
  console.log(`Adios ${nombre} Bord. `)
}
*/

saludarTomson('Selene')
saludarBord('Selene')