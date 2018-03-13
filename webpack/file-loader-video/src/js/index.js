import '../css/estilos.css'
import { firstMessage, delay } from './message.js'
import platziImg from '../images/platzi.png'
import videoPlazi from '../video/que-es-core.mp4'

document.write(firstMessage)

console.log('Hola webpack')
delay()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50)
img.setAttribute('height', 50)
document.body.append(img)

const video = document.createElement('video')
video.setAttribute('src', videoPlazi)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
document.body.append(video)
