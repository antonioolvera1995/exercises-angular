import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user:UsersModel = new UsersModel();

  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  login(data:NgForm){
    const auten = this.auth.login(this.user)
    if (auten) {
      this.route.navigate(['guards']);
    }else{
      alert('Usuario o contraseña incorrectos vuelve a intentarlo')
    }
  }

}
