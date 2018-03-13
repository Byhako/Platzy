import { Component } from '@angular/core'

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})

export class LugaresComponent {
  title = 'PlatziSquare'
  lugares:any = [
    {plan: 'pagado', cercania: 1, distancia: 1, activate: true, nombre:'Donas'},
    {plan: 'gratuito', cercania: 2, distancia: 5, activate: false, nombre:'Veterinaria'},
    {plan: 'pagado', cercania: 1, distancia: 2, activate: true, nombre:'Floristeria'},
    {plan: 'pagado', cercania: 3, distancia: 4, activate: true, nombre:'Sistemas'},
  ];
  lat:number = 3.5912464
  lng:number = -72.4880479

  constructor(){  }
}

