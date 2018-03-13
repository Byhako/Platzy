import '../css/estilos.css';
import { firstMessage, delay } from './message.js';
import platziImg from '../images/platzi.png'

document.write(firstMessage);

console.log('Hola webpack');
delay();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

console.log('webpack es genial');