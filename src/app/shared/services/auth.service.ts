import { Injectable } from '@angular/core';
import { UsersModel } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(user: UsersModel) {
    if (user.email === 'prueba@prueba.com' && user.password === '1234') {
      localStorage.setItem('auth', 'true');
      return true;
    } else { false }
  }
  isAutj(): boolean {

    if (localStorage.getItem('auth') === 'true') {
      return true;
    } else{
      return false;
    }

  }

}
