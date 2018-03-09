import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'li[contar-clicks]'
})

export class ContarClicks {
  clickN = 0;
  @HostBinding('style.opacity') opacity:number = 0.1;
  @HostListener('click', ['$event.target']) onClick(btn){
    console.log('a', btn, 'Numero de clicks', ++this.clickN);
    this.opacity += 0.1;
  }
}

// @HostBinding para modificar elementos del DOM
// @HostBinding(propiedad a editar)

// @HostListener es para escuchar eventos del DOM
// @HostListener(evento, arreglo con eventos a escuchar) funcion


// la letra li, al inicio del selector es para indicar que solo aplica
// para etiquetas <li>