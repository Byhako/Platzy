// creemos un prototipo

function Person (name, surname, tall) {
  this.name = name
  this.surname = surname
  this.tall = tall

}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

// Person.prototype.iTall = () => this.tall > 1.7
// para una arrow function this === Window, es el this mas global.

Person.prototype.iTall = function () {
  return this.tall > 1.7
}

// new crea un objeto, al que se le asigna un prototipo y como constructor la funcion
// se retorna this, al llamar funcion persona, con la palabra new.

const ruben = new Person('Ruben', 'Acosta', 1.75)
const nata = new Person('Natalia', 'Caro', 1.48)

ruben.greet()
nata.greet()

ruben.iTall()