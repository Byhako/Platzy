const persona = {
  nombre: 'Selene',
  apellido: 'Night'
};

function saludar(veces, upercase){
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = upercase ? str.toUpperCase() : str;
  for(let i=0 ; i<veces ; i++){
    console.log(str);
  }
}

// para que this en la funcion haga referencia al objeto persona
// usamos el metodo call. Teine el contexto y los parametros.
console.log('\nUsamos metodo call:\n');
saludar.call(persona, 3, true);

console.log('\nUsamos metodo apply:\n');
saludar.apply(persona, [3, true]);

/*
parametros = [3, false];
saludar.call(persona, ...parametros);
*/
