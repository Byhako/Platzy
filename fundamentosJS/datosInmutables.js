let variable1 = {numero:6};
let variable2 = variable1;

++variable2.numero;

console.log("v1: ",variable1);
console.log("v2: ",variable2,"\n");

// ahora creamos una variabe separada, pero con las mismas propiedades.
let variable3 = Object.assign({}, variable1);

++variable3.numero;

console.log("v1: ",variable1);
console.log("v3: ",variable3,"\n");

// Veamos que variable1 es el mismo elementos en memoria que variable2,
// pero diferente a variable3

let c1 = variable1 === variable2;
let c2 = variable1 === variable3;

console.log(`variable1 = variable2: ${c1}`)
console.log(`variable1 = variable3: ${c2}`)
