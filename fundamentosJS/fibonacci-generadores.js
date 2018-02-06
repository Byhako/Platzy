// * para que JS entienda que es un generador
function* fibonacci(){
  let a = 0;
  let b = 1;

  while(true){
    let f = a;
    a = b;
    b = f + a;
    let reset = yield f;
    if(reset) a = 0, b = 1;
  }
}
// Al llamar a la funcion, esta detiene su ejecucion en "yield" despues
// de retornar el valor f, y cuando se vuelve a llamar, la funcion continua
// su ejecucion a partir de ese punto, por lo que hace un paso mas en 
// en el ciclo while, hace las operaciones, retorna f y se teniene la
// ejecucion de la funcion hasta ser nuevamente llamada.

// aqui tambien tenemos el metodo next con value y done

// reiniciamos la cuenta llamando fibo.next(reset)
// yield puede recibir un valor, que es enviado en next
const fibo = fibonacci()

console.log(fibo.next().value); //0
console.log(fibo.next().value); //1
console.log(fibo.next().value); //1
console.log(fibo.next().value); //2
console.log(fibo.next().value); //3
console.log(fibo.next().value); //5
console.log('\n\n')


const fibo2 = {};
fibo2[Symbol.iterator] = fibonacci;

let i = 1;
for(let value of fibo2){
  console.log(value);
  i++;
  if(i>10)break;
}