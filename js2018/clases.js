class Person {
  constructor(name, surname, tall) {
    this.name = name
    this.surname = surname
    this.tall = tall
  }

  greet () {
    console.log(`Hello, my name is ${this.name}`)
  }

  iTall () {
    return this.tall > 1.7
  }
}

const ruben = new Person('Ruben', 'Acosta', 1.75)
ruben.greet()

class Development extends Person {
  constructor(name, surname, tall) {
    super(name, surname, tall)
  }

  greet () {
    console.log(`Hello world, my name is ${this.name}`)
  }  
}

const ana = new Development('Anita', 'Perez', 1.65)
ana.greet()
