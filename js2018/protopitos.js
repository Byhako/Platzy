function heredaDe (son, father) {
  const fn = function () {}

  fn.prototype = father.prototype
  son.prototype = new fn
  // claseHija.prototype.constructor = claseHija
  son.prototype.constructor = son
}

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

// Creamos un prototipo HIJO.

function Development (name, surname) {
  this.name = name
  this.surname = surname
}

heredaDe(Development, Person)

Development.prototype.greet = function () {
  console.log(`Hello world, my name is ${this.name}`)
}


const ana = new Development('Anita', 'Perez')

ana.greet()
console.log('Ana es alta: ', ana.iTall())
