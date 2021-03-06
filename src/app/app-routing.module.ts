import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './exercises/class/class.component';
import { EventsComponent } from './exercises/events/events.component';
import { ForComponent } from './exercises/for/for.component';
import { FormularioComponent } from './exercises/formulario/formulario.component';

import { IfElseComponent } from './exercises/if-else/if-else.component';
import { PeticionesHttpComponent } from './exercises/peticiones-http/peticiones-http.component';
import { PipersComponent } from './exercises/pipers/pipers.component';
import { PipesCustomComponent } from './exercises/pipes-custom/pipes-custom.component';
import { ReactFormComponent } from './exercises/react-form/react-form.component';
import { ServiceComponent } from './exercises/service/service.component';
import { StylesComponent } from './exercises/styles/styles.component';
import { TemplateFormComponent } from './exercises/template-form/template-form.component';
import { GuardComponent } from './guard/guard.component';
import { AuthGuard } from './guards/auth.guard';

import { IniComponent } from './ini/ini.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'guards', component: GuardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventsComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactFormComponent },
  { path: 'styles', component: StylesComponent },
  { path: 'if-else', component: IfElseComponent },
  { path: 'class', component: ClassComponent },
  { path: 'for', component: ForComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'peticiones', component: PeticionesHttpComponent },
  { path: 'pipes', component: PipersComponent },
  { path: 'pipes-custom', component: PipesCustomComponent },
  { path: '', component: IniComponent , pathMatch: 'full' },
  { path: '**', component: IniComponent, pathMatch: 'full' }

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 