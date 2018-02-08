const expect = require('chai').expect;
const platzom = require('..').default;

// esta funcion incluye todos los test
describe('#platzom', function(){
  it('Si la palabra termina en "ar" se le quitan.', function(){
    const translation = platzom("Programar");
    expect(translation).to.equal("Program");
  })
  it('Si la palabra inicia con z, se añade "pe" al final.', function(){
    const translation = platzom("zorro");
    expect(translation).to.equal("zorrope");
  })
  it('Si la palabra tiene 10 o mas letras se parte a la mitad, y se une con un guion.', function(){
    const translation = platzom("abecedario");
    expect(translation).to.equal("abece-dario");
  })
  it('Si es un palíndromo, se retorna la misma palabra intercalando mayusculas y minusculas.', function(){
    const translation = platzom("sometemos");
    expect(translation).to.equal("SoMeTeMoS");
  })
});