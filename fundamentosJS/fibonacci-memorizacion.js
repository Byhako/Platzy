let contador = 1;

function fibonacci(num, memoria={}){
  contador++
  // casos bases
  if(memoria[num])return memoria[num];
  if(num==1){return 0;}
  if(num==2){return 1;}

  // recursividad.
  return memoria[num] = fibonacci(num - 1, memoria) +fibonacci(num - 2, memoria);
}

console.log("Fibonacci 20-> ",fibonacci(20));
console.log(`con recursividad hice ${contador} pasos.\n`);

// fibonacci SIN recursividad
contador = 1;

function f(x){
  if(x==1){return 0;}else if(x==2){return 1;}else{
    let a = 0;
    let b = 1;
    let c;
    for(let i=1 ; i<x-1 ; i++){
      c = a + b;
      a = b;
      b = c;
      contador++;
    }
    return b;
  }

}

console.log("Fibonacci 20-> ",f(20))
console.log(`sin recursividad hice ${contador} pasos.`);
