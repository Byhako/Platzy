import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { LugaresComponent } from './lugares/lugares.component'
import { ResaltarDirective } from './directives/resaltar.directive'
import { ContarClicks } from './directives/contar-click.directive'
import { DetalleComponent } from './detalle/detalle.component'

// Configurando el enrutador
const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle', component: DetalleComponent},
]

@NgModule({
  declarations: [             // donde agregamos los componentes
    AppComponent,
    ResaltarDirective,
    ContarClicks,
    DetalleComponent,
    LugaresComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBudbL3aWWnwrmaeXAVlTiMOPDZbiDnVo0'
    }),
  ],
  providers: [],              // servicios necesarios
  bootstrap: [AppComponent]   // componente de inicio
})

export class AppModule { }
