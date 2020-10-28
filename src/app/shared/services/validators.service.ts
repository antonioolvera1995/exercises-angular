import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }


  isAdmin(control) {
    if (control.value.toLowerCase() === 'admin') {
      return { isAdmin: true }
    }
    return null;
  }


  emailExist(control) {

    return new Promise((resolve, reject) => {


      setTimeout(() => {
        if (control.value === 'toni199517@gmail.com') {
          resolve({ emailExist: true });
        }
        else { reject({ emailExist: false }); }
      }, 3000);

    });


  }
}
