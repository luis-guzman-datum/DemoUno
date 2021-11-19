import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { ImpuestosComponent } from './pages/impuestos/impuestos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CargandoComponent } from './components/cargando/cargando.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { SaludoComponent } from './pages/saludo/saludo.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeApiService } from './services/poke-api.service';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PersonasComponent,
    ImpuestosComponent,
    FilterPipe,
    CargandoComponent,
    SaludoComponent,
    PresentacionComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig),
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    PokeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
