import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  rutas:string[] = ['Inicio', 'peticiones','Formulario','Service', 'Events', 'Styles', 'If-Else', 'Class', 'For'];
  constructor() { }

  getRutas():string[]{
    return this.rutas;
  }
}
