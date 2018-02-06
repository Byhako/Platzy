function fibonacci(num){
  // casos bases
  if(num==1){return 0;}
  if(num==2){return 1;}

  // recursividad.
  return fibonacci(num -1) +fibonacci(num - 2);
}

for(let i=1 ; i<10 ; i++){
  console.log(fibonacci(i));
}

// si no hay casos base, generamos un ciclo infinito.