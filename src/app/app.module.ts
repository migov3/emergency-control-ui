import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MapaComponenteComponent } from './mapa-componente/mapa-componente.component';

@NgModule({
  declarations: [
    MapaComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MapaComponenteComponent]
})
export class AppModule { }
