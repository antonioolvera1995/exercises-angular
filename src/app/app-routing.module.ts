import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { pathToFileURL } from 'url';
import { EventsComponent } from './exercises/events/events.component';

const routes: Routes = [
  { path: '', component: EventsComponent }
  
];
=======

const routes: Routes = [];
>>>>>>> master

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
