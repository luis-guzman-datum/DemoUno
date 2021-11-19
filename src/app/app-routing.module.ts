import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpuestosComponent } from './pages/impuestos/impuestos.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { SaludoComponent } from './pages/saludo/saludo.component';

const routes: Routes = [
  {
    path:'',
    component:PersonasComponent
  },
  {
    path:'impuestos',
    component:ImpuestosComponent
  },
  {
    path:'saludo',
    component:SaludoComponent
  },
  {
    path:'pokemons',
    component:PokemonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
