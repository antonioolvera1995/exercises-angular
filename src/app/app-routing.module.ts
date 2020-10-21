import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './exercises/class/class.component';
import { EventsComponent } from './exercises/events/events.component';
import { ForComponent } from './exercises/for/for.component';
import { FormularioComponent } from './exercises/formulario/formulario.component';
import { IfElseComponent } from './exercises/if-else/if-else.component';
import { ServiceComponent } from './exercises/service/service.component';
import { StylesComponent } from './exercises/styles/styles.component';
import { IniComponent } from './ini/ini.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'styles', component: StylesComponent },
  { path: 'if-else', component: IfElseComponent },
  { path: 'class', component: ClassComponent },
  { path: 'for', component: ForComponent },
  { path: 'service', component: ServiceComponent },

  { path: '', component: IniComponent , pathMatch: 'full' },
  { path: '**', component: IniComponent, pathMatch: 'full' }

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 