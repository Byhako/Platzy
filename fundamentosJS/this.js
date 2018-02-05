class Persona{
  constructor(nombre, amigos = []){
    this.nombre = nombre;
    this.amigos = amigos;
  };

  /*
  listarAmigos(){
    const self = this;
    this.amigos.forEach( (amigo)=>{ 
      console.log(`Mi nombre es ${self.nombre} y soy amigo de ${amigo}.`);
    });
  }
  //renombramos this como self, ya que dentro de la funcion que recibe forEach
  //this.nombre es indefinido, esta fuera del scope de la variable.
*/

  listarAmigos(){
    this.amigos.forEach( function(amigo){
      console.log(`Mi nombre es ${this.nombre} y soy amigo de ${amigo}.`)
    }.bind(this))
  }
  // para usar bind, no funciona con arrow function, necesitamos declararla
  // como function(){}

  listarAmigos(){
    this.amigos.forEach( (amigo)=>{
      console.log(`Mi nombre es ${this.nombre} y soy amiga de ${amigo}.`)
    })
  }
  // una arrow function hace el bind automaticamente.
}

const Selene = new Persona('Selene', ['Tato', 'Eric']);

Selene.listarAmigos();