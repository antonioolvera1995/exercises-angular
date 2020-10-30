import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  rutas:string[] = ['Inicio', 'Guards', 'login', 'Pipes', 'pipes-custom', 'Peticiones','Template-form', 'Reactive-form', 'Formulario','Service', 'Events', 'Styles', 'If-Else', 'Class', 'For'];
  constructor() { }

  getRutas():string[]{
    return this.rutas;
  }
}
