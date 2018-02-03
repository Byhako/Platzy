const pelicula = 'La habitacion de Fermat'
const edad = '16'

const name1 = 'Sacha'
const edad1 = '26'

const name2 = 'Eno'
const edad2 = '10'

function validar(name, age, acompanado=false){
	if(age >= edad){
		console.log(`${name} puede pasar a ver ${pelicula}`)
	}else if(acompanado){
		console.log(`${name} no cumple con edad, pero puede pasar, pues esta 
acompañado.`)
	}
	else{
		console.log(`${name} no puede pasar a ver ${pelicula}`)
	}
}

validar(name1, edad1)
validar(name2, edad2, true)
validar(name2, edad2)