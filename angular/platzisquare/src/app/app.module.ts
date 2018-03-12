import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core'
import { Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { ResaltarDirective } from './directives/resaltar.directive'
import { ContarClicks } from './directives/contar-click.directive'

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'lugares', component: AppComponent}

]

@NgModule({
  declarations: [             // donde agregamos los componentes
    AppComponent,
    ResaltarDirective,
    ContarClicks,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBudbL3aWWnwrmaeXAVlTiMOPDZbiDnVo0'
    }),
  ],
  providers: [],              // servicios necesarios
  bootstrap: [AppComponent]   // componente de inicio
})
export class AppModule { }
