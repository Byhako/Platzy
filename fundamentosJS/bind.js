import { version } from "../../.cache/typescript/2.6/node_modules/@types/react";

class Toggable{
  constructor(element){
    this.element = element;
    this.element.innerHTML = 'Off';
    this.activate = false;
    this.element.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event){
    // cambia estado interno
    this.activate = !this.activate;
    this.toggableText();
  }

  toggableText(){
    // cambia el texto
    this.element.innerHTML = this.activate ? 'On' : 'Off';
  }
}

const boton = document.getElementById('button');
const miBoton = new Toggable(boton);

/*
Tambien podemos hacer bind en parametros de funciones

function vehiculo(tipo, marca){
  console.log(`Yo tengo un ${tipo} de marca ${marca}.`);
}

El primer parameto en bind es a quien va a hacer referencia el this,
y los demas son los parametros de la funcion.

const moto = vehiculo.bind(null, 'Moto');
moto('Kawasaky');
*/