//--------services------
//import {PersonasService  } from "./shared/services/personas.service";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EventsComponent } from './exercises/events/events.component';
import { FormularioComponent } from './exercises/formulario/formulario.component';
import { IniComponent } from './ini/ini.component';
import { StylesComponent } from './exercises/styles/styles.component';
import { IfElseComponent } from './exercises/if-else/if-else.component';
import { ClassComponent } from './exercises/class/class.component';
import { ForComponent } from './exercises/for/for.component';
import { ServiceComponent } from './exercises/service/service.component';
import { PeticionesHttpComponent } from './exercises/peticiones-http/peticiones-http.component';

import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent,
    FormularioComponent,
    IniComponent,
    StylesComponent,
    IfElseComponent,
    ClassComponent,
    ForComponent,
    ServiceComponent,
    PeticionesHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
