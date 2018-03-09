import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {activate: true, nombre:'Floristeria'},
    {activate: true, nombre:'Donas'},
    {activate: false, nombre:'Veterinaria'},
    {activate: true, nombre:'Sistemas'},
  ];

  lat:number = 3.5912464;
  lng:number = -72.4880479;

  constructor(){

  }

}
