import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { EventsComponent } from './exercises/events/events.component';
import { FormularioComponent } from './exercises/formulario/formulario.component';
import { IniComponent } from './ini/ini.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '', component: IniComponent , pathMatch: 'full' },
  { path: '**', component: IniComponent, pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
