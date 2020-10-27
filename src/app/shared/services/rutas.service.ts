import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  rutas:string[] = ['Inicio', 'peticiones','template-form', 'reactive-form', 'formulario','Service', 'Events', 'Styles', 'If-Else', 'Class', 'For'];
  constructor() { }

  getRutas():string[]{
    return this.rutas;
  }
}
