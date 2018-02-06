function fibonacci(){
  let a = 0;
  let b = 1;
  return {
    next: ()=>{  // esto es un closure
      let f = a;
      a = b;
      b = f + a;
      return {value: f, done: false};
    }

  }
}

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

let i = 0;
for(let value of fibo2){
  console.log(value);
  i++;
  if(i>10)break;
}