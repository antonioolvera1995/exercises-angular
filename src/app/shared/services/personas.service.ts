import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  personas: Object = [
    { name: 'Antonio', age: 25 },
    { name: 'Victor', age: 35 },
    { name: 'Gonzalo', age: 36 },
  ];
  constructor() {}

  getPersonas(): Object {
    return this.personas;
  }
}
