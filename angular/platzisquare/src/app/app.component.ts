import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {cercania: 1, distancia: 1, activate: true, nombre:'Donas'},
    {cercania: 2, distancia: 5, activate: false, nombre:'Veterinaria'},
    {cercania: 1, distancia: 2, activate: true, nombre:'Floristeria'},
    {cercania: 3, distancia: 4, activate: true, nombre:'Sistemas'},
  ];
  lat:number = 3.5912464;
  lng:number = -72.4880479;

  constructor(){

  }

}
