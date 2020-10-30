import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private ruta: Router) { }
  canActivate(): boolean {

    if (this.authService.isAutj()) {
      return true;
    } else {
      this.ruta.navigate(['/login']);
      return false;
    }


  }

}
