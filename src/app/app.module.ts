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
    ForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
